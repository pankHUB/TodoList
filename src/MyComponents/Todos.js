import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    
    return (
        <div className="container" >
            <h3 className="text-center my-3"> TodoList </h3>
            {props.Todos.length===0?<h1>No to do to display</h1>:
                props.Todos.map((todo)=>{
                    return (<TodoItem todo={todo} key={props.sno} onDelete={props.onDelete}/>)
                    }
               
                )
            }



            
            
        </div>
    )
}
