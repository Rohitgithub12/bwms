import React from 'react'

export default function About(props) {
  return (
    <div className='container-fluid' style={{color:props.mode==='dark'?'white':'black'}}>
      TextUtils is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button.
    </div>
  )
}
