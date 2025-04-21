
import { FC } from "react";
import { IButtonProps, useButtonsControlVM } from "../../viewmodels/ButtonsControlVM/useButtonsControlVm";
import { observer } from "mobx-react-lite";
import "./styles.scss"


interface IButtonsControlProps {
  buttons: IButtonProps[]
}


export const ButtonsControl:FC<IButtonsControlProps> = observer(({buttons}) => {

  const {rightButtons, leftButtons, text, changeText} = useButtonsControlVM(buttons);

  return (
    <div className="textControl">
      <div>
        {leftButtons.map((currentButton) => {
          return (
            <button onClick={currentButton.action}
            key={currentButton.id}>
              {currentButton.text}
            </button>
          );
        })}
      </div>
      <input
        type="text" value={text}
        onChange={e => {
          changeText(e.target.value);
        }}
      />
      <div>
        {rightButtons.map((currentButton) => {
          return (
            <button onClick={currentButton.action}
            key={currentButton.id}>
              {currentButton.text}
            </button>
          );
        })}
      </div>

    </div>
  );
});
