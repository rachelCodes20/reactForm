import React from 'react'

const Form = ({ children }) => {
  return (
    <form className="innerForm">{ children }</form>
  )
}

export default Form