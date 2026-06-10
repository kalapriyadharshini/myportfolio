




// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import About from "./components/About"
// import Skills from "./components/Skills"
// import Projects from "./components/Projects"
// import GithubStats from "./components/GithubStats"
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"

// function App() {
//   return (
//     <div>

//       <Navbar />

//       <Hero />

//       <About />

//       <Skills />

//       <Projects />

//       <GithubStats />

//       <Contact />

//       <Footer />

//     </div>
//   )
// }

// export default App




import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

import "./App.css"
import Education from "./components/Education"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />       
      <Projects />
      <Contact />
    </>
  )
}

export default App