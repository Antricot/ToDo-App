import { useState } from "react"
import {v4 as uuidv4} from 'uuid';
import "./styles.css"

const NewTodoForm = (props) => {
    props.onSubmit
    const [newItem, setNewItem] = useState("")
    
    const handlerSubmit = (e) => {
        e.preventDefault()
    if (newItem === "") return

    props.onSubmit(newItem)

    setNewItem("")
      }

return <form 
  onSubmit={handlerSubmit} 
  className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Todo</label>
      <input 
      value={newItem} 
      onChange={e => setNewItem(e.target.value)} 
      type="text" 
      placeholder="What's in your mind" 
      id="item" 
      />
      </div>
      <button className="btn" >ADD</button>
      </form>
}

export default NewTodoForm