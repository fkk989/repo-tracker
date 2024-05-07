import { Collection, CollectionRepos, SearchBar } from "@/components";
import { Suspense } from "react";
async function Dashboard() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex w-[80vw] ">
        {/* collection */}
        <div className="w-[25%] h-[calc(100vh-60px)]  border-r-[1px] border-r-[#3F3F45] box-border pl-[40px] pr-[30px] p-[20px] overflow-scroll scrollbar-hidden">
          <Suspense>
            <Collection />
          </Suspense>
        </div>
        {/* repo */}
        <div className="w-[50%] h-[calc(100vh-60px)]   box-border pl-[40px] pr-[30px] p-[20px] overflow-scroll scrollbar-hidden">
          <SearchBar />
          <div className="mt-[80px]">
            <CollectionRepos />
          </div>
        </div>
        {/* metrics */}
        <div className="w-[25%] h-[calc(100vh-60px)]  box-border pl-[40px] pr-[30px] p-[20px] overflow-scroll scrollbar-hidden "></div>
      </div>
    </div>
  );
}

export default Dashboard;
