import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Healthcare Volunteer",
    message:
      "Volunteering here was an incredible experience. I helped organize health camps and felt like I was making a real difference.",
    image: "https://oodp.ca/media/tutor-8.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Education Volunteer",
    message:
      "I had the opportunity to teach underprivileged children and it was truly fulfilling. This organization made everything so easy.",
    image: "https://cdn1.bluegrasssituation.com/uploads/2021/03/John-Smith-portrait-827x1240.jpg",
  },
];

const VolunteerTestimonials = () => {
  return (
    <section className="py-16 bg-blue-100 dark:bg-blue-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">
          What Our Volunteers Say
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
                {testimonial.role}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                "{testimonial.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerTestimonials;
