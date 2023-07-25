import React from 'react'
import './ExpensFiltir.css'

const ExpensFiltir = (props) => {


const selectYearHandler = (e) => {
    props.onSelect(e.target.value)
}


  return (
       <div className='expenses-filter'>
        <div className='.expenses-filter__control'>
            <label>Select by year</label>
            <select onChange={selectYearHandler}>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                
            </select>
        </div>
       </div>
  )
}


export default ExpensFiltir