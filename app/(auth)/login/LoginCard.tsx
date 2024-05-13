'use client';

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { authAction } from '@/lib/action'
import { useFormState, useFormStatus } from 'react-dom';

const LoginCard = () => {

    const [ errorMessage, dispatch ] = useFormState(authAction, "");

  return (
    <>
        <form className='space-y-4' action={dispatch}>
            <LoginButton />
        </form>
        <div className='mt-4 text-center text-[13px]'>
            <span className='mr-1'>New To SnapNext?</span>
            <Link className='text-blue-500 hover:underline-offset-0 text-[13px] mr-1' href={"/signup"}>
                Sign Up
            </Link>
            {errorMessage ? <p className='text-red-500 text-sm'>{errorMessage}</p> : null}
        </div>
    </>
  )
}

function LoginButton() {
    const { pending } = useFormStatus();
    return (
        <Button className='w-full flex gap-2' disabled={pending} aria-disabled={pending}>
            <Image src={"/github.svg"} width={20} height={20} alt='github-logo' /> Log in with Github
        </Button>
    )
}

export default LoginCard