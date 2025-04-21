import { ReactNode } from "react";


interface IListProps<T> {
  items: T[];
  renderItems: (item: T) => ReactNode

}

export function List<T>(props : IListProps<T> ) {

  return (
    <div className="hintsList">
      {props.items.map(props.renderItems)}
    </div>
  )
}
