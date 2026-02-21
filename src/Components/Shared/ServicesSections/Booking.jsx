'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import regionLocation from '@/data/regions.json';

const Booking = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const openModal = () => {
        document.getElementById('booking_modal')?.showModal();
    };
    const regionsDuplicate = regionLocation.map(d => d.region)
    const regions = [...new Set(regionsDuplicate)]
    console.log(regions, 'all regions');
    const handleFormData = (data) => {
        console.log('Booking Data:', data);
        reset();
        document.getElementById('booking_modal')?.close();
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={openModal}>
                Book Now
            </button>

            <dialog id="booking_modal" className="modal">
                <div className="modal-box w-11/12 max-w-lg">
                    <button
                        onClick={() => document.getElementById('booking_modal')?.close()}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </button>

                    <h3 className="font-bold text-xl mb-4">Booking Form</h3>

                    <form onSubmit={handleSubmit(handleFormData)} className="space-y-3">
                        {/* Name */}
                        <div>
                            <label className="label">Full Name</label>
                            <input
                                {...register('name', { required: 'Name is required' })}
                                className="input input-bordered w-full"
                                placeholder="Enter your name"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="label">Phone Number</label>
                            <input
                                {...register('phone', {
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^01[0-9]{9}$/,
                                        message: 'Invalid Bangladeshi number',
                                    },
                                })}
                                className="input input-bordered w-full"
                                placeholder="01XXXXXXXXX"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm">{errors.phone.message}</p>
                            )}
                        </div>

                        {/* Service */}
                        <div>
                            <label className="label">Select Service</label>
                            <select
                                {...register('service', { required: 'Service is required' })}
                                className="select select-bordered w-full"
                            >
                                <option value="">Choose a service</option>
                                <option>Baby Care</option>
                                <option>Elderly Care</option>
                                <option>Home Nurse</option>
                                <option>Sick People Care</option>
                            </select>
                            {errors.service && (
                                <p className="text-red-500 text-sm">{errors.service.message}</p>
                            )}
                        </div>

                        {/* Date */}
                        <div>
                            <label className="label">Booking Date</label>
                            <input
                                type="date"
                                {...register('date', { required: 'Date is required' })}
                                className="input input-bordered w-full"
                            />
                            {errors.date && (
                                <p className="text-red-500 text-sm">{errors.date.message}</p>
                            )}
                        </div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Regions</legend>
                            <select defaultValue="Pick a region" className="select">
                                <option disabled={true}>Pick a region</option>
                                {
                                    regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                }
                            </select>
                        </fieldset>
                        {/* Address */}
                        <div>
                            <label className="label">Address</label>
                            <textarea
                                {...register('address', { required: 'Address is required' })}
                                className="textarea textarea-bordered w-full"
                                placeholder="Enter your address"
                            />
                            {errors.address && (
                                <p className="text-red-500 text-sm">
                                    {errors.address.message}
                                </p>
                            )}
                        </div>

                        <button className="btn btn-primary w-full mt-4">
                            Submit Booking
                        </button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Booking;