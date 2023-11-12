import React from 'react'
import { RadioContant } from '../Data'
import { PayoutTable, DropDown, RedioButton } from '../Components'
import { useContext } from 'react'
import { LoanContext } from '../App'

const selectitems = ["OneAndro Manager", "dknfkn"]


export default function Home() {

  const { selectSubProdect, flatPayout, setflatPayout } = useContext(LoanContext)


  // when user enter flat payout value for all 
  const setAllSubProduct = (value) => {
    const setForAll = flatPayout.map((items, index) => {
      items.value = value
      return items
    })
    setflatPayout([...setForAll])
  }



  return (

    <div className='container d-flex align-items-center justify-content-center ' style={{ width: "100vw" }}  >
      <div className=' w-100' style={{ maxWidth: "500px" }}>
        <div className="d-flex flex-row align-items-center text-center p-2">
          <i className="fa fa-x text-primary me-2  p-0"></i>
          <h5 className="ml-2 m-0 p-0" style={{ fontSize: "1rem" }}>Add Proposed Products & Payout</h5>
        </div>



        {/* DropDown */}
        <DropDown items={selectitems} />



        {/* Heading LOAN */}
        <div className=' d-flex flex-column justify-content-center align-items-center text-center mt-5' >
          <h5 className="ml-2 m-0 pb-3 fw-bolder" style={{ fontSize: "1.2rem", width: "5rem", borderBottom: '1px solid #3380DF' }}>LOAN</h5>
          <hr className=' mt-0' style={{ width: "100%", }} />
        </div>


        {/* Radio Button */}
        <form>
          <RedioButton items={RadioContant} />
        </form>


        {/* if select all sub product then this input box appear othervice not */}
        {selectSubProdect && <div className='  d-flex justify-content-between align-items-center mt-3 mb-3' >
          <p>Enter Flat payout</p>
          <div className='d-flex align-items-center'>
            <input className='form-control' onChange={(e) => setAllSubProduct(e.target.value - 0)} type='text' style={{ width: "3rem" }} />
            <p className='m-0 ml-2 ms-2'>%</p>
          </div>
        </div>}





        <div className='  d-flex justify-content-between align-items-center mt-3 mb-3' >
          <p>sub Product</p>
          <div className='d-flex align-items-center'>
            <p>payout</p>
            <p className='ms-1'>%</p>
          </div>
        </div>


        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
          <label className="form-check-label" for="flexCheckChecked">
            Select All
          </label>
        </div>

        {/* Payout Table */}
        <PayoutTable tableContent={flatPayout} />


        {/* Submit Button */}
        <div className='position-fixed bottom-0' style={{ height: "80px", backgroundColor: "white", width: "95%", maxWidth: "500px" }}>
          <button className='btn w-100 mt-2' style={{ borderRadius: '20px', backgroundColor: "#80B2F0", color: "white" }}>Submit</button>
        </div>


      </div>
    </div>
  )
}
