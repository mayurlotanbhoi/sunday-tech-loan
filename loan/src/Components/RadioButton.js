import React, { useContext } from 'react'
import { LoanContext } from '../App'


export default function RadioButton({ items }) {

  const { setSelectSubProdect, } = useContext(LoanContext)

  const onRadioSelect = () => {
    setSelectSubProdect(pre => !pre)
  }

  return (
    <>
      {items.map((item, index) => {

        return (
          <div className="form-check mb-2" key={index}>
            <input className="form-check-input" onChange={() => onRadioSelect()} name={item.name} type="radio" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {item.label}
            </label>
          </div>
        )
      })}

    </>
  )
}
