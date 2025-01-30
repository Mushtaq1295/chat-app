import React from 'react'


const Input = () => {
  return (
    <div className='input'>
      <input 
        type="text" 
        placeholder='Type something...' />
      <div className="send">
      <i class="fa-solid fa-paperclip-vertical mt-1"></i>
          <input 
          type="file" 
          style={{display: "none"}}
           id="file" />
          <label 
            htmlFor="file">
             <i class="fa-duotone fa-light fa-images"></i> 
          </label>
          <button><i class="fa-light fa-paper-plane-top"></i></button>
        </div>
    </div>
  )
};

export default Input;