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
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Dashboard/DashboardHome";
import Profile from "../Dashboard/Profile";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../AdminDashboard/ManageUsers";

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
                path: '/propertyDetails/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/properties/${params.id}`),
                element: <PrivateRoute>
                    <PropertyDetails></PropertyDetails>
                </PrivateRoute>
            },
            {
                path: '/allProperties',
                Component: AllPropertiesPage
            },
            {
                path: '/about-us',
                Component: AboutUs
            },
            {
                path: "/contactUs",
                Component: ContactUs
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
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true, // 👉 এটা খুব গুরুত্বপূর্ণ
                element: <DashboardHome />,
            },
            {
                path: "add-property",
                element: <AddPropertyPage />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "my-properties",
                element: <MyPropertiesPage />,
            },
            {
                path: "my-ratings",
                element: <MyRatingsPage />,
            },
            {
                path: "manage-users",
                element: <AdminRoute>
                    <ManageUsers />
                </AdminRoute>,
            },
            {
                path: "admin-home",
                element: <AdminRoute>
                    <DashboardHome />
                </AdminRoute>,
            },
            {
                path: "manage-properties",
                element: <AdminRoute>
                    <AllPropertiesPage />
                </AdminRoute>,
            },
        ],
    },

    {
        path: "*",
        Component: ErrorPage,

    }

]);

export default router;