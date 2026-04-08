const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-white">Documentation & </span>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Usage Guide</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Learn how to use our AI-powered code reviewer effectively and get the most out of your code analysis experience.
        </p>
      </section>

      {/* Quick Start Guide */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-12">📚 Quick Start Guide</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition transform hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white font-bold rounded-full mb-4 text-xl">
              1
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Navigate to Code Review</h3>
            <p className="text-gray-400">
              Click on the 'Review Code' button in the navigation bar or use the 'Review My Code Now' button on the home page.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition transform hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white font-bold rounded-full mb-4 text-xl">
              2
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Paste Your Code</h3>
            <p className="text-gray-400">
              Copy your code from your editor and paste it into the code input area. You can paste any language we support.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition transform hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white font-bold rounded-full mb-4 text-xl">
              3
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Get AI Review</h3>
            <p className="text-gray-400">
              Click the 'Review Code' button and receive instant AI-powered feedback and suggestions for improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Tips & Tricks */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">💡 Tips & Tricks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition transform hover:scale-105">
            <h3 className="text-white font-bold mb-4">✨ Better Reviews</h3>
            <ul className="text-gray-400 space-y-3">
              <li>• <strong className="text-white">Add comments:</strong> Include comments explaining complex logic for better analysis</li>
              <li>• <strong className="text-white">Use clear naming:</strong> Use descriptive variable and function names</li>
              <li>• <strong className="text-white">Smaller snippets:</strong> Review smaller code sections for focused feedback</li>
              <li>• <strong className="text-white">Include imports:</strong> Add necessary imports for complete context</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition transform hover:scale-105">
            <h3 className="text-white font-bold mb-4">⚡ Performance Tips</h3>
            <ul className="text-gray-400 space-y-3">
              <li>• <strong className="text-white">Async reviews:</strong> Code is reviewed asynchronously for speed</li>
              <li>• <strong className="text-white">Real-time feedback:</strong> Get results instantly without delays</li>
              <li>• <strong className="text-white">Multiple reviews:</strong> Review as much code as you want</li>
              <li>• <strong className="text-white">No rate limits:</strong> Unlimited code reviews for all users</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">❓ Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition">
            <h3 className="text-white font-bold mb-3">What languages are supported?</h3>
            <p className="text-gray-400">
              We support all major programming languages including JavaScript, Python, React, Node.js, TypeScript, Java, C++, Go, and more. Our AI is trained on diverse codebases and can analyze code in virtually any language.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition">
            <h3 className="text-white font-bold mb-3">Is my code secure and private?</h3>
            <p className="text-gray-400">
              Yes! Your code is completely secure. We do not store, save, or share your code with anyone. Each review is processed in isolation, and your code is immediately deleted after analysis. Your privacy is our top priority.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition">
            <h3 className="text-white font-bold mb-3">How accurate are the reviews?</h3>
            <p className="text-gray-400">
              Our reviews are powered by Google's Gemini AI, which is trained on millions of code samples. The accuracy is typically 95%+ for bug detection, and the suggestions are based on industry best practices and modern coding standards.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition">
            <h3 className="text-white font-bold mb-3">What if I don't agree with a suggestion?</h3>
            <p className="text-gray-400">
              AI suggestions are meant to guide and educate. You're the final decision maker for your code. If you disagree with a suggestion, feel free to implement your own solution. We encourage critical thinking and professional judgment.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition">
            <h3 className="text-white font-bold mb-3">Can I use this in production?</h3>
            <p className="text-gray-400">
              Absolutely! Many teams use AI Code Reviewer as part of their development workflow. While we recommend combining AI reviews with human code reviews for quality assurance, AI reviews are excellent for catching common issues and improving code quality.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-600 hover:bg-slate-800/70 transition">
            <h3 className="text-white font-bold mb-3">How long does a review take?</h3>
            <p className="text-gray-400">
              Most reviews are completed in 2-5 seconds. The time depends on code length and complexity. Our system is optimized for speed without compromising on the quality of analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">📝 Code Examples</h2>
        
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
          <h3 className="text-white font-bold mb-4">Example: JavaScript Function Review</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div>
              <p className="text-gray-400 font-bold mb-3">❌ Before (What we review):</p>
              <pre className="bg-slate-900 p-4 rounded text-sm text-gray-300 overflow-x-auto">
{`function getData() {
  let data = fetch('/api/data')
    .then(r => r.json());
  return data;
}`}
              </pre>
            </div>

            {/* After */}
            <div>
              <p className="text-gray-400 font-bold mb-3">✅ After (What we suggest):</p>
              <pre className="bg-slate-900 p-4 rounded text-sm text-gray-300 overflow-x-auto">
{`async function getData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}`}
              </pre>
            </div>
          </div>

          <p className="text-gray-400 mt-6">
            💡 <strong className="text-white">Why this is better:</strong> Proper async/await handling, error handling, status code checking, and better clarity for readability.
          </p>
        </div>
      </section>

      {/* Best Practices */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">🎯 Best Practices</h2>
        
        <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-600/30 rounded-lg p-12">
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-2xl">✓</span>
              <div>
                <strong className="text-white">Review regularly:</strong>
                <p className="text-gray-400">Review your code frequently during development to catch issues early.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl">✓</span>
              <div>
                <strong className="text-white">Learn from feedback:</strong>
                <p className="text-gray-400">Read and understand the suggestions to improve your coding skills over time.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl">✓</span>
              <div>
                <strong className="text-white">Combine with human review:</strong>
                <p className="text-gray-400">Use AI reviews as a first pass, then have peers review for architectural feedback.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl">✓</span>
              <div>
                <strong className="text-white">Test the suggestions:</strong>
                <p className="text-gray-400">Always test suggested changes to ensure they work in your codebase.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
