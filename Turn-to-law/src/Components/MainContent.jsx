import LegalExpertSlider from "./LegalExpertSlider";
import HowItWorks from "./HowItWorks";
import PricingBox from "./PricingBox";
import { Users, PhoneCall, Clock } from "lucide-react";
import refund from '../assets/full-refund.svg'
import LawyerCarousel from "./LawyerCarousel";

function LawyerConsultationLeft() {
  return (
    <div className="mb-12 mt-10 relative border-b-3 border-gray-200 pb-10">
      {/* Left Section */}
      <h2 className="text-4xl font-bold leading-snug text-gray-900">
        Online Lawyer Consultation <br /> Anytime Anywhere
      </h2>
      <p className="text-gray-600 mt-2 text-lg">
        Legal Consultation Starts from{" "}
        <span className="text-blue-600 font-semibold">₹31/min</span>
      </p>

      {/* Lawyer Avatars */}
      <div className="flex items-center gap-3 mt-6">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="lawyer"
          className="w-10 h-10 rounded-full border-2 border-white shadow"
        />
        <img
          src="https://randomuser.me/api/portraits/men/45.jpg"
          alt="lawyer"
          className="w-10 h-10 rounded-full border-2 border-white shadow -ml-4"
        />
        <img
          src="https://randomuser.me/api/portraits/men/78.jpg"
          alt="lawyer"
          className="w-10 h-10 rounded-full border-2 border-white shadow -ml-4"
        />
        <span className="text-gray-700 text-sm">
          +166 Lawyers are online{" "}
          <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
        </span>
      </div>

      {/* Button */}
      <div className="mt-6">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-indigo-700">
          Consult now
        </button>
      </div>

      {/* Features */}
      <div className="flex items-center gap-2 text-gray-700 text-sm mt-6">
        <div className="flex items-center gap-2">
          <Users size={18} />
          <span>Experienced Lawyers |</span>
        </div>
        <div className="flex items-center gap-1">
          <PhoneCall size={18} />
          <span>Secure Calls |</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} />
          <span>24/7</span>
        </div>
      </div>

      {/* Refund Badge */}
      <div className="absolute top-44 right-20 hidden lg:block">
        <img
          src={refund} // replace with your asset
          alt="Full Refund"
          className="w-32"
        />
      </div>
    </div>
  );
}

export default function MainContent() {
  return (
    <main className="main-content">
      <div className="divide-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left column */}
            <div className="lg:w-7/12 w-full order-2 lg:order-1">
              
              {/* Online Consultation Section */}
              <LawyerConsultationLeft />

              {/* Existing Sections */}
              <div className="jc-title mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                  Talk to verified lawyers online
                </h1>
                <p className="text-gray-600 mt-2">
                  Get instant legal advice and documentation help.
                </p>
              </div>

              <div className="lk-lawyer-section desktop mb-8">
                <LegalExpertSlider />
              </div>

              <div className="lk-lawyer-section desktop mb-8">
                {/* ➜ “Consult top experts” cards */}
              </div>
              <div>
                <LawyerCarousel/>
              </div>

              <div className="talk-to-lawyer-section desktop mb-8">
                <HowItWorks />
              </div>

              <div className="client-reviews-section mb-8">
                {/* ➜ Testimonials carousel */}
              </div>

              <div className="all-over-user-section text-center mb-8">
                {/* ➜ Stats / coverage */}
              </div>

              <div className="lk-advantage-section mb-8">
                {/* ➜ Advantages / why choose us */}
              </div>

              <div className="lk-news-section">
                {/* ➜ News / blogs */}
              </div>
            </div>

            {/* Right column (PricingBox) */}
            <div className="lg:w-5/12 w-full order-1 lg:order-2">
              <div className="p-0 lg:p-6">
                <PricingBox />
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
