import React from 'react'

export default function About(props) {
    // const [myStyle, setmyStyle] = useState( 
    //     {
    //         color:'black' ,
    //         backgroundColor:'white',
    //         border:'1px solid black'      
    //       }
    // )



    // const toggleStyle=()=>
    // {
    //     if(myStyle.color==='black')
    //     {
    //         setmyStyle({
    //              color:'white',
    //              backgroundColor:'black'}
    //         )
    //         setbtnText("Use Light Mode")
    //     }
    //     else
    //         {
    //             setmyStyle({
    //                     color:'black',
    //                     backgroundColor:'white'}
    //             )
    //             setbtnText("Use Dark Mode")
    //         }
        
    // }
    // const [btnText, setbtnText] = useState("Use Dark Mode")
    
  return (
    
    <div className="container" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>
        <h1 className='my-3'> About Us</h1>
            <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>  </strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>
        <strong>  </strong> 
        </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Credits and Acknowledgements </strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>
        
        </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong> Responsive and Free to Use</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>
        <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>
       
        </div>
        </div>
        </div>
        {/* <div className="container my-2">
        <button type="button" class="btn btn-primary" onClick={toggleStyle} style={myStyle}>{btnText}</button>
        </div> */}
        </div>

    </div>
         
  
    
   
  )
}
