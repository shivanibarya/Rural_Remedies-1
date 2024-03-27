import React, { useState, useEffect } from 'react';

const RegistrationForm = () => {
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        const doctorSelect = document.getElementById('doctor');

        const handleDoctorChange = (event) => {
            setIsDoctor(event.target.value === 'yes');
        };

        if (doctorSelect) {
            doctorSelect.addEventListener('change', handleDoctorChange);

            return () => {
                doctorSelect.removeEventListener('change', handleDoctorChange);
            };
        }
    }, []);

 return (
        <div className="sing-container">
            <h1>User Registration</h1>
            <form action="singup.jsx" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name*</label>
                    <input type="text" id="name" name="sname" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="contact">Contact*</label>
                    <input type="text" id="contact" name="contact" required />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password*</label>
                    <input type="password" id="password" name="password" required />
                </div>

                <div className="form-group">
                    <label htmlFor="confirm_password">Confirm Password*</label>
                    <input type="password" id="confirm_password" name="confirm_password" required />
                </div>

                <div className="form-group">
                    <label htmlFor="doctor">Are you a doctor?</label>
                    <select id="doctor" name="doctor">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>

                {isDoctor && (
                    <div className="form-group">
                        <label htmlFor="specialty">Specialty</label>
                        <select id="specialty" name="specialty">
                            <option value="ayurveda">Ayurveda</option>
                            <option value="homeopathy">Homeopathy</option>
                        </select>
                    </div>
                )}

                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default RegistrationForm;
