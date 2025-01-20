import getCityList from "./getCityList";
import { useState } from "react";
import cities from "../../database/city_data"

const OldFlightSearch =()=>{
    const [newSrarch, setNewSearch] = useState({
        flightType:'',
        fromPlace:'',
        toPlace:'',
        departDate:'',
        returnDate:'',
        otherInfo:''
    })

    const [fromPlace, setFromPlace] = useState("--- From City ---")

    // const fromCityList = cities.map(city=>
    //     <option value={city.id}>{city.name} -- {city.shortName}</option>
    // )

    return(
        // <div className="container-fluid bg-warning">
            <div className="container border text-bg-light rounded p-3 w-50">
                <div className="rounded border text-bg-secondary">
                    <h2>Search Flights</h2>
                </div>            
            <div className="text-start">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Flight Type:</label>
                        <div className="form-check-group">                        
                            <span>
                                <input type="radio" id="rt" name="flighttype" value="round"
                                required />
                                <label className="form-check-label" htmlFor="rt">Round Trip</label>
                            </span>
                            <span>
                                <input type="radio" id="ow" name="flighttype" value="oneway"/>
                                <label className="form-check-label" htmlFor="ow">One Way</label>
                            </span>                            
                        </div>
                    </div>
                    {/* <div className="mb-3">
                        <label className="form-label" htmlFor="fromPlace">From:</label>
                        <input type="text" id="fromPlace" value={newSrarch.fromPlace} required
                        className="form-control border rounded"></input>
                    </div> */}
                    <div className="mb-3">
                        <label className="form-label" htmlFor="fromCity">From:</label>
                        <select className="form-control w-50" id="fromCity" value={newSrarch.fromPlace}>
                            {getCityList}
                            <option>-- Select --</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>                          
                        </select> 
                    
                        <label className="form-label" htmlFor="toPlace">To:</label>
                        <select className="form-control w-50" id="toCity" value={newSrarch.toPlace}>
                        <option>-- Select --</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>             
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="departDate">Depart Date:</label>
                        <input type="date" id="departDate" required
                        className=" border rounded"></input>
                    </div>
                    <div className="mb-3">
                        <fieldset>
                            <legend >Traveller Details:</legend>
                                <label className="form-label">Adult:</label>
                                <select className="form-control w-50">
                                    <option>-- Select --</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>

                                <label className="form-label">Child:</label>
                                <select className="form-control w-50">
                                <option>-- Select --</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>

                                <label className="form-label">Infant:</label>
                                <select className="form-control w-50">
                                <option>-- Select --</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>

                                <label className="form-label">Class:</label>
                                <select className="form-control w-50">
                                <option>-- Select --</option>
                                    <option>Economy</option>
                                    <option>Business</option>
                                    <option>First</option>
                                </select>
                        </fieldset>
                    </div>
                    <div>
                        <button className="btn btn-outline-primary me-2 rounded border">Serch</button>
                        <button className="btn btn-outline-danger me-2 rounded border">Clear</button>
                    </div>
                </form>
            </div>
        </div>
    // </div>    
    )
}


export default OldFlightSearch;






