
import { UserButton } from '@clerk/nextjs';
import React from 'react';

function SetupPage() {
    return (
        <div className='p-4'>
            <UserButton afterSignOutUrl='/' />

        </div>
    );
}

export default SetupPage;