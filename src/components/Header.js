const Header = () => {

    let header = document.createElement("header")
    header.className = "header-container"
    header.id = "header-event"

    header.innerHTML = `
    
    <h1 class="logo">Iyou</h1>
        <nav class="navigation">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <button class="btnLogin-popup userInfo">Login</button>
        </nav>
    
    `

    document.body.appendChild(header)

}


export default Header