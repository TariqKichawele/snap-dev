import { getUserProfile } from '@/lib/data'
import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import ChatUserinfo from './ChatUserinfo';
import DeleteMessagesButton from './DeleteMessagesButton';

const ChatTopbar = async ({ params }: { params: { id: string }}) => {
    const userData = await getUserProfile(params.id);

  return (
    <div className='mt-4 flex justify-between items-center w-full'>
        <div className='flex gap-2'>
            <Button
                asChild
                className='bg-sigButtonSecondary hover:bg-sigButtonSecondaryHover w-11 h-11 rounded-full'
            >
                <Link href={"/chat"}>
                    <ChevronLeft className='min-w-7'/>
                </Link>
            </Button>
            <ChatUserinfo userData={userData} />
        </div>

        <DeleteMessagesButton />
    </div>
  )
}

export default ChatTopbar