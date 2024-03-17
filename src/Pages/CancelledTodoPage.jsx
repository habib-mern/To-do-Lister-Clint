import { Suspense, lazy } from "react";
import Loader from "../Components/Loader";
import MainLayout from "../Layout/MainLayout";

const CancelledTodo = lazy (()=> import ('../Components/CancelledTodo'))

const CancelledTodoPage = () => {
    return (
        <MainLayout>
        <Suspense fallback={<Loader></Loader>}>
        <CancelledTodo/>
        </Suspense>
    </MainLayout>

    );
};

export default CancelledTodoPage;