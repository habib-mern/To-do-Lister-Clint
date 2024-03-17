import { Suspense, lazy } from 'react';
import MainLayout from '../Layout/MainLayout';
import Loader from '../Components/Loader';

const ProgressTodo = lazy (()=> import ('../Components/ProgressTodo'))

const ProgressTodoPage = () => {
    return (
        <MainLayout>
            <Suspense fallback={<Loader></Loader>}>
            <ProgressTodo></ProgressTodo>
            </Suspense>
        </MainLayout>
    );
};

export default ProgressTodoPage;