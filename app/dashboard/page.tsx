export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Loan Dashboard</h1>
      <p className="text-gray-600 mb-8">
        Welcome to your loan management area. Track your loan applications, repayment status, and history all in one place.
      </p>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Total Loans</h2>
          <p className="text-2xl font-bold text-blue-700">0</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Active Loans</h2>
          <p className="text-2xl font-bold text-blue-700">0</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Amount Disbursed</h2>
          <p className="text-2xl font-bold text-blue-700">Ksh 0</p>
        </div>
      </div>

      {/* Empty state */}
      <div className="text-center py-20 border rounded-lg bg-white shadow">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          No loans found.
        </h3>
        <p className="text-gray-500 mb-6">
          You haven’t applied for any loans yet.
        </p>
        <a
          href="#apply"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition"
        >
          Apply for a Loan
        </a>
      </div>
    </main>
  );
}

