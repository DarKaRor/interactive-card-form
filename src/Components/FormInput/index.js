import React from 'react'
import { getClasses } from '../../js/classUtils';
import "./FormInput.css"

function FormInput(
    {
        type = "text", 
        placeholder, 
        children,
        setValue: passValue, 
        conditionals,
        check,
        setValidity,
        inputName,
    }) {

    const [value,setValue] = React.useState("");
    const [checked,setChecked] = React.useState(true);
    const [error,setError] = React.useState(false);
    const [errorMsg,setErorrMsg] = React.useState("");

    conditionals = {
        ...conditionals,
        EMPTY:true
    }
    
    if(!checked){
        let newError = false;
        if(conditionals.EMPTY && value.replace(/\s/g,'').length <= 0){
            newError=true;
            setErorrMsg("Can't be blank");
        }
        else if(conditionals.NUMBERS_ONLY && isNaN(value.replace(/\s/g,''))){
            newError=true;
            setErorrMsg("Wrong format, numbers only");
        }
        else if(conditionals.LETTERS_ONLY && /\d/.test(value)){
            newError=true;
            setErorrMsg("Wrong format, letters only");
        }
        else if(conditionals.MAX_LENGTH && value.length > conditionals.MAX_LENGTH){
            newError=true;
            setErorrMsg(`The value must be ${conditionals.MAX_LENGTH} character(s) max`);
        }
        else if(conditionals.MIN_LENGTH && value.length < conditionals.MIN_LENGTH){
            newError=true;
            setErorrMsg(`The value must be at least ${conditionals.MIN_LENGTH} character(s) long`)
        }
        else if(conditionals.MIN && !isNaN(value) && value < conditionals.MIN){
            newError=true;
            setErorrMsg(`The value can't be lower than ${conditionals.MIN}`)
        }
        else if(conditionals.MAX && !isNaN(value) && value > conditionals.MAX){
            newError=true;
            setErorrMsg(`The value can't be higher than ${conditionals.MAX}`)
        }
        else if(conditionals.CARD_NUMBER && value.replace(/\s/g,'').length > 16){
            newError=true;
            setErorrMsg(`The card number must contain 16 numbers`);
        }

        setError(newError);
        setValidity(!newError,inputName)
        setChecked(true);
    }

    React.useEffect(() => {
        if(check){
            setChecked(false);
            setError(false);
        }
    },[check])

    function valueSet(event){
        let newValue = event.target.value;
        if(conditionals.MAX_LENGTH && newValue.length > conditionals.MAX_LENGTH) return;
        setValue(newValue)
        passValue(newValue, inputName)
    }

    const inputClasses = getClasses({
        form__input: true,
        "form__input--error": error
    });

    return (
        <div className="form__group">
            {children && <label className="form__label">{children}</label>}
            <input 
                className={inputClasses}
                type={type} 
                placeholder={placeholder}
                onChange={valueSet}
                value={value}
                maxlength={conditionals.MAX_LENGTH}
                minLength={conditionals.MIN_LENGTH}
                min={type === "number" && conditionals.MIN}
                max={type === "number" && conditionals.MAX}
                required
                />
            { error && <p className="form__error">{errorMsg}</p>}
        </div>

  )
}

export default FormInput