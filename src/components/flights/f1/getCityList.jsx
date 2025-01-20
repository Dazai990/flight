import cities from "../../database/city_data"
import CityList from "./CityList";

const getCityList=()=>{

    // const fromCityList = cities.map
    // (city=> <CityList key={city.id} item={city} />)

    const fromCityList = cities.map((MyOption, index) => (
        <option key={index} value={MyOption.name}>
            {MyOption.name} ({MyOption.shortName}) 
        </option>
        ))

    return(
        // <select className="form-control w-50" id="toCity">
        //     <option>-- Select --</option>
        //     {fromCityList}
        // </select>
            {fromCityList}
    )

}

export default getCityList;

