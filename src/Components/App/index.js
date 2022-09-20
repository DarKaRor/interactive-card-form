import React from "react";
import Card from "../Card"
import Form from "../Form"
import CardFront from "../CardFront"
import CardBack from "../CardBack"
import Footer from "../Footer";
import "./App.css"
import completed from "../../images/icon-complete.svg";

const initialState = {
  cardName: "Jane Appleseed",
  number: "0000 0000 0000 0000",
  month: "00",
  year: "00",
  cvc: "000",
  isValid: true,
  submit: false,
}

const initialValidity = {
  cardName: false,
  number: false,
  month: false,
  year: false,
  cvc: false
}

function App() {
  const [state, setState] = React.useState({
    ...initialState
  })

  const [inputValidity, setInputValidity] = React.useState({
    ...initialValidity
  })

  function setValue(value, key) {
    let newState = { ...state };
    newState[key] = value;
    setState({ ...newState, submit: false });
  }

  function setValidity(value,key){
    setInputValidity(prev => ({
      ...prev,
      [key]: value
    }))

  }

  let {
    cardName,
    number,
    month,
    year,
    cvc,
    submit,
    isValid,
  } = state;

  function onSubmit(e) {
    e.preventDefault();
    setState(x => ({
      ...x,
      submit: true,
      isValid: false
    }));
  }

  React.useEffect(checkValidity,[state.submit, inputValidity])

  function checkValidity(){
    let valid = true;
    Object.entries(inputValidity).forEach(([key,value]) => {
      if(!value) valid = false;
    })  
    setState(x => ({
      ...x,
      isValid: valid
    }));
  }

  const isSubmitted = () => state.submit && state.isValid;

  function Reset(){
    setState({...initialState})
    setInputValidity({...initialValidity})
  }

  return (
    <React.Fragment>
    <main className="App">
      <section className="card_container">
        <Card>
          <CardFront
            name={cardName}
            number={number}
            month={month}
            year={year}
          />
          <CardBack>{cvc}</CardBack>
        </Card>
      </section>
      {isSubmitted() ?
        <section className="form_container">
          <div className="completed">
            <img src={completed} alt="Completed" className="completed__icon" />
            <h2 className="completed__title">THANK YOU!</h2>
            <p className="completed__desc">We've added your card details</p>
            <button className="form__submit" onClick={Reset}>Continue</button>
          </div>
        </section>
        :
        <section className="form_container">
        <Form
          setValue={setValue}
          setValidity={setValidity}
          submit={submit}
          onSubmit={onSubmit}
          isValid={isValid}
        />
      </section>
      }
    </main>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
