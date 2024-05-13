'use client';

import { IMessageDocument } from '@/models/messageModel'
import { PopulatedDoc } from 'mongoose'
import { Session } from 'next-auth';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { Dialog, DialogContent } from '../ui/dialog';

type ChatMessageProps = {
    messages: IMessageDocument[] | [];
    session: Session | null;
}

const ChatMessages = ({ messages, session }: ChatMessageProps) => {
    const lastMsgRef = useRef<HTMLDivElement>(null);
    const [ isPreviewingImg, setIsPreviewingImg ] = useState({
        open: false,
        imgURL: ""
    });

    useEffect(() => {
        lastMsgRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);


  return (
    <>
        {messages.map((message, idx) => {
            const amISender = message.sender._id === session?.user?._id;
            const senderFullName = message.sender.fullName.toUpperCase();
            const isMessageImage = message.messageType === 'image';
            const isPrevMessageFromSameSender = idx > 0 && messages[idx - 1].sender._id === message.sender._id;
            
            const handleImageLoad = () => {
                lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
            }

            return (
                <div key={message._id} className='w-full' ref={lastMsgRef}>
                    {!isPrevMessageFromSameSender && (
                        <p
                            className={`font-bold mt-2 text-xs ${
                                amISender ? 'text-sigSnapImg' : 'text-sigSnapChat'
                            }`}
                        >
                            {amISender ? "ME" : senderFullName}
                        </p>
                    )}

                    <div className={`border-1-2 ${amISender ? 'border-1-sigSnapImg' : 'border-1-sigSnapChat'}`}>
                        <div className={`flex items-center w-1/2 p-2 rounded-sm`}>
                            {isMessageImage ? (
                                <div className='relative'>
                                    <Image 
                                        src={message.content}
                                        width={200}
                                        height={200}
                                        className='h-auto w-auto object-cover cursor-pointer'
                                        alt='image'
                                        onLoad={handleImageLoad}
                                        onClick={() => {
                                            setIsPreviewingImg({ open: true, imgURL: message.content })
                                        }}
                                    />
                                </div>
                            ) : (
                                <p className='text-sm'>{message.content}</p>
                            )}

                        </div>
                    </div>
                </div>
            )
        })}

        {messages.length === 0 && <p>No messages between the two of you</p>}

        <Dialog
            open={isPreviewingImg.open}
            onOpenChange={() => setIsPreviewingImg({ open: false, imgURL: "" })}
        >
            <DialogContent
                className='max-w-4xl h-3/4 bg-sigMain border border-sigColorBgBorder outline-none'
                autoFocus={false}
            >
                <Image 
                    src={isPreviewingImg.imgURL}
                    fill
                    className='object-contain p-2'
                    alt='image'
                />
            </DialogContent>
        </Dialog>
    </>
  )
}

export default ChatMessages