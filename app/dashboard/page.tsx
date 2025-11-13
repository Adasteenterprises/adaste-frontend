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
          href="/dashboard"
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
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                Personal Loans
              </h3>
              <p className="text-gray-700">
                Flexible personal loans designed to meet your everyday needs,
                from emergencies to home projects.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                Business Loans
              </h3>
              <p className="text-gray-700">
                Boost your business with affordable financing solutions tailored
                to entrepreneurs and SMEs.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                Salary Advance
              </h3>
              <p className="text-gray-700">
                Get quick access to funds when you need them most with our
                fast-tracked salary advance service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

