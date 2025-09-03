import Image from "next/image";

const pills = [
  "Create Form Group",
  "Import document (PDF, Image) Single or Bulk upload",
  "Analysis & Recognition",
  "Data export",
];

export default function XcanGptOcrWorks() {
  return (
    <div className="px-4 sm:px-10 md:px-16 lg:px-25 py-8 sm:py-12 md:py-16 lg:py-31">
      <div className="flex flex-col items-start justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-[40px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-montaga">
          XCAN-GPT OCR Works
        </h2>
        <section className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-center gap-4 sm:gap-2">
          {pills.map((item, index) => (
            <div
              key={index}
              className="flex items-center flex-shrink-0 w-full sm:w-auto"
            >
              <span
                className={`text-center bg-[#0000000A] py-2 px-3 sm:py-3 sm:px-4 lg:py-4 lg:px-[14px] border border-[#D9D9D9] rounded-[24px] ${
                  index === 1
                    ? "whitespace-normal max-w-[20ch] sm:max-w-[25ch] md:max-w-[30ch] lg:max-w-[40ch]"
                    : "whitespace-nowrap max-w-[40ch]"
                } text-xs sm:text-sm lg:text-base`}
              >
                {index === 1 ? (
                  <>
                    Import document (PDF, Image) <br /> Single or Bulk upload
                  </>
                ) : (
                  item
                )}
              </span>
              {index !== pills.length - 1 && (
                <Image
                  height={0}
                  width={0}
                  alt="Arrow"
                  src={"/arrow.svg"}
                  className="mx-1 sm:mx-2 w-8 sm:w-12 md:w-16 lg:w-20 flex-shrink-0"
                />
              )}
            </div>
          ))}
        </section>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-[auto_60%] lg:grid-cols-[auto_55%] items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-[30px] mt-8 sm:mt-10 md:mt-12 lg:mt-15">
        <section className="flex flex-col items-start justify-center gap-4 sm:gap-5 md:gap-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-montaga">
            PDF & Image Import & Processing
          </h2>
          <span className="text-[#9A9A9A] text-sm sm:text-base">
            Managing files doesn’t have to be complicated. With XCAN-GPT, you
            can easily upload PDFs and images directly into the system for
            instant AI-powered processing. Whether it’s a scanned contract, a
            handwritten note, or a batch of invoices, our OCR engine recognizes
            and converts them into fully searchable, editable, and
            well-organized documents.
          </span>
          <button className="bg-[#034016] py-2 px-6 sm:px-8 text-xs sm:text-[.75rem] min-h-[40px] sm:min-h-[50px] rounded-[8px] text-[#FFF0F0]">
            Get Started Now
          </button>
        </section>
        <section className="flex items-center justify-center">
          <Image
            src={"/works.png"}
            width={674}
            height={303}
            alt="Image works stuff"
            className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[674px]"
          />
        </section>
      </section>
    </div>
  );
}
