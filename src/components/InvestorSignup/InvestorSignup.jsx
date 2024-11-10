import React, { useState } from 'react';
import axios from 'axios';
import './InvestorSignup.css';

function InvestorSignup() {
    const [investorData, setInvestorData] = useState({
        name: '',
        contact: '',
        investmentAmount: '',
        agreeToTerms: false,
    });
    const [signupStatus, setSignupStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInvestorData({ ...investorData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!investorData.agreeToTerms) {
            setSignupStatus("You must agree to the terms.");
            return;
        }
        try {
            const response = await axios.post('/api/register_investor.php', investorData);
            setSignupStatus(response.data.message);
        } catch (error) {
            console.error('Error registering investor:', error);
            setSignupStatus("Error registering investor.");
        }
    };

    return (
        <div className="investor-signup">
            <h2>Sign Up as an Investor</h2>
            {signupStatus && <p className="signup-status">{signupStatus}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={investorData.name} onChange={handleChange} />
                </label>
                <label>
                    Contact:
                    <input type="text" name="contact" value={investorData.contact} onChange={handleChange} />
                </label>
                <label>
                    Investment Amount:
                    <input
                        type="number"
                        name="investmentAmount"
                        value={investorData.investmentAmount}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={investorData.agreeToTerms}
                        onChange={() => setInvestorData({ ...investorData, agreeToTerms: !investorData.agreeToTerms })}
                    />
                    I agree to the terms and conditions
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default InvestorSignup;