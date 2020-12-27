import React from 'react'

export default function Book(props) { 
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
      <p>{props.price}</p>
      <img src={props.image} alt="Book cover art"/>
      <p>{props.description}</p>
      <a href={props.preview} rel='noopener noreferrer' target='_blank'>Preview</a>
    </div>
  )
}
