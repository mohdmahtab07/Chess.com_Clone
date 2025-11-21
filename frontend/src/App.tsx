import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Game from "./pages/Game"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/play" element={<Game />} />
    </Routes>
  )
}

export default App
