import { useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteProducts = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const handleDeleteProduct = () => {
        setLoading(true);
        axios.delete(`https://crud-backend-wheat.vercel.app/${id}`)
        .then(() => {
            setLoading(false)
            enqueueSnackbar("Product Deleted Successfully",{variant: 'success'});
            navigate('/');
        }).catch((err) => {
            setLoading(false);
            alert(err)
            enqueueSnackbar("error",{variant: 'error'});
        })
    }
  return (
    <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Delete Book</h1>
        {loading ? <Spinner /> : ''}
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
            <h3 className="text-2xl">Are you sure, You want to delete this product?</h3>
            <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDeleteProduct}>
                Delete Product
            </button>
        </div>
    </div>
  )
}

export default DeleteProducts