import { Suspense, lazy } from 'react';
import Loader from '../Components/Loader';

const Registration = lazy (()=> import ('../Components/Registration'))


const RegistrationPage = () => {
    return (
        <div className="h-screen w-full bg-primary bg-opacity-[.4] text-white" >
            <Suspense fallback={<Loader></Loader>}>
            <Registration></Registration>
            </Suspense>
        </div>
    );
};

export default RegistrationPage;