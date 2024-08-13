import React,{useState} from 'react'

export default function TextUtilsForm(props) {
 const [text, setText] = useState("")

 let handleonUpp=()=>{
    let newtext= text.toUpperCase();
    setText(newtext)
    props.showAlert("Enable UpperCase Text", "sucess")

 }
 
 let handleonlow=()=>{
    let newtext= text.toLowerCase();
    setText(newtext)
    props.showAlert("Enable LowerCase Text", "sucess")
 }
 
 let handleonclr=()=>{
    let newtext= ""
    setText(newtext)
    props.showAlert("Enable Clear Text", "sucess")
 }
 
 let handleonChange=(event)=>{
    setText(event.target.value)
 }
  return (
    <>
<div class="mb-3">
  <h2 style={{color:props.mode==="light"? "black": "white"}}>Enter text to analyze</h2>
  <textarea class="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==="light"? "white":"black", color:props.mode==="light"? "black": "white"}} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>

<button className="btn btn-primary mx-3 my-2" disabled={text.length===0}  onClick={handleonUpp}>Convert To UpperCase</button>
<button className="btn btn-primary mx3 my-2"  disabled={text.length===0} onClick={handleonlow}>Convert To LowerCase</button>
<button className="btn btn-primary mx-3 my-2"  disabled={text.length===0} onClick={handleonclr}>Clear</button>


<div className="container" style={{color:props.mode==="light"? "black": "white"}}>
    <h2>text analyze</h2>
    <p>{text.split(" ").filter((elm)=>{return elm.length!==0}).length} Words and {text.length} Character</p>
    <p>{0.008*text.split(" ").filter((elm)=>{return elm.length!==0}).length} Min To read</p>
    
</div>

<div className="container" style={{color:props.mode==="light"? "black": "white"}}>
    <h1>Preview</h1>
    <p>{text}</p>
</div>

    </>
  )
}
