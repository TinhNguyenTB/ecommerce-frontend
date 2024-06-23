import { createBrowserRouter } from "react-router-dom";
import App from '@/App'
import Home from "@Pages/Home";
import Login from "@Pages/Login";
import ForgotPassword from "@Pages/ForgotPassword";
import SignUp from "@Pages/SignUp";
import { url } from "@Utils/constant";

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