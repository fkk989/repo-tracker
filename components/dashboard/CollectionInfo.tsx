import { ModalProp } from "./CollectionAdder";

interface Props extends ModalProp {}

export const CollectionInfo: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[4]"
      style={{
        display: open ? "flex" : "none",
      }}
    >
      <div
        className="fixed w-screen h-screen bg-[rgba(0,0,0,0.3)] z-[3]"
        onClick={() => {
          setOpen(false);
        }}
      ></div>
      <div className="relative w-[450px] flex flex-col  bg-common-gray rounded-md z-[4] p-[10px] gap-[5px]">
        <div
          className="absolute top-0 right-[10px] text-[22px] cursor-pointer"
          onClick={() => {
            setOpen(false);
          }}
        >
          x
        </div>
        <h1 className="text-[18px] font-bold">What is a collection</h1>
        <p>
          With Collections you can bundle repositories together and organize
          them, e.g. by topic, technology, etc.
        </p>
        <p>Repositories can be in multiple collections at the same time.</p>
        <p>
          The main collection is always available is always available for the
          repositories that you want to track on a daily basis.
        </p>
      </div>
    </div>
  );
};
