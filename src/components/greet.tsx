import React from 'react'

type propsTypes = {
  userName:string,
  age?:number
}

const Greet = (props:propsTypes) => {
  return (
    <div>Greet {props.userName}</div>
  )
}

export default Greet