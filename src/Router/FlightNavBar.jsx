import {Link, Outlet} from 'react-router-dom'

const FlightNavBar =()=>{
    return(
        <div>
            <nav className='navbar navbar-expand-lg bg-dark' data-bs-theme="dark">
            <div className="container-fluid">
            <a class="navbar-brand" href="#">
                    <img src='/Images/Airline_BG_1.jpg' className="rounded-circle" alt="Company Logo" 
                    width="40" height="40" />
            </a>
            <div className="collapse navbar-collapse" data-bs-theme="light">
            <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link className='nav-link active' to='/flightnav'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/flight'>Flights</Link>
                    </li>
                </ul>
            </div>                
            </div>                
            </nav>
            <Outlet/>            
        </div>
    )
}

export default FlightNavBar;





