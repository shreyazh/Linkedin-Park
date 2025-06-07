import { Menu, X, Users, Calendar, Trophy } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">LinkedIn Park</h1>
              <p className="text-xs text-gray-600">Network & Build Together</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#parks" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Parks
            </a>
            <a href="#events" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Events
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Projects
            </a>
            <a href="#community" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Community
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Join Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#parks" className="text-gray-700 hover:text-blue-600 font-medium">
                Parks
              </a>
              <a href="#events" className="text-gray-700 hover:text-blue-600 font-medium">
                Events
              </a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium">
                Projects
              </a>
              <a href="#community" className="text-gray-700 hover:text-blue-600 font-medium">
                Community
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full">
                Join Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}