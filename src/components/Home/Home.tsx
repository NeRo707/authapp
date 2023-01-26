import React from 'react'
import {Link} from 'react-router-dom';
import './Home.styles.css'


const Home = (props: { name: any; }) => {
  return (
    <div className='box-container'>
      <div className='sus'>
        <div className='link-box'>
        <h1><Link to='/login'>Login</Link></h1>
        <br/>
        <h1><Link to='/signup'>Signup</Link></h1>
      </div>
      <br/>
      <br/>

      <h2 className={props.name ? 'logged-in' : ''}>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
      </div>
        
    
    </div>
  )
}

export default Home