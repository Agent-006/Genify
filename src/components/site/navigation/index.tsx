import { ModeToggle } from "@/components/global/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
    return (
        <div className="p-4 flex items-center justify-between border-muted dark:border-[hsl(var(muted-foreground))] bg-white dark:bg-[hsl(var(--background))] z-20">
            <aside className="flex items-center gap-2">
                <Image
                    src={"/assets/genify-logo.png"}
                    alt="genify-logo"
                    width={50}
                    height={50}
                    className="dark:invert"
                />
                <span className="text-xl font-bold text-black dark:text-white">
                    Genify.
                </span>
            </aside>
            <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]  bg-white dark:bg-[hsl(var(--background))] rounded-md shadow-md p-4 z-10">
                <ul className="flex items-center justify-center gap-8">
                    <Link
                        href={"#"}
                        className="text-black dark:text-white hover:text-[hsl(var(--primary))] dark:hover:text-[hsl(var(--primary))] transition-colors"
                    >
                        Pricing
                    </Link>
                    <Link
                        href={"#"}
                        className="text-black dark:text-white hover:text-[hsl(var(--primary))] dark:hover:text-[hsl(var(--primary))] transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href={"#"}
                        className="text-black dark:text-white hover:text-[hsl(var(--primary))] dark:hover:text-[hsl(var(--primary))] transition-colors"
                    >
                        Documentation
                    </Link>
                    <Link
                        href={"#"}
                        className="text-black dark:text-white hover:text-[hsl(var(--primary))] dark:hover:text-[hsl(var(--primary))] transition-colors"
                    >
                        Features
                    </Link>
                </ul>
            </nav>
            <aside className="flex gap-2 items-center">
                <Link
                    href={"/agency"}
                    className="bg-[hsl(var(--primary))] text-white px-4 py-2 rounded-md hover:bg-[hsl(var(--primary))]/80 transition-all duration-200  dark:hover:bg-[hsl(var(--primary))]/80 text-sm font-semibold"
                >
                    Login
                </Link>
                <UserButton afterSignOutUrl="/agency" />
                <ModeToggle />
            </aside>
        </div>
    );
};

export default Navigation;
