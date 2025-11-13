"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://adaste-mpesa-sms.onrender.com";

  useEffect(() => {
    fetch(`${API_URL}/loans`)
      .then((res) => res.json())
      .then((data) => {
        setLoans(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch loans:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Adaste Credit Your Trusted Credit Partner</h1>
      {loading ? (
        <p className="text-center">Loading loans...</p>
      ) : loans.length === 0 ? (
        <p className="text-center text-gray-500">No loans found.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {loans.map((loan) => (
            <div
              key={loan.id}
              className="bg-white shadow-md p-4 rounded-2xl border border-gray-200"
            >
              <h2 className="text-xl font-semibold">{loan.borrowerName}</h2>
              <p>Amount: <strong>Ksh {loan.amount}</strong></p>
              <p>Status: <span className="text-blue-600">{loan.status}</span></p>
              <p>Date: {new Date(loan.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

