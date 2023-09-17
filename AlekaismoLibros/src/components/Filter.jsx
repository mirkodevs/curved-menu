import { useState } from "react"
import "../App.css"
import MinusButton from "./Buttons/MinusButton"
import PlusButton from "./Buttons/PlusButton"
function Filter(props) {

  const [states, setStates] = useState([false, false])
  const filterButton = ["genero", "autor"]





  function handleClick(index) {

    const newStates = states.map(() => false); // Crea un nuovo array con tutti i valori impostati a false


    newStates[index] = !states[index];
    setStates(newStates)
  }

  const handleChange = (e) => {

    props.changeState(e.target.value, false); // Chiama la funzione di aggiornamento del filtro
  };


  return (
    <div class=" d-flex flex-column align-items-stretch flex-shrink-0 col col-lg-3 filters mt-4" >
      <a href="/" class="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">

        <span class="fs-5" id="filtra-por">Filtra por</span>
      </a>
      <div class="border-bottom scrollarea">


        {states.map((state, index) => (
          <>
            <div
              key={index} // Assicurati di avere una chiave unica per ciascun elemento nella lista
              className={` filter-section  py-3 lh-sm ${state ? "active-filter-section" : ""}`}
              onClick={() => handleClick(index)}
            >
              <strong className="mb-1 ps-3">{filterButton[index]}</strong>
              {state ? <MinusButton key = {index}/> : <PlusButton key = {index}/>}
            </div>
            <div className="filter">

              <div class="list-group">
                {props.category[index].map((item) => (

                  <label class="list-group-item d-flex gap-2">
                    <input class=" d-none" type="radio" name="listGroupRadios" id="listGroupRadios1" value={item} onChange={handleChange}  />

                    <span>
                      {item}
                    
                    </span>
                    
                  </label>
                )
                )}
               

              </div>
             
            </div>
          </>
        ))}


        {/* <a href="#" class="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">List group item heading</strong>
          <small class="text-body-secondary">Wed</small>
        </div>
        <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">List group item heading</strong>
          <small class="text-body-secondary">Tues</small>
        </div>
        <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">List group item heading</strong>
          <small class="text-body-secondary">Mon</small>
        </div>
        <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a> */}
      </div>
    </div>
  )
}

export default Filter