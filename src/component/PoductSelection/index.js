import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import './index.css'

const ProductSelection = (props) => {
  const {myclickedbutton}=props
    const [arrayCategory, setarrayCategory] = useState([])

    useEffect(() => {
      const getData= async ()=>{
        const response= await axios.get('https://fakestoreapi.com/products/categories')
        // console.log(response.data)
        setarrayCategory(response.data)
      }
    
      getData()
    }, [])
    // console.log(arrayCategory)

    const handleClick=(event)=>{
      // console.log(event.target)
      myclickedbutton(event.target.id)
    }
    
  return (
    <div className='selection_container'>
        <ul className='different_category_container'>
            {arrayCategory.map((each)=> (<li className='selected_items' key={each}>
                
                <button onClick={handleClick} id={each}  type='button' className='selection_button'>
                    {each}
                    </button>
                 </li>))

            }
        </ul>
        </div>
  )
}

export default ProductSelection