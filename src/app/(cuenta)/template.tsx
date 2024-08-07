'use client'
import { useState } from "react";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    const [input, setInput] = useState('')

    return (
        <>
            <h2>Rutas relativas a la Cuenta del Usuario</h2>
            <h3>Mastering the difference between layouts and templates.</h3>
            {children}
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        </>
    )
}