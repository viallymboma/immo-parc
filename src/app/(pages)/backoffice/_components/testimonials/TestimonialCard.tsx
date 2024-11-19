import React from 'react';

import { TestimonialType } from '@/types/testimonial';
import {
  Avatar,
  Card,
  User,
} from '@nextui-org/react';

interface TestimonialCardProps {
    testimonial: TestimonialType;
    isActive: boolean;
  }

const TestimonialCard = ({ testimonial, isActive }: TestimonialCardProps) => {
    return (
        <Card
          className={`p-4 transition-all duration-500 transform ${
            isActive
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 absolute'
          }`}
        >
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12 bg-gray-200">
              <User name={"nice"} />
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">
                  Félicitations {testimonial.name}
                </h3>
                <span className="text-yellow-500 font-bold">
                  {testimonial.amount}
                </span>
              </div>
              <p className="text-gray-500 mt-1">{testimonial.message}</p>
            </div>
          </div>
        </Card>
    );
}

export default TestimonialCard