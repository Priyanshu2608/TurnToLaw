import React from "react";
import compliantIcon from "../assets/how-compliant-icon.png";
import moneyIcon from "../assets/how-money-icon.png";
import discussionIcon from "../assets/how-discussion-icon.png";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      text: "Select a Problem area",
      icon: compliantIcon,
      alt: "Select problem area",
      width: 34,
      height: 34,
    },
    {
      id: 2,
      text: "Buy Legalkart Cash",
      icon: moneyIcon,
      alt: "Buy Legalkart Cash",
      width: 31,
      height: 30,
    },
    {
      id: 3,
      text: "Choose the best expert to consult after successful payment",
      icon: discussionIcon,
      alt: "Choose expert",
      width: 30,
      height: 30,
    },
  ];

  return (
    <section className="talk-to-lawyer-section desktop py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">How it works?</h2>

        <div className="mb-10">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/oiuGY99oMHk"
            title="How it works video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="how-box rounded-xl bg-white shadow p-6 text-center flex flex-col items-center"
            >
              <img
                src={step.icon}
                alt={step.alt}
                width={step.width}
                height={step.height}
                className="mb-4"
              />
              <p className="text-base font-medium text-gray-800">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}