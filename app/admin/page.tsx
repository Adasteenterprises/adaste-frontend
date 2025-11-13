"use client";

import { useState, useEffect } from "react";

interface Application {
  name: string;
  email: string;
  amount: number;
  purpose: string;
  createdAt: string;
}

export default function AdminPage() {
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const correctPIN = "1234"; // 🔐 Change this to your preferred PIN

  const handleLogin = () => {
    if (pin === correctPIN) {
      setIsAuthenticated(true);
      localStorage.setItem("admin-auth", "true");
    } else {
      setError("Invalid PIN. Try again.");
    }
  };

  useEffect(() => {
    const savedAuth = localStorage.getItem("admin-auth");
    if (savedAuth === "true") setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      async function fetchData() {
        setLoading(true);
        try {
          const res = await fetch("/data/applications.json", {
            cache: "no-store",
          });
          if (res.ok) {
            const data = await res.json();
            setApplications(data);
          }
        } catch (err) {
          console.error("Error loading applications", err);
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
        <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
          <h1 className="text-2xl font-bold text-blue-700 mb-4">Admin Login</h1>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter admin PIN"
            className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </main>
    );
  }

  return (
    <main className="p-6 min-h-screen bg-gray-50 text-gray-900">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Loan Applications</h1>
        <button
          onClick={() => {
            localStorage.removeItem("admin-auth");
            setIsAuthenticated(false);
          }}
          className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading applications...</p>
      ) : applications.length === 0 ? (
        <p className="text-center text-gray-500">
          No applications received yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Amount</th>
                <th className="py-2 px-4 text-left">Purpose</th>
                <th className="py-2 px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, i) => (
                <tr
                  key={i}
                  className="border-t hover:bg-gray-100 transition-colors"
                >
                  <td className="py-2 px-4">{app.name}</td>
                  <td className="py-2 px-4">{app.email}</td>
                  <td className="py-2 px-4">Ksh {app.amount}</td>
                  <td className="py-2 px-4">{app.purpose}</td>
                  <td className="py-2 px-4">
                    {new Date(app.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

