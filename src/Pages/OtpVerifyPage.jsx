import { Suspense, lazy } from 'react';
import Loader from '../Components/Loader';

const OtpVerify = lazy (()=> import ('../Components/OtpVerify'))

const OtpVerifyPage = () => {
    return (
        <Suspense fallback={<Loader></Loader>}>
        <OtpVerify></OtpVerify>
        </Suspense>
    );
};

export default OtpVerifyPage;