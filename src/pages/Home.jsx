import ServiceCard from "../components/ServiceCard"
import CTA from "../components/CTA"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0A2540] via-[#1B3A6B] to-[#3A86FF] text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Building Scalable Digital Solutions for Modern Businesses
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Nottingham IT Solutions helps companies innovate, scale, and succeed
            with cutting-edge software, cloud infrastructure, and tailored IT services.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-[#0A2540] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-[#0A2540] transition">
              Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Graph Section */}
      <section className="bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Our Growth & Impact
            </h2>
            <p className="text-gray-600">
              A snapshot of our consistent delivery and client growth over the years.
            </p>
          </div>

          <div className="w-full h-[350px]">
            <ResponsiveContainer>
              <LineChart
                data={[
                  { year: "2020", projects: 20 },
                  { year: "2021", projects: 45 },
                  { year: "2022", projects: 70 },
                  { year: "2023", projects: 95 },
                  { year: "2024", projects: 120 },
                ]}
              >
                <XAxis dataKey="year" stroke="#0A2540" />
                <YAxis stroke="#0A2540" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="projects"
                  stroke="#3A86FF"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver end-to-end technology solutions that empower businesses
            to thrive in a digital-first world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="Custom Software Development"
            desc="Robust, scalable, and secure applications tailored to your business needs."
          />
          <ServiceCard
            title="Cloud & DevOps Solutions"
            desc="Seamless cloud migration, automation, and infrastructure optimization."
          />
          <ServiceCard
            title="Web & Mobile Applications"
            desc="Modern, high-performance apps designed for exceptional user experience."
          />
        </div>

        <div className="mt-16">
          <CTA />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Nottingham IT Solutions?
          </h2>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            We combine deep technical expertise with business understanding to
            deliver scalable, secure, and future-ready solutions. Our focus is
            on long-term partnerships and measurable business impact.
          </p>
        </div>
      </section>
    </>
  )
}
