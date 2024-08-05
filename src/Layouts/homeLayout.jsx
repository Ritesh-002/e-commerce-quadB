import { Select, Option } from "@material-tailwind/react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaArrowRight, FaRegistered, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { TbRosetteDiscount } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { MdAppRegistration, MdLogin, MdLogout, MdOutlineAppRegistration } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import Footer from "../Components/footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FcBusinessman, FcConferenceCall } from "react-icons/fc";
import { CiLogout } from "react-icons/ci";
import { GrUserAdmin } from "react-icons/gr";
import { logout } from "../Redux/Slice/authSlice";

function HomeLayout({ children }) {

    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
    const role = useSelector((state) => state?.auth?.roles);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("Auth State")
        console.log("Log", isLoggedIn)
        console.log("Auth Role", role)
    }, [])

    async function handleLogout(e) {
        e.preventDefault();
        const response = await dispatch(logout());
        if (response?.payload?.success) {
            navigate('/')
        }
    }

    return (
        <div>
            <div className="w-full bg-[#F3F5F7] h-10 flex gap-2 items-center justify-center">
                <TbRosetteDiscount className="h-12 w-6" />
                <p className="flex items-center gap-2 justify-center">30% off storewide -- Limited offer! <span className="text-blue-500 underline">Shop now</span><FaArrowRight /></p>
            </div>

            <div className="flex justify-between px-[3rem] py-[1rem]">
                <h2>LOGO</h2>
                <ul className="flex gap-5">
                    <li className="font-semibold text-gray-500"><Link to={'/'}>Home</Link></li>
                    <li className="font-semibold text-gray-500"><Link>Shop</Link></li>
                    <li className="font-semibold text-gray-500"><Link to={'/products'}>Products</Link></li>
                    <li className="font-semibold text-gray-500"><Link>Contact us</Link></li>
                </ul>
                <div className="flex gap-5 items-center justify-center">
                    <div className="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button"><FaShoppingCart className="scale-125 cursor-pointer" /></label>
                        </div>
                        <div className="drawer-side z-50">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                {/* Sidebar content here */}
                                <li><a>Sidebar Item 1</a></li>
                                <li><a>Sidebar Item 2</a></li>
                            </ul>
                        </div>
                    </div>

                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-900 hover:bg-gray-50">
                                {!isLoggedIn && <CgProfile className="scale-150" />}
                                {isLoggedIn && role == 'ADMIN' && <FcBusinessman className="scale-150" />}
                                {isLoggedIn && role != 'ADMIN' && <FcConferenceCall className="scale-150" />}
                                {/* < aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" /> */}
                            </MenuButton>
                        </div>

                        <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="py-1">
                                {/* <MenuItem>
                                    <Link to={`${!isLoggedIn ? '/signin' : '/'}`} className="flex items-center gap-5 px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                                        {!isLoggedIn ? <MdLogin className="mt-1 scale-150" /> : <CiLogout onClick={handleLogout} className="mt-1 scale-150" />} {!isLoggedIn ? <p className="text-lg">Login</p> : <p onClick={handleLogout} className="text-lg">Logout</p>}
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to={`${!isLoggedIn ? '/signup' : '/'}`} className="flex items-center gap-5 px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"> {!isLoggedIn ? <MdAppRegistration className="mt-1 scale-150" /> : <CgProfile className="mt-1 scale-150" />} <p className="text-lg">{!isLoggedIn ? 'Register' : 'Go to Profile'}</p></Link>
                                </MenuItem>
                                <MenuItem>
                                    {
                                        isLoggedIn && role == 'ADMIN' && <Link className="flex items-center gap-5 px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"><GrUserAdmin className="mt-1 scale-150" /><p className="text-lg">Dashboard</p></Link>
                                    }
                                </MenuItem> */}
                                {
                                    isLoggedIn &&
                                    <div onClick={handleLogout}>
                                        <MenuItem>
                                            <div className="flex cursor-pointer items-center gap-5 px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                                                <MdLogout className="mt-1 scale-150" />
                                                <p className="text-lg">Logout</p>
                                            </div>
                                        </MenuItem>
                                    </div>
                                }
                                {
                                    isLoggedIn &&
                                    <div>
                                        <MenuItem>
                                            <Link to={'/'} className="flex cursor-pointer items-center gap-5 px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                                                <CgProfile className="mt-1 scale-150" />
                                                <p className="text-lg">Go to profile</p>
                                            </Link>
                                        </MenuItem>
                                    </div>
                                }
                                {
                                    isLoggedIn && role == 'ADMIN' &&
                                    <div>
                                        <MenuItem>
                                            <Link to={'/'} className="flex cursor-pointer items-center gap-5 px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                                                <GrUserAdmin className="mt-1 scale-150" />
                                                <p className="text-lg">Dashboard</p>
                                            </Link>
                                        </MenuItem>
                                    </div>
                                }
                                {
                                    !isLoggedIn &&
                                    <div>
                                        <MenuItem>
                                            <Link to={'/signin'} className="flex cursor-pointer items-center gap-5 px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                                                <MdLogin className="mt-1 scale-150" />
                                                <p className="text-lg">Login</p>
                                            </Link>
                                        </MenuItem>
                                    </div>
                                }
                                {
                                    !isLoggedIn &&
                                    <div>
                                        <MenuItem>
                                            <Link to={'/signup'} className="flex cursor-pointer items-center gap-5 px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                                                <MdOutlineAppRegistration className="mt-1 scale-150" />
                                                <p className="text-lg">Register</p>
                                            </Link>
                                        </MenuItem>
                                    </div>
                                }
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="flex items-center gap-5 px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                    >
                                        <BiSupport className="mt-1 scale-150" /> <p className="text-lg">Help & Support</p>
                                    </a>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>

                </div>
            </div>
            {children}
            <Footer />
        </div>

    )
}

export default HomeLayout;