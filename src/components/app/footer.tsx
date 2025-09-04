import Leaf from "../leaf";

export const FooterMain = () => {
  return (
    <footer className="text-center w-full h-12 sm:h-16 md:h-20 flex items-center justify-center bg-[#034016] text-white text-xs sm:text-sm md:text-base">
      xcangpt @ 2025
    </footer>
  );
};
export default function Footer() {
  return (
    <div className="relative overflow-hidden">
      <section className="bg-[#011D0A] w-full h-auto px-4 sm:px-10 md:px-16 lg:px-32 py-6 sm:py-10 md:py-16 lg:py-39.5 relative">
        <Leaf
          className="top-0 left-1/2 transform -translate-x-1/2 w-1/3 sm:w-1/4 md:w-1/5"
          reverse
        />
        <Leaf className="bottom-0 right-0 w-1/4 sm:w-1/5" />
        <Leaf className="bottom-0 left-0 w-1/4 sm:w-1/5" />
        <div
          className="text-white py-4 sm:py-6 md:py-8 lg:py-11.5 px-4 sm:px-10 md:px-12 lg:px-81.5 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center justify-center rounded-[24px] mx-auto max-w-[1200px] w-full"
          style={{
            background:
              "linear-gradient(275.27deg, #011D0A -24.32%, #05832D 100%)",
          }}
        >
          <h2 className="text-[1.25rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] font-montaga text-center">
            See XCAN-GPT in Action
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-center">
            Discover how AI-powered OCR and smart document management can
            transform your workflows. Book a personalized demo with our team and
            experience the future of document processing.
          </p>
          <button className="bg-[#034016] py-2 px-5 sm:px-6 md:px-8 text-[0.5rem] sm:text-[0.625rem] md:text-[.75rem] min-h-[35px] sm:min-h-[40px] md:min-h-[50px] rounded-[8px] text-[#FFF0F0]">
            Book a Free Demo
          </button>
        </div>
      </section>
      <FooterMain />
    </div>
  );
}
