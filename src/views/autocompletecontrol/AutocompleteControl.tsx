import { observer } from "mobx-react-lite"
import { FC } from "react"
import { useAutocompleteControlVM } from "../../viewmodels/autocompleteContolVM/useAutocompleteControlVM";
import { CountryItem } from "../../components/Country/CountryItem";
import { List } from "../../components/List/List";
import { CountryInfo } from "../../api/apiService";

import "./autocompleteControl.scss"


interface AutocompleteControlProps {
  maxHints: number
}


export const AutocompleteControl:FC<AutocompleteControlProps> = observer(({maxHints}) => {

  const {isEditing, selectedCountry, countries, loadCountries, handleClickControl, handleClickHint} = useAutocompleteControlVM(maxHints);


  return (
    <div className="autocomplete">

      {(isEditing || selectedCountry === null ) ?
        <label>Название страны
          <input type="text" onChange={ e => loadCountries(e.target.value, maxHints)} defaultValue=""/>
        </label>:
        <CountryItem country={selectedCountry} clickHandler={handleClickControl} />}

      {isEditing &&
      <List
        items={countries}
        renderItems={(item: CountryInfo) =>
        <CountryItem country={item} key={item.name} clickHandler={()=> handleClickHint(item)} />}
      />}

    </div>
  )


})
