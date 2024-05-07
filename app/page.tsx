import { Intro, Overview, RepoDetail } from "@/components";
import { Features } from "@/components/home/Features";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Home() {
  const session = await getServerSession();
  if (session) {
    redirect("/dashboard");
  }
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
