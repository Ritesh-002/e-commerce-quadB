import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import HomeLayout from "../../Layouts/homeLayout";
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight, FaRegHeart, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { useDispatch, useSelector } from "react-redux";
import { IoIosStar } from "react-icons/io";
import { getAllProducts } from "../../Redux/Slice/productSlice";

function Product() {
    const { id } = useParams();
    const location = useLocation();
    const [count, setCount] = useState(0);
    const { singleProductData } = location.state || {};
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productData } = useSelector((state) => state?.products);

    async function loadProducts() {
        console.log("Ritesh")

        const productResponse = await dispatch(getAllProducts());
        console.log('productData', productData.slice(0, 8))
    }
    const handleDivClick = (productId, singleProductData) => {
        navigate(`/product/${productId}`, { state: { singleProductData } });
    };
    useEffect(() => {
        loadProducts();
    }, [])

    // Fetch product details using the id or use it as needed
    console.log('Product ID:', id);
    console.log('Additional Data:', singleProductData);

    return (
        <HomeLayout>
            <div className="p-[2rem]">
                <div className="flex gap-2 items-center">
                    <p className="text-gray-600 text-sm">Home</p>
                    <MdOutlineKeyboardArrowRight className="text-gray-600" />
                    <p className="text-gray-600">Shop</p>
                    <MdOutlineKeyboardArrowRight className="text-gray-600" />
                    <p className="text-lg font-semibold">{singleProductData?.singleProductData.tags[0]}</p>
                </div>
            </div>
            <div className=" px-[6rem] flex items-start gap-5">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                        <img className="w-56 h-60" src={singleProductData?.singleProductData.thumbnail} alt="" />
                        <img className="w-56 h-60" src={singleProductData?.singleProductData.thumbnail} alt="" />
                    </div>
                    <div className="flex gap-3">
                        <img className="w-56 h-60" src={singleProductData?.singleProductData.thumbnail} alt="" />
                        <img className="w-56 h-60" src={singleProductData?.singleProductData.thumbnail} alt="" />
                    </div>
                    <div className="flex gap-3">
                        <img className="w-56 h-60" src={singleProductData?.singleProductData.thumbnail} alt="" />
                        <img className="w-56 h-60" src={singleProductData?.singleProductData.thumbnail} alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <p className="text-black text-sm">{singleProductData.singleProductData.numberOfReviews} Reviews</p>
                    </div>
                    <h1 className="text-3xl font-semibold">{singleProductData.singleProductData.name}</h1>
                    <p className="text-gray-600 text-sm">{singleProductData.singleProductData.description}</p>
                    <p className="font-semibold text-3xl">${singleProductData.singleProductData.price} <span className="text-2xl font-semibold text-gray-500 line-through">${singleProductData.singleProductData.price * 2}</span></p>
                    <div className="h-[0.5px] w-full bg-gray-400"></div>
                    <p className="text-sm text-gray-500 font-semibold">Measurements</p>
                    <p className="font-semibold">{singleProductData.singleProductData.measurements.length} {singleProductData.singleProductData.measurements.width} {singleProductData.singleProductData.measurements.height}</p>
                    <p>Choose color</p>
                    <div className={`px-[0.3rem] py-[0.1rem] w-16 rounded-md text-xs text-white text-center bg-${singleProductData.singleProductData.color.toLowerCase()}-500`}>
                        {singleProductData.singleProductData.color}
                    </div>
                    <div className="flex gap-5">
                        <div className="flex gap-5 w-24 items-center justify-center py-[0.4rem] rounded-md bg-[#F3F5F7]">
                            <button className="text-2xl text-gray-700">-</button>
                            <p className="text-lg font-semibold">{count}</p>
                            <button className="text-2xl text-gray-700">+</button>
                        </div>
                        <button className="flex font-semibold py-[0.4rem] gap-2 items-center justify-center w-2/3 rounded-md border-2 border-black">
                            <FaRegHeart />
                            <p>Wishlist</p>
                        </button>
                    </div>
                    <button className="w-full py-[0.5rem] bg-black rounded-md text-white font-semibold text-center">Add to cart</button>
                    <div className="text-sm font-semibold flex items-center justify-between">
                        <p className=" text-gray-500">CATEGORY</p>
                        <p>{singleProductData.singleProductData.category}</p>
                    </div>
                    <div className="w-96">
                        <Disclosure >
                            <div className="flex items-center justify-between  border-b-2 border-gray-500">
                                <DisclosureButton className="py-2 ">Is team pricing available?</DisclosureButton>
                                <MdKeyboardArrowRight className="scale-150" />
                            </div>
                            <DisclosurePanel className="text-gray-500 pt-2 bg-[#F3F5F7] p-[1rem] flex flex-col gap-5">
                                <div className="flex flex-col gap-2 text-sm">
                                    <h1 className="font-semibold text-gray-600">Details</h1>
                                    <p>{singleProductData.singleProductData.additionalInfo.description}</p>
                                </div>
                                <div className="flex flex-col text-sm gap-1">
                                    <h1 className="font-semibold text-gray-600">Packaging</h1>
                                    <p className="font-semibold">Width: {singleProductData.singleProductData.measurements.width} * Height: {singleProductData.singleProductData.measurements.height} * Length: {singleProductData.singleProductData.measurements.length} </p>
                                    <p className="font-semibold">Package Number: {singleProductData.singleProductData.additionalInfo.packageNumber}</p>
                                </div>
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                    <div className="w-96">
                        <Disclosure >
                            <div className="flex items-center justify-between  border-b-2 border-gray-500">
                                <DisclosureButton className="py-2 ">FAQs</DisclosureButton>
                                <MdKeyboardArrowRight className="scale-150" />
                            </div>
                            <DisclosurePanel className="text-gray-500 pt-2 bg-[#F3F5F7] p-[1rem] flex flex-col gap-5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, minus!</p>
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                    <div className="w-96">
                        <Disclosure >
                            <div className="flex items-center justify-between  border-b-2 border-gray-500">
                                <DisclosureButton className="py-2 ">Reviews</DisclosureButton>
                                <MdKeyboardArrowRight className="scale-150" />
                            </div>
                            <DisclosurePanel className="text-gray-500 pt-2 bg-[#F3F5F7] p-[1rem] flex flex-col gap-5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, minus!</p>
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                </div>
            </div>
            <div className="flex justify-between py-[2rem] px-[4rem]">
                <p className="font-semibold text-3xl">You might also like</p>
                <div className="underline flex gap-1 items-center">
                    <p>More products</p>
                    <FaArrowRight />
                </div>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="pl-[1rem]"
            >
                {
                    productData?.slice(0, 6).map(p => {
                        return (
                            <SwiperSlide>
                                <div className="p-[1rem] flex flex-col gap-2 transition ease-in-out duration-500 justify-start h-auto w-auto">
                                    <div onClick={() => handleDivClick(p._id, { singleProductData: p })} className="p-[1rem] w-[200px] h-[300px] bg-[#F3F5F7] group hover:transition duration-500 cursor-pointer ease-in-out hover:bg-gray-300">
                                        <div className="flex justify-between">
                                            <div className="flex flex-col gap-1">
                                                <p className="font-semibold bg-white px-2">NEW</p>
                                                <p className="font-semibold bg-green-600 text-white px-2">-50%</p>
                                            </div>
                                            <FaRegHeart />
                                        </div>
                                        <img className="w-[200px] h-[150px] p-[1.5rem] mt-[1rem]" src={p?.thumbnail} alt="" />
                                        <button className="w-full hidden group-hover:block rounded-md bg-black text-white font-semibold text-center py-[0.3rem] mt-[1rem]">Add to Cart</button>
                                    </div>
                                    <div className="flex flex-col justify-start">
                                        <div className="flex gap-2">
                                            <IoIosStar />
                                            <IoIosStar />
                                            <IoIosStar />
                                            <IoIosStar />
                                            <IoIosStar />
                                        </div>
                                        <p className="font-semibold text-md">{p.name}</p>
                                        <p className="text-sm">${p.price}<span className="line-through text-gray-600 text-xs pl-1">${p.price * 2}</span></p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </HomeLayout>
    )
}
export default Product