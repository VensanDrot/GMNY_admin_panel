import React, { SetStateAction } from "react";
import Image from "next/image";
import close from "../img/x.svg";

interface IProps {
  modal: boolean;
  setModal: React.Dispatch<SetStateAction<boolean>>;
  topText?: string;
  children?: React.ReactNode;
}

const ModalWindow: React.FC<IProps> = ({ modal, setModal, topText = "Modal window", children }) => {
  return (
    <>
      <div
        className={`overflow-hidden top-0 !z-50 ease-in-out !w-screen fixed !h-screen left-[-100%] duration-500 ${
          modal && "!left-0 !bg-black/30"
        }`}
      >
        <div
          className={` w-[580px] rounded-xl h-[450px] my-auto mx-auto top-0 bottom-0 bg-white p-5 fixed ease-in-out duration-500 z-50 flex flex-col gap-4 overflow-x-hidden ${
            modal && "inset-0"
          }`}
        >
          <div className="flex w-full justify-between items-center">
            <h2 className="text-neutral-900 text-lg font-medium leading-7">{topText}</h2>
            <button type="button" onClick={() => setModal(false)}>
              <Image src={close} className="h-5 w-5" alt="close" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalWindow;
