import './RegistrationForm.css';

const RegistrationForm = () => {
    return (
        <div className = "form">
            <form>
                <button className = "facebook-button"><img className = "facebook-icon" src = "https://mweb-cdn.karousell.com/build/fb-icon-3NjbluDsCk.svg" />Sign up with Facebook</button>
                <div className = "or-spacer" />
                <div className = "or-text-div"><p className = "or-text">OR</p></div>
                <div className = "or-spacer" />
                <div className = "input-container">
                    <input className = "input-field" type = "text" name = "uname" placeholder = "Username" required />
                </div>
                <div className = "input-container spacer">
                    <input className = "input-field" type = "password" name = "pass" placeholder = "Password" required />
                </div>
                <div className = "input-container spacer">
                    <select className = "dropdown" required>
                        <option value>Select a County</option>
                        <option value = "0">Australia</option>
                        <option value = "1">Canada</option>
                        <option value = "2">Hong Kong</option>
                        <option value = "3">Indonesia</option>
                        <option value = "4">Malaysia</option>
                        <option value = "5">New Zealand</option>
                        <option value = "6">Philippines</option>
                        <option value = "7">Singapore</option>
                        <option value = "8">Taiwan</option>
                    </select>    
                </div>
                <div className = "input-container spacer">
                    <input className = "input-field" type = "email" name = "email" placeholder = "Email" required />
                </div>
                <div className = "mobile-number-container spacer">
                    <div className = "area-code">🇸🇬 +65</div>
                    <input className = "input-field mobile-input-field" type = "tel" name = "tel" pattern = "[0-9]{8}" placeholder = "Mobile number" required />
                    <button className = "verify-button">Verify</button>
                </div>
                <div className = "text-container">
                    <p>We verify identities via mobile numbers to ensure a safe community for you to deal in. An SMS will be sent to you. Message and data rates may apply.</p>
                </div>
                <button className = "signup-button">Sign up</button>
                <div className = "own-account-text">
                    <p className = "login-prompt">Have an account?</p>
                    <a className = "login-hyperlink" href = "/login"><p>Log in now</p></a>
                </div>
                <div className = "fine-print">
                    <p>By signing up, you agree to Carousell's </p>
                    <a className = "small-links" href = "/tos"><p>Terms of Service </p></a>
                    <p> & </p>
                    <a className = "small-links" href = "/privacy-policy"><p>Privacy Policy </p></a>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;