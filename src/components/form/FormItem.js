import React from 'react'
import FormDiv from './FormDiv'

const FormItem = ({text, name, value, onChange}) => {
  return (
    <>
    <FormDiv>
        <label className='block text-gray-600 text-sm font-normal'>{text}</label>
        <input name={name} value={value} onChange={onChange} type="text" className='h-10 w-96 border mt-2 px-2 py-2'/>
    </FormDiv>
    </>
  )
}

export default FormItem