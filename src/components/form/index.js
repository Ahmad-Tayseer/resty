import React, { useRef } from 'react';

import './form.scss';

function Form(props){
  const urlRef = useRef();
    const handleSubmit = e => {
         e.preventDefault();
         const url = urlRef.current.value;
         props.onSubmit(url);
       }
  
    return (
      <>
        <form onSubmit={handleSubmit}>
        <label>
            <span data-testid='urlTest'>URL: </span>
          <input
            ref={urlRef}
            type='text'
            id='url-input'
            placeholder='http://url.example'
          />
          <input id='submit' type='submit' value='Go ' onSubmit={handleSubmit} />
          </label>
        <div id='radio'>
          <input data-testid='get'
            type='radio'
            id='get'
            name='methods'
            value='get'
            onClick={props.updateMethod}
          />
          <label>get</label>
          <input data-testid='post'
            type='radio'
            id='post'
            name='methods'
            value='post'
            onClick={props.updateMethod}
          />
          <label>post</label>
          <input data-testid='put'
            type='radio'
            id='put'
            name='methods'
            value='put'
            onClick={props.updateMethod}
          />
          <label>put</label>
          <input data-testid='delete'
            type='radio'
            id='delete'
            name='methods'
            value='delete'
            onClick={props.updateMethod}
          />
          <label>delete</label>
          </div>
        
      </form>
    </>
    );
}

export default Form;