import React, { Component } from 'react'
import loading from './loading.gif'
 


export class Spinner extends Component {
  render() {
    console.log("Spinner is activated")
    return (
      <div className='text-center' style={{width:'50vw' ,height:'50vw',zIndex:1}}>
        <img src={loading} alt="loading"/>

    </div>
    )
  }
}

export default Spinner