import { Users, PhoneCall, Clock } from "lucide-react";

const LawyerConsultationLeft = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20 relative flex flex-col md:flex-row items-center gap-10">
      {/* Left Content */}
      <div className="md:w-2/3 space-y-6">
        <h2 className="text-4xl font-bold leading-snug">
          Online Lawyer Consultation <br /> Anytime Anywhere
        </h2>
        <p className="text-gray-600 text-lg">
          Legal Consultation Starts from{" "}
          <span className="text-blue-600 font-semibold">₹31/min</span>
        </p>

        {/* Lawyer Avatars */}
        <div className="flex items-center gap-3">
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
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-indigo-700">
          Consult now
        </button>

        {/* Features */}
        <div className="flex items-center gap-8 text-gray-700 text-sm">
          <div className="flex items-center gap-2">
            <Users size={18} />
            <span>Experienced Lawyers</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneCall size={18} />
            <span>Secure Calls</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>24/7</span>
          </div>
        </div>
      </div>

      {/* Full Refund Badge */}
      <div className="md:w-1/3 flex justify-center md:justify-end">
        <img
          src="https://i.ibb.co/8dMy2N0/refund-badge.png" // use your refund badge image
          alt="Full Refund"
          className="w-40"
        />
      </div>
    </section>
  );
};

export default LawyerConsultationLeft;
