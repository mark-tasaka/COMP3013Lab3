import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";
import { Assignment } from "../Assignment";


// export function createButton(){
  //   if()
  //   {
    
    //   }
// }

//const [createButton, setCreateButton] = useState(false);

// export function createButton()
// {
  //   let assignmentInput = document.getElementsByClassName("newAssignmentForm");
  
  //   if(assignmentInput.length === 0)
  //   {
    //     buttonCondition 
    //   }
    //   else
    //   {
      
      //   }
      // }
      
      export function Header({addAssignment}:any) {
        const [content, setContent] = useState("");
        let buttonCondition = (content.length === 0 ? true: false);
        let cursorCondition = (buttonCondition === true ? "not-allowed": "pointer")
   //     const assignmentArray = [Assignment];
        return (
          <header className={styles.header}>
          {/* This is simply to show you how to use helper functions */}
          <h1>{uppercase("bcit")} Assignment Tracker </h1>
         <form className={styles.newAssignmentForm}>
           <input onChange={(e) => setContent(e.target.value)} placeholder="Add a new assignment" type="text" />



            <button onClick={(e) => { e.preventDefault(); addAssignment(content) }} style={{cursor: cursorCondition}} disabled={buttonCondition}>
              Create <AiOutlinePlusCircle size={20} />
            </button>
            
          </form>
        </header>
  );
}

/*

        <button onClick={(e) => { e.preventDefault(); setAssignments([<Assignment name={content} />])}} style={{cursor: cursorCondition}} disabled={buttonCondition}>
          Create <AiOutlinePlusCircle size={20} />*/