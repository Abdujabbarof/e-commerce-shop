import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Detailed from "./pages/Detailed"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Detailed />} />
    </Routes>
  )
}

export default App
