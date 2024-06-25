import React from 'react'

function Mychild1(props) {
  return (
    <div>Mychild1 {props.xyz} {props.name}
        <input type='button' value="submit" onClick={props.cusfunc}/>
    
    </div>
  )
}

export default Mychild1