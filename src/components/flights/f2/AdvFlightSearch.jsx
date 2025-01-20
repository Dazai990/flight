import FlightSearchResult from "../f1/FlightSearchResult";
import React, {useEffect, useState } from "react";
import flightList from "../../database/flight_data";

const AdvFlightSearch = ()=>{

    const [searchFromFlight, setSearchFromFlight] = useState("");
    const [searchToFlight, setSearchToFlight] = useState("");

    const FlightSearchList = flightList.map(fItem => <FlightSearchResult key={fItem.id} item={fItem} />);

    // Filtered data based on From and To Place Search
    const filteredFlights = flightList.filter((item) => {
        const getFromFilter = item.FromPlace.toLowerCase().includes(searchFromFlight.toLowerCase());
        const getToFilter = item.ToPlace.toLowerCase().includes(searchToFlight.toLowerCase());
        
        return getFromFilter && getToFilter;
    });

    return(
        <>
        <div>
            <h2>Advanced Search</h2>
            <div className="contaoner-fluid center"> 
            From Place:
            <input type="text"
                   id="FromPlace" 
                   placeholder="Type From Place.."
                   value={searchFromFlight}
                   onChange={(e)=> setSearchFromFlight(e.target.value)}
                   style={{ padding: "1px", width: "25%", margin: "10px" }}
            ></input>
            
            To Place:
            <input type="text"
                   id="ToPlace"
                   placeholder="Type To Place.."
                   value={searchToFlight}
                   onChange={(e)=> setSearchToFlight(e.target.value)}
                   style={{ padding: "1px", width: "25%", margin: "10px" }}
            ></input>

            No Of Flights available:  
              <span><b>{filteredFlights.length === FlightSearchList.length ? 
              (FlightSearchList.length) : (filteredFlights.length)}</b></span>
            </div>
        </div>
        <div>

            {filteredFlights.length !== FlightSearchList.length ? (
                                <table className="table stripped ">
                                <thead>
                                    <tr>
                                        <th>Id</th><th>Airlines</th><th>FlightCode</th><th>FromPlace</th>
                                        <th>ToPlace</th><th>StartTime</th><th>EndTime</th>
                                        <th>Class</th><th>Fare</th><th>Frequency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     {filteredFlights.map(fItem => <FlightSearchResult key={fItem.id} item={fItem} />)}
                                     {/* {FlightSearchList} */}
                                </tbody>
                                
                            </table>
            ) : (
                // <p>No any Flight Record found.</p>
                <table className="table stripped ">
                                <thead>
                                    <tr>
                                        <th>Id</th><th>Airlines</th><th>FlightCode</th><th>FromPlace</th>
                                        <th>ToPlace</th><th>StartTime</th><th>EndTime</th>
                                        <th>Class</th><th>Fare</th><th>Frequency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     {FlightSearchList}
                                </tbody>                                
                            </table>
            )
        }

                
                            
                    </div>
                    </>
    )
}


export default AdvFlightSearch;
















