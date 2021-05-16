import React from "react"

class Main extends React.Component {
    render() {
        return (
            <div>
                <section className="main-logo">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo-google"/>
            </section>
            <section className="main-input">
                <div className="main-input-container">
                    <span className="search-icon"></span>
                    <input type="text"/>
                    <a className="micro-icon" href="#"></a>
                </div>
            </section>
            <section class="main-buttons">
                <div>
                    <button>Buscar con Google</button>
                </div>
                <div>
                    <button>Me siento con suerte</button>
                </div>
            </section>
            <section>
                <p  className="main-languaje">Ofrecido por Google en: <a href="#">English</a></p>
            </section>
            </div>
        )
    }
}

export default Main