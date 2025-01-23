import { useState } from "react"

//components
import SimpleSnackbar from "./components/SimpleSnackbar"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

//css
import "./css/style.css"
import "./css/queries.css"
import Footer from "./components/Footer"

function App() {
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState("")

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact setOpen={setOpenSnackbar} setSnackbarMessage={setSnackbarMessage} />
      <Footer />
      <SimpleSnackbar open={openSnackbar} setOpen={setOpenSnackbar} message={snackbarMessage} />
    </>
  )
}

export default App
