"use client";

import React from 'react';

import { UserType } from './TreeViewComponent';
import UserNodeFolder from './UserNodeFolder';

// import { User } from '../types/User';

const initialUsers: UserType[] = [
    {
      id: 1,
      name: 'Alice',
      subscriptionAmount: 200,
      position: 'left',
      packageName: 'Gold',
      parentName: '',
      parentId: 0,
      children: [
        {
          id: 2,
          name: 'Bob',
          subscriptionAmount: 150,
          position: 'left',
          packageName: 'Silver',
          parentName: 'Alice',
          parentId: 1,
          children: [
            { id: 3, name: 'Charlie', subscriptionAmount: 100, position: 'left', packageName: 'Bronze', parentName: 'Bob', parentId: 2, children: [] },
            { id: 4, name: 'David', subscriptionAmount: 120, position: 'right', packageName: 'Silver', parentName: 'Bob', parentId: 2, children: [
              {
                id: 2,
                name: 'Bob',
                subscriptionAmount: 150,
                position: 'left',
                packageName: 'Silver',
                parentName: 'Alice',
                parentId: 1,
                children: [
                  { id: 3, name: 'Charlie', subscriptionAmount: 100, position: 'left', packageName: 'Bronze', parentName: 'Bob', parentId: 2, children: [] },
                  { id: 4, name: 'David', subscriptionAmount: 120, position: 'right', packageName: 'Silver', parentName: 'Bob', parentId: 2, children: [] },
                ],
              },
              {
                id: 5,
                name: 'Eve',
                subscriptionAmount: 180,
                position: 'right',
                packageName: 'Gold',
                parentName: 'Alice',
                parentId: 1,
                children: [],
              },
            ] },
          ],
        },
        {
          id: 5,
          name: 'Eve',
          subscriptionAmount: 180,
          position: 'right',
          packageName: 'Gold',
          parentName: 'Alice',
          parentId: 1,
          children: [
            {
              id: 2,
              name: 'Bob',
              subscriptionAmount: 150,
              position: 'left',
              packageName: 'Silver',
              parentName: 'Alice',
              parentId: 1,
              children: [
                { id: 3, name: 'Charlie', subscriptionAmount: 100, position: 'left', packageName: 'Bronze', parentName: 'Bob', parentId: 2, children: [] },
                { id: 4, name: 'David', subscriptionAmount: 120, position: 'right', packageName: 'Silver', parentName: 'Bob', parentId: 2, children: [] },
              ],
            },
            {
              id: 5,
              name: 'Eve',
              subscriptionAmount: 180,
              position: 'right',
              packageName: 'Gold',
              parentName: 'Alice',
              parentId: 1,
              children: [],
            },
          ]
        },
      ],
    },
  ];

interface UserNodeProps {
    user: UserType;
}

const FolderViewComponent = () => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className="text-2xl font-bold mb-8">User Folder</h1>
            {initialUsers.map((user) => (
                <UserNodeFolder key={user.id} user={user} />
            ))}
        </div>
    )
};

export default FolderViewComponent;
