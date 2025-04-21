import { makeAutoObservable } from "mobx";
import { CountryInfo, getCountryByName } from "../../api/apiService";


class AutoCompleteStore {
  countries: CountryInfo[] =[];
  selectedCountry: CountryInfo | null = null;

  constructor () {
    makeAutoObservable(this)
  };

  selectCountry = (country:CountryInfo ) => {
    this.selectedCountry = country;
  }

  clearCountries = () => {
    this.countries = [];
  }

  loadCountries = async (countryName:string, count: number) => {
    console.log("load started");
      try {
        const response = await getCountryByName(countryName);
        this.countries = response.slice(0, count)
      }catch (e){
        throw new Error("Error loading countries info")
      }
  };
}

export default AutoCompleteStore
