import { Suspense, lazy } from 'react';
import Loader from '../Components/Loader';

const ForgotPassword = lazy (()=> import ('../Components/ForgotPassword'))

const ForgotPasswordPage = () => {
    return (

            <Suspense fallback={<Loader></Loader>}>
            <ForgotPassword></ForgotPassword>
            </Suspense>

    );
};

export default ForgotPasswordPage;