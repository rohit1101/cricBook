import React from "react"

function Query({ val, eventHandler, btnHandler }) {
  return (
    <div>
      <input
        type="text"
        value={val}
        onChange={eventHandler}
        placeholder="Enter UserName"
      />
      <button onClick={btnHandler}>Login</button>
    </div>
  )
}

export default Query
