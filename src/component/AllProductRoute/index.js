import './index.css'
import {useState,useReducer,useEffect} from 'react'
import Loader from 'react-loader-spinner'
import { v4 as uuidv4 } from 'uuid';
import ProductCard from '../ProductCard'
import { BsBoxArrowUp } from "react-icons/bs";
import ProductSelection from '../PoductSelection';

const ImageUrl=[
  {id:uuidv4(),
  imageUrl:"https://res.cloudinary.com/duzagabr6/image/upload/v1713416257/saleassist/Group_301_yefhz5.png"},
  {id:uuidv4(),
  imageUrl:"https://res.cloudinary.com/duzagabr6/image/upload/v1713416254/saleassist/Group_302_jqz16a.png"},
  {id:uuidv4(),
  imageUrl:"https://res.cloudinary.com/duzagabr6/image/upload/v1713416224/saleassist/Group_300_yat3np.png"},
  {id:uuidv4(),
  imageUrl:"https://res.cloudinary.com/duzagabr6/image/upload/v1713416251/saleassist/Group_303_mvj7br.png"},
  {id:uuidv4(),
  imageUrl:"https://res.cloudinary.com/duzagabr6/image/upload/v1713416249/saleassist/Group_304_tk1vx4.png"},
  {id:uuidv4(),
  imageUrl:"https://res.cloudinary.com/duzagabr6/image/upload/v1713416246/saleassist/Group_305_x1lkgn.png"},
  {id:uuidv4(),
  imageUrl:"https://res.cloudinary.com/duzagabr6/image/upload/v1713416226/saleassist/Group_307_ezalaa.png"},
  {id:uuidv4(),
  imageUrl:"https://res.cloudinary.com/duzagabr6/image/upload/v1713416207/saleassist/Group_475_phunko.png"},
]


  const apiConstant = {
  INITIAL: 'initial',
  SUCCESS: 'success',
  PROGRESS: 'in_progress',
  FAILURE: 'failure',
}

const useReducerFunction=(state,action)=>{
  
  switch (action.type) {
    case apiConstant.PROGRESS:{
      return{...state,currentprocess:apiConstant.PROGRESS };
    }
    case apiConstant.SUCCESS:{
      return{...state,currentprocess:apiConstant.SUCCESS,mydata:action.data };
    }
    case apiConstant.FAILURE:{
      return{...state,currentprocess:apiConstant.FAILURE };
    }
  
    default:{
      return null;
    }
      
  }
}

const initialState={
  mydata:[],
  currentprocess:apiConstant.INITIAL
}



const  AllProductRoute=()=>{
    const [fetchcategory, setfetchcategory] = useState(false)
    const [open, setopen] = useState("")
    const [state, dispatch] = useReducer(useReducerFunction, initialState)

    const getMyData= async ()=>{
      dispatch({type:apiConstant.PROGRESS});
      const response= fetchcategory ? await fetch(`https://fakestoreapi.com/products/category/${open}`) : await fetch(`https://fakestoreapi.com/products`)
      
      const mydatay=await response.json()
      // console.log(mydatay)
      if(response.ok){
          dispatch({type:apiConstant.SUCCESS,data:mydatay})
      }else{
          dispatch({type:apiConstant.FAILURE})
      } 
    }

    useEffect(() => {
        
      getMyData()
    //   return () => {
    //     second
    //   }
    }, [open])
    
    const handleFailureButtons=()=>{
        console.log('start')
        getMyData()
    }


    const renderSuccess=()=>{
        const {mydata}=state
        console.log(mydata,state)
        return(
            <>
            <div className='number_of_product_'>
            <p className='category_desc'>{`category : ${fetchcategory ? open : "All" }`}</p>
            <div className='product_number_container'>
                <p className='number_desc'>{`${mydata.length} products`}</p>
                <BsBoxArrowUp  size={20} style={{marginRight:"15px",color:"#E5DFD9",cursor:"pointer"}}/>

            </div>
        </div>
            <ul className='all_product_ul_container'>{mydata.map((eachItem)=>(
                <ProductCard key={eachItem.id} eachItem={eachItem}/>
            ))}
            </ul>
    </>
        )
        
    }

    const renderProgress=()=>{
        return(

            <div className="loader-container" >
        <Loader type="ThreeDots" color="#ffffff" height="70" width="70" />
      </div>
            )
    }
    const renderFailure=()=>{
        return(
        <div className="failure_container">
      <img
        className="failure_image"
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <h1 className="failure_heading">Oops! Something Went Wrong</h1>
      <p className="failure_desc">
        We cannot seems to find the page you are looking for.{' '}
      </p>
      <button
        onClick={handleFailureButtons}
        className="failure_btn"
        type="button"
      >
        Retry
      </button>
    </div>
    )
    }

    const renderAllProduct=()=>{
        const {currentprocess}=state
        console.log(currentprocess)
        switch (currentprocess) {
            case apiConstant.SUCCESS:
                return renderSuccess()
            case apiConstant.PROGRESS:
                return renderProgress()
            case apiConstant.FAILURE:
                return renderFailure()
            default:
                return null;
        }
       
    }

    
    const myclickedbutton=(valueis)=>{
        console.log(`my valis is this ==>${valueis}`)
        setfetchcategory(true)
        setopen(valueis)

    }

    
       
        return(
            <div className='all_product_container'>
                <ProductSelection myclickedbutton={myclickedbutton}/>
             <p className='categories'>Select  from Different Category</p>
             <ul className='selectOption' >
                {ImageUrl.map((each)=> (<li className='list_image_items' key={each.id} ><img className='category_images' src={each.imageUrl} alt="categoryImage"/></li>))}
                </ul>   
            <div>
            
                 {renderAllProduct()}
                
                </div>              
                <p style={{color:"#ffffff"}}>aman</p>
            </div>
        )
    
}

export default AllProductRoute