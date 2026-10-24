'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Register = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            // Posting directly to the user's external Node/Express backend
            const res = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            // Even if response fails, checking if it gives json error response
            let result;
            try { result = await res.json(); } catch (e) { }

            if (res.ok) {
                toast.success('Account created successfully! Please login.');
                router.push('/login');
            } else {
                toast.error(result?.message || 'Failed to create account. Email may already be registered.');
            }
        } catch (error) {
            console.error("Registration failed: ", error);
            toast.error('Network Error: Could not connect to the backend server (localhost:5000).');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center my-10">
            <div className='bg-base-200 border-base-300 rounded-box w-xs md:w-96 shadow-xl p-8'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="fieldset"
                >
                    <legend className="text-2xl font-bold text-center mb-6">Create Account</legend>

                    {/* Name */}
                    <div className="form-control mb-3">
                        <label className="label"><span className="label-text font-semibold">Name</span></label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="Your base name"
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="form-control mb-3">
                        <label className="label"><span className="label-text font-semibold">Email</span></label>
                        <input
                            type="email"
                            className="input input-bordered w-full"
                            placeholder="Email address"
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Image */}
                    <div className="form-control mb-3">
                        <label className="label"><span className="label-text font-semibold">Profile Image URL</span></label>
                        <input
                            type="url"
                            className="input input-bordered w-full"
                            placeholder="Profile image url"
                            {...register('image', { required: 'Image URL is required' })}
                        />
                        {errors.image && (
                            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="form-control mb-6">
                        <label className="label"><span className="label-text font-semibold">Password</span></label>
                        <input
                            type="password"
                            className="input input-bordered w-full"
                            placeholder="Create a password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters',
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button type="submit" disabled={loading} className="btn btn-primary w-full shadow-md">
                        {loading ? <span className="loading loading-spinner"></span> : "Create Account"}
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <Link href="/login" className="link link-hover">Already have an account? <span className='text-primary font-bold'> Login</span> </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;