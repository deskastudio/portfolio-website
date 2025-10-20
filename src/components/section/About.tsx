'use client'

import { personalInfo, stats } from '@/lib/data'
import { GraduationCap, Code, Trophy, Calendar } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      value: personalInfo.university,
      description: `${personalInfo.gpa} GPA • 8th Semester`
    },
    {
      icon: Code,
      title: "Current Role",
      value: "Frontend Developer",
      description: "Nova Development - Web3 Platform"
    },
    {
      icon: Trophy,
      title: "Experience",
      value: "Lab Assistant",
      description: "Teaching 30+ students"
    },
    {
      icon: Calendar,
      title: "Expected Graduation",
      value: personalInfo.expectedGraduation,
      description: "Information Systems"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about creating amazing user experiences with modern web technologies
          </p>
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Frontend Developer & Final Year Student
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  8th semester Information Systems student at Gunadarma University with a passion 
                  for Frontend Development. Currently working as a Frontend Developer at Nova Development, 
                  building Web3 blockchain trading platforms using modern technologies.
                </p>
                <p>
                  Experienced in Agile Scrum methodology through real-world projects including my final 
                  thesis project. I also serve as a Laboratory Assistant, guiding 30+ students 
                  in programming and database practicum sessions.
                </p>
                <p>
                  Always eager to learn new technologies and create optimal user experiences. 
                  Currently focused on completing my studies while gaining valuable industry experience 
                  in the Web3 and blockchain space.
                </p>
              </div>
            </div>

            {/* Skills badges */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'Next.js', 'TypeScript', 'Solana', 'Tailwind CSS', 'Web3'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Connect on LinkedIn
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right side - Stats & Highlights */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {item.title}
                      </div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About