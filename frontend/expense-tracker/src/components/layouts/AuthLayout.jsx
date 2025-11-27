import React from "react";
import CARD_2 from "../../assets/images/card2.png";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* LEFT SIDE */}
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
        {children}
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex w-[40vw] h-screen bg-violet-50 relative overflow-hidden items-center justify-center px-12 py-10">
        {/* CONTENT WRAPPER → centers everything */}
        <div className="relative w-full max-w-[420px] h-[600px]">
          {/* Top purple box */}
          <div className="w-44 h-44 rounded-[40px] bg-purple-600 absolute top-0 left-0" />

          {/* Border box */}
          <div className="w-40 h-40 rounded-[40px] border-[18px] border-fuchsia-600 absolute top-[42%] right-0" />

          {/* Bottom purple box */}
          <div className="w-44 h-44 rounded-[40px] bg-violet-500 absolute bottom-0 left-4" />

          {/* Stats Card */}
          <div className="relative z-20 pt-16 flex justify-end pr-4">
            <StatsInfoCard
              icon={<LuTrendingUpDown />}
              label="Track Your Income & Expenses"
              value="430,000"
              color="bg-purple-600"
            />
          </div>

          {/* Chart Image */}
          <img
            src={CARD_2}
            alt="card"
            className="relative w-[85%] h-auto mt-24 ml-auto z-20 rounded-xl shadow-lg shadow-purple-400/20"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[280px]">
      {/* Icon Box */}
      <div
        className={`w-12 h-12 flex items-center justify-center text-xl text-white rounded-xl flex-shrink-0 ${color}`}
      >
        {icon}
      </div>

      {/* Text */}
      <div>
        <h6 className="text-xs text-gray-500 whitespace-nowrap">{label}</h6>
        <span className="text-xl font-semibold">${value}</span>
      </div>
    </div>
  );
};