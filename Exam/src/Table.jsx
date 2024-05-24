import React from 'react'
import './Table.css'

const Table = ({ todo, deleteTodo, editTodo }) => {
  return (
    <div className='table' align="center">
      <table class="table">
        <thead>
        <tr>
            <th>#</th>
            <th>Your Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
            todo.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{val.id}</td>
                  <td>{val.task}</td>
                  <td>
                    <button onClick={() => deleteTodo(val.id)}><i className="fa-solid fa-trash"></i></button>
                    <button onClick={() => editTodo(val)}><i className="fa-regular fa-pen-to-square"></i></button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table