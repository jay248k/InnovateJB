import { useState, useRef,useEffect } from "react";
import axios from "axios";
const Contact = () => {
  const topRef = useRef(null); // ref for scrolling to top

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Scroll to top of form/message when success or error message appears
  useEffect(() => {
    if (successMessage || errorMessage) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [successMessage, errorMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, formData);

      if (res.data.success) {
        setSuccessMessage(
          "Submitted successfully. We will contact you in the next 24 hours."
        );
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error)
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-10 bg-[#f0fdf4]">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6" ref={topRef}>
          {/* Show success message only if submission is successful */}
          {successMessage ? (
            <div className="bg-green-100 text-green-800 p-6 rounded-2xl text-center font-medium shadow-lg">
              {successMessage}
            </div>
          ) : (
            // Show the form if not successfully submitted
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-xl space-y-6"
            >
              <h2 className="text-3xl font-bold text-center text-[#0f766e] mb-6">
                Contact Us
              </h2>

              {/* Show error message above form fields */}
              {errorMessage && (
                <div className="bg-red-100 text-red-800 p-3 rounded-lg text-center font-medium mb-4">
                  {errorMessage}
                </div>
              )}

              {[
                { label: "Full Name", name: "fullName", type: "text", placeholder: "Enter your full name" },
                { label: "Email Address", name: "email", type: "email", placeholder: "Enter your email" },
                { label: "Subject", name: "subject", type: "text", placeholder: "Enter subject" },
              ].map((field, index) => (
                <div key={index}>
                  <label className="block mb-2 font-medium text-[#1f2937]">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="
                      w-full rounded-lg px-4 py-3
                      border border-gray-300
                      focus:outline-none
                      focus:border-[#22c55e]
                      focus:ring-2 focus:ring-[#86efac]
                      transition
                    "
                  />
                </div>
              ))}

              <div>
                <label className="block mb-2 font-medium text-[#1f2937]">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Write your message..."
                  className="
                    w-full rounded-lg px-4 py-3
                    border border-gray-300
                    focus:outline-none
                    focus:border-[#22c55e]
                    focus:ring-2 focus:ring-[#86efac]
                    transition
                  "
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full py-3 rounded-lg font-semibold text-white
                  bg-[#22c55e] hover:bg-[#16a34a]
                  shadow-lg transition
                  disabled:opacity-60
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
