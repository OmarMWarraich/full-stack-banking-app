import React, {useState} from 'react';
import { validateFields } from '../utils/common';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Register = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [validated, setValidated] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        /* const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true); */
        const fieldsToValidate = [
            { fName }, 
            { lName }, 
            { email },
            { password },
            { cpassword }
        ];

        const allFieldsEntered = validateFields(fieldsToValidate);

        (!allFieldsEntered) ? setErrorMsg('Please enter all the fields.')  
        : (password !== cpassword) ? setErrorMsg('Passwords do not match.')
        : setValidated(true) && setSuccessMsg('Registration successful!');
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'fName':
                setFName(value);
                break;
            case 'lName':
                setLName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'cpassword':
                setCPassword(value);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className="login-page">
                <h2>Register User</h2>
                <div className="login-form">
                    <Form onSubmit={handleRegister}>
                        <Form.Group controlId="fName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="fName"
                                placeholder="Enter first name"
                                value={fName}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="lName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lName"
                                placeholder="Enter last name"
                                value={lName}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="cpassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="cpassword"
                                placeholder="Confirm password"
                                value={cpassword}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <div className="action-items">
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                            <Link to="/" className="btn btn-secondary">
                                Cancel
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default connect()(Register);
