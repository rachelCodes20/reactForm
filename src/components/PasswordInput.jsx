import React from 'react'

function PasswordInput({ label, inputID, minLength = 8, inputValue, handleInput }) {
  return (
    <div>
        <label className="column">{label}:</label>
        <input
            type="password"
            id={inputID}
            name={inputID}
            value={inputValue}
            onChange={handleInput}
            minLength={minLength}
            required
        />
    </div>
  )
}

export default PasswordInput