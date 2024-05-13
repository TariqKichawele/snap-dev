import { IUserDocument } from '@/models/userModel'
import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar';

const ChatUserinfo = ({ userData }: { userData: IUserDocument }) => {
    const userFullName = userData.fullName;
    const userAvatar = userData.avatar;

  return (
    <div className='cursor-pointer bg-sigButtonSecondary hover:sig-ButtonSecondaryHover rounded-full flex gap-2 items-center py-1 px-3 text-white font-semibold'>
        <Avatar className='h-8 w-8 rounded-full flex items-center justify-center'>
            <AvatarImage src={userAvatar || "/logo.svg"}/>
        </Avatar>

        <span>{userFullName}</span>
    </div>
  )
}

export default ChatUserinfo