"use client";

import { useEffect, useState } from "react";

interface Application {
  name: string;
  email: string;
  amount: number;
  purpose: string;
  createdAt: string;
}

export default function AdminPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
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
  }, []);

  return (
    <main className="p-6 min-h-screen bg-gray-50 text-gray-900">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Loan Applications
      </h1>

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

