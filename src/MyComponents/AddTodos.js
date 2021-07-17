import React from 'react'
import { useState } from 'react';

export const AddTodos = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        
        if(!title || !desc){
            alert("Title or Description not empty")
        }
        e.preventDefault();
        props.addTodos(title,desc);
        setTitle("");
        setDesc("");

    }

    return (
        <div className="container">
            <form>
                <h3 className="text-center my-3">Add Todo</h3>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                <button  type="submit" className="btn btn-sm btn-success" onClick={(e)=>{submit(e)}}>Add Todo</button>
            </form>
        </div>
    )
}
