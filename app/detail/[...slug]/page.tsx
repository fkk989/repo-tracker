import { DailyCommits, DoughnutChart, StackedChart } from "@/components";
export default function Page({ params }: { params: { slug: Array<string> } }) {
  console.log(params);
  return (
    <div className="w-screen min-h-screen flex  justify-center items-center">
      <div className="w-[80vw] flex flex-col gap-[50px]">
        <DailyCommits width="900px" height="300px" />
        <StackedChart />
        <DoughnutChart />
      </div>
    </div>
  );
}
