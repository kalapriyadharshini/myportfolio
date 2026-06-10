import { motion } from "framer-motion"

function Education() {
  return (
    <section id="education" className="education">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <h2 className="section-title">Education</h2>

        <div className="edu-content">

          <h3>Bachelor Of Engineering</h3>
           <p className="edu-stream">Computer Science Engineering</p>


          <p>
            Mountzion College of Engineering and Technology, Pudukkottai
          </p>

          <span>2021 - 2024</span>

          <p className="about-text">
            I have completed my Bachelor's degree in Computer Science Engineering, where I built a strong foundation in programming and software development.

            <br /><br />

            To enhance my practical skills, I completed a Full Stack Web Development course at Nschool Academy, gaining hands-on experience in technologies like HTML, CSS, JavaScript, React.js, Node.js, and MongoDB.

            <br /><br />

            I am passionate about building responsive web applications and continuously learning new technologies to grow as a developer.
          </p>

        </div>

      </motion.div>

    </section>
  )
}

export default Education