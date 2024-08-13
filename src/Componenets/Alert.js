import React from 'react'

export default function Alert(props) {

  let capitalTitle=(word)=>{
    return word.charAt(0).toUpperCase()+word.slice(1)
  }
  return (
    
    
      props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{capitalTitle(props.alert.type)}</strong>: {props.alert.msg}
 
</div>
    
  )
}


