import { Intro, Overview, RepoDetail } from "@/components";
import { Features } from "@/components/home/Features";
import React from "react";
async function Home() {
  return (
    <div className="w-screen flex flex-col items-center">
      <Intro />
      <Overview />
      <RepoDetail />
      <Features />
    </div>
  );
}
export default Home;
