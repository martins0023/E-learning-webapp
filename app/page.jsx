"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push(`/login`);
  };
  return (
    <section className="w-full flex-start flex-col">
      <div className="flex flex-row">
        <div>
          <h1 className="text-black text-[40px] font-normal text-start">
            Welcome to Our
            <div className="flex flex-col">
              <p className="text-primary font-bold">Virtual Connect</p>
              <p className="text-primary font-bold">Platform</p>
            </div>
          </h1>
          <p className="text-black font-semibold text-[24px]">
            We're excited to have you here
          </p>
          <p className="desc text-left">
            This is your space to explore, learn, and collaborate in a dynamic
            virtual environment. Whether you're a student or a lecturer, our
            platform is designed to support your journey with interactive tools,
            engaging content, and seamless connectivity. Dive in and make the
            most of your virtual experience!
          </p>
        </div>
        <Image
          src="/assets/illustration.png"
          width={750}
          height={800}
          className=""
        />
      </div>
    </section>
  );
};

export default Home;
