import React, { useState, useEffect } from 'react';
import { Book, ShoppingCart, Menu, X } from 'lucide-react';
import CourseSpace from './components/CourseSpace';
import EcommerceSpace from './components/EcommerceSpace';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [activeSpace, setActiveSpace] = useState<'courses' | 'ecommerce'>('courses');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate loading for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-custom-black text-custom-white">
      <header className="bg-custom-dark-gray py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold uppercase">VIA ART</h1>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-custom-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <button
                onClick={() => setActiveSpace('courses')}
                className={`flex items-center space-x-2 ${
                  activeSpace === 'courses' ? 'text-custom-white' : 'text-custom-light-gray'
                }`}
              >
                <Book size={20} />
                <span>Courses</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSpace('ecommerce')}
                className={`flex items-center space-x-2 ${
                  activeSpace === 'ecommerce' ? 'text-custom-white' : 'text-custom-light-gray'
                }`}
              >
                <ShoppingCart size={20} />
                <span>Shop</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        {activeSpace === 'courses' ? <CourseSpace /> : <EcommerceSpace />}
      </main>
      <footer className="bg-custom-dark-gray py-4 px-6 text-center">
        <p>© 2023 VIA ART. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;