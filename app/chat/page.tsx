import ChatCamera from '@/components/chat/ChatCamera'
import Image from 'next/image'
import React from 'react'

const ChatRootPage = () => {
  return (
    <main className='flex-grow bg-sigMain items-center flex px-2'>
        <div className='bg-chat bg-right-bottom rounded-3xl w-full h-[96%] flex items-center justify-center px-6'>
            <ChatCamera />
            <div className='hidden lg:block'>
                <Image 
                    src={"/snapemoji.png"}
                    width={500}
                    height={600}
                    alt='snap-logo'
                />
            </div>
        </div>
    </main>
  )
}

export default ChatRootPage