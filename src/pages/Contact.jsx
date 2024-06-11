import { useState } from "react";
import { FiMinus } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [timeline, setTimeline] = useState("2023");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="px-4 md:px-16 lg:px-32 bg-white">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-12 text-center">About Us</h2>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-12 text-center">
            At MedIBridge, we are revolutionizing the healthcare sector in
            Germany by providing a platform that connects doctors and patients
            seamlessly. Our mission is to overcome language barriers and
            scheduling conflicts, making access to healthcare easier and more
            convenient for everyone.
          </h3>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-semibold mb-2">Purpose (Why?)</h3>
            <p>
              Improve the health and well-being of the population by eliminating
              geographic barriers and making medical care more accessible and
              convenient for everyone.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="168"
              height="168"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0281f7"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <div className="md:w-1/2 flex justify-center p-4 order-2 md:order-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="168"
              height="168"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0281f7"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-eye"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div className="md:w-1/2 p-4 order-1 md:order-2">
            <h3 className="text-2xl font-semibold mb-2">Vision (How?)</h3>
            <p>
              Our vision is to be the leading platform in providing seamless and
              innovative digital healthcare solutions, ensuring that
              high-quality medical care is within everyone's reach, regardless
              of their location.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-semibold mb-2">Mission (What?)</h3>
            <p>
              Our mission is to develop and implement advanced technologies that
              simplify the process of finding and booking medical appointments,
              fostering a more efficient and patient-centered healthcare system
              that benefits both providers and patients.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="168"
              height="168"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0281f7"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-gem"
            >
              <path d="M6 3h12l4 6-10 13L2 9Z" />
              <path d="M11 3 8 9l4 13 4-13-3-6" />
              <path d="M2 9h20" />
            </svg>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-slate-200 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Journey</h2>
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <span
              className={`cursor-pointer ${
                timeline === "2023" ? "text-blue-500 font-bold" : ""
              }`}
              onClick={() => setTimeline("2023")}
            >
              2023
            </span>
            <FiMinus className="mx-2 text-gray-500" />
            <span
              className={`cursor-pointer ${
                timeline === "2024" ? "text-blue-500 font-bold" : ""
              }`}
              onClick={() => setTimeline("2024")}
            >
              2024
            </span>
            <FiMinus className="mx-2 text-gray-500" />
            <span
              className={`cursor-pointer ${
                timeline === "2025" ? "text-blue-500 font-bold" : ""
              }`}
              onClick={() => setTimeline("2025")}
            >
              2025
            </span>
            <FiMinus className="mx-2 text-gray-500" />
            <span
              className={`cursor-pointer ${
                timeline === "2026" ? "text-blue-500 font-bold" : ""
              }`}
              onClick={() => setTimeline("2026")}
            >
              2026
            </span>
          </div>
        </div>
        <div className="text-center">
          {timeline === "2023" && (
            <p>
              Our journey began with the vision of improving access to
              healthcare.
            </p>
          )}
          {timeline === "2024" && (
            <p>
              We reached our first milestone with the introduction of virtual
              appointments.
            </p>
          )}
          {timeline === "2025" && (
            <p>We expanded our platform to include more medical specialties.</p>
          )}
          {timeline === "2026" && (
            <p>
              We continue to innovate to offer the best service to our users.
            </p>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">
          Do you have any questions? Contact us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-lg font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              maxLength={500}
              className="w-full p-2 border border-gray-300 rounded"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
