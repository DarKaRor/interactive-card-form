import React, { isValidElement } from "react"
import FormInput from "../FormInput"
import FormHalf from "../FormHalf"
import FormDate from "../FormDate"
import "./Form.css"

function Form({
    setValue,
    setValidity,
    submit,
    onSubmit,
}){

    return(
        <form className="form">
            <FormInput 
                placeholder="e.g Jane Appleseed" 
                inputName='cardName'
                conditionals={{
                    LETTERS_ONLY:true,
                    MAX_LENGTH:33
                }}
                check = {submit}
                setValidity={setValidity}
                setValue={setValue}
                >
                    CardHolder Name
            </FormInput>
            <FormInput 
                placeholder="e.g. 1234 5678 9123 0000"
                inputName='number'
                check = {submit}
                conditionals={{
                    NUMBERS_ONLY:true,
                    MAX_LENGTH: 19,
                    MIN_LENGTH:16,
                    CARD_NUMBER: true
                }}
                setValidity={setValidity}
                setValue={setValue}
                >
                Card Number
            </FormInput>
            <FormHalf big={true}>
                <FormDate
                    check = {submit}
                    setValidity={setValidity}
                    setValue={setValue}
                >Exp. Date (MM/YY)
                </FormDate>
                <FormInput 
                    placeholder="e.g 123" 
                    inputName='cvc'
                    check = {submit}
                    conditionals={{
                        NUMBERS_ONLY:true,
                        MAX_LENGTH:3,
                        MIN_LENGTH:3
                    }}
                    type="number"
                    setValidity={setValidity}
                    setValue={setValue}
                >
                    CVC
                </FormInput>
            </FormHalf>
            <button className="form__submit" onClick={onSubmit}>Confirm</button>
        </form>
    )
}

export default Form;