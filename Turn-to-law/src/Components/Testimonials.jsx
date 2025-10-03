import React, { useState, useRef } from 'react';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const containerRef = useRef(null);

    const testimonials = [
        {
            name: "PREETY SINGH",
            title: "Social Worker",
            text: "Advocate on Just Consult was quite expert and knowledgeable in divorce matter she explained to me everything so well and help me to understand the legalities and consequences.",
            image: "/src/assets/testimonial3.png",
            rating: 4.5
        },
        {
            name: "RAJESH KUMAR",
            title: "Business Owner",
            text: "Excellent legal consultation service! The lawyer helped me with my property dispute case and provided clear guidance throughout the process. Highly recommended!",
            image: "/src/assets/testimonial1.png",
            rating: 5
        },
        {
            name: "PRIYA SHARMA",
            title: "Software Engineer",
            text: "I was facing issues with my employment contract. The legal expert explained everything in simple terms and helped me understand my rights. Great service!",
            image: "/src/assets/testimonial4.png",
            rating: 3.5
        },
        {
            name: "AMIT PATEL",
            title: "Teacher",
            text: "The consultation was very helpful for my family law matter. The lawyer was patient, knowledgeable, and provided practical solutions. Thank you!",
            image: "/src/assets/testimonial2.png",
            rating: 5
        },
        {
            name: "SUNITA DEVI",
            title: "Housewife",
            text: "I needed help with property documentation. The legal expert guided me through the entire process and made it so much easier. Very satisfied!",
            image: "/src/assets/testimonial5.png",
            rating: 4.5
        },
        {
            name: "VIKASH SINGH",
            title: "Engineer",
            text: "Professional and efficient service. The lawyer helped me with my business registration and all legal formalities. Excellent experience!",
            image: "/src/assets/testimonial7.png",
            rating: 4
        },
        {
            name: "NEHA GUPTA",
            title: "Doctor",
            text: "Outstanding legal advice for my medical practice compliance issues. The expert was thorough and helped me understand all legal requirements.",
            image: "/src/assets/testimonial6.png",
            rating: 4
        }
    ];

    const nextSlide = () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        
        if (currentSlide === testimonials.length - 1) {
            // If we're at the last slide, jump to first without animation
            setCurrentSlide(0);
        } else {
            setCurrentSlide((prev) => prev + 1);
        }
        
        setTimeout(() => setIsTransitioning(false), 400);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        
        if (currentSlide === 0) {
            // If we're at the first slide, jump to last without animation
            setCurrentSlide(testimonials.length - 1);
        } else {
            setCurrentSlide((prev) => prev - 1);
        }
        
        setTimeout(() => setIsTransitioning(false), 400);
    };

    const goToSlide = (index) => {
        if (isTransitioning || index === currentSlide) return;
        
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 400);
    };

    return (
        <div className="testimonials-section" style={{ 
            backgroundColor: 'white', 
            padding: '80px 20px',
            fontFamily: 'Arial, sans-serif',
            minHeight: '600px',
            width: '100%',
            display: 'block',
            overflow: 'hidden'
        }}>
            {/* Header Section */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '50px',
                maxWidth: '1200px',
                margin: '0 auto 50px auto',
                gap: '40px'
            }}>
                <h2 style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: '900', 
                    color: 'black',
                    margin: 0,
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em',
                    flex: '1'
                }}>
                    What our customers are<br />saying
                </h2>
                
                {/* Navigation Arrows */}
                <div style={{ display: 'flex', gap: '15px', flexShrink: 0 }}>
                    <button 
                        onClick={prevSlide}
                        disabled={isTransitioning}
                        style={{
                            width: '60px',
                            height: '40px',
                            borderRadius: '20px',
                            backgroundColor: 'white',
                            border: 'none',
                            outline: 'none',
                            cursor: isTransitioning ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            padding: '0',
                            margin: '0',
                            fontFamily: 'inherit',
                            fontSize: 'inherit',
                            opacity: isTransitioning ? 0.6 : 1
                        }}
                        onMouseEnter={(e) => {
                            if (!isTransitioning) {
                                e.target.style.backgroundColor = '#e9d5ff';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isTransitioning) {
                                e.target.style.backgroundColor = 'white';
                            }
                        }}
                    >
                        <span style={{ 
                            fontSize: '18px', 
                            color: 'black', 
                            fontWeight: 'bold'
                        }}>←</span>
                    </button>
                    <button 
                        onClick={nextSlide}
                        disabled={isTransitioning}
                        style={{
                            width: '60px',
                            height: '40px',
                            borderRadius: '20px',
                            backgroundColor: 'white',
                            border: 'none',
                            outline: 'none',
                            cursor: isTransitioning ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            padding: '0',
                            margin: '0',
                            fontFamily: 'inherit',
                            fontSize: 'inherit',
                            opacity: isTransitioning ? 0.6 : 1
                        }}
                        onMouseEnter={(e) => {
                            if (!isTransitioning) {
                                e.target.style.backgroundColor = '#e9d5ff';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isTransitioning) {
                                e.target.style.backgroundColor = 'white';
                            }
                        }}
                    >
                        <span style={{ 
                            fontSize: '18px', 
                            color: 'black', 
                            fontWeight: 'bold'
                        }}>→</span>
                    </button>
                </div>
            </div>

            {/* Testimonial Carousel Container */}
            <div 
                ref={containerRef}
                style={{ 
                    maxWidth: '900px', 
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                
                {/* Carousel Slides Container */}
                <div
                    style={{
                        display: 'flex',
                        transform: `translateX(-${currentSlide * (100 / testimonials.length)}%)`,
                        transition: isTransitioning ? 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
                        width: `${testimonials.length * 100}%`,
                        height: '100%'
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            style={{ 
                                width: `${100 / testimonials.length}%`,
                                padding: '0 15px',
                                flexShrink: 0,
                                boxSizing: 'border-box'
                            }}>
                            <div style={{
                                backgroundColor: 'white',
                                borderRadius: '16px',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                                padding: '40px 30px',
                                position: 'relative',
                                border: '1px solid #f1f5f9',
                                height: '100%',
                                minHeight: '380px'
                            }}>
                                {/* Quote Icon */}
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    left: '15px',
                                    fontSize: '50px',
                                    color: '#8b5cf6',
                                    fontWeight: 'bold',
                                    opacity: '0.4'
                                }}>
                                    "
                                </div>

                                {/* Star Rating */}
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    marginTop: '25px',
                                    marginBottom: '25px',
                                    alignItems: 'center',
                                    gap: '6px'
                                }}>
                                    {[...Array(5)].map((_, i) => {
                                        const rating = testimonial.rating;
                                        const starValue = i + 1;
                                        const isFullStar = starValue <= rating;
                                        
                                        return (
                                            <svg 
                                                key={i}
                                                width="32" 
                                                height="32" 
                                                viewBox="0 0 24 24" 
                                                fill={isFullStar ? '#f59e0b' : '#e5e7eb'}
                                                style={{
                                                    filter: isFullStar ? 'drop-shadow(0 2px 4px rgba(245, 158, 11, 0.3))' : 'none',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                            </svg>
                                        );
                                    })}
                                </div>

                                {/* Testimonial Text */}
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.6',
                                    color: '#1f2937',
                                    marginBottom: '30px',
                                    textAlign: 'left',
                                    paddingLeft: '20px',
                                    fontWeight: '400'
                                }}>
                                    {testimonial.text}
                                </p>

                                {/* Customer Info */}
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'flex-end',
                                    marginTop: 'auto'
                                }}>
                                    <div>
                                        <div style={{
                                            fontSize: '16px',
                                            fontWeight: '700',
                                            color: '#111827',
                                            marginBottom: '5px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}>
                                            -{testimonial.name}
                                        </div>
                                        <div style={{
                                            fontSize: '14px',
                                            color: '#6b7280',
                                            fontWeight: '500'
                                        }}>
                                            {testimonial.title}
                                        </div>
                                    </div>

                                    {/* Customer Image */}
                                    <div style={{
                                        width: '70px',
                                        height: '70px',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                        border: '2px solid #8b5cf6',
                                        flexShrink: 0
                                    }}>
                                        <img 
                                            src={testimonial.image} 
                                            alt={testimonial.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.style.backgroundColor = '#8b5cf6';
                                                e.target.parentElement.style.display = 'flex';
                                                e.target.parentElement.style.alignItems = 'center';
                                                e.target.parentElement.style.justifyContent = 'center';
                                                e.target.parentElement.style.color = 'white';
                                                e.target.parentElement.style.fontSize = '16px';
                                                e.target.parentElement.style.fontWeight = 'bold';
                                                e.target.parentElement.textContent = testimonial.name.split(' ').map(n => n[0]).join('');
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Slide Indicators */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                marginTop: '30px'
            }}>
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        disabled={isTransitioning}
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            border: 'none',
                            backgroundColor: index === currentSlide ? '#8b5cf6' : '#e5e7eb',
                            cursor: isTransitioning ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: index === currentSlide ? '0 2px 4px rgba(139, 92, 246, 0.3)' : 'none',
                            opacity: isTransitioning ? 0.6 : 1
                        }}
                        onMouseEnter={(e) => {
                            if (index !== currentSlide && !isTransitioning) {
                                e.target.style.backgroundColor = '#d1d5db';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (index !== currentSlide && !isTransitioning) {
                                e.target.style.backgroundColor = '#e5e7eb';
                            }
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;