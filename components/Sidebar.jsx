'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const [active, setActive] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMounted(true); // Indicates that the component is mounted on the client-side
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      const currentPath = window.location.pathname; // Get the current path
      setActive(currentPath); // Set the full path as active
    }
  }, [mounted]);

  const handleMouseEnter = (path) => {
    setActive(path);
  };

  const handleMouseLeave = () => {
    if (mounted) {
      const currentPath = window.location.pathname;
      setActive(currentPath);
    }
  };

  return (
    <aside className="bg-white w-60 h-full shadow-lg fixed">
      <div className="flex items-center justify-center py-2 mt-3">
        <Image src="/assets/logo.png" alt="vconnect" width={100} height={50} />
      </div>
      <nav className="mt-5">
        <ul>
          {[
            { name: 'Dashboard', path: '/dashboard', icon: '/assets/dashboard-icon-black.png' },
            { name: 'Courses', path: '/dashboard/courses', icon: '/assets/courses-icon.png' },
            { name: 'My Activity', path: '/dashboard/activity', icon: '/assets/activity-icon.png' },
            { name: 'Time Table', path: '/dashboard/timetable', icon: '/assets/timetable-icon.png' },
            { name: 'Inbox', path: '/dashboard/inbox', icon: '/assets/timetable-icon.png' },
            { name: 'Submissions', path: '/dashboard/submissions', icon: '/assets/submissions-icon.png' },
            { name: 'All Students', path: '/dashboard/all-students', icon: '/assets/students-icon.png' },
            { name: 'Group', path: '/dashboard/group', icon: '/assets/students-icon.png' },
            { name: 'Quiz', path: '/dashboard/quiz', icon: '/assets/quiz-icon.png' },
            { name: 'Settings', path: '/dashboard/profile', icon: '/assets/settings-icon.png' },
          ].map((item, index) => (
            <li key={index} className="relative">
              <Link
                href={item.path}
                onMouseEnter={() => handleMouseEnter(item.path)}
                onMouseLeave={handleMouseLeave}
                className={`flex items-center py-3 px-6 transition-colors ${
                  active === item.path
                    ? 'text-white bg-black hover:bg-[#0000002a] hover:rounded-none'
                    : 'text-black hover:text-primary hover:bg-slate-400'
                }`}
              >
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={24}
                  height={24}
                  className="mr-4"
                />
                <p className='text-[14px] font-medium'>{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Image 
          src="/assets/diploma.png"
          width={177}
          height={162}
          className="mb-10"
        />
        <Link
          href="/"
          className="W-[177PX] flex justify-center items-center text-black underline font-medium"
        >Logout</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
