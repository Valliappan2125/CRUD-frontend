import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveProduct = () => {
    const data = {
      name,
      price,
      category,
    };
    setLoading(true);
    axios
      .post("https://crud-backend-wheat.vercel.app", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Product Created Successfully", {variant: 'success'})
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
        enqueueSnackbar("Error",{variant: 'error'})
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Product</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
      <div className="my-4">
        <label htmlFor="name" className="text-xl mr-4 text-gray-500">
          Product Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div className="my-4">
        <label htmlFor="price" className="text-xl mr-4 text-gray-500">
          Price
        </label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div className="my-4">
        <label htmlFor="category" className="text-xl mr-4 text-gray-500">
          Category
        </label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <button className="p-2 bg-sky-300 m-8" onClick={handleSaveProduct}>
        Save
      </button>
      </div>
    </div>
  );
};

export default CreateProducts;
