import React from 'react'

interface iInput{
  label: string;
  placeholder: string;
  type: string;
  register: any;
} 

export function Input({label,placeholder,type,register}: iInput){
  return (
    <div className='divInput'>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} {...register} />
    </div>
  )
}
