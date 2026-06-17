import React, { useState } from "react";
import { cPrograms } from "../../data/cPrograms";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

export default function CBasicsPage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredPrograms = cPrograms.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const getBadgeColor = (level) => {
    switch (level) {
      case "Easy":
        return "bg-green-100 text-green-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Hard":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-4">
            C Basics Programs
          </h1>

          <p className="text-xl text-slate-300">
            Practice fundamental C programming questions and improve your coding logic.
          </p>

        </div>
      </section>

      {/* Search */}
      <section className="max-w-7xl mx-auto px-6 py-8">

        <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center">

          <FaSearch className="text-gray-400 text-xl mr-3" />

          <input
            type="text"
            placeholder="Search Programs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-lg text-slate-700"
          />

        </div>

      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

          <h2 className="text-2xl font-bold text-slate-800">
            Total Programs: {filteredPrograms.length}
          </h2>

        </div>

      </section>

      {/* Program Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredPrograms.map((program) => (

            <div
              key={program.id}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              {/* Header */}
              <div className="flex justify-between items-start mb-4">

                <div className="bg-blue-100 p-3 rounded-xl">
                  <FaCode className="text-blue-600 text-xl" />
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${getBadgeColor(
                    program.level
                  )}`}
                >
                  {program.level}
                </span>

              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                {program.description
                  ? `${program.description.substring(0, 120)}...`
                  : "Practice this C programming problem and improve your coding skills."}
              </p>

              {/* Buttons */}
              <div className="flex justify-between items-center">

               <button
  onClick={() => navigate(`/problem/${program.id}`)}
  className="text-blue-600 hover:text-blue-800 font-semibold"
>
  Read More
</button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}