"use client";

import { useEffect, useRef } from "react";
import s from "./styles.module.css"
import Arrow from "@/public/assets/icons/expand-arrow.svg"
import Image from "next/image";

export default function NavItem({ label, children }: { label: string, children?: any }) {
    const itemRef = useRef<HTMLDivElement>(null);
    const tagClass = "navDropdownElement"

    function toggleActive() {
        if (!itemRef.current) return

        // Add active class to the item
        itemRef.current.classList.toggle(s.active);

        // Remove active class from any other navDropdownElement items
        const otherItems = document.getElementsByClassName(tagClass);
        for (let i = 0; i < otherItems.length; i++) {
            if (otherItems[i] !== itemRef.current) {
                otherItems[i].classList.remove(s.active);
            }
        }
    }

    // Create listener for clicks on the page
    function handleClick(e: MouseEvent) {
        const target = e.target as HTMLElement;

        // If the click was outside the dropdown, close it
        if (!target.closest(`.${tagClass}`)) {
            const dropdowns = document.getElementsByClassName(tagClass);
            for (let i = 0; i < dropdowns.length; i++) {
                dropdowns[i].classList.remove(s.active);
            }
        }
    }

    // Add the listener to the document
    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [])

    return (
        <div ref={itemRef} className={`${s.container} navDropdownElement`} onClick={toggleActive}>
            <div className={s.menuItem}>
                <p>{label}</p>
                <Image src={Arrow} alt="expandable menu arrow" />
            </div>
            <div className={s.dropdownWrapper}>
                <div className={s.dropdownMenu}>
                    {children}
                </div>
            </div>
        </div>
    )
}