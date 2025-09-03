const Navbar = () => {
  return (
    <div className="w-full bg-[#034016F2] py-4 flex items-start px-25">
      <span className="bg-white text-[#034016] font-[200] border-2 border-[#0E8C2B] py-1 px-3.5 rounded-[24px] text-base">
        <span className="font-extrabold">X</span>can <span>GPT</span>
      </span>
      <div className="ml-auto flex items-center justify-center gap-1.5">
        <button className="bg-white text-[#034016] text-[12px] w-[167px] flex items-center justify-center h-[40px] rounded-[8px]">
          Book a free demo
        </button>
        <a
          href="#"
          className="bg-[#011D0A] text-white text-[12px] w-[95px] flex items-center justify-center h-[40px] rounded-[8px]"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
