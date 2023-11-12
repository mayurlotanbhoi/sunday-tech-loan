import React, { useContext, } from 'react';
import { LoanContext } from '../App';

export default function PayoutTable({ tableContent }) {
  const { finalData, setFinalData, selectSubProdect, setflatPayout } = useContext(LoanContext);

  const onCheckBoxChange = (isChecked, data) => {
    const isDataPresent = finalData.some((item) => item.sub_product_id === data.id);


    if (isDataPresent) {
      // If data is present, filter it out
      setFinalData((prev) => prev.filter((item) => item.sub_product_id !== data.id));

    } else {
      // If data is not present, add it
      const addNewData = {
        sub_product_id: data.id,
        percentage: data.value
      };

      setFinalData((prev) => [...prev, addNewData]);


      // this fuction run every time when somthing in change in table

      //       setflatPayout((prev) =>
      //     prev.map((item) =>
      //       item.id === data.id
      //         ? { ...item,  value: item.isChecked ? "" : item.value}
      //         : item
      //     )
      //   );

    }

    // this fuction run every time when somthing in change in table
    setflatPayout((prev) =>
      prev.map((item) =>
        item.id === data.id
          ? { ...item, isChecked: !item.isChecked }
          : item
      )
    );
  };

  const onEditInput = (value, id) => {
    setflatPayout((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, value: value } : item
      )
    );

    setFinalData((prev) =>
      prev.map((item) =>
        item.sub_product_id === id ? { ...item, percentage: value } : item
      )
    );
  };

  //   useEffect(() => {
  //     if (!selectSubProdect) {
  //       setflatPayout((prev) =>
  //         prev.map((item) =>
  //           item.isChecked ? item : { ...item, value: "" }
  //         )
  //       );
  //     }
  //   }, [selectSubProdect]);

  console.table(finalData);

  return (
    <div className='mb-9'>
      {tableContent.map((item, index) => (
        <div className='d-flex justify-content-between align-items-center mt-3 mb-3' style={{ maxWidth: "500px" }} key={index}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={(e) => onCheckBoxChange(e.target.checked, item)}
              id={`flexCheckChecked_${index}`}
            />
            <label className="form-check-label" htmlFor={`flexCheckChecked_${index}`}>
              {item.category_name}
            </label>
          </div>
          <div className='d-flex align-items-center'>
            <input
              className='form-control'
              type='text'
              onChange={(e) => onEditInput(e.target.value - 0, item.id)}
              value={selectSubProdect || item.isChecked ? item.value : ""}
              style={{ width: "3rem" }}
              disabled={selectSubProdect || !item.isChecked}
            />
            <p className='m-0 ml-2 ms-2'>%</p>
          </div>
        </div>
      ))}
    </div>
  );
}
