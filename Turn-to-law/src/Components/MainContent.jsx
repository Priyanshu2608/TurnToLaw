import LegalExpertSlider from "./LegalExpertSlider";
import HowItWorks from "./HowItWorks";
import PricingBox from "./PricingBox";
import LawyerConsultationLeft from "./LawyerConsultationLeft";
import LawyerCarousel from "./LawyerCarousel";
import LegalKartStats from "./LegalKartStats";
import NewsSection from "./NewsSection";
import LegalkartAdvantage from "./LegalKartAdvantage";
import Testimonials from "./Testimonials";



export default function MainContent() {
  return (
    <main className="main-content">
      <div className="divide-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left column */}
            <div className="lg:w-7/12 w-max order-2 lg:order-1 pl-30">
              
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
                <Testimonials />
              </div>

              <div className="all-over-user-section text-center mb-4">
                {/* ➜ Stats / coverage */}
                 <LegalKartStats />
              </div>

              <div className="lk-advantage-section mb-8">
                {/* ➜ Advantages / why choose us */}
                <LegalkartAdvantage />
              </div>

              <div className="lk-news-section">
                <NewsSection />
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
