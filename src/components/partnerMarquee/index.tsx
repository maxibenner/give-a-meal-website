"use client";

import s from "./styles.module.css"
import Image from "next/image";
import Marquee from "react-fast-marquee";
import LogoSeitan from "@/public/assets/images/partners/seitans-helper.png";
import LogoTofubox from "@/public/assets/images/partners/tofubox.png";
import LogoLivite from "@/public/assets/images/partners/livite.png";
import LogoCampbell from "@/public/assets/images/partners/campbell.png";
import LogoLateNight from "@/public/assets/images/partners/late-night.png";
import { useEffect, useState } from "react";

export default function PartnerMarquee({ className }: { className: string }) {

    const [gradientWidth, setGradientWidth] = useState(30);

    const handleResize = () => {
        if (window.innerWidth < 200) {
            setGradientWidth(30);
        } else {
            setGradientWidth(200);
        }
    }

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
    }, []);




    return (
        <div className={`${s.container} ${className}`}>
            <Marquee className={s.marquee} autoFill gradient gradientColor="var(--color-background)" gradientWidth={gradientWidth} speed={30}>
                <Image loading="eager" src={LogoSeitan} width={80} alt="Seitan's Helper" />
                <Image loading="eager" src={LogoTofubox} width={100} alt="Tofubox" />
                <Image loading="eager" src={LogoCampbell} width={110} alt="Campbell" />
                <Image loading="eager" src={LogoLivite} width={100} alt="Livite" />
                <Image loading="eager" src={LogoLateNight} width={80} alt="Late Night Stars Deli" />
            </Marquee>
        </div>
    )
}