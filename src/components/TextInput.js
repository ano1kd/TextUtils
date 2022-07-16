import React, {useState} from 'react'

export default function TextInput(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success")
    }
    const handleLowerClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control"  style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
    onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper Case</button>
    <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert To Lower Case</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary:</h1>
        <p>{text.split(" ").length} and {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} Minutes read</p>
    </div>
    </>
  )
}
