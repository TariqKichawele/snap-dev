import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { auth } from '@/auth'
import LogoutButton from './LogoutButton'

const Navbar = async () => {
    const session  = await auth();
  return (
    <header className='w-full py-4 px-8 flex justify-between items-center'>
        <Image src={"/logo.svg"} width={40} height={40} alt='snapchat_logo' className='cursor-pointer'/>
        <div className='flex space-x-1'>
            <Button className='bg-transparent hover:bg-primary/5 text-black'>Stories</Button>
            <Button className='bg-transparent hover:bg-primary/5 text-black'>Spotlight</Button>
            <Button className='bg-transparent hover:bg-primary/5 text-black' asChild>
                <Link href={"/chat"}>Chat</Link>
            </Button>
        </div>
        <div className='flex space-x-2'>
            <Button className='bg-black text-white rounded-full p-3 text-xs md:text-sm'>Watch tutorials</Button>
            {!session && (
                <Button 
                    asChild
                    className='bg-black text-white rounded-full p-3 text-xs md:text-sm'
                >
                    <Link href={"/login"}>Login</Link>
                </Button>
            )}
            {session?.user && <LogoutButton />}
        </div>
    </header>
  )
}

export default Navbar