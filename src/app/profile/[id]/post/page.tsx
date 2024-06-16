'use client'
import { useParams } from "next/navigation";

export default function Post() {
    const params = useParams()
    console.log(`Params: S{params.id}`);
    return <div>My id profile's posts page</div>
}