'use client'

import { authConfig } from "@/configs/auth"
import { getServerSession } from "next-auth"
import Image from "next/image"
// import { FunctionComponent } from "react"
// import Link from 'next/link'
// import { Footer } from "@/components/footer/footer"
// import { signOut } from "next-auth/react"

const Profile = async () => {
    // signOut({callbackUrl: '/'})
    const session = await getServerSession(authConfig)
    return <main>
        {/* <Link href={{
            pathname: "/profile",
            // query: { id: session.user.id }
        }}>Link</Link> */}
        <h1>{session?.user?.name}</h1>
        { session?.user?.image && <Image src={session.user.image} alt="" width={100} height={100}/> }
        {/* <button onClick={() => {signOut({callbackUrl: '/'})}}>Log Out</button> */}
    </main>
}

export default Profile