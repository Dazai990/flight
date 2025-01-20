import {Link, Outlet} from "react-router-dom";

const FlightSection = ()=>{

    // return <h1>Flight Section</h1>

    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-secondary" data-bs-theme="dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="f1" className="nav-link active">Search Flights</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="f2" className="nav-link">Advanced Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="f3" className="nav-link">Current Booking</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="f4" className="nav-link">Booking History</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="f5" className="nav-link">Exclusive Offers</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )

}

export default FlightSection;
