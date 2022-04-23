import React,{useState} from 'react'

export default function TextForm(props) {
    const [text , setText] = useState("");
   const handleUpClick = ()=>{
       console.log("UpperCase");
       let new_text = text.toUpperCase();
       setText(new_text)
   }
   const handleloClick = ()=>{
       console.log("UpperCase");
       let new_text = text.toLowerCase();
       setText(new_text)
   }
   const handleSpeak = ()=>{
       console.log("UpperCase");
       let msg = new SpeechSynthesisUtterance();
       msg.text = text;
       window.speechSynthesis.speak(msg);
    //    setText(new_text)
   }
   const handleCapitalize = ()=>{
    console.log("UpperCase");
    let temp = text.split(" ");
    let new_text = "";
    for (let i = 0; i < temp.length; i++) {
        new_text+=temp[i].charAt(0).toUpperCase() + temp[i].slice(1)+" ";
    }
  
    setText(new_text)
   }
   const handleCopy = ()=>{
        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
   const handleOnChange = (event)=>{
       console.log("UpperCase");
       setText(event.target.value);
   }
   const handleExtraSpace = (event)=>{
      let new_text = text.split(/[ ]+/);
      setText(new_text.join(" "));
   }
  return (
      <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' value={text} onChange={handleOnChange} id="mybox"  rows="10" placeholder='Enter Text Here'></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to LOwerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleSpeak}>Speak</button>
            <button className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalize</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        </div>
        <div className="container">
            <h1 className='mt-5'>Your text Summary</h1>
            <p>Words : {text.split(" ").length}  Characters : {text.length}</p>
            <p>{0.008 * text.split(" ").length} : Minutes read </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
      </>
  )
}
