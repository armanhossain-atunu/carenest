'use client';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Login = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);
        const email = data.email.toLowerCase();
        const password = data.password;

        try {
            // Calling NextAuth SignIn API which inside contacts your Express backend
            const res = await signIn('credentials', {
                redirect: false,
                email,
                password
            });

            if (res.error) {
                toast.error("Login failed! Please check your email and password.");
            } else {
                toast.success('Logged in successfully!');
                router.push('/');
                router.refresh(); // Refresh router to update session state across components
            }
        } catch (error) {
            toast.error("An error occurred during login. Is your backend running?");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center my-10">
            <div className="bg-base-200 rounded-box w-xs md:w-96 p-8 shadow-xl">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="fieldset border-base-300 "
                >
                    <legend className="text-2xl font-bold text-center mb-4">Login to your account</legend>

                    {/* Email */}
                    <div className="form-control mb-4">
                      <label className="label"><span className="label-text font-semibold">Email</span></label>
                      <input
                          type="email"
                          name='email'
                          className="input input-bordered w-full"
                          placeholder="Email"
                          {...register('email', { required: 'Email is required' })}
                      />
                      {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Password */}
                    <div className="form-control mb-6">
                      <label className="label"><span className="label-text font-semibold">Password</span></label>
                      <input
                          type="password"
                          className="input input-bordered w-full"
                          name='password'
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
                          <p className="text-red-500 text-sm mt-1">
                              {errors.password.message}
                          </p>
                      )}
                    </div>

                    <button type="submit" disabled={loading} className="btn btn-primary mt-4 w-full">
                        {loading ? <span className="loading loading-spinner"></span> : "Log in"}
                    </button>
                </form>
                <div className="mt-6 text-center">
                  <Link href="/register" className="link link-hover">Don't have an account? <span className='text-primary font-bold'>Register</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;