import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className = "form">
            <form>
                <button className = "facebook-button"><img className = "facebook-icon" src = "https://mweb-cdn.karousell.com/build/fb-icon-3NjbluDsCk.svg" />Sign up with Facebook</button>
                <div className = "or-spacer" />
                <div className = "or-text-div"><p className = "or-text">OR</p></div>
                <div className = "or-spacer" />
                <div className = "input-container">
                    <input className = "input-field" type = "text" name = "uname" placeholder = "Username or email" required />
                </div>
                <div className = "input-container spacer">
                    <input className = "input-field" type = "password" name = "pass" placeholder = "Password" required />
                </div>
                <div className = "text-container spacer">
                    <p>Forgot password?</p>
                </div>
                <button className = "signup-button">Log in</button>
                <div className = "own-account-text">
                    <p className = "login-prompt">Don't have an account?</p>
                    <a className = "login-hyperlink" href = "/login"><p>Sign up</p></a>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;