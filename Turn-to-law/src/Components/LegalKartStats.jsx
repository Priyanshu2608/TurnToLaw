
const LegalKartStats = () => {
  return (
    <div className="bg-purple-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2 text-left">
          Trusted by users from over <br /><span className="text-indigo-600">80 countries</span>
        </h1>
        <p className="text-gray-700 text-2xl mt-10 text-left">
          Millions benefited with online consultation on LegalKart
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-6 mt-20">
        <div>
          <h3 className="text-4xl font-bold">730K+</h3>
          <p className="text-gray-800 font-medium">Completed calls with Lawyers</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">24/7</h3>
          <p className="text-gray-800 font-medium">Positive Lawyer <br/> Calls</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">4.8/5</h3>
          <p className="text-gray-800 font-medium">Average expert lawyer star rating</p>
        </div>
      </div>
    </div>
  );
};

export default LegalKartStats;
