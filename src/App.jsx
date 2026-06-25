import { BrowserRouter, Routes, Route } from 'react-router'
import Home from "./pages/Home"
import About from "./pages/About"
import Resturant from "./pages/Resturant"
import Villas from "./pages/Villas"
import Journal from "./pages/Journal"
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/restaurant" element={<Resturant />} />
          <Route path="/villas" element={<Villas />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App