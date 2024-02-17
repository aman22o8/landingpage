import  './index.css'
import { BsSearch } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderCompnent=()=> {
  return (
    <div className="header_container">
        <h1 className="main_header_heading">TRANN TRIM </h1>
        <div className="headers_list_container">
        <BsSearch size={20} style={{marginRight:"15px",color:"#E5DFD9",cursor:"pointer"}}/> 
        <RiAccountCircleLine size={20}  style={{marginRight:"15px",color:"#E5DFD9",cursor:"pointer"}}/> 
        <FaRegBookmark  size={20} style={{marginRight:"15px",color:"#E5DFD9",cursor:"pointer"}}/> 
        <HiOutlineShoppingBag  size={20} style={{marginRight:"8px",color:"#E5DFD9",cursor:"pointer"}}/> 
      

        </div>
    </div>
  )
}

export default HeaderCompnent