import Link from "next/link";
import Navbar from "@/components/app/navbar";
import { FooterMain } from "@/components/app/footer";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <>
        <div className="grid grid-cols-1 md:grid-cols-[55%_auto] lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-[43px] p-4 sm:p-10 md:p-16 lg:p-25">
          <section className="flex flex-col items-start justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-[24px] pr-0 sm:pr-6 md:pr-8 lg:pr-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-montaga">
              XCN-GPT TEAM
            </h2>
            <p className="text-[#9A9A9A] text-sm sm:text-base">
              Whether you have inquiries, require assistance, or want to learn
              more about our services, our team is just a message away.{" "}
            </p>
            <h3 className="font-bold text-black text-[1.1250rem]">
              Contact Us
            </h3>
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="font-medium text-black">XCAN HQ</p>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-[#9A9A9A]">
                    Office: Suite C6, 2nd floor, Kuriftu Plaza, Jabi district,
                    Abuja
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-[#9A9A9A]">
                    Mail: hello@xcangpt.com
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-[#9A9A9A]">
                    Phone: +234 (0)816 633 2191, +234 (0)916 764 7150
                  </span>
                </div>
              </div>

              <Link
                href={"mailto:hello@xcangpt.com"}
                className="w-1/2 bg-[#034016] py-2 px-6 sm:px-8 text-xs sm:text-[.75rem] min-h-[40px] sm:min-h-[50px] rounded-[8px] text-[#FFF0F0] flex items-center justify-center"
              >
                Send Mail
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </section>
          <section className="self-center flex items-center justify-center">
            <Image
              src={"/rare-work.png"}
              alt="What is XCAN-GPT"
              height={344}
              width={587}
              className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[587px]"
            />
          </section>
        </div>
      </>
      <FooterMain />
    </div>
  );
}
