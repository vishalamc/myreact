import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cPrograms } from "../../data/cPrograms";

export default function ProblemStatement() {
  const { id } = useParams();
  const navigate = useNavigate();

  const program = cPrograms.find(
    (p) => p.id === Number(id)
  );

  if (!program) {
    return <h2 className="p-10">Problem Not Found</h2>;
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-8">

  <button
    onClick={() => navigate("/c-lab/CBasicsPage")}
    className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
  >
    ← Back to Programs
  </button>

  <h1 className="text-4xl font-bold text-slate-800 mb-4">
    {program.title}
  </h1>

  <div className="mb-6">
    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
      {program.level}
    </span>
  </div>

  {/* Problem Statement Card */}
  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">

    <h2 className="text-2xl font-bold text-blue-800 mb-4">
      📋 Problem Statement
    </h2>
<div 
  style={{
    whiteSpace: "pre-line",
    lineHeight: "1.6"
  }}
>
   <p className="text-gray-700 text-lg leading-8">
      {program.description}
    </p>
</div>
  
  </div>

  <div className="mt-8">
    <button
      onClick={() => navigate(`/c-program/${program.id}`)}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
    >
      View Solution →
    </button>
  </div>

</div>
      </div>

    </div>
  );
}