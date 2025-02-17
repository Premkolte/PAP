import React from "react";
import img1 from "./images/test-1.jfif";
import img2 from "./images/test-2.jfif";
import img3 from "./images/test-3.jpg";

const testimonials = [
  {
    id: 1,
    text: "A fantastic resource for developers. The open-source aspect is a huge plus!",
    name: "Sophie Weill",
    image: img1,
    bgColor: "bg-slate-900",
    profession:"Content Creator"
  },
  {
    id: 2,
    text: "We've seen significant improvement in user engagement after implementing AnimateHub.",
    name: "Charlie Stone",
    image: img2,
    bgColor: "bg-slate-900",
    profession:"Lead UX Designer"
  },
  {
    id: 3,
    text: "The components are well-designed and easy to customize. Great job!",
    name: "Tress Reiley",
    image: img3,
    bgColor: "bg-slate-900",
    profession:"Junior Front-End Developer"
  },
  {
    id: 1,
    text: "The components are well-designed and easy to customize. Great job! ",
    name: "Charlie Stone",
    image: img3,
    bgColor: "bg-slate-900",
    profession:"Content Creator"
  },
  {
    id: 2,
    text: "We've seen significant improvement in user engagement after implementing AnimateHub.",
    name: "Sophie Weill ",
    image: img1,
    bgColor: "bg-slate-900",
    profession:"Lead UX Designer"
  },
  {
    id: 3,
    text: "A fantastic resource for developers. The open-source aspect is a huge plus!",
    name: "Tress Reiley",
    image: img2,
    bgColor: "bg-slate-900",
    profession:"Junior Front-End Developer"
  },
];

const TestimonialCard = ({ text, name, image, bgColor, profession }) => {
  return (
    <div
      className={`p-8 h-fit rounded-lg shadow-lg bg-white dark:${bgColor} dark:text-white flex flex-col relative transition-transform transform hover:scale-105 border `}
    >
      <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-10 bg-blue-400 rounded-t-lg"></div>
      
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-full mr-4 border-4 dark:border-white"
        />
        <div className="">
          <h5 className="font-bold">{name}</h5>
          <p className="text-sm text-gray-600">{ profession}</p>
        </div>
      </div>
      <p className="text-md mt-2">{text}</p>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-5xl font-bold font-sans mb-14 text-center">
        Testimonials
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
