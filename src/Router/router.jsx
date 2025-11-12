import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import HomeLayouts from "../Layouts/HomeLayouts";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import AddPropertyPage from "../components/AddPropertyPage";
import PropertyDetails from "../components/PropertyDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import MyRatingsPage from "../components/MyRatingsPage";
import AllPropertiesPage from "../components/AllPropertiesPage";
import MyPropertiesPage from "../components/MyPropertiesPage";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: HomeLayouts,
            },
            {
                path: '/addProperty',
                element: <PrivateRoute>
                    <AddPropertyPage></AddPropertyPage>
                </PrivateRoute>
            },
            {
                path: '/propertyDetails/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/properties/${params.id}`),
                element: <PrivateRoute>
                    <PropertyDetails></PropertyDetails>
                </PrivateRoute>
            },
            {
                path: '/myProperties',
                element: <PrivateRoute>
                    <MyPropertiesPage></MyPropertiesPage>
                </PrivateRoute>
            },
            {
                path: '/myRatings',
                element: <PrivateRoute>
                    <MyRatingsPage></MyRatingsPage>
                </PrivateRoute>
            },
            {
                path: '/allProperties',
                Component: AllPropertiesPage
            },
            {
                path: '/signUp',
                Component: SignUp
            },
            {
                path: '/login',
                Component: Login
            }

        ]
    },
    {
        path: "*",
        Component: ErrorPage,

    }

]);

export default router;