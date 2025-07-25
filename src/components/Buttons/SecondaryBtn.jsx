import React from 'react'

function SecondaryBtn({children}) {
  return (
    <button className='py-2 font-semibold px-5 bg-base-200 rounded-lg text-sm cursor-pointer'>{children}</button>
  )
}

export default SecondaryBtn