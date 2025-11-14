// app/apply/page.tsx
"use client";

import { useState } from "react";

export default function ApplyPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [purpose, setPurpose] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setError(null);

    // basic validation
    if (!fullName || !email || !phone || !amount || !term) {
      setError("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      // get token from localStorage if present
      const stored = typeof window !== "undefined" ? localStorage.getItem("token") : null;
      const headers: Record<string,string> = { "Content-Type": "application/json" };
      if (stored) headers.Authorization = `Bearer ${stored}`;

      const res = await fetch("http://localhost:10000/api/loans/apply", {
        method: "POST",
        headers,
        body: JSON.stringify({
          amount: Number(amount),
          term,
          purpose,
          // optional metadata you want saved with the loan
          applicant: { fullName, email, phone },
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || data.message || "Failed to submit application");
      } else {
        setMessage("✅ Application submitted successfully.");
        // clear form
        setFullName("");
        setEmail("");
        setPhone("");
        setAmount("");
        setTerm("");
        setPurpose("");
      }
    } catch (err) {
      setError("Network error: Could not reach backend.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-bold mb-2">Apply for a Loan</h1>
        <p className="text-sm text-gray-600 mb-6">
          Fill out the form below to begin your loan application. We will review and get back to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name *</label>
            <input
              className="mt-1 block w-full rounded border p-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email Address *</label>
            <input
              type="email"
              className="mt-1 block w-full rounded border p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone Number *</label>
            <input
              className="mt-1 block w-full rounded border p-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Loan Amount (Ksh) *</label>
            <input
              type="number"
              className="mt-1 block w-full rounded border p-2"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Loan Term *</label>
            <select
              className="mt-1 block w-full rounded border p-2"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              required
            >
              <option value="">Select term</option>
              <option value="1 month">1 month</option>
              <option value="3 months">3 months</option>
              <option value="6 months">6 months</option>
              <option value="12 months">12 months</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Purpose (optional)</label>
            <textarea
              className="mt-1 block w-full rounded border p-2"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>

            {message && <span className="text-green-600">{message}</span>}
            {error && <span className="text-red-600">{error}</span>}
          </div>
        </form>
      </section>
    </main>
  );
}

