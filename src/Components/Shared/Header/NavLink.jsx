"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
    const pathname = usePathname();

    const linkClass = (path) =>
        pathname === path
            ? "text-primary font-semibold"
            : "hover:text-primary";

    return (
        <>
            <li><Link className={linkClass("/")} href="/">Home</Link></li>
            <li><Link className={linkClass("/about")} href="/about">About</Link></li>
            <li><Link className={linkClass("/contact")} href="/contact">Contact</Link></li>
            <li><Link className={linkClass("/servicess")} href="/servicess">services</Link></li>

            {/* Dashboard Routes */}
            <li>
                <Link
                    className={
                        pathname.startsWith("/dashboard")
                            ? "text-primary font-semibold"
                            : "hover:text-primary"
                    }
                    href="/dashboard"
                >
                    Dashboard
                </Link>
            </li>
            <li><Link className={linkClass("/dashboard/profile")} href="/dashboard/profile">Profile</Link></li>
            <li><Link className={linkClass("/dashboard/my-booking")} href="/dashboard/my-booking">My Booking</Link></li>
        </>
    );
};

export default NavLinks;
