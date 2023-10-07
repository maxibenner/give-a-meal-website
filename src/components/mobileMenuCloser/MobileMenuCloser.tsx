"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

/**
 * This is a hack to close the mobile menu when the user navigates to a new page.
 * It is necessary because of the SPA nature of Nextjs which prevents the URL hash from being reset.
 * @returns null
 */
export default function MobileMenuCloser() {
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    const pathname = usePathname()

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleHashChange = (e: { newURL: string }) => {
            if (e.newURL.includes("close")) window.location.hash = ""
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);


    useEffect(() => {
        if (width <= 1050) window.location.hash = 'close';
    }, [pathname])

    return null
}