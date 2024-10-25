"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../../../../components/Sidebar";
import DashboardNav from "../../../../components/DashboardNav";
import { useRouter } from "next/navigation";

const groupsData = [
  { id: 1, name: "Group A", topic: "Cyber Security", students: 8, dueDate: "Mon SEP 14", time: "10:00AM" },
  { id: 2, name: "Group B", topic: "Networking", students: 8, dueDate: "Mon SEP 14", time: "10:00AM" },
  { id: 3, name: "Group C", topic: "AI in Security", students: 8, dueDate: "Mon SEP 14", time: "10:00AM" },
  // Add more group data here
];

const page = () => {
  const [filter, setFilter] = useState("all"); // filter state
  const router = useRouter();

  const handleViewDetails = (id) => {
    router.push(`/dashboard/group/groups/${id}`);
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
        <motion.div
          className="p-8"
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
          <div className="text-center flex flex-col justify-center ">
            <p className="text-black font-bold text-[28px]">Cyber Security Group Assignment</p>
            <div className="flex justify-between flex-row items-center mt-5 px-8">
              <div className="flex">
                <p className="text-primary font-semibold text-[20px]">Groups</p>
              </div>

              <div className="flex bg-white items-center gap-1 cursor-pointer border-black border p-3 mt-5 rounded-sm h-[37px] w-[118px] mr-5">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="text-black font-medium text-[16px] bg-whit w-full max-w-3xl"
                >
                  <option value="all">All</option>
                  <option value="az">A-Z</option>
                  <option value="za">Z-A</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-10 px-8 flex w-full gap-7 flex-wrap">
            {groupsData.map((group) => (
              <div key={group.id} className="bg-white border-primary border-[1px] rounded-md p-5 w-[250px]">
                <p className="text-primary font-semibold">{group.name} <span className="font-normal">({group.students} students)</span></p>
                <p>Topic: {group.topic}</p>
                <p>To be submitted at {group.time}</p>
                <p>{group.dueDate}</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleViewDetails(group.id)}
                    className="bg-primary text-white px-3 py-1 rounded-md"
                  >
                    View Details
                  </button>
                  <button className="bg-secondary text-white px-3 py-1 rounded-md">
                    Edit Group
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
