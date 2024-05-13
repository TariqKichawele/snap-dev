'use client';

import { deleteChatAction } from '@/lib/action';
import { useParams } from 'next/navigation'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '../ui/button';
import { Loader2, Trash } from 'lucide-react';

const DeleteMessagesButton = () => {
    const { id: userId } = useParams<{ id: string }>();
    const deleteChatActionWithId = deleteChatAction.bind(null, userId);
    const [ errorMessage, dispatch ] = useFormState(deleteChatActionWithId, null);


  return (
    <form action={dispatch} className='flex flex-col'>
        <DeleteButton />
        {errorMessage ? <p className='text-red-500'>{errorMessage}</p> : null}
    </form>
  )
}

function DeleteButton() {
    const { pending } = useFormStatus();

    return (
        <Button className='bg-sigButtonSecondary hover:bg-sigButtonSecondaryHover w-12 h-12 rounded-full '>
            {!pending ? <Trash /> : <Loader2 className='h-4 w-4 animate-spin'/>}
        </Button>
    )
}

export default DeleteMessagesButton