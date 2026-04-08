import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-56 h-56 sm:w-72 sm:h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-40 left-10 w-56 h-56 sm:w-72 sm:h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10">
          <p className="text-gray-400 text-base sm:text-lg mb-4">✨ Used By 100+ Developers</p>
          
          <h1 className="text-4xl sm:text-6xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            AI-Powered Code Review
          </h1>
          
          <h2 className="text-3xl sm:text-5xl font-black mb-8 text-white">
            – Instantly Improve Your Code!
          </h2>
          
          <p className="text-gray-300 text-base sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            With AI-powered code review, you can catch errors, improve readability, and maintain your code in style. Get instant, constructive feedback on your code with our advanced AI analyzer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              to="/review"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-4 rounded-full font-bold text-base sm:text-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              🚀 Review My Code Now
            </Link>
            
            <Link 
              to="/features"
              className="border-2 border-blue-600 hover:bg-blue-600 text-blue-400 hover:text-white px-6 sm:px-8 py-4 rounded-full font-bold text-base sm:text-lg transition flex items-center justify-center"
            >
              Explore Features
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-center">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition transform hover:scale-105">
              <p className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">100+</p>
              <p className="text-gray-400">Active Developers</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition transform hover:scale-105">
              <p className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">10K+</p>
              <p className="text-gray-400">Code Reviews</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition transform hover:scale-105">
              <p className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">99.9%</p>
              <p className="text-gray-400">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Preview Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="text-white">Why Choose </span>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI Code Reviewer?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition transform hover:scale-105">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-3">Instant Analysis</h3>
            <p className="text-gray-400">Get comprehensive code analysis in seconds using advanced AI algorithms.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition transform hover:scale-105">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">Performance Focus</h3>
            <p className="text-gray-400">Identify bottlenecks and optimization opportunities in your code.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition transform hover:scale-105">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
            <p className="text-gray-400">Detect vulnerabilities and security issues before they become problems.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Improve Your Code?</h2>
        <p className="text-gray-400 text-lg mb-8">Start reviewing your code with AI-powered insights today!</p>
        
        <Link 
          to="/review"
          className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-bold text-lg transition transform hover:scale-105"
        >
          Start Code Review ✨
        </Link>
      </section>
    </div>
  );
};

export default Home;
