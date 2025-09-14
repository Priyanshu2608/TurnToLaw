import React from "react";

const PricingBox = () => {
  return (
    <div className="fixed mt-20 lg:top-5 z-50">
      <div className="w-full max-w-sm mx-auto rounded-2xl border border-gray-100 bg-white p-6 shadow-xl">
        {/* Selectors */}
        <div className="flex flex-col gap-3 mb-6">
          <select className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-700 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition">
            <option>Select problem type</option>
            <option>Divorce & Child Custody</option>
            <option>Property & Real Estate</option>
            <option>Cheque Bounce & Money Recovery</option>
            <option>Employment Issues</option>
            <option>Consumer Protection</option>
            <option>Civil Matters</option>
            <option>Cyber Crime</option>
            <option>Company & Start-Ups</option>
            <option>Other Legal Problem</option>
            <option>Criminal Matter</option>
            <option>MSME Recovery, MSME related matter</option>
            <option>RERA Consultation</option>
            <option>Muslim Law</option>
            <option>Debt Recovery Tribunal Matters</option>
            <option>Banking loan Recovery issues, Bank account freeze</option>
            <option>
              Patent, Trademark, Copyright, Intellectual Property Rights
            </option>
            <option>CBI Related matters</option>
            <option>
              Narcotic Drugs and Psychotropic Substances Act (NDPS)
            </option>
            <option>Service Matters, CAT</option>
          </select>

          <select className="mt-4 w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-700 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition">
            <option>Select language</option>
            <option>English</option>
            <option>हिन्दी (Hindi)</option>
            <option>தமிழ் (Tamil)</option>
            <option>తెలుగు (Telugu)</option>
            <option>বাংলা (Bengali)</option>
            <option>ગુજરાતી (Gujarati)</option>
            <option>ಕನ್ನಡ (Kannada)</option>
            <option>മലയാളം (Malayalam)</option>
            <option>मराठी (Marathi)</option>
            <option>ਪੰਜਾਬੀ (Punjabi)</option>
            <option>اردو (Urdu)</option>
          </select>
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
  <label className="flex items-center gap-3 border rounded-lg p-3 text-gray-700 hover:border-indigo-400 cursor-pointer transition hover:scale-110">
    <input
      type="radio"
      name="plan"
      className="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-400 cursor-pointer transform transition-transform duration-200 "
    />
    ₹199
  </label>

  <label className="flex items-center gap-3 border rounded-lg p-3 text-gray-700 hover:border-indigo-400 cursor-pointer transition hover:scale-110">
    <input
      type="radio"
      name="plan"
      className="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-400 cursor-pointer transform transition-transform duration-200 "
    />
    <span className="p-2">₹549</span>
  </label>

  <label className="flex items-center gap-3 border rounded-lg p-3 bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm relative hover:scale-110">
    <input
      type="radio"
      name="plan"
      defaultChecked
      className="h-5 w-5 border-indigo-400 text-indigo-600 focus:ring-indigo-500 cursor-pointer transform transition-transform duration-200 "
    />
     <span className="p-2">₹1449</span>
    
    <span className="absolute top-1 right-2 text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded-full font-medium">
      Recommended
    </span>
  </label>

  <label className="flex items-center gap-3 border rounded-lg p-3 text-gray-700 hover:border-indigo-400 cursor-pointer transition hover:scale-110">
    <input
      type="radio"
      name="plan"
      className="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-400 cursor-pointer transform transition-transform duration-200 "
    />
    <span className="p-2">₹2449</span>
  </label>
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
