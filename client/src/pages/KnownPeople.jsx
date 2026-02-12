import React, { useState, useEffect } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import KnownPersonCard from "../components/people/KnownPersonCard";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import api from "../api/api";
import toast from "react-hot-toast";

export default function KnownPeople() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setLoading(true);

        // 🔴 BACKEND FETCH TEMPORARILY DISABLED
        // const response = await api.get("/people/all");
        // setPeople(response.data);

        // ✅ HARDCODED DATA (TEMP)
        const hardcodedPeople = [
          {
            _id: "1",
            name: "Kolanti Akash",
            role: "Staff",
            samplesCount: 12,
            createdAt: "2025-02-01",
          },
          {
            _id: "2",
            name: "Baki Vasanth",
            role: "Security",
            samplesCount: 15,
            createdAt: "2025-01-28",
          },
          {
            _id: "3",
            name: "Ankit Patel",
            role: "Organizer",
            samplesCount: 10,
            createdAt: "2025-01-20",
          },
        ];

        setPeople(hardcodedPeople);
      } catch (err) {
        toast.error("Failed to load registered people.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  const handleClick = () => {
    navigate("/add-person");
  };

  return (
    // <PageWrapper>
    <div>
      {/* Page Header */}
      <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 animate-fade-in">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 tracking-wide">
            Known People
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            {people.length} people registered in the recognition system
          </p>
        </div>
      </header>

      {/* People Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-indigo-600"></div>
        </div>
      ) : people.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {people.map((p) => (
            <KnownPersonCard key={p._id} person={p} />
          ))}
        </section>
      ) : (
        <div className="text-center py-20 bg-indigo-50/50 rounded-3xl border-2 border-dashed border-indigo-200">
          <p className="text-indigo-400 font-medium">
            No one has been registered yet.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      {/* <div className="fixed bottom-10 right-10 z-50 shadow-2xl">
        <Button label="Add Known Person" onClick={handleClick} />
      </div> */}

      <p className="text-gray-400 text-xs text-center mt-8 italic animate-fade-in">
        {people.length > 0
          ? "Each person has at least 10 biometric samples stored."
          : ""}
      </p>
    </div>
    // </PageWrapper>
  );
}