import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

/*Mark Tasaka
Lab 3, Feb 14, 2024 */

type Assignment = {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  const addAssignment = (assignment: any) => { 
    setAssignments([...assignments, {id: assignments.length + 1, title: assignment, completed: false}])
  }

  const hasCompleted = (completed: boolean, id:number) =>{
    if(completed === false)
    {
      completed = true;
    }

    alert("The Status of complete  at position " + id + " is " + completed)

  }


  
  //isCompleted boolean of whether assignment is completed
  //const [isCompleted, setIsCompleted] = useState(false)
/*
  const DetermineCompleted (assignments: any) =>
  {


  }
*/
  //tracks the number of completed assignments
 // const [completed, setCompleted] = useState(0);



  const deleteAssignment = (id: number) => {
    const assignmentsNew = [...assignments];
    assignmentsNew.splice(id, 1);
    setAssignments(assignmentsNew);
  }

  return (
    <>
      <Header addAssignment={addAssignment} />
      <Assignments assignments={assignments} deleteAssignment={deleteAssignment}  hasCompleted={hasCompleted} />
    </>
  );
}

export default App;

/*function App() {
  const [assignments, setAssignments] = useState([])
  let assignmentArray = new Array();
  return (
    <>
      <Header setAssignments={setAssignments} />
      <Assignments assignments={assignments, assignmentArray[]} />
    </>
  );
}

export default App;
*/