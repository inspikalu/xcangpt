import Image from "next/image";

const WhatIs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_55%] lg:grid-cols-2 justify-center items-center px-4 sm:px-10 md:px-16 lg:px-28 gap-6 sm:gap-8 md:gap-10 lg:gap-[43px] py-8 sm:py-12 md:py-16 lg:py-25">
      <section className="self-center flex items-center justify-center">
        <Image
          src={"/what-can.png"}
          alt="What is XCAN-GPT"
          height={344}
          width={587}
          className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[587px]"
        />
      </section>
      <section className="flex flex-col items-start justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-[24px]">
        <h2 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-montaga">
          What is XCAN-GPT Engine?
        </h2>
        <p className="text-[#9A9A9A] text-sm sm:text-base">
          XCAN-GPT is not just another OCR tool—it’s an intelligent ecosystem
          for document processing. Our AI-powered platform extracts, digitizes,
          and organizes documents with speed and accuracy, giving you full
          control through an advanced Document Management System (DMS).
        </p>
        <button className="bg-[#034016] py-2 px-6 sm:px-8 text-xs sm:text-[.75rem] min-h-[40px] sm:min-h-[50px] rounded-[8px] text-[#FFF0F0]">
          Get Started Now
        </button>
      </section>
    </div>
  );
};

export default WhatIs;
