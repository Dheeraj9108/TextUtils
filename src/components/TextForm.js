import React,{useState} from 'react'

export default function TextForm(props) {
    const [text , setText] = useState("Enter text here");
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
   const handleOnChange = (event)=>{
       console.log("UpperCase");
       setText(event.target.value);
   }
  return (
      <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' value={text} onChange={handleOnChange} id="mybox"  rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to LOwerCase</button>
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
