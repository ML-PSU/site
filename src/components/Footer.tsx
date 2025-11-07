export default function Footer() {
  return (
    <footer className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-[12vw] md:text-[10vw] font-serif text-white leading-none tracking-tight mb-8">
          ml@psu
        </h2>

        {/* Footer links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm md:text-base">
          <a
            href="mailto:machinelearningpennstate@gmail.com"
            className="hover:text-white transition-colors underline underline-offset-4"
          >
            Email
          </a>
          <a
            href="https://discord.gg/4BUhteYYgT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline underline-offset-4"
          >
            Discord
          </a>
          <a
            href="https://lu.ma/mlpsu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline underline-offset-4"
          >
            Calendar
          </a>
          <a
            href="https://github.com/ML-PSU"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline underline-offset-4"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-gray-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Machine Learning @ Penn State University</p>
      </div>
    </footer>
  )
}
