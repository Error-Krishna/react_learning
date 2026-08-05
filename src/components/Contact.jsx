const Contact = () => {
  return (
    <section className="min-h-[calc(100vh-85px)] py-12 px-4 md:px-8 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full mb-4">
          Contact
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Let&apos;s talk about your next order or a support question.
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Reach out through the details below and we&apos;ll keep the process
          quick and simple.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-md flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-gray-800">Contact details</h3>
          <p className="text-gray-600">Email: support@foodapp.com</p>
          <p className="text-gray-600">Phone: +91 98765 43210</p>
          <p className="text-gray-600">Hours: Mon - Sat, 9:00 AM - 8:00 PM</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-md flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-gray-800">Send a message</h3>
          <form className="flex flex-col gap-3">
            <input type="text" placeholder="Your name" className="w-full p-3 border border-orange-200 rounded-xl bg-orange-50/50 focus:outline-none focus:ring-2 focus:ring-orange-300" />
            <input type="email" placeholder="Your email" className="w-full p-3 border border-orange-200 rounded-xl bg-orange-50/50 focus:outline-none focus:ring-2 focus:ring-orange-300" />
            <textarea rows="5" placeholder="Write your message..." className="w-full p-3 border border-orange-200 rounded-xl bg-orange-50/50 focus:outline-none focus:ring-2 focus:ring-orange-300 resize-y"></textarea>
            <button type="button" className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-orange-600 transition transform hover:-translate-y-0.5 self-start">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;