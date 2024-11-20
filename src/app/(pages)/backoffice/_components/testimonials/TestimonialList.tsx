"use client";
import React from 'react';

import { useTestimonialStore } from '@/store/testimonialStore';

import TestimonialCard from './TestimonialCard';

const TestimonialList = () => {
  const { testimonials } = useTestimonialStore();

  // Repeat the testimonials multiple times to ensure seamless scrolling
  const scrollingTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden h-[300px] relative"> {/* Adjust the height */}
      <div
        className="space-y-2 animate-continuousScroll"
        style={{
          display: 'flex',
          flexDirection: 'column',
          // animationDuration: `${testimonials.length * 10}s`, // Adjust speed based on number of testimonials
        }}
      >
        {scrollingTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
            isActive={true} // All cards are "active"
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialList;











// "use client"
// import React from 'react';

// import { useTestimonialStore } from '@/store/testimonialStore';

// import TestimonialCard from './TestimonialCard';

// const TestimonialList = () => {
//     const [currentIndex, setCurrentIndex] = React.useState(0);
//     const { testimonials } = useTestimonialStore();
  
//     React.useEffect(() => {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => 
//           prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//         );
//       }, 3000);
  
//       return () => clearInterval(interval);
//     }, [testimonials.length]);
  
//     return (
//       <div className="space-y-4">
//         {testimonials.map((testimonial, index) => (
//           <TestimonialCard
//             key={testimonial.id}
//             testimonial={testimonial}
//             isActive={index === currentIndex}
//           />
//         ))}
//       </div>
//     );
// }

// export default TestimonialList