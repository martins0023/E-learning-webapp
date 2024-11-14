"use client";

import Sidebar from "../../../components/Sidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import DashboardNav from "../../../components/DashboardNav";

const Page = () => {
  const router = useRouter();

  const courses = [
    {
      id: 1,
      title: "(CYS 313) Cyber Diplomacy and International Cooperation",
      status: "Draft",
      progress: 40, // Example percentage
      public: true,
      imgSrc: "/assets/cys313.png",
    },
    {
      id: 2,
      title: "(CYS 311) Introduction to Security and Policy Development",
      status: "Complete",
      progress: 100,
      public: true,
      imgSrc: "/assets/cyss311.png",
    },
  ];

  const handleNavigate = (course) => {
    // Pass the title and imgSrc as URL parameters by encoding them
    const encodedTitle = encodeURIComponent(course.title);
    const encodedImgSrc = encodeURIComponent(course.imgSrc);

    if (course.progress === 100) {
      // Navigate to the course details page if the course is complete
      router.push(
        `/dashboard/courses/${course.id}?title=${encodedTitle}&imgSrc=${encodedImgSrc}`
      );
    } else {
      // Navigate to a different page (e.g., continue course page) if the course is not complete
      router.push(
        `/dashboard/courses/continue/${course.id}?title=${encodedTitle}&imgSrc=${encodedImgSrc}`
      );
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-60 w-full">
        {/* Dashboard Navigation */}
        <div className="bg-white w-full h-[128px]">
          <DashboardNav />
        </div>

        {/* Courses List */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotate: 30 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            type: "spring",
            stiffness: 300,
          }}
        >
          <div className="mt-10 px-8">
            <div className="flex flex-col gap-6">
              {courses.map((course) => (
                <div
                  onClick={() => handleNavigate(course)} // Pass the entire course object
                  key={course.id}
                  className="flex items-center cursor-pointer justify-between bg-white p-4 border rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={course.imgSrc}
                      alt={course.title}
                      width={100}
                      height={100}
                      className="rounded"
                    />
                    <div className="flex flex-col gap-7">
                      <p className="text-black text-[20px] font-bold w-[319px]">
                        {course.title}
                      </p>
                      <div className="flex flex-row items-center gap-2">
                        <p className="text-black font-bold text-[14px]">
                          {course.status === "Draft" ? "DRAFT" : ""}{" "}
                        </p>
                        <p className="text-[14px] font-normal text-black">
                          {course.public ? "Public" : "Private"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {course.status === "Complete" ? (
                      <div className="flex items-center text-green-600 gap-2">
                        <span className="mr-2 text-[14px] font-normal">
                          Complete
                        </span>
                        <Image
                          src="/assets/check_circle.png"
                          width={24}
                          height={24}
                        />
                      </div>
                    ) : (
                      <div className="flex flex-row gap-3">
                        <span className="text-black font-bold text-[14px]">
                          Finish the course
                        </span>
                        <div className="w-48 bg-gray-200 h-[4px] mt-2">
                          <div
                            className="bg-red-600 h-[4px]"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;