import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCode,
  FaSearch,
  FaLaptopCode,
  FaTrophy,
  FaBookOpen,
  FaArrowRight,
  FaFire,
} from "react-icons/fa";

export default function ClabLandingPage() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "C Basics",
      count: 25,
      color: "bg-blue-500",
      path: "/c-lab/CBasicsPage",
    },
    {
      title: "Operators",
      count: 20,
      color: "bg-green-500",
      path: "/learnc/operator",
    },
    {
      title: "Decision Making",
      count: 18,
      color: "bg-purple-500",
      path: "/learnc/ifelse",
    },
    {
      title: "Loops",
      count: 30,
      color: "bg-orange-500",
      path: "/learnc/loops",
    },
    {
      title: "Arrays",
      count: 22,
      color: "bg-pink-500",
      path: "/learnc/array",
    },
    {
      title: "Functions",
      count: 24,
      color: "bg-cyan-500",
      path: "/learnc/functionmcq",
    },
    {
      title: "Pointers",
      count: 15,
      color: "bg-red-500",
      path: "/learnc/pointer",
    },
    {
      title: "Structures",
      count: 12,
      color: "bg-indigo-500",
      path: "/learnc/structure",
    },
  ];

  const latestPrograms = [
    "Login Name Validation System",
    "Validate User Password",
    "Banking Transactions",
    "Water Tank Monitoring",
    "Parking Fee Calculator",
    "Railway Ticket Fare",
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="text-center">

            <div className="inline-flex items-center bg-white/10 px-5 py-2 rounded-full mb-6">
              <FaLaptopCode className="mr-2" />
              C Programming Lab
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Learn C By Coding
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              Practice Real Programs • Build Logic • Debug Errors •
              Master Programming Concepts
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/Comingsoon")}
                className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-500"
              >
                Start Practicing
              </button>

              <button className="bg-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/20">
                Take MCQ Test
              </button>
            </div>

          </div>
        </div>
      </section>

           {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h2 className="text-4xl font-bold text-blue-600">150+</h2>
            <p className="text-gray-600 mt-2">Programs</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h2 className="text-4xl font-bold text-green-600">50+</h2>
            <p className="text-gray-600 mt-2">MCQ Tests</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h2 className="text-4xl font-bold text-purple-600">10</h2>
            <p className="text-gray-600 mt-2">Modules</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h2 className="text-4xl font-bold text-orange-600">100%</h2>
            <p className="text-gray-600 mt-2">Practical Learning</p>
          </div>

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 pb-10">

        <h2 className="text-4xl font-bold text-slate-800 mb-8">
          Practice Categories
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200 hover:border-blue-500 hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer"
            >
              <div
                className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white mb-4`}
              >
                <FaCode />
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500">
                {item.count} Practice Questions
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DAILY CHALLENGE */}
      <section className="max-w-7xl mx-auto px-6 py-8">

        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-10 text-white">

          <div className="flex flex-col md:flex-row justify-between items-center">

            <div>
              <div className="flex items-center gap-3 mb-3">
                <FaFire />
                <h2 className="text-3xl font-bold">
                  Daily Coding Challenge
                </h2>
              </div>
                 </div>

            <button className="mt-5 md:mt-0 bg-white text-green-600 px-6 py-3 rounded-xl font-bold">
              Solve Now
            </button>

          </div>

        </div>

      </section>

      {/* LATEST PROGRAMS */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-4xl font-bold text-slate-800 mb-8">
          Latest Practice Programs
        </h2>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          {latestPrograms.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-5 border-b hover:bg-blue-50 transition cursor-pointer"
            >
              <div className="flex items-center gap-4">

                <div className="bg-blue-100 p-3 rounded-xl">
                  <FaBookOpen className="text-blue-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    {item}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Medium Level Program
                  </p>
                </div>

              </div>

              <button className="flex items-center text-blue-600 font-semibold">
                Practice
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="bg-slate-900 rounded-3xl text-white p-12 text-center">

          <FaTrophy className="mx-auto text-5xl text-yellow-400 mb-5" />

          <h2 className="text-4xl font-bold mb-4">
            Ready To Learn C Programming?
          </h2>

          <p className="text-slate-300 mb-8">
            Start solving programs and improve your coding skills today.
          </p>

          <button
            onClick={() => navigate("/learnc/introduction")}
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-500"
          >
            Start Learning
          </button>

        </div>

      </section>

    </div>
  );
}
