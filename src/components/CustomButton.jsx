import React from 'react'

const CustomButton = ({ title, customStyles }) => {



  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
  
    >
      {title}
    </button>
  )
}

export default CustomButton