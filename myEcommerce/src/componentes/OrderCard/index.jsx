import { FaWindowClose } from "react-icons/fa";

const OrderCard=props=>{
    const {id, title, imageUrl, price, handleDelete} = props
    return (
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt='' />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                <FaWindowClose onClick={()=>handleDelete(id)}/>

            </div>

        </div>
    )
}

export default OrderCard