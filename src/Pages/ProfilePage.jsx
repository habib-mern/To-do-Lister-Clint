import { Suspense, lazy } from 'react';
import MainLayout from '../Layout/MainLayout';
import Loader from '../Components/Loader';

const Profile = lazy (()=> import ('../Components/Profile'))

const ProfilePage = () => {
    return (
        <MainLayout>
            <Suspense fallback={<Loader></Loader>}>
            <Profile></Profile>
            </Suspense>
        </MainLayout>

    );
};

export default ProfilePage;