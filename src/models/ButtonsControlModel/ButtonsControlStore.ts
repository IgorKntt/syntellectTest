import { makeAutoObservable } from "mobx";

class ButtonsControlStore {
  text: string = "";

   constructor() {
    makeAutoObservable(this);
  }

  changeText = (value: string) => {
    this.text = value;
  };
}

export default ButtonsControlStore;
