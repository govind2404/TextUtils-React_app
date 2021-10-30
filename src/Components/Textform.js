import React, { useState } from 'react'


export default function Textform(props) {
    const [Text, setText] = useState("");

    const ByClicking  = ()=> {
    let newText=Text.toUpperCase();
    setText(newText);
    props.showalert("Text converted to Uppercase ","success");
    }
    const ByloClicking  = ()=> {
        let newText=Text.toLowerCase();
        setText(newText);
        props.showalert("Text converted to Lowercase ","success");
        }
        const handleClearClick = ()=>{ 
            let newText = '';
            setText(newText);
            props.showalert("Text Cleared!", "success");
        }
        const handleCopy = () => {
            navigator.clipboard.writeText(Text); 
            props.showalert("Copied to Clipboard!", "success");
        }
    
        const handleExtraSpaces = () => {
            let newText = Text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showalert("Extra spaces removed!", "success");
        }
    
      

    const ByChanging  = (e)=> {
        setText(e.target.value);
        
        }
return (
    <>
    <div className="container" style= {{color: props.mode==="dark"?"white":"black"}}>
    <h1>{props.heading}</h1>
    
        
<div className="mb-3">

<textarea className="form-control" style= {{backgroundColor: props.mode==="dark"?"#212529":"white", color: "white" ,color: props.mode==="dark"?"white":"black"}} id="text" rows="10"  value={Text} onChange={ByChanging}></textarea>
</div>
<button  disabled={Text.length===0} className="btn btn-primary mx-2" onClick={ByClicking}>Convert to Upercase</button>
<button  disabled={Text.length===0} className="btn btn-primary mx-2" onClick={ByloClicking}>Convert to Lowercase</button>
<button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
<button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
<button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

</div>


    
    <div className="container my-3" style= {{color: props.mode==="dark"?"white":"black"}}>
        <h2>Your Text Summary</h2>
        <p>{Text.split(" ").filter((e)=> {return e.length!==0}).length } Words and{Text.length>0?Text.length:"0"} Characters</p>  
        <p>{0.008*Text.split(" ").filter((e)=> {return e.length!==0}).length} Minutes Read </p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Enter Something to Preview"}</p>
    </div>
    </>
)
}
