import ForgotPasswordForm from './ForgotPasswordForm';
import RegisterForm from './RegisterForm';

const LoginForm = () => {

    const container = document.createElement('div');
    container.className = 'wrapper';

    container.innerHTML = `
        <span class="icon-close">
            <ion-icon name="close-outline"></ion-icon>
        </span>
        <div class="form-box login">
            <h2>Login</h2>
            <form action="#">
                <div class="input-box">
                    <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <input class="login-inputs" type="email" required>
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <input class="login-input-password" type="password" required>
                    <label>Password</label>
                </div>
                <div class="remember-forgot">
                    <label>
                        <input type="checkbox">
                        Remember me
                    </label>
                    <a href="#" class="forgot-password">Forgot password</a>
                </div>
                <button type="submit" class="btn btn-loginEvent">Login</button>
                <div class="login-register">
                    <p>Don't have an account? <a href="#" class="register-link">Register</a></p>
                </div>
            </form>
        </div>
    `;

    container.innerHTML += RegisterForm();
    container.innerHTML += ForgotPasswordForm();



    document.body.appendChild(container);

    

};

export default LoginForm;
