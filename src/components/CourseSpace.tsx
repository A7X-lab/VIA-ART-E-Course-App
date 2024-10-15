import React from 'react';
import { Play, Book, Clock, User } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Introduction to AI',
    description: 'Learn the basics of Artificial Intelligence and Machine Learning',
    duration: '6 weeks',
    lessons: 24,
    image: 'https://images.unsplash.com/photo-1592085974642-7e1d8f7d31a5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageOwner: 'Christian Lue',
  },
  {
    id: 2,
    title: 'Advanced Web Development',
    description: 'Master modern web technologies and frameworks',
    duration: '8 weeks',
    lessons: 32,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    imageOwner: 'Mohammad Rahmani',
  },
  {
    id: 3,
    title: 'Cybersecurity Fundamentals',
    description: 'Understand the core concepts of cybersecurity and threat prevention',
    duration: '5 weeks',
    lessons: 20,
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    imageOwner: 'Towfiqu barbhuiya',
  },
];

const CourseSpace: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-6">Featured Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-custom-dark-gray rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative h-48">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 right-0 bg-custom-black bg-opacity-75 text-custom-white text-xs px-2 py-1">
                <User size={12} className="inline mr-1" />
                {course.imageOwner}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-custom-light-gray mb-4">{course.description}</p>
              <div className="flex items-center justify-between text-sm text-custom-light-gray">
                <span className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {course.duration}
                </span>
                <span className="flex items-center">
                  <Book size={16} className="mr-1" />
                  {course.lessons} lessons
                </span>
              </div>
            </div>
            <div className="bg-custom-light-gray p-4">
              <button className="w-full flex items-center justify-center space-x-2 text-custom-black font-semibold hover-bg-custom-white">
                <Play size={20} />
                <span>Start Learning</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSpace;