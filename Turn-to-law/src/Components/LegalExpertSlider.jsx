import { useRef } from "react";
import chequeBounced from "../assets/cheque-bounced.webp";

export default function LegalExpertSlider() {
  const scrollRef = useRef(null);

  const experts = [
    {
      id: 1,
      title: "Starting a business?",
      image: chequeBounced,
      href: "#",
    },
    {
      id: 2,
      title: "Blackmailed online?",
      image: chequeBounced,
      href: "#",
    },
    {
      id: 3,
      title: "Insurance claim rejected?",
      image: chequeBounced,
      href: "#",
    },
    {
      id: 4,
      title: "Family matters?",
      image: chequeBounced,
      href: "#",
    },
    {
      id: 5,
      title: "Child custody?",
      image: chequeBounced,
      href: "#",
    },
    {
      id: 6,
      title: "Buying property?",
      image: chequeBounced,
      href: "#",
    },
  ];

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -220 : 220,
        behavior: "smooth",
      });
    }
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
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-5 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Scrollable area */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {experts.map((exp) => (
            <a
              key={exp.id}
              href={exp.href}
              className="block w-[180px] rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-white px-3 py-3 text-center">
                <h3 className="text-sm font-medium text-gray-800">{exp.title}</h3>
                <div className="mt-2 flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold text-xs flex items-center gap-1">
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
                        fill="#4C50E0"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-5 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

