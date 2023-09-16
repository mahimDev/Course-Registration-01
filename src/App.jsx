
import { useState } from 'react'
import './App.css'
import Carts from './Components/Carts'
import { useEffect } from 'react'
import Addcart from './Components/Addcarts/Addcart'
import Swal from 'sweetalert2'

function App() {
  const [firstValue, setFirstValue] = useState([])
  const [secondValue, setSecondValue] = useState([])
  const [credit, setCredit] = useState(0)
  const [remaining, setRemaining] = useState(20)
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    fetch('Data.json')
      .then(res => res.json())
      .then(data => setFirstValue(data))
  }, [])
  const handleButtonClick = value => {
    const courseOneName = secondValue.find((cos) => cos.course_name === value.course_name)

    if (courseOneName) {

      Swal.fire('Sorry, you can only click one card at a time')
    } else {
      

      const total = credit + value.credit
      const remin = remaining - value.credit
      const totalPricenum = totalPrice + value.price
      if (total > 20) {
        Swal.fire('Sorry, you cannt take more 20 credits')
      } else {
        setSecondValue([...secondValue, value])
        setRemaining(remin)
        setCredit(total)
        setTotalPrice(totalPricenum)
      }
    }

  }

  return (
    <>
      <h1 className='heading'>Course Registration</h1>

      <div className='main-container'>

        <Carts firstValue={firstValue} handleButtonClick={handleButtonClick}></Carts>
        <Addcart secondValue={secondValue} credit={credit} remaining={remaining} totalPrice={totalPrice}></Addcart>
      </div>
    </>
  )
}

export default App
