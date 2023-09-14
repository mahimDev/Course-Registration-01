import './Cart.css';

const Cart = ({firstValue,handleButtonClick}) => {
    
    return (
       <div>
{
    firstValue.map(data=>    <div key={data.id} className="course-cart">
    <img src={data.img} alt="" />
    <h4>{data.course_name}</h4>
    <p>{data.details} </p>
       <div className="price-div">
           <p>Price : $ {data.price} </p>
           <p>Credit : {data.credit} hr</p>
       </div>
       <button onClick={()=>handleButtonClick(data)}>Select</button>
      
   </div>)
}
      
       </div>
      
    );
};

export default Cart;