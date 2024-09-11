const RegisterForm = () => {
    return `
        <div class="form-box register">
            <h2>Registration</h2>
            <form action="#">
                <div class="input-box">
                    <span class="icon"><ion-icon name="person-circle-outline"></ion-icon></span>
                    <input type="text" required>
                    <label>Username</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <input type="email" required>
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <input type="password" required>
                    <label>Password</label>
                </div>
                <div class="remember-forgot">
                    <label>
                        <input type="checkbox">
                        Agree to the terms & conditions
                    </label>
                </div>
                <button type="submit" class="btn">Register</button>
                <div class="login-register">
                    <p>You have an account? <a href="#" class="login-link">Login</a></p>
                </div>
            </form>
        </div>
    `;
};

export default RegisterForm;
