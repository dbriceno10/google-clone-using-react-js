import React from "react"

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <section className="country">
                    <p>Venezuela</p>
                </section>
                <section className="likns">
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
                </section>
            </footer>
        )
    }
}

export default Footer