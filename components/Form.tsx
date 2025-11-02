import React, { useState } from "react";
import { toast } from "react-toastify";

interface FormSubmitHandler {
  (e: React.FormEvent<HTMLFormElement>): void;
}

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit: FormSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Form submitted with data:", formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      console.log("Response:", response);

      const result = await response.json();
      console.log("Response:", result);
      
      if (response.ok) {
        toast.success("Message sent successfully!");
        // Clear the form
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(`Error: ${result.message || "Failed to send message"}`);
      }
    } catch (error) {
      console.log("Submission Error:", error);
      toast.error("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-3"
      >
        <input
          type="text"
          name="name"
          className="p-4 border-0 rounded-lg focus:border-none focus:ring-0 w-full md:w-3/4 bg-[#e3e3e3] placeholder:font-semibold"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          className="p-4 border-0 rounded-lg focus:border-none focus:ring-0 focus:outline-none w-full md:w-3/4 bg-[#e3e3e3] placeholder:font-semibold"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          className="px-4 pt-4 pb-12 border-0 rounded-lg focus:border-none focus:ring-0 focus:outline-none w-full md:w-3/4 bg-[#e3e3e3] placeholder:font-semibold"
          placeholder="Message*"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button 
          className="text-xl border rounded-xl w-full md:w-3/4 py-4 text-white bg-black hover:bg-gray-800 transition-colors disabled:opacity-50"
          type="submit"
          disabled={ isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Now"}
        </button>
      </form>
    </div>
  );
};

export default Form;
