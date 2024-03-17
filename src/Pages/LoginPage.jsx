import { Suspense, lazy } from 'react';
import Loader from '../Components/Loader';

const Login = lazy (()=> import ('../Components/Login'))

const LoginPage = () => {
    return (
        <div className="h-screen w-full bg-primary bg-opacity-[.4] text-white" >
            <Suspense fallback={<Loader></Loader>}>
            <Login></Login>
            </Suspense>
        </div>
    );
};

export default LoginPage;