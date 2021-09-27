import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }

    
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copied to Clipboard","success");
    }

    

    const handleclearClick = ()=>{
      
        setText('')
        props.showAlert("Cleared Text ","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
       
    }
    const [text, setText] = useState("Enter the Text");
    return (
        <>
       
    <div className="container mb-3"  >
        <h2>{props.heading}</h2>
       
        
        {/* <label for="myBox" className="form-label">Example textarea</label> */}
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'grey',color: props.mode === 'light'?'black':'white'}}id="myBox"  rows="6"></textarea>
         
         <button className={`btn btn-${props.mode === 'dark'?'info':'dark'} mx-2 my-2`} onClick={handleUpClick}>Convert To UPPER CASE</button>
         <button className={`btn btn-${props.mode === 'dark'?'info':'dark'} mx-1`} onClick={handleLowClick}>Convert To lower case</button>
         <button className={`btn btn-${props.mode === 'dark'?'info':'dark'} mx-1`} onClick={handleclearClick}>Clear Text</button>
         <button className={`btn btn-${props.mode === 'dark'?'info':'dark'} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container mb-3">
        <h3>Summary</h3>
        <p>Total words {text.split(" ").length} and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes required to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in Textbox to preview"}</p>
    </div>
        </>
    )
}
