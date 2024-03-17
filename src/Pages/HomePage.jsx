import { Suspense, lazy } from "react";
import MainLayout from "../Layout/MainLayout";
import Loader from "../Components/Loader";
const Home = lazy (()=> import ('../Components/Home.jsx'))

const HomePage = () => {
    return (
        <MainLayout>
            <Suspense fallback={<Loader></Loader>}>
            <Home></Home>
            </Suspense>
        </MainLayout>
    );
};

export default HomePage;