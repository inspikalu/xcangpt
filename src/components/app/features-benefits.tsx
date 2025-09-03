import Image from "next/image";

export default function FeaturesBenefit() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[55%_auto] lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-[43px] p-4 sm:p-10 md:p-16 lg:p-25">
      <section className="flex flex-col items-start justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-[24px] pr-0 sm:pr-6 md:pr-8 lg:pr-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-montaga">
          Features & Benefits
        </h2>
        <ul className="text-[#9A9A9A] text-sm sm:text-base flex flex-col items-start justify-center gap-3 sm:gap-4">
          <li>
            <span className="font-bold text-black">AI-Powered OCR: </span>
            Instantly convert scanned documents, PDFs, and images into
            searchable, editable text.
          </li>
          <li>
            <span className="font-bold text-black">
              Document Management System (DMS):{" "}
            </span>
            Store, organize, and retrieve files seamlessly.
          </li>
          <li>
            <span className="font-bold text-black">
              Smart Search & Indexing:{" "}
            </span>
            Quickly find any document with AI-driven search.
          </li>
          <li>
            <span className="font-bold text-black">
              Secure Access Control:{" "}
            </span>
            Role-based permissions keep your data safe.
          </li>
        </ul>
        <button className="bg-[#034016] py-2 px-6 sm:px-8 text-xs sm:text-[.75rem] min-h-[40px] sm:min-h-[50px] rounded-[8px] text-[#FFF0F0]">
          Get Started Now
        </button>
      </section>
      <section className="self-center flex items-center justify-center">
        <Image
          src={"/features-benefits.png"}
          alt="What is XCAN-GPT"
          height={344}
          width={587}
          className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[587px]"
        />
      </section>
    </div>
  );
}
