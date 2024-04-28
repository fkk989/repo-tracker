import Image from "next/image";
export const RepoDetail = () => {
  return (
    <div className="flex justify-center items-center gap-[100px] mt-[200px] w-[1200px]">
      <div className="flex flex-col gap-[30px]">
        <h1 className="text-[32px] font-bold">
          Repository <span>Details</span>
        </h1>
        <p className="text-dull-gray text-[18px]">
          Lot's of charts and information. RepoTracker crunches all the numbers
          and visualizes relevant statistics and key metrics about development
          activity in the tracked repositories.
        </p>
      </div>
      <Image
        className=" border-common-light-gray border-[1px] rounded-lg"
        src={
          "https://res.cloudinary.com/daixf8djk/image/upload/v1675380510/RepoTracker/details-dark_uuvptw.png"
        }
        alt=""
        width={570}
        height={420}
      />
    </div>
  );
};
