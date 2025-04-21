import React from "react";
import "./App.css";
import { ButtonsControl } from "./views/buttonsControl/ButtonsControl";
import { IButtonProps } from "./viewmodels/ButtonsControlVM/useButtonsControlVm";
import { AutocompleteControl } from "./views/autocompletecontrol/AutocompleteControl";


function App() {

  const alertButtons:IButtonProps[] = [
    {
      text: "alert",
      position: "left",
      action: "alertText"
    },
    {
      text: "Numbers",
      position: "right",
      action: "alertNumbers"
    }
  ]

  const textButtons:IButtonProps[] = [
    {
      text: "clear",
      position: "right",
      action: "clear"
    },
    {
      text: "Hello world!",
      position: "right",
      action: "setHelloWorld"
    }
  ]


  return (
    <>
    <div>
      <ButtonsControl buttons={alertButtons} />
      <ButtonsControl buttons={textButtons} />
    </div>

    <div>
      <AutocompleteControl maxHints={3}/>
      <AutocompleteControl maxHints={10}/>
    </div>
    </>
    );
}

export default App;
