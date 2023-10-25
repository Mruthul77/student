import React, { useState } from 'react'
import './product.css'
const Product = () => {
  const [id,setId] =useState('');
  const [name,setName] =useState('');
  const [qty,setQty] =useState('');
  const [price,setPrice] =useState('');

  const readproductID =(event) =>{
    setId(event.target.value);
    console.log(event.target.value);
}
const readproductname =(event) =>{
  setName(event.target.value);
  console.log(event.target.value);
}
const readproductqty =(event) =>{
  setQty(event.target.value);
  console.log(event.target.value);
}
const readprice =(event) =>{
  setPrice(event.target.value);
  console.log(event.target.value);
}
  return (
    <div>
      <h1 className='head'>PRODUCT!</h1>
      <form className='details'>
        ProductID<input type="text" onChange={readproductID}/><br></br><br></br>
        ProductName<input type="text" onChange={readproductname}/><br></br><br></br>
        ProductQty<input type="text" onChange={readproductqty}/><br></br><br></br>
        Price<input type="text" onChange={readprice}/><br></br><br></br>
        <button type="submit">Submit</button><br></br><br></br>


      </form>
    </div>
  )
}

export default Product
