"use client"
import React from 'react';

import { useTestimonialStore } from '@/store/testimonialStore';

import TestimonialCard from './TestimonialCard';

const TestimonialList = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const { testimonials } = useTestimonialStore();
  
    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
  
      return () => clearInterval(interval);
    }, [testimonials.length]);
  
    return (
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            isActive={index === currentIndex}
          />
        ))}
      </div>
    );
}

export default TestimonialList