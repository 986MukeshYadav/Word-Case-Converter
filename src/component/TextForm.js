import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("UpperCase was clicked" + text)
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to uppercase","success")
    }
    const handleloClick=()=>{
      //console.log("UpperCase was clicked" + text)
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("converted to lowercase","success")
  }
  const handleclearClick=()=>{
    //console.log("UpperCase was clicked" + text)
    let newtext = " ";
    setText(newtext);
    props.showAlert("cleared !","success")
}
const handlesentenceClick=()=>{
  //console.log("UpperCase was clicked" + text)
  let newtext = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  setText(newtext);
  props.showAlert("converted to sentencecase","success")
}


    const handleOnChange = (event)=>{
        //console.log("On changed")
        setText(event.target.value)
    }

    const [text,setText]=useState('');
    //text="new text"; //wrong way to change the state
    // setText("new text");//correct way to change the state

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
  <div className="form-group">
    <textarea  className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}/>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-1" onClick={handlesentenceClick}>Sentecnce Case</button>
  <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear</button>
 
    </div>
   <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Text summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length}character</p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter somethings in the textbox to preview"}</p>
   
   </div>
    </>
  )
}



