import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo,updateToDo,deleteToDo } from "./utils/HandleApi";


function App() {

  const [toDo, setToDo] = useState([])
  const [text,setText]  = useState("")
  const [isupdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoTd] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id,text) => {
    setIsUpdating(true)
    setText(text)
    setToDoTd(_id)

  }




  return (
    <div className="App">
    <div className="container">
    <h1>To Do App</h1>
    <div className="top">
      <input 
      type="text" 
      placeholder="Add ToDo.."
      value={text}
      onChange={(e) =>setText(e.target.value) }
       />
      <div 
      className="add" 
      onClick={ isupdating ? 
        () =>updateToDo(toDoId,text,setToDo,setText,setIsUpdating) 
      :  () => addToDo(text,setText,setToDo)}>
        {isupdating ? "Update" : "Add" }</div>
    </div>
    <div className="list">

      {toDo.map((item) => <ToDo 
      key={item._id} 
      text = {item.text} 
      updateMode={() => updateMode(item._id,item.text)}
      deleteToDo={()=> deleteToDo(item._id,setToDo)}/>)}
      
    </div>

   




    </div>










    </div>
  );
}

export default App;
