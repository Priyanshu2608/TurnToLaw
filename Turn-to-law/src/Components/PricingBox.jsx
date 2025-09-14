import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const problemTypes = ["Select Problem",
  "Divorce & Child Custody",
  "Property & Real Estate",
  "Cheque Bounce & Money Recovery",
  "Employment Issues",
  "Consumer Protection",
  "Civil Matters",
  "Cyber Crime",
  "Company & Start-Ups",
  "Other Legal Problem",
  "Criminal Matter",
  "MSME Recovery, MSME related matter",
  "RERA Consultation",
  "Muslim Law",
  "Debt Recovery Tribunal Matters",
  "Banking loan Recovery issues, Bank account freeze",
  "Patent, Trademark, Copyright, Intellectual Property Rights",
  "CBI Related matters",
  "Narcotic Drugs and Psychotropic Substances Act (NDPS)",
  "Service Matters, CAT",
];

const languages = ["Select language",
  "English",
  "हिन्दी (Hindi)",
  "தமிழ் (Tamil)",
  "తెలుగు (Telugu)",
  "বাংলা (Bengali)",
  "ગુજરાતી (Gujarati)",
  "ಕನ್ನಡ (Kannada)",
  "മലയാളം (Malayalam)",
  "मराठी (Marathi)",
  "ਪੰਜਾਬੀ (Punjabi)",
  "اردو (Urdu)",
];

const PricingBox = () => {
  const [selectedProblem, setSelectedProblem] = useState(problemTypes[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className="fixed mt-30 ml-15 lg:top-5 z-50">
      <div className="w-full max-w-sm mx-auto rounded-2xl border border-gray-100 bg-white p-6 shadow-xl">
        {/* Problem Type */}
        <div className="flex flex-col gap-3 mb-4">
          <Listbox value={selectedProblem} onChange={setSelectedProblem}>
            <div className="relative">
              <Listbox.Button className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-3 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition">
                <span className="block">{selectedProblem}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
                </span>
              </Listbox.Button>
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                {problemTypes.map((problem) => (
                  <Listbox.Option
                    key={problem}
                    value={problem}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-3 pr-9 ${
                        active ? "bg-indigo-100 text-indigo-900" : "text-gray-900"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block ${
                            selected ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {problem}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                            <CheckIcon className="h-5 w-5" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>

          {/* Language */}
          <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
            <div className="relative">
              <Listbox.Button className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-3 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition">
                <span className="block">{selectedLanguage}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
                </span>
              </Listbox.Button>
              <Listbox.Options className="absolute mt-5 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                {languages.map((lang) => (
                  <Listbox.Option
                    key={lang}
                    value={lang}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-3 pr-9 ${
                        active ? "bg-indigo-100 text-indigo-900" : "text-gray-900"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block ${
                            selected ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {lang}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                            <CheckIcon className="h-5 w-5" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>

        {/* Price */}
        <h2 className="text-3xl font-bold text-gray-900">
          ₹1449{" "}
          <span className="text-base font-medium text-gray-500">( + GST )</span>
        </h2>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          To consult Lawyers, add Legalkart Cash to your wallet
        </p>

        {/* Plans */}
        <div className="mt-6 grid grid-cols-2 gap-5">
          {[199, 549, 1449, 2449].map((price, idx) => (
            <label
              key={price}
              className={`flex items-center gap-3 border rounded-lg p-3 text-gray-700 hover:border-indigo-400 cursor-pointer transition hover:scale-110 ${
                price === 1449
                  ? "bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm relative"
                  : ""
              }`}
            >
              <input
                type="radio"
                name="plan"
                defaultChecked={price === 1449}
                className={`h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-400 cursor-pointer transform transition-transform duration-200 ${
                  price === 1449 ? "border-indigo-400 text-indigo-600 focus:ring-indigo-500" : ""
                }`}
              />
              <span className="p-2"><b>₹{price}</b></span>
              {price === 1449 && (
                <span className="absolute top-1 right-2 text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded-full font-medium">
                  Recommended
                </span>
              )}
            </label>
          ))}
        </div>

        {/* Button */}
        <button className="mt-6 w-full rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 px-5 py-3 font-semibold text-white 
          transition-all duration-2000 ease-in-out 
          hover:from-white hover:to-white hover:text-indigo-600 hover:border hover:border-indigo-600">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default PricingBox;
