import { createBrowserRouter } from "react-router-dom";
import App from '@/App'
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ForgotPassword from "@/pages/ForgotPassword";
import SignUp from "@/pages/SignUp";
import { url } from "@/utils/constant";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: url.HOME,
                element: <Home />
            },
            {
                path: url.LOGIN,
                element: <Login />
            },
            {
                path: url.FORGOT_PASSWORD,
                element: <ForgotPassword />
            },
            {
                path: url.SIGN_UP,
                element: <SignUp />
            }
        ]
    },
])

export default router;