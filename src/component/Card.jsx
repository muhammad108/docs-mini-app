import React from "react";
import { FaPage4 } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import {motion} from "framer-motion"
function Card({ data,reference }) {
  return (
    <>
      <motion.div drag dragConstraints={reference} className="relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
        <FaPage4 />
        <p className="text-sm leading-none mt-5 font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex items-center mb-5 justify-between px-8 py-3">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600  rounded-full flex items-center justify-center">
              {data.close ? (
                <IoIosClose />
              ) : (
                <LuDownload size=".7em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div className={`tag w-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}>
              <h3 className="text-sm font-semibold ">{data.tag.tagTittle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
export default Card;
