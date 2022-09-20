import React from 'react'
import "./FormHalf.css"
import { getClasses } from "../../js/classUtils"

function FormHalf({children, big = false}) {

  const classNames = getClasses({
    "form__half": true,
    "form__half--big": big
  })

  return (
    <div className={classNames}>
        {children}
    </div>
  )
}

export default FormHalf