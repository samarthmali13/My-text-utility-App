import React from 'react'
import { useState,useEffect} from 'react'

export default function TextForm(props) {

  const [widthCount, setWidthCount] = useState(window.screen.width);
  
  const currentScreenWidth = () => {
    setWidthCount(() => window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth);
    return () => {
      window.removeEventListener("resize", currentScreenWidth);
    };
  });

  const handleOnChange = (event)=>{
    setText(event.target.value)
    
  }
  const handleUpClick = ()=>{
    let newText = text.toUpperCase() ;
    setText(newText)

    props.showAlert("The text has been converted to UPPERCASE","success")
  }
  const handleLowClick = ()=>{
    let newText = text.toLowerCase() ;
    setText(newText)
    props.showAlert("The text has been converted to Lowercase","success")
  }
  const handleClearText = ()=>{
    ;
    setText('')
    props.showAlert("The text has been cleared","success")
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copied","success")
  }

  const [text , setText] = useState('') ;

  return (
    <div className='container' ><h1>TextForm</h1> 
    <div className="mb-3 container">
    <div>{props.heading}</div>  
  <textarea className="form-control my-3" id="myBox" onChange={handleOnChange} rows="6" value={text}></textarea>
  <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleUpClick}>Convert to UPPERCASE</button>
  <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleLowClick}>Convert to lowercase</button>
  <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleClearText}>Clear Text </button>
  <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleCopy}>Copy text </button>

</div>
    <div className='container my-4'>
      <div><h2>Text Summary </h2></div>
      <div><h4>Preview</h4>
       </div>
       <div><h6>{text}</h6></div>
      <div>{text.split(/\s+/).filter((t)=>t !=="").length} words {text.length} characters</div>
      <div>Time needed to read  {0.008 * text.split(" ").length} mins</div>
      <div className='container mx-3 my-3'><h3>Width of the window is <span className='text-success'><strong>{widthCount}</strong></span></h3> </div>
    </div>

    </div>

  )
}
