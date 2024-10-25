"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../../../../components/Sidebar";
import DashboardNav from "../../../../../components/DashboardNav";
//import Sidebar from "../../../../components/Sidebar";
//import DashboardNav from "../../../../components/DashboardNav";

// Sample data for student details
const groupDetails = {
  id: 1,
  name: "Group A",
  topic: "Cyber Security",
  students: [
    { id: 1, name: "James Adetola", regNo: "CS/F22/3280" },
    { id: 2, name: "Jane Doe", regNo: "CS/F22/3281" },
    { id: 3, name: "John Smith", regNo: "CS/F22/3282" },
    // Add more student data here
  ],
};

const page = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push(`/dashboard/group/groups`);
  };

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-60 w-full">
        {/* Dashboard Navigation */}
        <div className="bg-white w-full h-[128px]">
          <DashboardNav />
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-center flex flex-col justify-center">
            <p className="text-black font-bold text-[28px]">{groupDetails.topic} Group Assignment</p>
            <p className="text-primary font-semibold text-[20px] mt-4">
              {groupDetails.name} <span className="font-normal">({groupDetails.students.length} students)</span>
            </p>
          </div>

          <div className="mt-10 px-8 flex w-full gap-7">
            <div className="w-full bg-white p-5 rounded-md shadow-md">
              <p className="text-primary font-bold">Assignment</p>
              <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim ad minim veniam...</p>
            </div>
          </div>

          <div className="mt-10 px-8">
            <h3 className="text-primary font-semibold text-[20px]">Group Members</h3>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {groupDetails.students.map((student) => (
                <div key={student.id} className="flex items-center bg-white p-4 rounded-md shadow-md">
                  <img
                    src={`/images/${student.id}.jpg`} // Replace with actual image logic
                    alt={student.name}
                    className="h-10 w-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-[16px]">{student.name}</p>
                    <p className="text-sm text-gray-500">{student.regNo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <button
              onClick={handleBack}
              className="bg-primary text-white px-4 py-2 rounded-md"
            >
              Back to Groups
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
