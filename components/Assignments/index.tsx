import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { useState } from "react";

/* export function Assignments({assignments}: any)
export function Assignments(assignments: string[]) */
//let assignmentArray = new Array();

//const [Assignment, setAssignments] = useState([])

export function Assignments({assignments, deleteAssignment, hasCompleted}: any) {
 // hasCompleted(assignments.completed)
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
       {assignments.map((assignment: any) => 
          <Assignment name={assignment.title} completed={assignment.completed} id={assignment.id}  deleteAssignment={deleteAssignment}  hasCompleted={hasCompleted}  />
       )}
      </div>
    </section>
  );
}




/*
export function Assignments({assignments}: any) {
  const newItem = Assignment;
  //let newArray: Array<string> = [];
  const newArray = [...assignments, newItem];
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>1</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>1 of 1</span>
        </div>
      </header>

      <div className={styles.list}>
      {newArray.map((name) => (
          <li>{name}</li>
        ))}
      </div>
    </section>
  );
}


*/
//Assignments Works (original)
/*
  export function Assignments({assignments}: any) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>1</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>1 of 1</span>
        </div>
      </header>

      <div className={styles.list}>
       {assignments}
      </div>
    </section>
  );
}

 */


/*

export function Assignments({assignments} : {assignments: string[]}, {name}: {name: string}) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>1</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>1 of 1</span>
        </div>
      </header>

      <div className={styles.list}>
       {assignments.push(name)}
      </div>
    </section>
  );
}

*/