'use client'
import { useParams } from "next/navigation";

export default function ProfileIDPostID() {
    const params = useParams()
    console.log(`Params: S{params.id}`);
    console.log(`Params: S{params.postId}`);
    return <div>My id profile's posts page</div>
}