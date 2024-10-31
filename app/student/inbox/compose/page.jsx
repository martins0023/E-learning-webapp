"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../../components/Sidebar";
import DashboardNav from "../../components/DashboardNav";
import Image from "next/image";

const messages = [

]
const InboxPage = () => {
  const [sortOrder, setSortOrder] = useState("Newest");
  const [filter, setFilter] = useState("All");

  const filteredMessages = messages.filter((message) => {
    if (filter === "Unread") return !message.isRead;
    if (filter === "Marked") return message.isMarked;
    return true;
  });
  
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
          {/* Search and Filter Options */}
          <div className="flex items-center gap-[60px] mb-6">
            <div className="flex space-x-4">
              {["All", "Unread", "Marked"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`${
                    filter === tag
                      ? "text-primary font-bold text-[14px]"
                      : "text-[#8C8C8C]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div>
              <div>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="text-gray-600 font-medium text-[16px] bg-white border p-4 rounded-sm w-[154px]"
                >
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>
          </div>

          {/* Compose New Message Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Compose New Message
            </h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="To:"
                className="w-full p-3 border border-gray-300 rounded-md mb-2"
              />
              <input
                type="text"
                placeholder="Subject:"
                className="w-full p-3 border border-gray-300 rounded-md mb-2"
              />
            </div>

            {/* Text Formatting Options */}
            <div className="border border-gray-300 rounded-md p-3 mb-4">
              <div className="flex space-x-4 mb-3 text-gray-600">
                <span className="cursor-pointer font-semibold">
                  A Normal Text
                </span>
                <span className="cursor-pointer font-bold">Bold</span>
                <span className="cursor-pointer italic">Italic</span>
                <span className="cursor-pointer underline">Underline</span>
              </div>
              <textarea
                rows="6"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Attachment Section */}
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/assets/attachment.png"
                width={29.35}
                height={31.16}
                className="w-[29.35px] h-[31.16px] "
                alt="attachment"
              />
              <span className="text-gray-600 font-semibold">Attachment</span>
            </div>
            <div className="border-2 border-dashed border-primary p-8 text-center mb-4 text-gray-600">
              DRAG FILE HERE OR{" "}
              <span className="text-primary">BROWSE FILE</span>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 items-center">
              <button className="px-4 py-2 border justify-center border-gray-300 rounded-full h-[44px] w-[157px] items-center">
                Signup
              </button>
              <button className="flex justify-center px-4 h-[44px] py-2 bg-primary text-white rounded-full items-center w-[157px]">
                Send
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InboxPage;
