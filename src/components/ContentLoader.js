import Header from './Header';
import LoginForm from './LoginForm';
import Swal from 'sweetalert2';
import ModalUserInfo from './ModalUserInfo';

const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name) => {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

const eraseCookie = (name) => {
    document.cookie = `${name}=; Max-Age=-99999999;path=/`;
};

const LoadContent = () => {
    Header();
    LoginForm();

    const wrapper = document.querySelector('.wrapper');
    const btnPopup = document.querySelector('.btnLogin-popup');

    const token = "jigdjfijdgwfkokfdgfhdfghhgh";
    
    const logout = () => {
        eraseCookie('token');
        Swal.fire({
            title: "Logged out",
            text: "You have been logged out successfully.",
            icon: "success"
        }).then(() => {
            wrapper.classList.remove('active-popup');
            wrapper.innerHTML = LoginForm(); 
            bindLoginFormEvents();
            updateButtonState();
            window.location.reload()
        });
    };

    const updateButtonState = () => {
        const storedToken = getCookie('token');
        if (storedToken === token) {
            btnPopup.textContent = "Account";
            btnPopup.classList.add("active-popup");
            btnPopup.onclick = () => showModalUserInfo();
        } else {
            btnPopup.textContent = "Login";
            btnPopup.classList.remove("user-info");
            btnPopup.onclick = () => showLoginPopup();
        }
    };

    const showModalUserInfo = () => {
        wrapper.innerHTML = '';
        wrapper.appendChild(ModalUserInfo());
        wrapper.classList.add('active-popup');
        
        document.querySelector('.icon-close').addEventListener('click', () => {
            wrapper.classList.remove('active-popup');
        });

        const btnLogout = document.querySelector(".btnLogout");
        btnLogout.addEventListener('click', logout);
    };

    const showLoginPopup = () => {
        wrapper.classList.add('active-popup');
    };

    const bindLoginFormEvents = () => {
        const loginLink = document.querySelector('.login-link');
        const registerLink = document.querySelector('.register-link');
        const iconClose = document.querySelector('.icon-close');
        const recoveryAccount = document.querySelector('.forgot-password');
        const loginForgotLink = document.querySelector("#loginLink-forgot");
        const BtnEventForgot = document.querySelector(".btn-forgot");
        const clearInputForgot = document.querySelector(".input-forgot");
        const ClearInputsLogin = document.querySelector(".login-inputs");
        const clearInputPass = document.querySelector(".login-input-password");
        const btnLoginEvent = document.querySelector(".btn-loginEvent");

        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            wrapper.classList.add('active');
        });

        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            wrapper.classList.remove('active');
        });

        iconClose.addEventListener('click', () => {
            wrapper.classList.remove('active-popup');
        });

        recoveryAccount.addEventListener('click', (e) => {
            e.preventDefault();
            wrapper.classList.add('active-forgot');
        });

        loginForgotLink.addEventListener('click', (e) => {
            e.preventDefault();
            wrapper.classList.remove('active-forgot');
        });

        BtnEventForgot.addEventListener('click', () => {
            Swal.fire({
                title: "Check your email for recovery account!",
                text: "This is the first step for recovery!",
                icon: "success",
            }).then(() => {
                clearInputForgot.value = "";
            });
        });

        const email = "ezequiel@gmail.com";
        const password = "123";

        const LoginAccess = () => {
            if (ClearInputsLogin.value === email && clearInputPass.value === password) {
                setCookie('token', token, 1);
                Swal.fire({
                    title: "Welcome to home",
                    width: 600,
                    padding: "3em",
                    color: "#716add",
                    
                    background: "#fff url(/images/trees.png)",
                    
                    backdrop: `
                      rgba(0,0,123,0.4)
                      
                      url("/public/welcome.gif")
                      left top
                      no-repeat
                    `,
                    text: "Login success",
                    icon: "success"
                }).then(() => {
                    ClearInputsLogin.value = "";
                    clearInputPass.value = "";
                    wrapper.classList.remove("active-popup");
                    updateButtonState();
                });



            } else {
                Swal.fire({
                    title: "Login failed",
                    text: "Incorrect email or password",
                    icon: "error"
                });
                ClearInputsLogin.value = "";
                clearInputPass.value = "";
            }
        };

        btnLoginEvent.addEventListener('click', LoginAccess);
    };

    bindLoginFormEvents();
    updateButtonState();
};

export default LoadContent;
