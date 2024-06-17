'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Profile() {
    const router = useRouter()
    console.log(router);

    return (
        <div>
            <h1>My list of profiles</h1>
            <div>
                <ul>
                    <li>
                        <Link href="/profile/1">Profile 1</Link>
                    </li>
                    <li>
                        <Link href="/profile/2">Profile 2</Link>
                    </li>
                    <li>
                        <Link prefetch={false} scroll={false} href={{
                            pathname: "/profile/3",
                            query: {
                                userName: "Hector",
                                userId: 12,
                                person: JSON.stringify({ height: 1.68 })
                            }
                        }}>
                            <div>
                                A big square where I got some text.
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/profile/4">Profile 4</Link>
                    </li>
                    <li>
                        <Link href="/profile/5">Profile 5</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}