import Image from "next/image";

const TrustedBy = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-33.5 pt-6 sm:pt-8 md:pt-10 lg:pt-13.5 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-[91px] items-center max-w-full overflow-hidden">
      <span className="whitespace-nowrap font-bold text-lg sm:text-xl md:text-2xl">
        Trusted By:
      </span>
      <div className="flex flex-row items-center justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 overflow-x-auto sm:overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory scrollbar-hide">
        <Image
          src={"/home-office.png"}
          alt="Home Office"
          width={120}
          height={66}
          className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[152px] h-auto flex-shrink-0 snap-center"
        />
        <Image
          src={"/national-population-commission.png"}
          alt="National Population Commission"
          width={120}
          height={66}
          className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[152px] h-auto flex-shrink-0 snap-center"
        />
        <Image
          src={"/rarewox.png"}
          alt="Rarewox"
          width={120}
          height={66}
          className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[152px] h-auto flex-shrink-0 snap-center"
        />
        <Image
          src={"/eden.png"}
          alt="Eden"
          width={120}
          height={66}
          className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[152px] h-auto flex-shrink-0 snap-center"
        />
        <Image
          src={"/hrasa.png"}
          alt="Hrasa"
          width={120}
          height={66}
          className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[152px] h-auto flex-shrink-0 snap-center"
        />
      </div>
    </div>
  );
};

export default TrustedBy;