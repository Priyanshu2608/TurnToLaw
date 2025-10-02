import React from "react";
import { Phone, Shield, Users } from "lucide-react"; // icons

const advantages = [
  {
    icon: <Phone className="w-6 h-6 text-indigo-500" />,
    title: "Talk in your own Language",
    description: "Hindi, English, Marathi, Tamil, Telugu, Kannada, Malayalam, Bengali",
  },
  {
    icon: <Shield className="w-6 h-6 text-indigo-500" />,
    title: "Secure and Confidential",
    description: "Your call is confidential & secure on our network",
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    title: "Consult multiple lawyers",
    description: "Discuss matters with different lawyers",
  },
];

export default function LegalkartAdvantage() {
  return (
    <section className="w-full bg-gray-100 rounded-2xl shadow p-6 ">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Turn2Law Advantage</h1>
      <div className="space-y-4">
        {advantages.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-gray-50 rounded-xl p-4 shadow-lg p-5"
          >
            <div className="bg-indigo-100 p-3 rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
