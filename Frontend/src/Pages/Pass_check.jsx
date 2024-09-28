import React, { useState, useEffect, useRef } from 'react';
// import './styles/forall.css';
// import './styles/navbar.css';
import '../styles/passwd-check.css';
import { 
    calculateStrength, 
    getPasswordStrengthLabel, 
    calculateTimeToCrack 
} from '../scripts/passwd-check.js'; // Adjust the path if necessary

const PasswordStrengthTester = () => {
    const [password, setPassword] = useState('');
    const [strengthText, setStrengthText] = useState('Strength: ');
    const [timeToCrack, setTimeToCrack] = useState('Approx. Time to crack: ');
    const [strengthMeterWidth, setStrengthMeterWidth] = useState('0%');
    const [visible, setVisible] = useState(false);
    const strengthMeterRef = useRef(null);

    useEffect(() => {
        checkPasswordStrength(password);
    }, [password]);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const checkPasswordStrength = (password) => {
        const strength = calculateStrength(password);
        const crackTime = calculateTimeToCrack(password, strength);
        setStrengthText(`Strength: ${getPasswordStrengthLabel(strength)}`);
        setTimeToCrack(`Approx. Time to crack: ${crackTime}`);
        setStrengthMeterWidth(`${strength}%`);
    };

    return (
        <div>
            
            <div className="center-text">
                <h1 className="tool_title">Password Strength Tester</h1>
                <p className="desc_tool">Strengthen Your Security: Test Your Password Strength Today!</p>
            </div>
            <div className="outer-container">
                <div className="bg-outer">
                    <div className="password-container">
                        <label htmlFor="password">Enter Password:</label>
                        <input
                            type={visible ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Type your password..."
                        />
                        <div type="button" id="togglePassword" className="show" onClick={toggleVisibility}>
                            {visible ? 'Hide' : 'Show'}
                        </div>
                        <div className="strength-meter">
                            <div className="strength-text" id="strengthText">{strengthText}</div>
                            <div className="meter">
                                <div
                                    className="meter-fill-grey"
                                    id="strengthMeter"
                                    ref={strengthMeterRef}
                                    style={{ width: strengthMeterWidth }}
                                ></div>
                            </div>
                            <div className="time-to-crack" id="timeToCrack">{timeToCrack}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default PasswordStrengthTester;
