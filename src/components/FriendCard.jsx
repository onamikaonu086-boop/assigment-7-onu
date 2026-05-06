import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


const FriendCard = ({ friend }) => {

    const statusColor = friend.status === "overdue" ? "bg-red-100 text-red-600"
        : friend.status === "almost due"
            ? "bg-yellow-100 text-yellow-600"
            : "bg-green-100 text-green-600";

    const tagColor = friend.tag?.toLowerCase() === "work" ? "bg-blue-100 text-blue-600"
        : friend.tag?.toLowerCase() === "family"
            ? "bg-purple-100 text-purple-600"
            : "bg-blue-100 text-blue-600";


    return (
        <Link className='text-center rounded-xl shadow hover:shadow-xl transition p-4 bg-white'
         href={`/friends/${friend.id}`}>
            <div className='p-4'>
                <Image
                    className='w-16 h-16 mx-auto rounded-full'
                    src={friend.picture}
                    alt={friend.name}
                    width={64}
                    height={64}
                />
            </div>
            <h3 className='text-lg font-semibold'>{friend.name}</h3>
            <p className='text-gray-600 text-xs'>{friend.last_contact}</p>

            <div className={`mt-1 px-2 w-20 mx-auto py-1 text-xs rounded-full ${tagColor}`}>
                {friend.tag}
            </div>
            <div className={`mt-2 px-3 w-30 mx-auto py-1 rounded-full text-sm font-medium ${statusColor}`}>
                {friend.status}
            </div>

        </Link>
    );
};

export default FriendCard;