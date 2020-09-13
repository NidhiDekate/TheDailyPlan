import React, { useState } from 'react';
import './index.css';



function CreateNote(props) {
    const [expand, setExpand] = useState(false);
    const [note, setnote] = useState({
        title : '',
        content : ''
    });

const InputEvent = (event) =>{ 
    const { name, value} = event.target;

    setnote((prevData) =>{
        return {
            ...prevData, 
            [name] : value,
        };
    });
    console.log(note);
};

const addEvent = () => {
    props.passNote(note);
    setnote({
        title : '',
        content : ''
    });
}

const Expand = () =>{
    setExpand(true);
}
const Contract = () =>{
    setExpand(false);
}
 
  return (
    <>
        <div className="main">
            <div className="subMain">
                {expand?
                <input 
                    type="text" 
                    name="title" 
                    value={note.title} 
                    onChange={InputEvent} 
                    placeholder="Title" 
                    className="title" 
                    autoComplete="off"/> : null}
                <textarea 
                    row=""
                    column=""
                    name="content" 
                    value={note.content} 
                    onChange={InputEvent} 
                    placeholder='write Note...' 
                    onClick={Expand}
                    onDoubleClick={Contract}
                    className="note"> 
                </textarea>
               { expand?
                <button className='btn' onClick={addEvent} > <i class="fa fa-plus fa-lg"></i> </button> : null}
            </div>
        </div>
    </>
  );
}

export default CreateNote;