import React, { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientY / window.innerHeight - 0.5) * 20;
      const y = (e.clientX / window.innerWidth - 0.5) * 20;
      setRotation({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-custom-black z-50">
      <div className="text-center">
        <div
          className="w-32 h-32 mb-8 relative perspective-500"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          <div className="w-full h-full absolute cube-face bg-custom-light-gray opacity-70"></div>
          <div className="w-full h-full absolute cube-face bg-custom-light-gray opacity-70"></div>
          <div className="w-full h-full absolute cube-face bg-custom-light-gray opacity-70"></div>
          <div className="w-full h-full absolute cube-face bg-custom-light-gray opacity-70"></div>
          <div className="w-full h-full absolute cube-face bg-custom-light-gray opacity-70"></div>
          <div className="w-full h-full absolute cube-face bg-custom-light-gray opacity-70"></div>
        </div>
        <div className="flex items-center justify-center space-x-2 text-custom-white">
          <Loader className="animate-spin" size={24} />
          <span className="text-xl font-semibold">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;