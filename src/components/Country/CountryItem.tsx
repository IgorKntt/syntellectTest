import { FC } from "react";
import {CountryInfo} from "../../api/apiService"
import "./countryItem.scss"

interface ICountryItemProps {
  country: CountryInfo;
  clickHandler: () => void;
}


export const CountryItem:FC<ICountryItemProps> =({country, clickHandler}) => {

  const {name, fullName, flag } = country;

  return (
    <div className="countryItem" onClick={clickHandler} >
      <h4>{`${name} ${fullName}`}</h4>
      <img src={flag} alt={`${name} flag`} />
    </div>
  )

}
