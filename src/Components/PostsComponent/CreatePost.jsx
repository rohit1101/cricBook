import React from "react"

function CreatePost({
  title,
  desc,
  titleInpHandler,
  descInpHandler,
  createBtnHandler,
}) {
  return (
    <div>
      <h1>Create a new post</h1>
      <label style={{ display: "block" }}>Title of the Post:</label>
      <input
        type="text"
        onChange={titleInpHandler}
        value={title}
        placeholder="Fancy Title"
      />
      <label style={{ display: "block" }}>Description of the Post:</label>
      <input
        type="text"
        onChange={descInpHandler}
        value={desc}
        placeholder="Fancy Caption"
      />
      {title && desc ? (
        <button onClick={createBtnHandler}>Create a Cric Post</button>
      ) : (
        <button disabled>Create a Cric Post</button>
      )}
    </div>
  )
}

export default CreatePost
