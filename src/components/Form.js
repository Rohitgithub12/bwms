import React, { useState } from 'react'

export default function Form(props) {
    function HandleUp(e){
        settext(e.target.value)
    }

    function HandleUpperButton(){
        let newtext = text.toUpperCase()
        settext(newtext)
        props.showAlert("  upperCase Converted","success")
    }
    function HandleLowerButton(){
        let newtext = text.toLowerCase()
        settext(newtext)
        props.showAlert("  LowerCase Converted","success")
    }
    function HandleClearButton(){
        
        settext('')
    }

    const [text,settext]= useState('')
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
      <div className="mb-3">
      <h2>Enter Data</h2>
  <textarea  className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={HandleUp} id="myBox" rows="8"></textarea>
  <button disabled={text.length===0}  className="btn btn-danger m-1" onClick={HandleUpperButton}  >Upper</button>
  <button disabled={text.length===0}  className="btn btn-danger m-1" onClick={HandleLowerButton}  >Lower</button>
  <button disabled={text.length===0}  className="btn btn-danger m-1" onClick={HandleClearButton}  >Clear</button>
</div>
    </div>
    <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>word time calculate</h2>
        <div>
            <p>its takes {(text.length)*0.008} minutes</p>
            <h1>preview</h1>
            <p>{text}</p>
        </div>

    </div>
    </>
  )
}
