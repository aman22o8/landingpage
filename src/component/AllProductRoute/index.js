import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ProductCard from '../ProductCard'
import { BsBoxArrowUp } from "react-icons/bs";

const apiConstant = {
    INITIAL: 'initial',
    SUCCESS: 'success',
    PROGRESS: 'in_progress',
    FAILURE: 'failure',
  }
  const categories=[
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ]




class AllProductRoute extends Component{
    state={initialArray:[],initialSelectedValue:"smartphones",currentProcess:apiConstant.INITIAL}

    componentDidMount(){
        this.getAllproduct()
    }

    

    handleFailureButtons=()=>{
        this.getAllproduct()
    }

    getAllproduct= async ()=>{
        this.setState({currentprocess: apiConstant.PROGRESS})
        const {initialSelectedValue}=this.setState

        let myUrl= `https://dummyjson.com/products`
        const options={method:'GET'}
        const result=await fetch(myUrl,options)
        const data= await result.json()
        if(result.ok){
            this.setState({initialArray:data.products,currentProcess:apiConstant.SUCCESS})

        }
        else{
            this.setState({currentProcess:apiConstant.FAILURE})
        }

    }

    renderSuccess=()=>{
        const {initialArray,initialSelectedValue}=this.state
        return(
            <>
            <div className='number_of_product_'>
            <p className='category_desc'>{`category : ${initialSelectedValue}`}</p>
            <div className='product_number_container'>
                <p className='number_desc'>{`${initialArray.length} products`}</p>
                <BsBoxArrowUp  size={20} style={{marginRight:"15px",color:"#E5DFD9",cursor:"pointer"}}/>

            </div>
        </div>
            <ul className='all_product_ul_container'>{initialArray.map((eachItem)=>(
                <ProductCard key={eachItem.id} eachItem={eachItem}/>
            ))}</ul>
    </>
        )
        
    }

    renderProgress=()=>{
        return(

            <div className="loader-container" >
        <Loader type="ThreeDots" color="#ffffff" height="70" width="70" />
      </div>
            )
    }
    renderFailure=()=>{
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
        onClick={this.handleFailureButtons}
        className="failure_btn"
        type="button"
      >
        Retry
      </button>
    </div>
    )
    }

    renderAllProduct=()=>{
        const {currentProcess}=this.state
        switch (currentProcess) {
            case apiConstant.SUCCESS:
                return this.renderSuccess()
            case apiConstant.PROGRESS:
                return this.renderProgress()
            case apiConstant.FAILURE:
                return this.renderFailure()
            default:
                return null;
        }
    }
    handleOnChange=(event)=>{
        console.log(event.target.value)
        this.setState({initialSelectedValue:event.target.value},this.getAllproduct)   
    }

    render(){
        const {initialSelectedValue}=this.state
        console.log(initialSelectedValue)
        return(
            <div className='all_product_container'>
             <p className='categories'>Select  from Different Category</p>
             <select className='selectOption' onChange={this.handleOnChange}>
                {categories.map((each)=> (<option key={each} value={each}>{each.toUpperCase()}</option>))}
                </select>   
            
                {this.renderAllProduct()}
            </div>
        )
    }
}

export default AllProductRoute