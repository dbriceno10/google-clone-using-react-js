import React from 'react';
// import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import Header from "./componets/header"
import Main from "./componets/main"
import Footer from "./componets/footer"
import "./componets/styles/styles.css"
const header = document.getElementById("header")
const main = document.getElementById("main")
const footer = document.getElementById("footer")
ReactDOM.render(<Header/>,header)
ReactDOM.render(<Main/>, main)
ReactDOM.render(<Footer/>, footer)