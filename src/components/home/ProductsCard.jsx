/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const ProductsCard = ({ products }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((item) => (
        <div
          key={item._id}
          className="border-2 border-gray-500 rounded-lg px-4 py-10 mx-4 relative hover:shadow-xl"
        >
          <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg mt-1">
            {item.category}
          </h2>
          <h4 className="text-gray-500 my-2"><span className="text-black font-medium">Product ID : </span>{item._id}</h4>
          <div className="flex justify-start items-center gap-x-2">
            <p className="font-medium">Product Name : </p>
            <h2 className="uppercase">{item.name}</h2>
          </div>
          <div className="flex justify-start items center gap-x-2 my-2">
            <p className="font-medium">Price : </p>
            <h2 className="">{item.price}</h2>
          </div>
          <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
            <Link to={`/products/read/${item._id}`}>
              <BsInfoCircle className="text-2xl text-green-600 hover:text-black" />
            </Link>
            <Link to={`/products/update/${item._id}`}>
              <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
            </Link>
            <Link to={`/products/delete/${item._id}`}>
              <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
