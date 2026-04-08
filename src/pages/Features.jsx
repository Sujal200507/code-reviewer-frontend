const Features = () => {
  const features = [
    {
      icon: "🔍",
      title: "Code Analysis",
      description: "Deep analysis of your code structure, identifying potential bugs, performance issues, and code smells."
    },
    {
      icon: "🚀",
      title: "Performance Optimization",
      description: "Get suggestions for improving code performance, reducing complexity, and optimizing algorithms."
    },
    {
      icon: "📋",
      title: "Code Style & Standards",
      description: "Ensure your code follows best practices and coding standards for better maintainability."
    },
    {
      icon: "🛡️",
      title: "Security Review",
      description: "Identify security vulnerabilities and potential security risks in your codebase."
    },
    {
      icon: "📚",
      title: "Learning Suggestions",
      description: "Get educational insights and explanations to understand and improve your coding skills."
    },
    {
      icon: "⚡",
      title: "Instant Feedback",
      description: "Receive immediate feedback on your code without waiting, perfect for rapid development."
    }
  ];

  const languages = [
    { icon: "⚡", name: "JavaScript" },
    { icon: "🐍", name: "Python" },
    { icon: "⚛️", name: "React" },
    { icon: "💚", name: "Node.js" },
    { icon: "📘", name: "TypeScript" },
    { icon: "☕", name: "Java" },
    { icon: "🔧", name: "C++" },
    { icon: "🐹", name: "Go" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-white">Powerful Features for </span>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Better Code</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Our AI-powered code reviewer provides comprehensive analysis and suggestions to help you write cleaner, more efficient, and maintainable code.
        </p>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Supported Languages */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">Supported Languages & </span>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Frameworks</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {languages.map((lang, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:border-blue-600 hover:bg-slate-800/70 transition transform hover:scale-105"
            >
              <div className="text-4xl mb-3">{lang.icon}</div>
              <p className="text-white font-semibold">{lang.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Benefits */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-600/30 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-8">Why Our AI Review is Different</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-white font-bold mb-2">AI-Powered Insights</h3>
                <p className="text-gray-400">Powered by Google's Gemini AI for accurate and intelligent code analysis.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">⚡</div>
              <div>
                <h3 className="text-white font-bold mb-2">Lightning Fast</h3>
                <p className="text-gray-400">Get results in seconds, not minutes. Perfect for iterative development.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">📚</div>
              <div>
                <h3 className="text-white font-bold mb-2">Learn While Reviewing</h3>
                <p className="text-gray-400">Get educational feedback that helps you improve your coding skills.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">🔒</div>
              <div>
                <h3 className="text-white font-bold mb-2">Privacy Focused</h3>
                <p className="text-gray-400">Your code is secure. We don't store or share your code with anyone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
