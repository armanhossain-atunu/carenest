'use client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('User Created:', data);
        // এখানে API / Firebase / Backend call করবে
    };

    return (
        <div className="flex justify-center my-10">
            <div className='bg-base-200 border-base-300 rounded-box w-xs border p-4'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="fieldset "
                >
                    <legend className="text-2xl">Create Account</legend>

                    {/* Name */}
                    <label className="label">Name</label>
                    <input
                        type="text"
                        className="input"
                        placeholder="Your name"
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}

                    {/* Email */}
                    <label className="label mt-2">Email</label>
                    <input
                        type="email"
                        className="input"
                        placeholder="Email"
                        {...register('email', { required: 'Email is required' })}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}

                    {/* Image */}
                    <label className="label mt-2">Image URL</label>
                    <input
                        type="text"
                        className="input"
                        placeholder="Profile image url"
                        {...register('image', { required: 'Image URL is required' })}
                    />
                    {errors.image && (
                        <p className="text-red-500 text-sm">{errors.image.message}</p>
                    )}

                    {/* Password */}
                    <label className="label mt-2">Password</label>
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters',
                            },
                        })}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm">
                            {errors.password.message}
                        </p>
                    )}

                    <button type="submit" className="btn btn-neutral mt-4 w-full">
                        Create Account
                    </button>
                </form>
                <Link href="/login" className='text-center'>Already have an account? <span className='text-primary'> Login</span> </Link>
            </div>
        </div>
    );
};

export default Register;