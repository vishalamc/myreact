import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cPrograms } from "../../data/cPrograms";

export default function ProgramDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const program = cPrograms.find(
    (p) => p.id === Number(id)
  );

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Program Not Found
          </h1>

          <button
            onClick={() => navigate("/c-lab/CBasicsPage")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Back to Programs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          {/* Back Button */}
          <button
            onClick={() => navigate("/c-lab/CBasicsPage")}
            className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md"
          >
            ← Back to Programs
          </button>

          {/* Title */}
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            {program.title}
          </h1>

          {/* Level */}
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full font-medium">
            {program.level}
          </span>

          {/* Program Code */}
          <h2 className="text-2xl font-bold mt-8 mb-4">
            Program Code
          </h2>

          <pre className="bg-slate-900 text-green-400 p-6 rounded-xl overflow-auto whitespace-pre-wrap">
            <code>{program.code}</code>
          </pre>
  {/* Input Heading */}
          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
            Input
          </h2>
               {/* Input Box */}
          <div className="bg-black text-green-400 p-5 rounded-xl font-mono text-lg">
            {program.input || "Input not available"}
          </div>

          {/* Output Heading */}
          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
            Output
          </h2>

      

          {/* Output Box */}
          <div className="bg-black text-green-400 p-5 rounded-xl font-mono text-lg">
            {program.output || "Output not available"}
          </div>

          
        </div>

      </div>

    </div>
  );
}