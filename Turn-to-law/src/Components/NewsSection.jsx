import React from "react";

const TalkToLawyerNews = () => {
  const newsData = [
    {
      img: "https://www.legalkart.com/frontend/client_base_web/layout-optim/talk-to-lawyer-revamp/news-media1.jpg",
      alt: "Seeking any legal advice? Now get instant consultation on LegalKart",
      badge: "The Financial Express",
      badgeColor: "bg-blue-600",
      title: "Seeking any legal advice? Now get instant consultation on LegalKart."
    },
    {
      img: "https://www.legalkart.com/frontend/client_base_web/layout-optim/talk-to-lawyer-revamp/news-media2.jpg",
      alt: "LegalKart.com launches legal consultation in 8 Indian languages",
      badge: "The News Minute",
      badgeColor: "bg-pink-600",
      title: "LegalKart.com launches legal consultation in 8 Indian languages"
    },
    {
      img: "https://www.legalkart.com/frontend/client_base_web/layout-optim/talk-to-lawyer-revamp/news-media3.jpg",
      alt: "Instant Legal Consultation on LegalKart’s 24×7 Talk Now Technology",
      badge: "Legal Reader",
      badgeColor: "bg-green-600",
      title: "Instant Legal Consultation on LegalKart’s 24×7 Talk Now Technology"
    },
    {
      img: "https://www.legalkart.com/frontend/client_base_web/layout-optim/talk-to-lawyer-revamp/news-media4.jpg",
      alt: "Language is no more a barrier for taking instant legal advice with LegalKart.com",
      badge: "Silicon India",
      badgeColor: "bg-indigo-600",
      title: "Language is no more a barrier for taking instant legal advice with LegalKart.com"
    },
    {
      img: "https://www.legalkart.com/frontend/client_base_web/layout-optim/talk-to-lawyer-revamp/news-media5.jpg",
      alt: "LegalKart.com eliminates Language barrier with the new Just Consult Feature",
      badge: "The Tech Outlook",
      badgeColor: "bg-yellow-600",
      title: "LegalKart.com eliminates Language barrier with the new Just Consult Feature"
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Legalkart “Talk To Lawyer”
          <br /> in News &amp; Media
        </h1>

        {/* News Items */}
        <div className="space-y-10">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 border-b border-gray-200 pb-8 last:border-none"
            >
              {/* Left - Image */}
              <div className="flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-[200px] h-[120px] object-cover rounded-md"
                />
              </div>

              {/* Right - Text */}
              <div>
                <span
                  className={`inline-block ${item.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full mb-3`}
                >
                  {item.badge}
                </span>
                <h2 className="text-[17px] font-bold text-gray-900 leading-snug">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalkToLawyerNews;
