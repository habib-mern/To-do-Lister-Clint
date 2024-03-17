import { Suspense, lazy } from 'react';
import Loader from '../Components/Loader';

const NewPassword = lazy (()=> import ('../Components/NewPassword'))

const NewPasswordPage = () => {
    return (
        <Suspense fallback={<Loader></Loader>}>
        <NewPassword></NewPassword>
        </Suspense>
    );
};

export default NewPasswordPage;