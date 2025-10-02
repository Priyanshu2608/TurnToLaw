import React from "react";

const benefits = [
  {
    id: "01",
    title: "Consult Experienced Lawyers 24x7",
    description:
      "Connect instantly through Audio calls or High Quality Internet calls with an experienced lawyer 24x7",
  },
  {
    id: "02",
    title: "Convenient and Easy",
    description:
      "Start an instant consultation with the expert Lawyer",
  },
  {
    id: "03",
    title: "100% Safe Consultations",
    description:
      "Be assured that your online consultation will be fully private and secured.",
  },
];

const Benifits = () => {
  return (
    <section className="py-16 bg-white ">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center border-t-4 border-gray-200 bord">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
          Benefits of Online Consultation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="bg-[#f9f9ff] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-left"
            >
              <p className="text-gray-600 font-bold text-lg mb-3">{item.id}</p>
              <h3 className="font-bold text-lg text-black mb-3">
                {item.title}
              </h3>
              <p className="text-black  text-md leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benifits;
