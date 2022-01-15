import React,{ useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'

const TodoForm =() => {
   
     const [todos,setTodos] = useState([]) 
    const [input, setInput] = useState('')
    const  addTodo = (e) =>  {
   

   const newitem={
       id:Math.floor(Math.random()*1000),
       input:input,
     

   }
 
   todos.push(newitem)
 


       
        console.log(todos)
setInput('')
    };
    const removeTodo = (id,e) => {
        const removeArr  = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    

   
const handleChange = (e) =>{
setInput(e.target.value)
 

}





 


 




    return (
   
        <div className='todo-container'> 
         <input onChange={handleChange} type="text" placeholder='Add a todo' value={input} name='text' className='todo-input edit'/>
 <button  onClick={addTodo} className='todo-button'>Add todo</button>



 {
todos.map(todo => (
    <>
    <div className='todo-row'>
    <h1>{todo.input} </h1>
    <i className='delete-icon edit' onClick={removeTodo.bind(this,todo.id)}><RiCloseCircleLine/></i>
    </div>
    </>
))
 }


</div>
    
 
    )
}
export default TodoForm