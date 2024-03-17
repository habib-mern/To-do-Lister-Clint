import { Suspense, lazy } from 'react';
import MainLayout from '../Layout/MainLayout';
import Loader from '../Components/Loader';

const NewTodo = lazy (()=> import ('../Components/NewTodo'))

const NewTodoPage = () => {
    return (
        <MainLayout>
            <Suspense fallback={<Loader></Loader>}>
            <NewTodo></NewTodo>
            </Suspense>
        </MainLayout>
    );
};

export default NewTodoPage;