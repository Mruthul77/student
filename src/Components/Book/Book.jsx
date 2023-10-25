import React, { useState } from 'react'
import './book.css'
const Book = () => {
    const [no,setNo] =useState('');
    const [name,setName] =useState('');
    const [qty,setQty] =useState('');
    const [price,setPrice] =useState('');

    const readbookNo =(event) =>{
        setNo(event.target.value);
        console.log(event.target.value);
    }
    const readbookname =(event) =>{
        setName(event.target.value);
        console.log(event.target.value);
    }
    const readbookqty =(event) =>{
        setQty(event.target.value);
        console.log(event.target.value);
    }
    const readprice =(event) =>{
        setPrice(event.target.value);
        console.log(event.target.value);
    }



  return (
    <div>
      <h1 className='header'>BOOkS!</h1>
      <form className='details'>
      BookNo<input type="text" onChange={readbookNo}/><br></br><br></br>
      BookName<input type="text" onChange={readbookname}/><br></br><br></br>
      BookQty<input type="text" onChange={readbookqty}/><br></br><br></br>
      BookPrice<input type="text" onChange={readprice}/><br></br><br></br>
      </form>
    </div>
  )
}

export default Book
