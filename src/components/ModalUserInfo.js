import profile from '../../public/profilegithub.jpg'

const ModalUserInfo = () => {
    const container = document.createElement('div');
    container.className = 'userContent';

    container.innerHTML = `
        <span class="icon-close">
            <ion-icon name="close-outline"></ion-icon>
        </span>
        <div class="userContentInfo">

                <img src="${profile}" alt="profile" height="180px">
                <p>Ezequiel Campos</p>
                <p>humbertoezequiel.z.c@gmail.com</p>
                <button class="btnLogout" id="logout-event">logout</button>
        </div>
    `;

    
    return container;

    
};

export default ModalUserInfo;
