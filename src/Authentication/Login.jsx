import React, { useState } from 'react';

const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [user, setUser] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!inputs.email) {
            isValid = false;
            newErrors.email = 'Email is required';
        }

        if (!inputs.password) {
            isValid = false;
            newErrors.password = 'Password is required';
        } else if (inputs.password.length < 6) {
            isValid = false;
            newErrors.password = 'Password must be at least 6 characters long';
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('http://localhost:5000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(inputs)
                });
                const data = await response.json();
                if (response.ok) {
                    setMessage('Login successful');
                    setUser(data.user);
                } else {
                    setMessage(data.error);
                }
            } catch (error) {
                setMessage('Error: ' + error.message);
            }
        } else {
            console.log('Form is invalid');
        }
    };

    return (
        <>
            <div>
                <p>This is a Login Form</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="input-group">
                            <label>Email:</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Your email here!"
                                value={inputs.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        </div>
                        <div className="input-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Your password here!"
                                value={inputs.password}
                                onChange={handleInputChange}
                            />
                            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                        </div>
                        <div className="input-group">
                            <button type="submit">Login</button>
                        </div>
                    </div>
                </form>
                {message && <p>{message}</p>}
                {user && <p>Logged in as: {user.email}</p>}
            </div>
        </>
    );
};

export default Login;

