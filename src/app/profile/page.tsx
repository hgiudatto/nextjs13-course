'use client'
import { useRouter } from "next/navigation";
export default function Profile() {
    const router = useRouter()
    console.log(router);
    
    return (
        <div>
            <h1>My list of profiles</h1>
            <div>
                <ul>
                    <li onClick={() => router.push('/profile/1')}>Profile 1</li>
                    <li onClick={() => router.push('/profile/2')}>Profile 2</li>
                    <li onClick={() => router.push('/profile/3')}>Profile 3</li>
                    <li onClick={() => router.push('/profile/4')}>Profile 4</li>
                    <li onClick={() => router.push('/profile/5')}>Profile 5</li>
                </ul>
            </div>
        </div>
    )
}