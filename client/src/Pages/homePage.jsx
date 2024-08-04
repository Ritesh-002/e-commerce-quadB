import { FaArrowRight, FaRegHeart } from "react-icons/fa";
import HomeLayout from "../Layouts/homeLayout";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { IoIosStar, IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/Slice/productSlice";
import { useEffect } from "react";
import { MdOutlineLocalShipping, MdSupportAgent } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { SiPrime } from "react-icons/si";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
function HomePage() {

    const dispatch = useDispatch();
    const { productData } = useSelector((state) => state?.products);

    async function loadProducts() {
        console.log("Ritesh")

        const productResponse = await dispatch(getAllProducts());
        console.log('productData', productData.slice(0, 8))
    }

    useEffect(() => {
        loadProducts();
    }, [])

    return (
        <HomeLayout>
            <div className="carousel w-full px-[2rem] h-auto">
                <div id="slide1" className="carousel-item h-auto relative w-full justify-center px-[2rem]">
                    <img
                        src="https://wallpaperaccess.com/full/2076086.jpg"
                        className="w-4/5 h-[500px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between px-[2rem]">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full justify-center px-[2rem]">
                    <img
                        src="https://wallpaperaccess.com/full/2076086.jpg"
                        className="w-4/5 h-[500px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between px-[2rem]">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full justify-center px-[2rem]">
                    <img
                        src="https://wallpaperaccess.com/full/2076086.jpg"
                        className="w-4/5 h-[500px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between px-[2rem]">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full justify-center px-[2rem]">
                    <img
                        src="https://wallpaperaccess.com/full/2076086.jpg"
                        className="w-4/5 h-[500px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between px-[2rem]">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="flex gap-36 justify-between items-center p-[2rem]">
                <h1 className="text-5xl w-3/4 font-semibold">Simply unique / Simply Better.</h1>
                <p className="w-2/3">LOGO is a gift & decoration store based in HCMC veitnam. Est since 2019</p>
            </div>

            <div className="flex m-[2rem] gap-7">
                <div className="bg-[#F3F5F7] w-1/2 p-[2rem] h-auto">
                    <h1 className="text-2xl font-semibold">Living Room</h1>
                    <div className="flex gap-1 items-center">
                        <span className="text-black underline">Shop now</span><FaArrowRight />
                    </div>
                    <img className="w-full h-full" src="https://static.vecteezy.com/system/resources/previews/024/807/538/original/modern-white-sofa-isolated-on-transparent-background-ai-generated-png.png" alt="" />
                </div>
                <div className="flex w-1/2 h-full flex-col gap-7">
                    <div className="p-[2rem] flex items-end justify-between bg-[#F3F5F7]">
                        <div>
                            <h1 className="text-2xl font-semibold">Bedroom</h1>
                            <div className="flex gap-1 items-center">
                                <span className="text-black underline">Shop now</span><FaArrowRight />
                            </div>
                        </div>
                        <img className="w-1/3 h-60" src="http://pluspng.com/img-png/chair-png-transparent-image-2057.png" alt="" />
                    </div>
                    <div>
                        <div className="p-[2rem] flex items-end justify-between bg-[#F3F5F7]">
                            <div>
                                <h1 className="text-2xl font-semibold">Kitchen</h1>
                                <div className="flex gap-1 items-center">
                                    <span className="text-black underline">Shop now</span><FaArrowRight />
                                </div>
                            </div>
                            <img className="w-1/3 h-60" src="https://pngimg.com/uploads/toaster/toaster_PNG8.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="font-semibold text-2xl pl-[2rem] underline">New Arrivals</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="pl-[1rem]"
            >
                {
                    productData.slice(0, 6).map(p => {
                        return (
                            <SwiperSlide>
                                <div className="p-[1rem] flex flex-col gap-2 transition ease-in-out duration-500 justify-start h-auto w-auto">
                                    <div className="p-[1rem] w-[200px] h-[300px] bg-[#F3F5F7] group hover:transition duration-500 cursor-pointer ease-in-out hover:bg-gray-300">
                                        <div className="flex justify-between">
                                            <div className="flex flex-col gap-1">
                                                <p className="font-semibold bg-white px-2">NEW</p>
                                                <p className="font-semibold bg-green-600 text-white px-2">-50%</p>
                                            </div>
                                            <FaRegHeart />
                                        </div>
                                        <img className="w-[200px] h-[150px] p-[1.5rem] mt-[1rem]" src={p.thumbnail} alt="" />
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
                {/* <SwiperSlide>
                    <div className="p-[1rem] flex flex-col gap-2 justify-start h-auto w-auto">
                        <div className="p-[1rem] w-[200px] h-[300px] bg-[#F3F5F7]">
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-1">
                                    <p className="font-semibold bg-white px-2">NEW</p>
                                    <p className="font-semibold bg-green-600 text-white px-2">-50%</p>
                                </div>
                                <FaRegHeart />
                            </div>
                            <img className="w-[200px] h-[150px] p-[1.5rem] mt-[1rem]" src="https://pngimg.com/uploads/toaster/toaster_PNG8.png" alt="" />
                            <button className="w-full rounded-md bg-black text-white font-semibold text-center py-[0.3rem] mt-[1rem]">Add to Cart</button>
                        </div>
                        <div className="flex flex-col justify-start">
                            <div className="flex gap-2">
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </div>
                            <p className="font-semibold text-md">Name</p>
                            <p className="text-sm">price</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-[1rem] flex flex-col gap-2 justify-start h-auto w-auto">
                        <div className="p-[1rem] w-[200px] h-[300px] bg-[#F3F5F7]">
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-1">
                                    <p className="font-semibold bg-white px-2">NEW</p>
                                    <p className="font-semibold bg-green-600 text-white px-2">-50%</p>
                                </div>
                                <FaRegHeart />
                            </div>
                            <img className="w-[200px] h-[150px] p-[1.5rem] mt-[1rem]" src="https://pngimg.com/uploads/toaster/toaster_PNG8.png" alt="" />
                            <button className="w-full rounded-md bg-black text-white font-semibold text-center py-[0.3rem] mt-[1rem]">Add to Cart</button>
                        </div>
                        <div className="flex flex-col justify-start">
                            <div className="flex gap-2">
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </div>
                            <p className="font-semibold text-md">Name</p>
                            <p className="text-sm">price</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-[1rem] flex flex-col gap-2 justify-start h-auto w-auto">
                        <div className="p-[1rem] w-[200px] h-[300px] bg-[#F3F5F7]">
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-1">
                                    <p className="font-semibold bg-white px-2">NEW</p>
                                    <p className="font-semibold bg-green-600 text-white px-2">-50%</p>
                                </div>
                                <FaRegHeart />
                            </div>
                            <img className="w-[200px] h-[150px] p-[1.5rem] mt-[1rem]" src="https://pngimg.com/uploads/toaster/toaster_PNG8.png" alt="" />
                            <button className="w-full rounded-md bg-black text-white font-semibold text-center py-[0.3rem] mt-[1rem]">Add to Cart</button>
                        </div>
                        <div className="flex flex-col justify-start">
                            <div className="flex gap-2">
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </div>
                            <p className="font-semibold text-md">Name</p>
                            <p className="text-sm">price</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-[1rem] flex flex-col gap-2 justify-start h-auto w-auto">
                        <div className="p-[1rem] w-[200px] h-[300px] bg-[#F3F5F7]">
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-1">
                                    <p className="font-semibold bg-white px-2">NEW</p>
                                    <p className="font-semibold bg-green-600 text-white px-2">-50%</p>
                                </div>
                                <FaRegHeart />
                            </div>
                            <img className="w-[200px] h-[150px] p-[1.5rem] mt-[1rem]" src="https://pngimg.com/uploads/toaster/toaster_PNG8.png" alt="" />
                            <button className="w-full rounded-md bg-black text-white font-semibold text-center py-[0.3rem] mt-[1rem]">Add to Cart</button>
                        </div>
                        <div className="flex flex-col justify-start">
                            <div className="flex gap-2">
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </div>
                            <p className="font-semibold text-md">Name</p>
                            <p className="text-sm">price</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-[1rem] flex flex-col gap-2 justify-start h-auto w-auto">
                        <div className="p-[1rem] w-[200px] h-[300px] bg-[#F3F5F7]">
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-1">
                                    <p className="font-semibold bg-white px-2">NEW</p>
                                    <p className="font-semibold bg-green-600 text-white px-2">-50%</p>
                                </div>
                                <FaRegHeart />
                            </div>
                            <img className="w-[200px] h-[150px] p-[1.5rem] mt-[1rem]" src="https://pngimg.com/uploads/toaster/toaster_PNG8.png" alt="" />
                            <button className="w-full rounded-md bg-black text-white font-semibold text-center py-[0.3rem] mt-[1rem]">Add to Cart</button>
                        </div>
                        <div className="flex flex-col justify-start">
                            <div className="flex gap-2">
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </div>
                            <p className="font-semibold text-md">Name</p>
                            <p className="text-sm">price</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-[1rem] flex flex-col gap-2 justify-start h-auto w-auto">
                        <div className="p-[1rem] w-[200px] h-[300px] bg-[#F3F5F7]">
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-1">
                                    <p className="font-semibold bg-white px-2">NEW</p>
                                    <p className="font-semibold bg-green-600 text-white px-2">-50%</p>
                                </div>
                                <FaRegHeart />
                            </div>
                            <img className="w-[200px] h-[150px] p-[1.5rem] mt-[1rem]" src="https://pngimg.com/uploads/toaster/toaster_PNG8.png" alt="" />
                            <button className="w-full rounded-md bg-black text-white font-semibold text-center py-[0.3rem] mt-[1rem]">Add to Cart</button>
                        </div>
                        <div className="flex flex-col justify-start">
                            <div className="flex gap-2">
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </div>
                            <p className="font-semibold text-md">Name</p>
                            <p className="text-sm">price</p>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>

            <div className="flex py-[2rem] px-[4rem] justify-around items-center">
                <div className="flex flex-col justify-start bg-[#F3F5F7] p-[2rem] h-auto w-auto">
                    <MdOutlineLocalShipping className="" />
                    <p className="font-semibold">Free Shipping</p>
                    <p className="text-gray-600 font-semibold text-sm">Order above $200</p>
                </div>
                <div className="flex flex-col justify-start bg-[#F3F5F7] p-[2rem] h-auto w-auto">
                    <CiMoneyCheck1 className="" />
                    <p className="font-semibold">Money Back</p>
                    <p className="text-gray-600 font-semibold text-sm">30 days guarantee</p>
                </div>
                <div className="flex flex-col justify-start bg-[#F3F5F7] p-[2rem] h-auto w-auto">
                    <RiSecurePaymentLine className="" />
                    <p className="font-semibold">Secure Payment</p>
                    <p className="text-gray-600 font-semibold text-sm">Secured by stripe</p>
                </div>
                <div className="flex flex-col justify-start bg-[#F3F5F7] p-[2rem] h-auto w-auto">
                    <MdSupportAgent className="" />
                    <p className="font-semibold">24/7 support</p>
                    <p className="text-gray-600 font-semibold text-sm">Phone and email support</p>
                </div>
                <div className="flex flex-col justify-start bg-[#F3F5F7] p-[2rem] h-auto w-auto">
                    <SiPrime className="" />
                    <p className="font-semibold">Prime membership available</p>
                    <p className="text-gray-600 font-semibold text-sm">@499/yr only</p>
                </div>
            </div>

            <div className="flex items-center">
                <img className="w-4/5 h-96" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ce67ea92005617.5e77761f5ced4.jpg" alt="" />
                <div className="w-full h-96 flex pt-[7rem] flex-col pl-[2rem] bg-[#F3F5F7] gap-2 justify-start">
                    <p className="font-semibold text-blue-500">SALE UP TO 35%</p>
                    <p className="text-3xl font-semibold">HUNDREDS of New lower prices!</p>
                    <p>It is more affordable than ever to give every room in your home a stylish makeover</p>
                    <div className="flex gap-1 items-center">
                        <p className="underline">Shop now</p>
                        <FaArrowRight />

                    </div>
                </div>
            </div>
            <div className="flex justify-around items-center bg-[#F3F5F7]">
                <img className="w-[400px] relative -ml-[10rem]" src="https://purepng.com/public/uploads/medium/office-desk-t91.png" alt="" />
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-semibold">Join our newsletter</h1>
                    <p>Sign up for deals, new products and promotions</p>
                    <div className="flex items-center gap-2">
                        <input type="email" placeholder="Email address" className="py-[0.3rem] px-[1rem] underline" />
                        <IoMdSend />
                    </div>
                </div>
                <img className="w-[400px] h-[400px]" src="https://pluspng.com/img-png/furniture-png-chair-png-transparent-image-773.png" alt="" />
            </div>

        </HomeLayout>
    )
}

export default HomePage;