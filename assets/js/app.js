// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"
import React from "react"
import ReactDOM from "react-dom"
import Chat from "./containers/Chat"
class App extends React.Component {
  render() {
    return <Chat />
  }
}
ReactDOM.render(<App />, document.getElementById("app"))
// import socket from "./socket"
