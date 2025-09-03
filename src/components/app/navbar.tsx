
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full bg-[#034016F2] py-2 sm:py-3 md:py-4 flex items-start px-4 sm:px-10 md:px-16 lg:px-25">
      <span className="bg-white text-[#034016] font-[200] border-2 border-[#0E8C2B] py-1 px-2 sm:px-3 md:px-3.5 rounded-[24px] text-sm sm:text-base">
        <span className="font-extrabold">X</span>can <span>GPT</span>
      </span>
      <div className="ml-auto flex items-center justify-center gap-1 sm:gap-1.5">
        <button className="bg-white text-[#034016] text-[10px] sm:text-[11px] md:text-[12px] w-[120px] sm:w-[140px] md:w-[167px] flex items-center justify-center h-[30px] sm:h-[35px] md:h-[40px] rounded-[8px]">
          Book a free demo
        </button>
        <a
          href="#"
          className="bg-[#011D0A] text-white text-[10px] sm:text-[11px] md:text-[12px] w-[80px] sm:w-[85px] md:w-[95px] flex items-center justify-center h-[30px] sm:h-[35px] md:h-[40px] rounded-[8px]"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;