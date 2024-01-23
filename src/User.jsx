import React from 'react'

export default function User(props) {
  return (
    <div>
        <h1>
            My name is {props.name}
        </h1>
        <h4>
            I am a {props.field}
        </h4>
    </div>
  )
}
