import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import './index.css';
import Main from './Main';

const AppMain = () =>{
const [addItem, setAddItem] = useState([]);
  const addNote = (note) =>{
      //alert("clicked");
    setAddItem((prevData)=>{
        return [...prevData, note];
    });
    console.log(note);
  };
  const onDelete = (id) => {
    setAddItem((oldData) =>
        oldData.filter((currdata, indx) => {
            return indx !== id;
        })
     );
  };
  return(
    <>
    <Header />
    <CreateNote 
         passNote={addNote} />
    
   {addItem.map((val, index) => {
        return (
            <Main
                key = {index}
                id = {index}
                title = {val.title} 
                content={val.content} 
                deleteItem = {onDelete}
            />);
    })}
    <Footer />
  </>
  );
};

export default AppMain;
