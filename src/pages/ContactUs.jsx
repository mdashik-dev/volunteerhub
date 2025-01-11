import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
            Get In <span className="text-blue-500 dark:text-blue-400">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4">
            We'd love to hear from you! Whether you have a question, feedback, or want to work with us, feel free to reach out.
          </p>
        </div>

        {/* Form and Contact Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Send a Message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 dark:text-gray-300 font-medium mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 dark:text-gray-300 font-medium mb-2" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 dark:text-gray-300 font-medium mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Type your message here"
                  className="textarea textarea-bordered w-full h-32 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full text-white font-semibold py-3 hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 flex flex-col justify-between">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Feel free to reach us directly using the details below:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-800 text-blue-500 rounded-full">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-white font-medium">Email</p>
                  <p className="text-gray-600 dark:text-gray-300">support@volunteerhub.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-800 text-green-500 rounded-full">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-white font-medium">Phone</p>
                  <p className="text-gray-600 dark:text-gray-300">+1 324 543 7694</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-800 text-purple-500 rounded-full">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-white font-medium">Address</p>
                  <p className="text-gray-600 dark:text-gray-300">123 Bentu Upati, Bentu, Uganda</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Follow us on social media for updates and opportunities.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">
                  Facebook
                </a>
                <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">
                  Twitter
                </a>
                <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
