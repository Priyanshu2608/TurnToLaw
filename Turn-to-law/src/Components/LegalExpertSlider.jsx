import { useRef } from "react";
import chequeBounced from "../assets/cheque-bounced.webp";

export default function LegalExpertSlider() {
  const scrollRef = useRef(null);

  const experts = [
    { id: 1, title: "Starting a business?", image: chequeBounced, href: "#" },
    { id: 2, title: "Blackmailed online?", image: chequeBounced, href: "#" },
    { id: 3, title: "Insurance claim rejected?", image: chequeBounced, href: "#" },
    { id: 4, title: "Family matters?", image: chequeBounced, href: "#" },
    { id: 5, title: "Child custody?", image: chequeBounced, href: "#" },
    { id: 6, title: "Buying property?", image: chequeBounced, href: "#" },
  ];

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const step = 210;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section className="container mx-auto px-4 mt-10">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          100+ Legal Expert areas
        </h2>
        <p className="text-sm text-gray-600">
          Consult with experienced Lawyers across expert areas
        </p>
      </div>

      <div className="relative">

        <button
          onClick={() => scroll("left")}
          className="absolute -left-5 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-hidden scroll-smooth"
        >
          {experts.map((exp) => (
            <div
              key={exp.id}
              className="
                w-[180px] flex-shrink-0
                rounded-xl bg-white
                shadow-md border border-gray-100
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              <div className="h-28 overflow-hidden rounded-t-xl">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="px-3 py-3 text-center">
                <h3 className="text-xs font-medium text-gray-800">{exp.title}</h3>

                <div className="mt-2 flex justify-center">
                  <button
                    type="button"
                    className="
                      inline-flex items-center gap-1
                      rounded-full bg-indigo-600
                      px-3 py-1 text-[11px] font-semibold text-white
                      shadow-sm
                      transition-colors hover:bg-indigo-700
                      focus:outline-none focus:ring-2 focus:ring-indigo-500
                    "
                  >
                    Consult now
                    <svg
                      width="8"
                      height="9"
                      viewBox="0 0 8 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.456 0.275h2.592L7.188 4.36 3.048 8.447H0.456L4.614 4.36 0.456 0.275Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute -right-5 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
}