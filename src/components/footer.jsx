import { Github, Linkedin, Mail, MapPin, Phone, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const code = "</>"

  return (
    <footer className="bg-white text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-black">About Me</h3>
            <p className="text-gray-900 leading-relaxed">
              Passionate developer creating innovative solutions and learning new technologies. Always excited to take
              on new challenges and build meaningful projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-black">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-900 hover:text-gray-700 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-900 hover:text-gray-700 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-900 hover:text-gray-700 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-900 hover:text-gray-700 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-900 hover:text-gray-700 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-black" />
                <a
                  href="mailto:labeebmuntasir@gmail.com"
                  className="text-gray-900 hover:text-gray-800 transition-colors"
                >
                  labeebmuntasir@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-black" />
                <span className="text-gray-900">+1 (806) 702-9801</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-black" />
                <span className="text-gray-900">Lubbock, TX</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-black">Connect</h3>
            <div className="flex space-x-4">
              <button
                variant="outline"
                size="icon"
                className="bg-gray-700 border border-gray-900 rounded-md p-2 hover:border-gray-700 hover:bg-gray-600"
                asChild
              >
                <a href="https://github.com/lbm-realty" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5 text-white" />
                </a>
              </button>
              <button
                variant="outline"
                size="icon"
                className="bg-gray-700 border border-gray-900 rounded-md p-2 hover:border-gray-700 hover:bg-gray-600"
                asChild
              >
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-gray-200" />
                </a>
              </button>
              <button
                variant="outline"
                size="icon"
                className="bg-gray-700 p-2 rounded-md border border-gray-900 hover:border-gray-700 hover:bg-gray-600"
                asChild
              >
                <a href="mailto:labeebmuntasir@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5 text-gray-200" />
                </a>
              </button>
            </div>

            {/* Resume Download */}
            <div className="pt-4">
              <button className="border-2 border-gray-700 p-2 rounded-xl font-bold text-gray-800 hover:bg-gray-700 hover:text-white" asChild>
                <a href="/resume.pdf" download className="inline-flex items-center gap-2">
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">© {currentYear} Labeeb Muntasir. All rights reserved.</p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with {code} and lots of caffeine
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer