// function About() {
//   return (
//     <section id="about">

//       <h2 className="section-title">About Me</h2>

//       <p>
//         I am a passionate Full Stack Developer skilled in
//         HTML, CSS, JavaScript, React, Node.js, Express,
//         MongoDB and MySQL.
//       </p>

//     </section>
//   )
// }

// export default About


// function About(){

// return(

// <section id="about" className="about">

// <h2>About Me</h2>

// <p>

// I am a passionate full stack developer who loves
// building responsive web applications using
// React, Node.js and modern technologies.

// </p>

// </section>

// )

// }

// export default About

import { motion } from "framer-motion"

function About(){

return(

<section id="about" className="about">

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>

<h2 className="section-title">About Me</h2>

<p className="about-text">

I am a motivated and passionate fresher web developer with knowledge in modern web technologies
<br />
<br />

I enjoy building responsive websites and web applications using HTML, CSS, JavaScript, React.js, Node.js and MongoDB.
<br />
<br />

I am eager to learn new technologies and start my career as a web developer.

</p>

</motion.div>

</section>

)

}

export default About