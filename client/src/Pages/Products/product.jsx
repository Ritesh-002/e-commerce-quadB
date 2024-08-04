import { useLocation, useParams } from "react-router-dom";
import HomeLayout from "../../Layouts/homeLayout";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Product() {
    const { id } = useParams();
    const location = useLocation();
    const { singleProductData } = location.state || {};

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
        </HomeLayout>
    )
}
export default Product