import React from "react"
import Card from "./Card.jsx"
import Screen from "./Screen.jsx"
export default function Keys(props) {

  const [vals, setVals] = React.useState([])
  const keys = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, 'x', '.', 0, '/', '=']
  const mapped = keys.map((item) => {
    return <Card key={"key"+item} val={item} name="innerKey" st={setVals} screenValue={vals} />
  })
  return (
    <div>
    <Screen val={vals.join('')} state={setVals}/>
    <div className = "keys">
    {mapped}
    </div>
    </div>
  )
}
