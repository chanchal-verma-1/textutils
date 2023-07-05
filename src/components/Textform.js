import React,{useState} from 'react'

export default function Textform(props) {

    const handleUpClick=()=>{
        console.log("Uppercase was clicked " + text);
        let newtext=text.toUpperCase();
        settext(newtext);
       props.showAlert("converted to Uppercase","success");
    }

    const handleLoClick=()=>{
        console.log("lowercase was clicked " + text);
        let newtext=text.toLowerCase();
        settext(newtext);
        props.showAlert("converted to Lowercase", "success");
    }

    const handleClear=()=>{
        console.log("Cleartext was clicked " + text);
        let newtext=" ";
        settext(newtext);
        props.showAlert("Text has been cleared", "success");
    }

    const handleCopy=()=>{
        console.log("copying the text")
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied to clipboard", "success");

    }
// removing extra spaces using regex function
    const handleSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        settext(newtext.join(" "));
        props.showAlert("Extra spaces have been removed", "success");
    }

    const handleOnChange=(event)=>{
        // console.log("on change");
        settext(event.target.value);
    }

    const [text, settext] = useState(' ');
    console.log()
  return (
     <React.Fragment>
    <div className='container'  style={{color: props.mode==='dark' ? 'white':'#164B60'}}>
        <h1>{props.heading}</h1>
        <div className="my-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#164B60'}}  id="mybox" rows="9"></textarea>
        </div>
       <button className="btn btn-primary mx-2" onClick={handleUpClick} >convert to Uppercase</button>
       <button className="btn btn-primary mx-2" onClick={handleLoClick} >convert to Lowercase</button>
       <button className="btn btn-primary mx-2" onClick={handleClear} >Clear Text</button>
       <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
       <button className="btn btn-primary mx-2" onClick={handleSpaces} >Remove Extra Spaces</button>
       
       
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#164B60'}}>
        <h2 >Your Text Summary</h2>
        <p>{text.split(" ").length} words and  {text.length}characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read the text</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Enter something in the text box above to preview here"}</p>
    </div>
   </React.Fragment>
  )
}
