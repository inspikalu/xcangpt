import Image from "next/image";
const scenarios = [
  {
    icon: "/scenarios/1.png",
    title: "Content services, digital archiving, DMS, ECM",
    desc: "Let users of your systems easily find relevant information by turning documents into searchable and compressed PDF or PDF/A files that are available for electronic search and indexing.",
  },
  {
    icon: "/scenarios/3.png",
    title: "Cross-industry applications",
    desc: "Integrate automated document capture into your software for legal sector firms, banks and insurance companies to speed up processing of legal documents, mortgage applications or insurance claims.",
  },
  {
    icon: "/scenarios/2.png",
    title: "Healthcare applications",
    desc: "Securely capture paper-based patient information such as doctor notes or treatment plans directly into your electronic health record and hospital management platforms (EHR, HIMS).",
  },
  {
    icon: "/scenarios/4.png",
    title: "Search, eDiscovery and data analysis",
    desc: "Enable search engines and data analysis tools to detect important information hidden in scans and images by transforming them into electronically searchable and accessible files.",
  },
];
export default function CustomerScenarios() {
  return (
    <div className="px-4 sm:px-25 py-6 sm:py-37.5">
      <h2 className="text-center text-[1.5rem] sm:text-[2.5rem] font-montaga ">
        XCAN-GPT Customer Scenarios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-10 gap-y-6 sm:gap-y-13 mt-4 sm:mt-10">
        {scenarios.map((item, index) => (
          <div key={index}>
            <div className="text-[#000000] text-[1rem] sm:text-[1.5rem] flex items-center gap-2 sm:gap-4">
              <div className="aspect-square w-10 sm:w-14 bg-[#0E8C2B1C] rounded-full flex items-center justify-center">
                <Image
                  src={item.icon}
                  width={344}
                  height={100}
                  alt="icon"
                  className="w-6 sm:w-8 h-auto"
                />
              </div>
              {item.title}
            </div>
            <div className="text-[#9A9A9A] text-sm sm:text-base">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
