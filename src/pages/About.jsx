export default function About() {
  return (
    <div className="bg-white dark:bg-darkBg transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Page Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          About Nottingham IT Solutions
        </h2>

        {/* Intro */}
        <p className="text-lg md:text-xl text-secondary dark:text-gray-300 max-w-3xl mb-12">
          Nottingham IT Solutions is a modern technology company delivering
          scalable software, cloud infrastructure, and digital solutions to
          businesses worldwide. We help organizations innovate faster, operate
          efficiently, and stay competitive in a rapidly evolving digital landscape.
        </p>

        {/* Two Column Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Who We Are */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Who We Are
            </h3>
            <p className="text-secondary dark:text-gray-300 leading-relaxed">
              We are a team of engineers, designers, and technology specialists
              passionate about building high-quality digital products. With years
              of experience across industries, we bring deep technical expertise
              and a problem-solving mindset to every project.
            </p>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              What We Do
            </h3>
            <p className="text-secondary dark:text-gray-300 leading-relaxed">
              We specialize in custom software development, cloud solutions,
              web and mobile applications, and system integrations. From idea
              to deployment, we deliver end-to-end solutions tailored to your
              business goals.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">
            Our Values
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Innovation</h4>
              <p className="text-sm text-secondary dark:text-gray-400">
                We embrace new technologies and continuously evolve to deliver
                cutting-edge solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Quality</h4>
              <p className="text-sm text-secondary dark:text-gray-400">
                We prioritize performance, security, and reliability in everything we build.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Collaboration</h4>
              <p className="text-sm text-secondary dark:text-gray-400">
                We work closely with clients to ensure transparency and shared success.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Results</h4>
              <p className="text-sm text-secondary dark:text-gray-400">
                We focus on delivering real business outcomes, not just technical solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl">
          <h3 className="text-2xl font-semibold mb-4">
            Why Choose Nottingham IT Solutions
          </h3>
          <p className="text-secondary dark:text-gray-300 leading-relaxed">
            Our strength lies in combining technical expertise with a deep
            understanding of business needs. We build solutions that are not
            only functional but scalable, secure, and future-ready—helping
            your business grow with confidence.
          </p>
        </div>

      </div>
    </div>
  )
}
