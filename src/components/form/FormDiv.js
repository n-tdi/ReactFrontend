import React from 'react'

const FormDiv = (props) => {
  return (
    <div className={`items-center justify-center h-14 w-full my-4 ${props.cc}`}>
        {props.children}
    </div>
  )
}

export default FormDiv