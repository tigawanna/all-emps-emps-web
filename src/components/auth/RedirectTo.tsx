import { Result , Admin } from 'pocketbase'
import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom';

interface RedirectToProps {
    user?: Result | Admin | null
    testmode?: boolean
    children: ReactNode
    to:string
}

export const RedirectTo: React.FC<RedirectToProps> = ({user, children, testmode,to}) => {
   

    if (user?.email && to) {
        return <Navigate to={to as string} />
    }
    return (
        <div className='h-full w-full'>
            {children}
        </div>
    );
}
