import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import AddCreator from "./pages/AddCreator"
import ShowCreators from "./pages/ShowCreators"
import EditCreator from "./pages/EditCreator"
import ViewCreator from "./pages/ViewCreator"

function App() {
  return (
    <>
      <BrowserRouter>
        <header id="navbar">
          <div id="page-title">Creatorverse</div>
          <div>
            <Link to="/" className="navigation-button">
              View all creators
            </Link>
            <Link to="/add" className="navigation-button">
              Add a creator
            </Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<ShowCreators />} />
          <Route path="/add" element={<AddCreator />} />
          <Route path="/edit/:id" element={<EditCreator />} />
          <Route path="/:id" element={<ViewCreator />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
