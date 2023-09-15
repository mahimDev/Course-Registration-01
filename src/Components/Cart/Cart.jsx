import './Cart.css';
import {BiSolidMoviePlay } from 'react-icons/bi';
import {BsCurrencyDollar } from 'react-icons/bs';
const Cart = ({firstValue,handleButtonClick}) => {
    
    return (
       <div className='mahim'>
{
    firstValue.map(data=>    <div key={data.id} className="course-cart">
    <img src={data.img} alt="" />
    <h4>{data.course_name}</h4>
    <p>{data.details} </p>
       <div className="price-div">
           <p> <BsCurrencyDollar />Price : $ {data.price} </p>
           <p> <BiSolidMoviePlay /> Credit : {data.credit} hr</p>
       </div>
       <button onClick={()=>handleButtonClick(data)}>Select</button>
      
   </div>)
}
      
       </div>
      
    );
};

export default Cart;