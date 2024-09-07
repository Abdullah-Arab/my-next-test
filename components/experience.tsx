'use client'

export function Experience() {
  const experiences = [
    {
      title: "Freelance Software Developer",
      company: "Self-employed",
      date: "2018 - Present",
      description: "Worked on multiple mobile and web applications, specializing in Flutter React development."
    },
    // Add more experiences here
  ]

  const education = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "University of Tripoli",
      date: "2015 - 2019"
    },
    {
      degree: "Linear Algebra Course",
      institution: "MIT (Online)",
      date: "2020"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="mb-12">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-600">{exp.company} | {exp.date}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-4">Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-lg font-semibold">{edu.degree}</h4>
            <p className="text-gray-600">{edu.institution} | {edu.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}