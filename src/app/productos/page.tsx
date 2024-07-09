'use client'
import { useRouter } from "next/navigation";

export default function Productos() {
    const router = useRouter()

    const handleClick = () => {
        router.push('/login')
    }

    return (
        <>
            <h1>Productos</h1>
            <button onClick={handleClick}>Regresar al login</button>
        </>
    )
}