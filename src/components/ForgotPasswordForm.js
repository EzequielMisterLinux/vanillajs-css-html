const ForgotPasswordForm = () => {
    return `
        <div class="form-box forgot">
            <h2>Recover Accout</h2>
            <form action="#">

                <div class="input-box">
                    <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <input class="input-forgot" type="email" required>
                    <label>Email</label>
                </div>

                <button type="button" class="btn btn-forgot">Recover</button>
                <div class="login-register">
                    <p>You have an account? <a href="#" class="login-link" id="loginLink-forgot">Login</a></p>
                </div>
            </form>
        </div>
    `;


};



export default ForgotPasswordForm;
