import React from "react"

class Header extends React.Component {
    render() {
        return (
            <nav>
            <ul class="nav-rigth-section">
                <li>
                    <a href="#">Gmail</a>
                </li>
                <li>
                    <a href="#">Imágenes</a>
                </li>
                <li class="menu-icon">
                    <a href="#"></a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQFILCh7FRKErA/profile-displayphoto-shrink_200_200/0/1617145732921?e=1626912000&v=beta&t=GgbNaIKEOAY0WWqISHCzUMdWMySlqRXFqlaVn9vdxxk" alt="photo-perfil"/>
                    </a>
                </li>
            </ul>
        </nav>
        )
    }
}

export default Header