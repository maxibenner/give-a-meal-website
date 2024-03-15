"use client";

import { Toaster as ToasterProvider } from "react-hot-toast";

export default function Toaster() {
    return <ToasterProvider toastOptions={{ ...toastOptions }} position="bottom-right" />;
}

const toastOptions = {
    duration: 5000,
    style: {
        padding: "12px 24px"
    },
    success: {
        style: {
            backgroundColor: '#3C7EF8',
            color: 'white',
        },
        iconTheme: {
            primary: 'white',
            secondary: '#3C7EF8',
        },
    }
}