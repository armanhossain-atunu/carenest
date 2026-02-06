'use client';
import React from 'react';

const Booking = () => {
    const openModal = () => {
        const modal = document.getElementById('booking_modal');
        modal?.showModal();
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={openModal}>
                Book Now
            </button>

            <dialog id="booking_modal" className="modal">
                <div className="modal-box w-11/12 max-w-lg">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>

                    <h3 className="font-bold text-xl mb-4">Booking Form</h3>

                    <form className="space-y-3">
                        {/* Name */}
                        <div>
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                                type="tel"
                                placeholder="01XXXXXXXXX"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Service */}
                        <div>
                            <label className="label">
                                <span className="label-text">Select Service</span>
                            </label>
                            <select className="select select-bordered w-full" required>
                                <option disabled selected>
                                    Choose a service
                                </option>
                                <option>Baby Care</option>
                                <option>Elderly Care</option>
                                <option>Home Nurse</option>
                                <option>Sick People Care</option>
                            </select>
                        </div>

                        {/* Date */}
                        <div>
                            <label className="label">
                                <span className="label-text">Booking Date</span>
                            </label>
                            <input
                                type="date"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered w-full"
                                placeholder="Enter your address"
                                required
                            />
                        </div>

                        {/* Submit */}
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
