import Cart from "./Cart/Cart";
import './Carts/Carts.css';

const Carts = ({firstValue,handleButtonClick}) => {
    return (
        <div >
            <div >
            <Cart firstValue={firstValue}
            handleButtonClick={handleButtonClick}
            ></Cart>
            </div>
        </div>
    );
};

export default Carts;