// function Navbar() {
//   return (
//     <nav className="navbar">

//       <h2 className="logo">Kala.dev</h2>

//       <ul className="nav-links">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>

//     </nav>
//   )
// }

// export default Navbar




// function Navbar() {

//   return (
//     <nav className="navbar">

//       <h2 className="logo">Kala.dev</h2>

//       <ul className="nav-links">

//         <li><a href="#home">Home</a></li>

//         <li><a href="#about">About</a></li>

//         <li><a href="#skills">Skills</a></li>

//         <li><a href="#projects">Projects</a></li>

//         <li><a href="#contact">Contact</a></li>

//       </ul>

//     </nav>
//   )

// }

// export default Navbar



import { useState, useEffect } from "react"

function Navbar() {

const [active,setActive] = useState("home")

useEffect(()=>{

const sections = document.querySelectorAll("section")

const handleScroll = () => {

let current = ""

sections.forEach((section)=>{

const sectionTop = section.offsetTop - 100
const sectionHeight = section.clientHeight

if(window.scrollY >= sectionTop &&
window.scrollY < sectionTop + sectionHeight){

current = section.getAttribute("id")

}

})

setActive(current)

}

window.addEventListener("scroll",handleScroll)

return ()=>window.removeEventListener("scroll",handleScroll)

},[])

return (

<nav className="navbar">

<h2 className="logo">Kala.dev</h2>

<ul className="nav-links">

<li>
<a href="#home" className={active==="home" ? "active":""}>Home</a>
</li>

<li>
<a href="#about" className={active==="about" ? "active":""}>About</a>
</li>

<li>
<a href="#skills" className={active==="skills" ? "active":""}>Skills</a>
</li>

<li>
<a href="#projects" className={active==="projects" ? "active":""}>Projects</a>
</li>

<li>
<a href="#contact" className={active==="contact" ? "active":""}>Contact</a>
</li>

</ul>

</nav>

)

}

export default Navbar