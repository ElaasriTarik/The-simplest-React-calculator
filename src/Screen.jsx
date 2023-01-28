import React from 'react'
import Card from "./Card.jsx"
export default function Screen(props) {
  function backSpace() {
    props.state([])
  }
  return (
    <div className="input">
    <div className="screen">{props.val}</div>
    <div className="deleteBtn" onClick={backSpace}>X</div>
    </div>
  )
}
