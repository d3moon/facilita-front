import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import CadastroCliente from "./CadastroCliente"  // Corrigir o caminho do import


const RoutesDom = () => {
  return (
    <Router>
      <Routes>
      <Route element={<Home />} exact path="/" />
      <Route element={<CadastroCliente />} path="/cadastrar" />
      </Routes>
    </Router>
  )
}

export default RoutesDom