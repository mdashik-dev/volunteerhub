import React from "react";

const FAQ = () => {
  // Fake FAQ data
  const faqData = [
    {
      question: "How do I sign up as a volunteer?",
      answer:
        "To sign up as a volunteer, click on the 'Login' button in the navbar and create an account. Once logged in, you can browse and join volunteer opportunities.",
    },
    {
      question: "How can I create a new volunteer post?",
      answer:
        "If you're an organizer, go to the 'Add Post' page from the dropdown menu in your profile and fill out the required information about your event.",
    },
    {
      question: "Is there a fee to join VolunteerHub?",
      answer: "No, VolunteerHub is completely free for volunteers and organizers.",
    },
    {
      question: "How can I contact the event organizer?",
      answer:
        "Once you join an event, you'll find the organizer's contact details on the event details page.",
    },
    {
      question: "Can I update my profile information?",
      answer:
        "Yes, you can update your profile by clicking on your avatar in the navbar and selecting 'Update Profile'.",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-8">
          Find answers to common questions about using VolunteerHub.
        </p>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-white dark:bg-gray-800 shadow-lg rounded-lg"
            >
              <input type="checkbox" />
              <div className="collapse-title text-lg font-semibold text-gray-800 dark:text-white">
                {faq.question}
              </div>
              <div className="collapse-content text-gray-600 dark:text-gray-400">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
