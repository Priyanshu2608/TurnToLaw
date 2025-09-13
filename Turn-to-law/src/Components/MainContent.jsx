import LegalExpertSlider from "./LegalExpertSlider";
import HowItWorks from "./HowItWorks";

export default function MainContent() {
    return (
        <main className="main-content">
            <div className="divide-section">
                <div className="container mx-auto px-4">
                    <div className="row flex flex-wrap lg:flex-nowrap">
                        
                        <div className="col-7 order-2 lg:order-1 lg:w-7/12 w-full">
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

                        {/* Right wala Column (cart wala) */}
                        <div className="col-5 order-1 lg:order-2 lg:w-5/12 w-full">
                            <div className="p-6">
                                <img
                                    src="/images/lawyer-illustration.png"
                                    alt="Lawyer Illustration"
                                    className="mx-auto rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}