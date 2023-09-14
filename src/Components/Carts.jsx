import Cart from "./Cart/Cart";
import './Carts/Carts.css';

const Carts = ({firstValue,handleButtonClick}) => {
    return (
        <div >
            <div className="carts-container">
            <Cart firstValue={firstValue}
            handleButtonClick={handleButtonClick}
            ></Cart>
            </div>
        </div>
    );
};

export default Carts;