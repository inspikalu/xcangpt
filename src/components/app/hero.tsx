import Leaf from "../leaf";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#011D0A] px-4 sm:px-10 md:px-16 lg:px-25 text-white relative overflow-hidden">
      <Leaf className="top-[-20%] left-[20%] scale-75 sm:scale-100" />
      <Leaf className="top-[30%] left-[-10%] scale-75 sm:scale-100" reverse />
      <Leaf className="top-[55%] left-[25%] scale-75 sm:scale-100" reverse />
      <section className="self-center flex flex-col items-start gap-4 sm:gap-5 md:gap-6 py-8 sm:py-12 md:py-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[100%] font-montaga">
          Tired of manually documenting forms? look no further.
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
          XCAN-GPT transforms the way you capture, manage, and access documents
          with next-generation Optical Character Recognition and an integrated
          Document Management System.
        </p>
        <button className="bg-[#034016] py-2 px-6 sm:px-8 text-xs sm:text-[.75rem] min-h-[40px] sm:min-h-[50px] rounded-[8px]">
          Get Started Now
        </button>
      </section>
      <section className="flex items-center justify-center">
        <Image
          src={"/hero-image.png"}
          width={571}
          height={571}
          alt="Hero Image"
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[571px]"
        />
      </section>
    </div>
  );
};

export default Hero;
