import { Suspense, lazy } from 'react';
import MainLayout from '../Layout/MainLayout';
import Loader from '../Components/Loader';

const CompleteTodo = lazy (()=> import ('../Components/CompleteTodo'))

const CompleteTodoPage = () => {
    return (
        <MainLayout>
            <Suspense fallback={<Loader></Loader>}>
            <CompleteTodo></CompleteTodo>
            </Suspense>
        </MainLayout>
    );
};

export default CompleteTodoPage;