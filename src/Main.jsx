import React from 'react';

const Main = (props) =>{
    const deleteNote = () =>{
        props.deleteItem(props.id);
    };
return (
    <>
    <div className="mainnote">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button class="delete" onClick={deleteNote}><i class="fa fa-trash fa-lg"></i></button>
    </div>
    </>
);
}

export default Main;