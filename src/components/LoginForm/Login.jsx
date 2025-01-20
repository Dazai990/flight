import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
    const navigate = useNavigate();
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        mobile: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to backend)
        if (isSignup) {
            alert(`Signup successful`);
        } else {
            alert(`Login successful`);
            navigate('/')
        }
        console.log(formData);
    };
    return (
        <div className="container text-center w-25 mt-4 border border-black rounded">
        <h2>{isSignup ? 'Passenger Signup' : 'Passenger Login'}</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="User Name"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <input
                    className="form-control"
                    type="tel"
                    name="mobile"
                    placeholder="Enter Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                />
            </div>

            <div className="mb-3">
                <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>

            <p className="text-center mt-4">{isSignup ? 'Please signup?' : 'Please login?'}</p>
            <button className="btn btn-outline-info mt-2 mb-2" type="submit">
                {isSignup ? 'Passenger Signup' : 'Passenger Login'}
            </button>
        </form>

        <p className="mt-3">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
                className="btn  btn-outline-info "
                type="submit"
                onClick={() => setIsSignup(!isSignup)}
            >
                {isSignup ? 'Login here' : 'Signup here'}
            </button>
        </p>
    </div>
);
    

}

export default LoginForm;