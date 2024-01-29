"use client";
import React, { useState } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export default function Buy() {
  const [amount, setAmount] = useState(0);

  const handleButtonClick = (value) => {
    setAmount((prevAmount) => {
      return prevAmount
        ? String(parseInt(prevAmount, 10) + parseInt(value, 10))
        : value;
    });
  };
  return (
    <div
      className="w-full h-[800px] flex items-center justify-center"
      dir="rtl"
    >
      <div className="w-[450px] h-[500px] bg-[#272523] rounded-xl p-3 mt-24">
        <div className="flex items-center justify-between">
          <p className="text-color3">خرید طلای آب شده  </p>
          <p className="text-color3">
            <span>قیمت :</span>
            <span className="text-color2 text-sm">29,000,000 </span>
            <span>ریال</span>
          </p>
        </div>
        <div className="border-2 border-color2 rounded-xl p-3 mt-6">
          <p className="text-color3"> مبلغ را وراد کنید :</p>

          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">ریال</span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              value={amount}
              className="block w-full rounded-md text-left border-0 py-2 pl-12  text- ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="0000"
              aria-describedby="price-currency"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <div className="flex gap-3 mt-5">
              <button
                className="w-1/2 border-2 py-2 rounded-lg border-color2 text-color2 hover:bg-color2 hover:text-color3"
                onClick={() => handleButtonClick("2000000")}
              >
                2,000,000 +
              </button>
              <button
                className="w-1/2 border-2 py-2 rounded-lg border-color2 text-color2 hover:bg-color2 hover:text-color3"
                onClick={() => handleButtonClick("1000000")}
              >
                1,000,000 +
              </button>
            </div>
            <div className="flex gap-3 mt-5">
              <button
                className="w-1/2 border-2 py-2 rounded-lg border-color2 text-color2 hover:bg-color2 hover:text-color3"
                onClick={() => handleButtonClick("10000000")}
              >
                10,000,000 +
              </button>
              <button
                className="w-1/2 border-2 py-2 rounded-lg border-color2 text-color2 hover:bg-color2 hover:text-color3"
                onClick={() => handleButtonClick("5000000")}
              >
                5,000,000 +
              </button>
            </div>
          </div>
          <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 mt-5 rounded-xl">
            <div className="flex">
              <div className="flex-shrink-0">
                <ExclamationTriangleIcon
                  className="h-5 w-5 text-yellow-400"
                  aria-hidden="true"
                />
              </div>
              <div className="mr-3">
                <p className="text-[12px] text-yellow-700">
                  واریز از کارت خودتان و کارت باید ثبت سامانه باشد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
