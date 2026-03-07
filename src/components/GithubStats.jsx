function GithubStats() {
  return (
    <section>

      <h2 className="section-title">GitHub Stats</h2>

      <div className="github-stats">

        <img
          src="https://github-readme-stats.vercel.app/api?username=yourgithubusername&show_icons=true&theme=tokyonight"
          alt="github stats"
        />

        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=yourgithubusername&layout=compact&theme=tokyonight"
          alt="languages"
        />

      </div>

    </section>
  )
}

export default GithubStats