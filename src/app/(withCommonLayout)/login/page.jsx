'use client';
import { UserContext } from '@/Context/users.context';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Login = () => {
    const { setUser } = useContext(UserContext)
    const router=useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        const email = data.email.toLowerCase();
        const password = data.password;

        console.log('Login Data:', { email, password });
        if (email === 'admin@codefiy.com' && password === '123456') {
            const currantUser = {
                email,
                name: email.split('@')[0],
            }
            setUser(currantUser)
            toast.success('Login Successfully');
            router.push('/')
        }
        else {
            alert('Login Failed');
            setUser(null)
        }
    };

    return (
        <div className="flex justify-center my-10">
            <div className="bg-base-200 rounded-box w-xs  p-4">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="fieldset  border-base-300 "
                >
                    <legend className="text-2xl font-bold text-center">Login your account</legend>

                    {/* Email */}
                    <label className="label">Email</label>
                    <input
                        type="email"
                        name='email'
                        className="input"
                        placeholder="Email"
                        {...register('email', { required: 'Email is required' })}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}

                    {/* Password */}
                    <label className="label mt-2">Password</label>
                    <input
                        type="password"
                        className="input"
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
                        <p className="text-red-500 text-sm">
                            {errors.password.message}
                        </p>
                    )}

                    <button type="submit" className="btn btn-neutral mt-4 w-full">
                        Login
                    </button>
                </form>
                <Link href="/register" className=" btn-link mt-2">Don't have an account? <span className='text-primary'>Register</span> </Link>
            </div>
        </div>
    );
};

export default Login;