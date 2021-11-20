import React from 'react';
import Access from 'admin/access/Access';
import AccessState from 'admin/access/state/AccessState';
import ProfileBody from './panel/ProfileBody';

const Profile = React.memo(() => {
    return (
        <>
            <div className="px-4 mt-4">
                <h2>مشخصات فردی</h2>
                <div className="divide-border h-1 mt-2" />
                <ProfileBody />
            </div>
            <AccessState>
                <Access />
            </AccessState>
        </>
    )
})
export default Profile;