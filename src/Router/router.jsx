import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import HomeLayouts from "../Layouts/HomeLayouts";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import AddPropertyPage from "../components/AddPropertyPage";

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
                Component: AddPropertyPage
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

]);

export default router;