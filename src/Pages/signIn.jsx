import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../Layouts/homeLayout";
import { useDispatch } from "react-redux";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { loginAccount } from "../Redux/Slice/authSlice";

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    function handleUserInput(e) {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
        // console.log(loginData);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (!loginData.email || !loginData.password) {
            toast.error('every field is required')
            console.log('test')
            return;
        }

        // dispatch action to create an account and then navigate to home page
        const response = await dispatch(loginAccount(loginData));
        console.log('loginpage', response)
        // navigation
        if (response?.payload?.success) navigate('/')
        setLoginData({
            email: '',
            password: '',
        })
    }

    return (
        <HomeLayout>
            <Toaster />
            <div className="flex items-center gap-5">
                <div className="w-1/2 h-auto bg-[#F3F5F7]">
                    <img className="h-auto w-auto" src="https://static.vecteezy.com/system/resources/previews/024/807/538/original/modern-white-sofa-isolated-on-transparent-background-ai-generated-png.png" alt="" />
                </div>
                <div className="flex flex-col w-1/3 gap-5">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-semibold">Sign In</h1>
                        <p className="text-xs text-gray-500">Don't have an account? <Link to={'/signup'} className="text-green-400 text-xs">Sign Up</Link></p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="py-[0.3rem] border-gray-300 border-b-2">
                            <label htmlFor="email"></label>
                            <input name="email" value={loginData.email} required id="email" onChange={handleUserInput} type="email" placeholder="Enter email" className="py-[0.3rem] w-full focus:outline-none focus:border-black" />
                        </div>
                        <div className="py-[0.3rem] border-gray-300 border-b-2">
                            <label htmlFor="password"></label>
                            <input name="password" id="password" value={loginData.password} required onChange={handleUserInput} type="password" placeholder="Enter password" className="py-[0.3rem] w-full focus:outline-none focus:border-black" />
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className="flex items-center w-full justify-between">
                                <div className="flex gap-1 items-center">
                                    <input type="checkbox" className="mt-1" />
                                    <p className="text-md text-gray-400">Remember me</p>
                                </div>
                                <span className="text-black font-semibold text-md">Forgot Password?</span>
                            </div>
                        </div>
                        <button type="submit" className="w-full py-[0.3rem] text-center bg-black text-white font-semibold rounded-md hover:bg-gray-800">Sign In</button>
                    </form>
                </div>
            </div>
        </HomeLayout>
    )
}

export default SignIn;