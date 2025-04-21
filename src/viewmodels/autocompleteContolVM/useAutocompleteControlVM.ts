import { useState } from "react";
import AutocompleteStore from "../../models/AutocompleteModel/AutocompleteStore";
import { useDebouncedCallback } from "use-debounce";
import { CountryInfo } from "../../api/apiService";


export const useAutocompleteControlVM = (maxHints: number) => {

  const [isEditing, setIsEditing] = useState(true);
  const [store] = useState(()=> new AutocompleteStore());
  const {countries, selectCountry, selectedCountry, loadCountries, clearCountries} = store;


  const handleClickHint = (country: CountryInfo) => {
    selectCountry(country)
    setIsEditing(false);

  };

  const handleClickControl = () => {
    clearCountries();
    setIsEditing(true);

  };

  const handleInputChange = () => {

  }


  const debouncedLoadCountries = useDebouncedCallback(loadCountries, 500);

  return {isEditing, countries, selectedCountry, handleClickControl, handleClickHint, loadCountries: debouncedLoadCountries}


}
