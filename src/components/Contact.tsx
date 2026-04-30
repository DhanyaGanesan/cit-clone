const Contact = () => {
  return (
    <div id="contact" className="py-20 px-6 md:px-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">
        Contact Us
      </h2>

      <form
        action="https://formspree.io/f/mzdopwgq"
        method="POST"
        className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md"
        >
        
        {/* Name */}
        <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full mb-4 p-3 border rounded-lg"
            required
        />

        {/* Email */}
        <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 border rounded-lg"
            required
        />

        {/* Message */}
        <textarea
            name="message"
            placeholder="Your Message"
            className="w-full mb-4 p-3 border rounded-lg"
            rows={4}
            required
        ></textarea>

        {/* Button */}
        <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
            Send Message
        </button>

      </form>
    </div>
  );
};

export default Contact;