import React from 'react'
import Login from './Login';

const Home = () => {

  const logged = true;

  if(logged){
    return (
      <div>
        <Login/>
      </div>
    )
  }
}

export default Home
