import './index.css'
import { FaRegBookmark } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { IoBagAddOutline } from "react-icons/io5";

const ProductCard=(props)=> {
    const {eachItem}=props
    const {title,
        price,
        rating,
        category,
        image}=eachItem
        return (
            <li className='each_list_card'>
        
        <img className='thumbnails_image' src={image} alt={title}/>
                {/* <div className='overlay' >
                </div> */}
                <div className='each_product_footer'>
                    <div className='add_cart_container'>
                <h1 className='product_heading'>{title}</h1>
                <FaRegBookmark  height={20} width={20} style={{color:"#E5DFD9"}}/> 

                    </div>
        <p className='product_description'>{`Rating : ${rating.rate}`}</p>
        <div className='price_container'>            
            <div className='rupee_label_container'><BiRupee size={38}   style={{color:"#ffffff"}}/>
            <p className='price_heading'>{price}</p>
            </div>
            <p className='real_price'>{` ${price/.5} `}</p>
            <p className='discountpercentage'>{`(20% off)`}</p>
                     <IoBagAddOutline  size={26} style={{marginLeft:"auto",color:"#ffffff",paddingBottom:"11px"}}/> 
        
        </div>

                </div>
        
    </li>
  )
}

export default ProductCard