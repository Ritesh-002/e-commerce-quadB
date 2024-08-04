import { LuLayoutGrid, LuLayoutPanelLeft, LuLayoutPanelTop } from "react-icons/lu";
import HomeLayout from "../../Layouts/homeLayout";
import Select from 'react-select'
import { BsLayoutSidebar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Slice/productSlice";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStar, IoMdSend } from "react-icons/io";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProductList() {
    const dispatch = useDispatch();
    const { productData } = useSelector((state) => state?.products);
    const navigate = useNavigate();
    const handleDivClick = (productId, singleProductData) => {
        navigate(`/product/${productId}`, { state: { singleProductData } });
    };
    async function loadProducts() {

        const productResponse = await dispatch(getAllProducts());

    }

    useEffect(() => {
        loadProducts();
    }, [])
    const options = [
        { value: 'Furniture', label: 'Furniture' },
        { value: 'Kitchen', label: 'Kitchen' },
        { value: 'Living Room', label: 'Living Room' },
        { value: 'Lobby', label: 'Lobby' },
        { value: 'Bedroom', label: 'Bedroom' },
    ]
    const options2 = [
        { value: 'more than 1000$', label: 'more than 1000$' },
        { value: 'more than 500$', label: 'more than 500$' },
        { value: 'more than 100$', label: 'more than 100$' },
        { value: 'more than 50$', label: 'more than 50$' },
        { value: 'more than 10$', label: 'more than 10$' },
    ]
    const options3 = [
        { value: 'Price', label: 'high to low' },
        { value: 'more than 500$', label: 'more than 500$' },
        { value: 'more than 100$', label: 'more than 100$' },
        { value: 'more than 50$', label: 'more than 50$' },
        { value: 'more than 10$', label: 'more than 10$' },
    ]
    return (
        <HomeLayout>
            <div className="p-[2rem]">
                <div className="flex flex-col items-center gap-2 justify-center w-full h-[350px] bg-[url('http://student-activity.binus.ac.id/himdi/wp-content/uploads/sites/12/2022/05/Minimalist-interior-design-Tips-to-make-your-home-look-minimal.jpg')]  bg-cover bg-center" >
                    <p className="text-black font-bold">Home -- <span className="font-semibold">Shop</span></p>
                    <h1 className="text-3xl font-bold">Shop Page</h1>
                    <p className="font-bold">Let's design the page you always imagined</p>
                </div>

                <div className="py-[2rem] flex justify-between">
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold text-gray-700">CATEGORIES</p>
                            <Select className="w-48 border-2 border-blue-600 rounded-md " options={options} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold text-gray-700">PRICE</p>
                            <Select className="w-48 border-2 border-blue-600 rounded-md " options={options2} />
                        </div>
                    </div>

                    <div className="flex gap-6 items-baseline">
                        <div className="flex flex-col gap-2">
                            <Select className="w-24 rounded-md border-2 border-blue-600" options={options3} />
                        </div>
                        <div className="flex gap-4">
                            <LuLayoutGrid className="scale-150" />
                            <LuLayoutPanelTop className="scale-150" />
                            <LuLayoutPanelLeft className="scale-150" />
                            <BsLayoutSidebar className="scale-150" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap pl-[2rem]">
                {
                    productData.map(p => {
                        return (
                            <div>
                                <div className="p-[1rem] flex flex-col gap-2 transition ease-in-out duration-500 justify-start h-auto w-auto">
                                    <div onClick={() => handleDivClick(p._id, { singleProductData: p })} className="p-[1rem] w-[200px] h-[300px] bg-[#F3F5F7] group hover:transition duration-500 cursor-pointer ease-in-out hover:bg-gray-300">
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
                            </div>
                        )
                    })
                }
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
export default ProductList;