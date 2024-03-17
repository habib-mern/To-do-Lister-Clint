import { Suspense, lazy } from 'react';
import MainLayout from '../Layout/MainLayout';
import Loader from '../Components/Loader';

const CreateTodo = lazy (()=> import ('../Components/CreateTodo'))

const CreateTodoPage = () => {
    return (
        <MainLayout>
            <Suspense fallback={<Loader></Loader>}>
            <CreateTodo></CreateTodo>
            </Suspense>
        </MainLayout>
    );
};

export default CreateTodoPage;