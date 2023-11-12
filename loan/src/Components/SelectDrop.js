import React from 'react'

export default function SelectDrop({ items }) {

  return (

    <div className='mt-3 mb-3'>
      <select className="form-select" aria-label="Default select example">

        {items.map((item, index) => {
          return <>
            <option value={item} key={index}>{item}</option>
          </>
        })}


      </select>
    </div>



  )
}
