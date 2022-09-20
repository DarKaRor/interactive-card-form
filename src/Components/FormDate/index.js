import React from 'react'
import FormHalf from '../FormHalf'
import FormInput from '../FormInput'

function FormDate(
  {
    children, 
    check,
    setValidity,
    setValue
  }) {

    const currentYear = parseInt(new Date().getFullYear().toString().substr(-2));

  return (
    <div className="form__group">
        <label className="form__label">{children}</label>
        <FormHalf>
            <FormInput 
              type="number" 
              placeholder="MM" 
              setValue={setValue}
              setValidity={setValidity}
              inputName="month"
              check={check}
              conditionals={{
                MAX_LENGTH:2,
                NUMBERS_ONLY:true,
                MAX: 12,
                MIN:1,
              }}
          
            />
            <FormInput 
              type="number" 
              placeholder="YY" 
              setValue={setValue}
              setValidity={setValidity}
              inputName="year"
              check={check}
              conditionals={{
                MAX_LENGTH:2,
                NUMBERS_ONLY:true,
                MIN: currentYear,
              }}
            />
        </FormHalf>
    </div>
  )
}

export default FormDate