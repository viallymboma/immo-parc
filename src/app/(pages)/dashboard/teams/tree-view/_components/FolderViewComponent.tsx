"use client";

import React from 'react';

import { UserType } from './TreeViewComponent';
import UserNodeFolder from './UserNodeFolder';

// import { User } from '../types/User';

const users: UserType [] = [
    {
        id: 1,
        name: 'Alice',
        children: [
            {
                id: 2,
                name: 'Bob',
                children: [
                    { id: 3, name: 'Charlie', children: [] },
                    { id: 4, name: 'David', children: [] }
                ]
            },
            {
                id: 5,
                name: 'Eve',
                children: [
                    {
                        id: 2,
                        name: 'Bob',
                        children: [
                            { id: 3, name: 'Charlie', children: [] },
                            { id: 4, name: 'David', children: [] }
                        ]
                    },
                    {
                        id: 5,
                        name: 'Eve',
                        children: []
                    }
                ]
            }
        ]
    }
];

interface UserNodeProps {
    user: UserType;
}

const FolderViewComponent = () => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className="text-2xl font-bold mb-8">User Folder</h1>
            {users.map((user) => (
                <UserNodeFolder key={user.id} user={user} />
            ))}
        </div>
    )
};

export default FolderViewComponent;
