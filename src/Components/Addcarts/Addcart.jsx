
import './Addcart.css'
const Addcart = ({secondValue,credit,remaining}) => {

    return (
        <div  className='remaining-section'>
            <h2>Remaining : {remaining} hr</h2>
            <hr />
            <h2>Course Name </h2>
            <hr />
          <ol>
          {
            secondValue.map(data=>  <li key={data.id}  > {data.course_name}</li>)
           }
          </ol>
          <hr />
          <p>Total Credit :{credit} hr </p>
        </div>
    );
};

export default Addcart;