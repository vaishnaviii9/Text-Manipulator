import React from 'react'
import Navbar from './Navbar';
import InputOutput from './InputOutput';
const App = () => {
  return (
    <div>
      <Navbar title='TextManipulator' link='About Us' />
      <div className='container'>
        <h1 style={{textAlign:"center"}}>
          Welcome To Text Manipulator
        </h1>
        <InputOutput/>
      </div>
    </div>
  )
}

export default App;