import React, {useState} from 'react'


export const TextForm = (props) => {
    
    const handleOnchange = (event)=>{
        console.log('on change');
        setText(event.target.value)
    }
    const handleupclick = ()=>{
        // console.log('upppercase was clicked' + Text);
        let NewText = Text.toUpperCase();
        setText(NewText)
    }

    const handlelowclick = ()=>{
        // console.log('lowercase was clicked' + Text);
        let NewText = Text.toLowerCase();
        setText(NewText)
        
    }
    const capitalize = ()=>{
         let firstchar = Text.charAt(0);
        //  console.log("capitalize was hit");
         let NewText= firstchar.toUpperCase();
         setText(NewText+Text.slice(1));
    }
    const clear = ()=>{
        let NewText = "";
        console.log('clear was hit ')
        setText(NewText)
    }
    
    const [Text , setText] = useState('');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value= {Text} onChange={handleOnchange} style={{backgroundcolor:props.mode==='dark'?'dark':'white' }} id="mybox" rows="5"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleupclick} >Convert to upper case</button>
            <button className="btn btn-primary mx-2 " onClick={handlelowclick} >Convert to lower case</button>
            <button className="btn btn-primary mx-2 " onClick={capitalize} >Capitalize</button>
            <button className="btn btn-primary mx-2 " onClick={clear} >clear</button>

        </div>
        <div className="container my-4">
            <h2>Your Text Summary</h2>
            <p> {Text.split(" ").length} Words  and  {Text.length} characters</p>
            <p> {0.8 * Text.split(" ").length } Minute Read </p>
            <h2>Preview</h2>
            <p>{Text}</p>

        </div>
        </>
    )
}
export default TextForm

