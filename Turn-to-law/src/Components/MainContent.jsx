import LegalExpertSlider from "./LegalExpertSlider";
import HowItWorks from "./HowItWorks";
import PricingBox from "./PricingBox";

export default function MainContent() {
  return (
    <main className="main-content">
      <div className="divide-section">
        <div className="container mx-auto px-4">
          {/* Use flex layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left column */}
            <div className="lg:w-7/12 w-full order-2 lg:order-1">
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
