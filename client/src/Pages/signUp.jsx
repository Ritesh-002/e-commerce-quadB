import { Link } from "react-router-dom";
import HomeLayout from "../Layouts/homeLayout";

function SignUp() {
    return (
        <HomeLayout>
            <div className="flex items-center gap-5">
                <div className="w-1/2 h-auto bg-[#F3F5F7]">
                    <img className="h-auto w-auto" src="https://static.vecteezy.com/system/resources/previews/024/807/538/original/modern-white-sofa-isolated-on-transparent-background-ai-generated-png.png" alt="" />
                </div>
                <div className="flex flex-col w-1/3 gap-5">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-semibold">Sign Up</h1>
                        <p className="text-xs text-gray-500">Already have an account? <Link to={'/signin'} className="text-green-400 text-xs">Sign in</Link></p>
                    </div>
                    <form className="flex flex-col gap-5">
                        <div className="py-[0.3rem] border-gray-300 border-b-2">
                            <label htmlFor="name"></label>
                            <input type="name" placeholder="Enter name" className="py-[0.3rem] focus:outline-none focus:border-black" />
                        </div>
                        <div className="py-[0.3rem] border-gray-300 border-b-2">
                            <label htmlFor="email"></label>
                            <input type="email" placeholder="Enter email" className="py-[0.3rem] focus:outline-none focus:border-black" />
                        </div>
                        <div className="py-[0.3rem] border-gray-300 border-b-2">
                            <label htmlFor="password"></label>
                            <input type="password" placeholder="Enter password" className="py-[0.3rem] focus:outline-none focus:border-black" />
                        </div>
                        <div className="flex gap-1 items-center">
                            <input type="checkbox" className="mt-1" />
                            <p className="text-md text-gray-400">I agree to with <span className="text-black font-semibold text-md">Privacy policy</span> and <span className="text-black font-semibold text-md">Terms of use</span></p>
                        </div>
                        <button className="w-full py-[0.3rem] text-center bg-black text-white font-semibold rounded-md hover:bg-gray-800">Sign Up</button>
                    </form>
                </div>
            </div>
        </HomeLayout>
    )
}

export default SignUp;