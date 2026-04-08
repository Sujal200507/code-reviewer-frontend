const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-white">About </span>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI Code Reviewer</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Learn more about our mission to revolutionize code quality and help developers write better code.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            At AI Code Reviewer, our mission is to empower developers worldwide by providing intelligent, instant code review feedback. We believe that every developer deserves access to expert-level code analysis, regardless of their experience level or budget.
          </p>
          <p className="text-gray-400 text-lg">
            We're leveraging the power of artificial intelligence to democratize code review, making it accessible, affordable, and automatic. Our goal is to help developers catch bugs earlier, write more efficient code, and continuously learn and improve their coding skills.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">🎯 Quality First</h3>
            <p className="text-gray-400">We prioritize accuracy and quality in every code review, ensuring developers get the most valuable feedback.</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">📚 Continuous Learning</h3>
            <p className="text-gray-400">We believe in the power of education and provide insights that help developers grow and improve.</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">🔓 Accessibility</h3>
            <p className="text-gray-400">We're committed to making advanced code review tools accessible to all developers, everywhere.</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">🔒 Privacy & Security</h3>
            <p className="text-gray-400">Your code is yours. We respect your privacy and never store, share, or misuse your code.</p>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-6">Powered by Latest Technology</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">🤖 Google Gemini AI</h3>
            <p className="text-gray-400 mb-4">
              We leverage Google's cutting-edge Gemini AI model to provide accurate, intelligent code analysis. The Gemini model understands code patterns, best practices, and can identify complex issues that traditional tools miss.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>✓ Advanced code understanding</li>
              <li>✓ Multi-language support</li>
              <li>✓ Fast processing speed</li>
              <li>✓ Accurate recommendations</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">⚛️ React & Node.js</h3>
            <p className="text-gray-400 mb-4">
              Built with modern technologies including React for the frontend and Node.js for the backend. This ensures a fast, responsive, and reliable user experience.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>✓ Fast and responsive UI</li>
              <li>✓ Real-time feedback</li>
              <li>✓ Scalable backend</li>
              <li>✓ Seamless experience</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Built by Developers, For Developers</h2>
        
        <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-600/30 rounded-lg p-12 text-center">
          <p className="text-gray-300 text-lg mb-8">
            AI Code Reviewer is created by passionate developers who understand the challenges of writing quality code. We've built this tool based on our own experiences and the feedback from thousands of developers worldwide.
          </p>
          <div className="inline-block bg-blue-600/20 border border-blue-600 rounded-lg px-6 py-4">
            <p className="text-white font-semibold">👥 Join our community of 100+ developers improving their code every day!</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl mb-4">📧</p>
            <p className="text-white font-bold mb-2">Email</p>
            <a href="mailto:support@aicodereview.com" className="text-blue-400 hover:text-blue-300">
              support@aicodereview.com
            </a>
          </div>

          <div>
            <p className="text-4xl mb-4">💬</p>
            <p className="text-white font-bold mb-2">Social Media</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-blue-400 hover:text-blue-300">Twitter</a>
              <a href="#" className="text-blue-400 hover:text-blue-300">LinkedIn</a>
            </div>
          </div>

          <div>
            <p className="text-4xl mb-4">🐙</p>
            <p className="text-white font-bold mb-2">GitHub</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              Visit our repository
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
