import './index.css'
import { FaRegBookmark } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { IoBagAddOutline } from "react-icons/io5";;

const ProductCard=(props)=> {
    const {eachItem}=props
    const {id,title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail}=eachItem
        return (
            <li className='each_list_card'>
        
        <img className='thumbnails_image' src={thumbnail} alt={title}/>
                {/* <div className='overlay' >
                </div> */}
                <div className='each_product_footer'>
                    <div className='add_cart_container'>
                <h1 className='product_heading'>{title}</h1>
                <FaRegBookmark  height={20} width={20} style={{color:"#E5DFD9"}}/> 

                    </div>
        <p className='product_description'>{brand}</p>
        <div className='price_container'>            
            <div className='rupee_label_container'><BiRupee size={24}   style={{color:"#ffffff"}}/>
            <p className='price_heading'>{price}</p>
            </div>
            <p className='discountpercentage'>{`(${discountPercentage} off)`}</p>
                     <IoBagAddOutline  size={26} style={{marginLeft:"auto",color:"#ffffff",paddingBottom:"11px"}}/> 
        </div>

                </div>
        
    </li>
  )
}

export default ProductCard