'use client';

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { authAction } from '@/lib/action'
import { useFormState, useFormStatus } from 'react-dom'

const SignupCard = () => {

   const [ errorMessage, dispatch ] = useFormState(authAction, "");

  return (
    <>
        <form className='space-y-4' action={dispatch}>
            <SignupButton />
        </form>
        <div className='mt-4 text-center text-[13px]'>
            <span className='mr-2'>Already have an account</span>
            <Link className='text-blue-500 hover:underline text-[13px] mr-1' href={"/login"}>
                Log in
            </Link>
            {errorMessage ? <p className='text-red-500 text-sm'>{errorMessage}</p> : null}
        </div>
    </>
  )
}

function SignupButton() {
    const { pending } = useFormStatus();
    return (
        <Button className='w-full flex gap-2' disabled={pending} aria-disabled={pending}>
            <Image src={"/github.svg"} width={20} height={20} alt='github-logo'/> Sign up with Github
        </Button>
    )
}

export default SignupCard