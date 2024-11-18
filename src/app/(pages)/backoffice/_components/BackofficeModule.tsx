"use client";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Add this import if Swiper's CSS for autoplay is needed.

import React from 'react';

import Image from 'next/image';
import {
  Autoplay,
  Navigation,
  Pagination,
} from 'swiper/modules';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import {
  TaskDataType,
  tasks,
} from '@/components/common/backbone/other_component/data';
import TaskList from '@/components/common/TaskList';

// Image paths (Assumed to be in public directory)
const Parking1 = '/products/car-park/parking1.jpg';
const House1 = '/products/houses/house1.jpg';
const Warehouse1 = '/products/warehouses/warehouse1.jpg';

const images = [
  Warehouse1, House1, Parking1
];

const BackofficeModule = () => {
  const extractCategories = Array.from(new Set(
    tasks.map((prop: TaskDataType) => prop?.taskStatus)
  ));
  return (
    <div>
      <div className='w-full'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // 3-second auto-cycle
            disableOnInteraction: false,
          }}
          loop={true} // Infinite loop
          navigation
          pagination={{ clickable: true }}
          className="w-full h-screen" // Make it take full width and height of the viewport
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                width={1920} // Adjust as needed for responsive design
                height={1080} // Adjust as needed for responsive design
                src={image}
                alt={`image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <TaskList itemsList={tasks} itemsFilterList={ extractCategories } />
        {/* {tasks.map((property: TaskDataType) => {
          return (
          // <PropertyCard key={property.id} property={property} />
          <h1 key={ property?.id }>{
            property?.taskMission
          }</h1>
        )})} */}
      </div>
    </div>
  );
}

export default BackofficeModule;

















// "use client";

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import React from 'react';

// import Image from 'next/image';
// import {
//   Navigation,
//   Pagination,
// } from 'swiper/modules';
// import {
//   Swiper,
//   SwiperSlide,
// } from 'swiper/react';

// import {
//   TaskDataType,
//   tasks,
// } from '@/components/common/backbone/other_component/data';

// // ../../../../../public
// const Parking1 = '/products/car-park/parking1.jpg';
// // ../../../../../public
// const House1 = '/products/houses/house1.jpg';
// const Warehouse1 = '/products/warehouses/warehouse1.jpg';

// // ../../../../../public

// const images = [
//   Warehouse1, House1, Parking1
// ]

// const BackofficeModule = () => {
//   const extractCategories = Array.from(new Set(
//     tasks.map((prop: TaskDataType) => prop?.taskStatus)
//   ));
//   return (
//     <div>
//       <div className='w-[150px]'>
//         <Swiper
//             modules={[Navigation, Pagination]}
//             spaceBetween={10}
//             slidesPerView={1}
//             autoplay
//             navigation
//             pagination={{ clickable: true }}
//             className="w-full h-48"
//         >
//             {images && images.map((image, index) => (
//                 <SwiperSlide key={index}>
//                     <Image
//                       width={100}
//                       height={100}
//                       src={image}
//                       alt={`image ${index + 1}`}
//                       className="w-[100vw] h-48 object-cover"
//                     />
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//       </div>
//     </div>
//   )
// }

// export default BackofficeModule