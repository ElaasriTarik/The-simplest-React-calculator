import React from "react"
import Screen from "./Screen.jsx"
import Keys from "./Keys.jsx"
export default function Card(props) {
    let screenNums = "";
    function change() {
      props.st(prev => [...prev, props.val == "x"?"*":props.val == "=" ?null:props.val])
      if (props.val === "=") {
        let screenValue = props.screenValue.join('');
        if(screenValue.includes("+") || screenValue.includes("-") || screenValue.includes("/") || screenValue.includes("*")) {
          props.st(JSON.stringify(eval(screenValue)).split(''))
        } else {
          return null;
        }
      }
    }
  return (
    <div className={props.name} onClick={change}>
    {props.val}
    </div>
  )
}
