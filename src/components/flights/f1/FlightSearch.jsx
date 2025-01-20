import { FaUserEdit } from "react-icons/fa";

//import cityList from "./CityList";
import React, {useEffect, useState } from "react";
import cities from "../../database/city_data";
import airClass from "../../database/class_data";
import flightList from "../../database/flight_data";
import FlightSearchResult from "./FlightSearchResult";

const FlightSearch =()=>{
    const [newSearch, setNewSearch] = useState({
        flightType:'',
        fromPlace:'',
        toPlace:'',
        departDate:'',
        returnDate:'',
        adult:'',
        child:'',
        infant:''
    })

  // State to hold the selected value
  const [selectedFlightType, setSelectedFlightType] = useState('');
  const [selectedFromValue, setFromSelectedValue] = useState('');

  const [filteredData, setFilteredData] = useState(
    cities.filter(item => item.name != selectedFromValue)
  );

  const [selectedToValue, setToSelectedValue] = useState('');
  const [selectedDepartDate, setDepartDateSelectedValue] = useState('');
  const [selectedAirClassValue, setAirClassSelectedValue] = useState('');

  const[selectedAdultValue, setAdultSelectedValue] = useState('');
  const[selectedChildValue, setChildSelectedValue] = useState('');
  const[selectedInfantValue, setInfantSelectedValue] = useState('');

  const[isSubmitted, setIsSubmitted] = useState(false);

  // Event Handler for Flight Type Radio Button - 
  const handleFlightType = (event) =>{
    newSearch.flightType = event.target.value;
    setSelectedFlightType(newSearch.flightType);    
  }

  // Event handler for dropdown change - From DropDown Control
  const handleFromChange = (event) => {
    const getSelectedFromValue = event.target.value;
    setFromSelectedValue(getSelectedFromValue);
    setFilteredData(cities.filter(item => item.name !== getSelectedFromValue ));

    newSearch.fromPlace = event.target.value;
  };

  // Event handler for dropdown change - To DropDown Control
  const handleToChange = (event) =>{
    newSearch.toPlace = event.target.value;
    setToSelectedValue(newSearch.toPlace);    
  };

  // Event handler for Departure Date change - To DropDown Control
    const handleDepartDateChange = (event) =>{
        newSearch.departDate = event.target.value;
        setDepartDateSelectedValue(newSearch.departDate);    
      };
    
  // Event handler for dropdown change - AirClass DropDown Control
  const handleAirClassChange = (event) =>{
    newSearch.airClass = event.target.value;
    setAirClassSelectedValue(newSearch.airClass);
  };

  // Event handler for dropdown change - AirClass DropDown Control
  const handleAdultChange = (event) =>{
    newSearch.adult =event.target.value;
    setAdultSelectedValue(newSearch.adult);
  };

  // Event handler for dropdown change - AirClass DropDown Control
  const handleChildChange = (event) =>{
    newSearch.child = event.target.value;
    setChildSelectedValue(newSearch.child);
  };

  // Event handler for dropdown change - AirClass DropDown Control
  const handleInfantChange = (event) =>{
    newSearch.infant = event.target.value;
    setInfantSelectedValue(newSearch.infant);
  };

  // Event Handler for Form Submit
  const handleSubmit = e=>{
    e.preventDefault();
   // alert("Flight Search Request is submitted.");
    setIsSubmitted(true);
  }

  //---------------------------------------------------------

    // Filtered data based on From and To Place Search
      const filteredFlights = flightList.filter((item) => {
        const getFromFilter = item.FromPlace.toLowerCase().includes(newSearch.fromPlace.toLowerCase());
        const getToFilter = item.ToPlace.toLowerCase().includes(newSearch.toPlace.toLowerCase());
        
        return getFromFilter && getToFilter;
    });

    const FlightSearchList = filteredFlights.map(fItem => <FlightSearchResult key={fItem.id} item={fItem} />);
  //---------------------------------------------------------

    return(
        <>
        {
           !isSubmitted &&
           <div>
           <div className="container border text-bg-light rounded-4 p-3 w-50 bg-danger">
                <div className="rounded border text-bg-light">
                    <h2>Search Flights</h2>
                </div>            
            <div className="text-start">
                <form className="text-light" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend className="fs-3" style={{fontWeight:'bold'}}>Flight Details:</legend>
                        <div className="mb-3">
                        <label className="form-label mt-3" style={{fontWeight:'bold'}}>Flight Type:</label>
                            <div className="form-check-group">                        
                                <span>
                                    <input type="radio" id="rt" name="flighttype" value="Round Trip"
                                    onChange={handleFlightType} checked={newSearch.flightType === "Round Trip"}
                                    required />
                                    <label className="form-check-label" htmlFor="rt">Round Trip</label>
                                </span>
                                <span className="ps-3">
                                    <input type="radio" id="ow" name="flighttype" value="One Way"
                                    onChange={handleFlightType} checked={newSearch.flightType === "One Way"}
                                    required />
                                    <label className="form-check-label" htmlFor="ow">One Way</label>
                                </span>                            
                            </div>
                        {selectedFlightType && <p>You Selected: {selectedFlightType}</p>}
                        </div>
                    
                        <div className="mb-3">
                            <label className="form-label" htmlFor="fromCity" style={{fontWeight:'bold'}}>From:</label>
                            <select className="form-control w-50" id="fromCity" 
                            value={selectedFromValue} onChange={handleFromChange}>
                                <option value="" disabled>-- Select From City --</option>
                                {cities.map((MyOption, index) => (
                                <option key={index} value={MyOption.shortName}>
                                    {MyOption.name} ({MyOption.shortName}) 
                                </option>
                                ))}
                            </select>
                            {selectedFromValue && <p>You selected: {selectedFromValue}</p>}  
                        
                            <label className="form-label" htmlFor="toPlace" style={{fontWeight:'bold'}}>To:</label>
                            <select className="form-control w-50" id="toPlace" 
                            value={selectedToValue} onChange={handleToChange}>
                                <option value="" disabled>-- Select To City --</option>
                                {
                                    filteredData.map((MyOption, index) =>(
                                    <option key={index} value={MyOption.shortName}>
                                        {MyOption.name} ({MyOption.shortName})
                                    </option>
                                ) )}
                            </select>
                            {selectedToValue && <p>You selected: {selectedToValue}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="departDate">Depart Date: &nbsp;</label>
                            <input type="date" id="departDate" onChange={handleDepartDateChange} required
                            className=" border rounded"></input>
                            {selectedDepartDate && <p>You selected: {selectedDepartDate}</p>}
                        </div>
                        </fieldset>
                        
                        <div className="mb-3">
                            <fieldset>
                                <legend style={{fontWeight:'bold'}}>Traveller Details:</legend>
                                    <label className="form-label" style={{fontWeight:'bold'}}>Class:</label>
                                    <select className="form-control w-50" 
                                    value={selectedAirClassValue} onChange={handleAirClassChange}> 
                                    <option value="" disabled>-- Select --</option>
                                        {
                                            airClass.map((MyOption, index) =>(
                                            <option key={index} value={MyOption.className}>
                                                {MyOption.className}
                                            </option>
                                        ) )}
                                    </select>
                                    {selectedAirClassValue && <p>You selected: {selectedAirClassValue}</p>}
                        </fieldset>
                    </div>
                    <div>
                        <button className="btn btn-outline-primary me-2 rounded border">Search</button>
                        <button className="btn btn-outline-light me-2 rounded border">Clear</button>
                    </div>
                </form>
            </div>
         </div>
         </div> 
        }
        {
            isSubmitted && 
            <div>
                {/* <form onLoad={handleFlightSearch}> */}
                <div className="container-fluid">
                    <h2 className="text-center">Search Result</h2>
                    <div className="container-fluid">
                        <table className="table b-1">
                            <tr>
                                <td><h4>Flight Type : {newSearch.flightType} </h4></td>
                                <td><h4>From : {newSearch.fromPlace}</h4></td>
                                <td><h4>To : {newSearch.toPlace}</h4></td>
                                <td><h4>Depart Date : {newSearch.departDate}</h4></td>
                                <button className="btn btn-info ms-2 mt-1" 
                                onClick={()=>setIsSubmitted(false)} title="Edit Search">Edit Search</button>
                            </tr>
                        </table>
                            No Of Flights available:  
                            <span><b>{filteredFlights.length !== 0 ? 
                            (filteredFlights.length) : 0 }</b></span>
                    </div>
                    <div>
                            <table className="table stripped ">
                                <thead>
                                    <tr>
                                        <th>Id</th><th>Airlines</th><th>FlightCode</th><th>FromPlace</th>
                                        <th>ToPlace</th><th>StartTime</th><th>EndTime</th>
                                        <th>Class</th><th>Fare</th><th>Frequency</th>
                                        <th>Select Flight</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     {FlightSearchList}
                                </tbody>
                                
                            </table>
                            
                    </div>
                </div>
                {/* </form> */}
            </div>
        }
    </>        
            
    )
}

export default FlightSearch;
