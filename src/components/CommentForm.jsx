import React, { useState } from 'react'

function CommentForm({setComments}) {

  const [text, setText] = useState('');
  const [checked, setCheck] = useState(false);

  return (
    <div>
      <h2>Component form</h2>
      <input 
        placeholder='Write your comments'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="checkbox"
        id="checkbox"
        defaultChecked={checked}
        onChange={() => setCheck(!checked)}
      />

    <label htmlFor='checkbox'>
        I agree to the terms
    </label>
    <button disabled={!checked || !text}>
      submit comment
    </button>

    </div>
    
  )
}

export default CommentForm