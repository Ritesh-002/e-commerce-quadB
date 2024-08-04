import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="flex bottom-0 left-0 right-0 flex-col gap-20 p-[2rem] bg-black text-white">
            <div className="flex items-center justify-between">
                <div className="flex gap-3">
                    <h2>LOGO</h2>
                    <div className="w-0.5 h-6 bg-gray-500"></div>
                    <p>Gift & Decoration Store</p>
                </div>
                <div>
                    <ul className="flex gap-5">
                        <li><Link>Home</Link></li>
                        <li><Link>Shop</Link></li>
                        <li><Link>Product</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="w-full px-[2rem] h-0.5 bg-gray-500"></div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-5">
                        <p>Copyright c 2024 LOGO. All rights reserved</p>
                        <p className="font-semibold">Privacy policy</p>
                        <p className="font-semibold">Terms of use</p>
                    </div>
                    <div className="flex gap-3">
                        <FaInstagramSquare className="scale-125" />
                        <LuFacebook className="scale-125" />
                        <AiOutlineYoutube className="scale-125" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer