import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase Was Clicked :" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase","success");
    }

    const handleLoClick=()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lowercase","success");
    }

    const handleClearTextClick=()=>{
        let newText= '';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }



    const handleCopy=()=>{
        console.log("I am Copy");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard","success");
    }

    
    const handleExtarSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("All Extar Space Removed","success");
    }

    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text =" New text" // Wrong way to Change the text
    // SetText =("New Text"); // correct  way to Change the text
    return (
        <>
        
        <div className="container"  style={{color :props.mode==='dark'?'white':'black'}}>
            <h1 >{props.heading}  </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode==='dark'?'black':'white' , color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="TextForm-btn mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button disabled={text.length===0} className="TextForm-btn mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
            <button disabled={text.length===0} className="TextForm-btn mx-1 my-1" onClick={handleClearTextClick}>Clear Text</button>
            <button disabled={text.length===0} className="TextForm-btn mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="TextForm-btn mx-1 my-1" onClick={handleExtarSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color :props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters </p>
            <p>{0.008 * text.split(" ").length }Minutes Read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing To Preview"}</p>
        </div>
        </>

    )
}
