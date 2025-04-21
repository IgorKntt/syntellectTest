import { useState } from "react";
import ButtonsControlStore from "../../models/ButtonsControlModel/ButtonsControlStore";


export interface IButtonProps {
  text: string;
  position: "left" | "right";
  action: keyof typeof actions | (() => void)
}

export interface IControlButton {
  id: string;
  text: string;
  action: () => void;
}


export const useButtonsControlVM = (buttonsProps: IButtonProps[]) => {

  const [store] = useState(() => new ButtonsControlStore());
  const text = store.text;

  const leftButtons: IControlButton[] = [];
  const rightButtons: IControlButton[]  = [];

  const buttons = {
    left: leftButtons,
    right: rightButtons
  }


  buttonsProps.forEach((buttonProps, index) => {

    const buttonAction = ( typeof buttonProps.action === "string") ?
       (actions[buttonProps.action].bind(undefined, store) ) :
       buttonProps.action;

    const button: IControlButton = {
      id: "IDstring".concat(index.toString()), // change with uuidV4
      text: buttonProps.text,
      action: buttonAction
    }

    buttons[buttonProps.position].push(button);

  })

  return { leftButtons, rightButtons, text, changeText: store.changeText };
};


const alertText = (store: ButtonsControlStore) => {
  if(store.text) {
    alert(store.text);
  }
};

const alertNumbers = (store: ButtonsControlStore) => {
  if (store.text !== "" && !isNaN(Number(store.text))) {
    alert(store.text);
  }
};

const clear = (store: ButtonsControlStore) => {
  store.changeText("");
};

const setHelloWorld = (store: ButtonsControlStore) => {
 store.changeText("Hello world!");
};



const actions = {alertText, alertNumbers, clear, setHelloWorld}




