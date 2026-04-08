const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 text-white rounded-lg p-2 font-bold">
                AI
              </div>
              <span className="text-white font-bold">Code Reviewer</span>
            </div>
            <p className="text-gray-400 text-sm">
              Powered by Gemini AI, helping developers write better code.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">API</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Examples</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Community</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 AI Code Reviewer. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">GitHub</a>
          </div>
        </div>
      </div>
      
      {/* Floating Badge */}
      <div className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
        ⚡ Powered by Gemini
      </div>
    </footer>
  );
};

export default Footer;
