export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your Trusted Credit Partner
        </h1>
        <p className="max-w-xl text-lg mb-8">
          Empowering individuals and businesses in Kenya with fast, reliable,
          and transparent financial solutions.
        </p>
        <a
          href="#apply"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-100 transition"
        >
          Apply for a Loan
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          About Adaste Credit
        </h2>
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          At Adaste Credit, we understand that financial freedom drives growth.
          Our goal is to provide accessible credit solutions to help you achieve
          your dreams—whether it’s personal, business, or emergency financing.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Personal Loans</h3>
              <p className="text-gray-700">
                Get quick, flexible personal financing to meet your needs.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Business Loans</h3>
              <p className="text-gray-700">
                Expand or boost your business with tailored credit solutions.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Emergency Loans</h3>
              <p className="text-gray-700">
                Fast access to emergency funds when unexpected expenses arise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section
        id="apply"
        className="py-16 bg-gray-100 border-t border-gray-200 text-center"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Apply for a Loan
        </h2>
        <p className="max-w-xl mx-auto text-gray-700 mb-8">
          Fill out the form below to begin your loan application. Our team will
          get back to you within 24 hours.
        </p>

        <form className="max-w-md mx-auto bg-white p-8 rounded-xl shadow space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Loan Type</option>
            <option>Personal Loan</option>
            <option>Business Loan</option>
            <option>Emergency Loan</option>
          </select>
          <input
            type="number"
            placeholder="Loan Amount (Ksh)"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Submit Application
          </button>
        </form>
      </section>
    </main>
  );
}

