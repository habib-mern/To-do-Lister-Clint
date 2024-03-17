import { Suspense, lazy } from 'react';
import Loader from '../Components/Loader';

const NotFound = lazy (()=> import ('../Components/NotFound'))

const Page404 = () => {
    return (
        <Suspense fallback={<Loader></Loader>}>
        <NotFound></NotFound>
        </Suspense>
    );
};

export default Page404;