import React from "react"

class Footer extends React.Component {
    render() {
        return(
            <footer>
                {/* <div className="country">
                    <p>Venezuela</p>
                </div> */}
                <ul className="footer-left">
                    <li>
                        <a href="#">Sobre Google</a>
                    </li>
                    <li>
                        <a href="#">Publicidad</a>
                    </li>
                    <li>
                        <a href="#">Negocios</a>
                    </li>
                    <li>
                        <a href="#">Cómo funciona la búsqueda</a>
                    </li>
                </ul>
                <ul className="footer-right">
                    <li>
                        <a href="#">Privacidad</a>
                    </li>
                    <li>
                        <a href="#">Condiciones</a>
                    </li>
                    <li>
                        <a href="#">Preferencias</a>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer