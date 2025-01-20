import { Link } from "react-router-dom";
import { useSelectedFlight } from "../../../context/FareContext";
const FlightSearchResult = ({item})=>{
    const {setSelectedFlight} = useSelectedFlight();

    const handleSelect = () => {
        setSelectedFlight(item);
    };

    return(
        <tr>
            <td>{item.id}</td>
            <td>
            <img src={item.Logo} className="rounded-circle" alt="Company Logo" 
                    width="40" height="40" /> <span>&nbsp;&nbsp;</span>
                {item.Airlines}
            </td>
            <td>{item.FlightCode}</td>
            <td>{item.FromPlace}</td>
            <td>{item.ToPlace}</td>
            <td>{item.StartTime}</td>
            <td>{item.EndTime}</td>
            <td>{item.Class}</td>
            <td>{item.Fare}</td>
            <td>{item.Frequency}</td>
            <td>
            <Link
          to="/ticket-review"
          state={{ selectedFlight: item }}
          onClick={handleSelect}
          className="btn"> Select
        </Link>
            </td>
        </tr>
    )
}

export default FlightSearchResult;







