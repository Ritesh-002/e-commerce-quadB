import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../Layouts/homeLayout";
import { useDispatch } from "react-redux";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { createAccount } from "../Redux/Slice/authSlice";

function SignUp() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const [signUpData, setSignUpData] = useState({
        fullName: '',
        email: '',
        password: '',
    })

    function handleUserInput(e) {
        const { name, value } = e.target;
        setSignUpData({
            ...signUpData,
            [name]: value
        })
        // console.log(signUpData);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (!signUpData.fullName || !signUpData.email || !signUpData.password) {
            toast.error('every field is required')
            console.log('test')
            return;
        }
        if (signUpData.fullName.length < 3) {
            toast.error('Enter valid name');
            return;
        }
        if (!signUpData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            toast.error('Enter a valid email');
            return;
        }

        if (!signUpData.password.match(/^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
            toast.error('Strong password required');
            return;
        }

        const formData = new FormData();
        formData.append('fullName', signUpData.fullName)
        formData.append('email', signUpData.email)
        formData.append('password', signUpData.password)

        // dispatch action to create an account and then navigate to home page
        console.log("sign data", signUpData)
        console.log("Form data", formData)
        const response = await dispatch(createAccount(signUpData));
        console.log('signuppage', response)
        // navigation
        if (response?.payload?.success) navigate('/')
        setSignUpData({
            fullName: '',
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
                        <h1 className="text-3xl font-semibold">Sign Up</h1>
                        <p className="text-xs text-gray-500">Already have an account? <Link to={'/signin'} className="text-green-400 text-xs">Sign in</Link></p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="py-[0.3rem] border-gray-300 border-b-2">
                            <label htmlFor="fullName"></label>
                            <input onChange={handleUserInput} name="fullName" id="fullName" value={signUpData.fullName} type="fullName" placeholder="Enter name" className="py-[0.3rem] focus:outline-none focus:border-black" />
                        </div>
                        <div className="py-[0.3rem] border-gray-300 border-b-2">
                            <label htmlFor="email"></label>
                            <input onChange={handleUserInput} name="email" id="name" value={signUpData.email} type="email" placeholder="Enter email" className="py-[0.3rem] focus:outline-none focus:border-black" />
                        </div>
                        <div className="py-[0.3rem] border-gray-300 border-b-2">
                            <label htmlFor="password"></label>
                            <input onChange={handleUserInput} name="password" value={signUpData.password} type="password" placeholder="Enter password" className="py-[0.3rem] focus:outline-none focus:border-black" />
                        </div>
                        <div className="flex gap-1 items-center">
                            <input onClick={() => { setChecked(!checked) }} type="checkbox" className="mt-1" />
                            <p className="text-md text-gray-400">I agree to with <span className="text-black font-semibold text-md">Privacy policy</span> and <span className="text-black font-semibold text-md">Terms of use</span></p>
                        </div>
                        <button disabled={!checked} type="submit" className="w-full py-[0.3rem] text-center bg-black text-white font-semibold rounded-md hover:bg-gray-800">Sign Up</button>
                    </form>
                </div>
            </div>
        </HomeLayout>
    )
}

export default SignUp;