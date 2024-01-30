"use client";
import React, { useState } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
const people = [
  {
    id: 1,
    name: "سکه امامی",
    Percent: 2 ,
    todayPrice: 30000000,
    yesterdayPrice: 29000000,
  },
  {
    id: 2,
    name: "سکه بهار آزادی",
    Percent: 1,
    todayPrice: 29000000,
    yesterdayPrice: 29100000,
  },
  {
    id: 3,
    name: "نیم سکه ",
    Percent: 3,
    todayPrice: 19000000,
    yesterdayPrice: 19100000,
  },
  {
    id: 4,
    name: "ربع سکه ",
    Percent: 1,
    todayPrice: 9000000,
    yesterdayPrice: 9100000,
  },
  {
    id: 5,
    name: "طلای 18 عیار",
    Percent: 5,
    todayPrice: 29000000 ,
    yesterdayPrice: 29100000,
  },
  {
    id: 6,
    name: "طلای 24 عیار",
    Percent: 2,
    todayPrice: 32000000,
    yesterdayPrice: 32100000,
  },
  // More people...
];

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
      className="w-full min-h-[800px] flex flex-col items-center justify-center py-20"
      dir="rtl"
    >
      <div className="w-[450px] min-h-[530px] bg-[#272523] rounded-xl p-3 mt-24">
        <div className="flex items-center justify-between">
          <p className="text-color3">خرید طلای آب شده </p>
          <p className="text-color3">
            <span>قیمت :</span>
            <span className="text-color2 text-sm">
            {new Intl.NumberFormat('fa-IR').format(29100000)}
               </span>
            <span>ریال</span>
          </p>
        </div>
        <div className="border-2 border-color2 rounded-xl p-3 mt-6">
          <p className="text-color3 text-sm"> مبلغ را وارد کنید :</p>

          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">ریال</span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              defaultValue={amount}
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
                {new Intl.NumberFormat('fa-IR').format(2000000)} +
              </button>
              <button
                className="w-1/2 border-2 py-2 rounded-lg border-color2 text-color2 hover:bg-color2 hover:text-color3"
                onClick={() => handleButtonClick("1000000")}
              >
                {new Intl.NumberFormat('fa-IR').format(1000000)} +
                 
              </button>
            </div>
            <div className="flex gap-3 mt-5">
              <button
                className="w-1/2 border-2 py-2 rounded-lg border-color2 text-color2 hover:bg-color2 hover:text-color3"
                onClick={() => handleButtonClick("10000000")}
              >
                {new Intl.NumberFormat('fa-IR').format(10000000)} +
              
              </button>
              <button
                className="w-1/2 border-2 py-2 rounded-lg border-color2 text-color2 hover:bg-color2 hover:text-color3"
                onClick={() => handleButtonClick("5000000")}
              >
                 {new Intl.NumberFormat('fa-IR').format(5000000)} +
              </button>
            </div>
          </div>
          <p className="text-color3 mt-3 text-sm"> مقدار طلا را وارد کنید :</p>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">وزن</span>
            </div>
            <input
              type="text"
              name="gram"
              id="gram"
              
              className="block w-full rounded-md text-left border-0 py-2 pl-12  text- ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="00"
              aria-describedby="price-currency"
            />
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
                  واریز و خرید فقط از کیف پول خودتان امکان پذیر می باشد.
                </p>
              </div>
            </div>
          </div>
          <p className="text-color3 mt-3 text-sm flex items-center justify-start">
            {" "}
            موجودی کیف پول : <span className="px-1 text-color2">  {new Intl.NumberFormat('fa-IR').format(0)} </span>ریال
          </p>
          <div className="w-full mt-3">
            <button className="w-full rounded-lg py-2 bg-color2 text-color3 border-2 border-color2 hover:bg-color3 hover:text-color2">
              خرید{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[80%] py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 mt-10 text-color2">
                جدول لحظه ای قیمت ها امروز به تومان
              </h1>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-400">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-right text-sm font-semibold text-gray-800"
                      >
                        عنوان
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-right text-sm font-semibold text-color1"
                      >
                        درصد نسبت به دیروز
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-right text-sm font-semibold text-color1"
                      >
                        قیمت امروز
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-right text-sm font-semibold text-color1"
                      >
                        قیمت دیروز
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person, index) => (
                      <tr
                        key={person.id}
                        className={`divide-x text-color1 ${
                          index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                        }`}
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                          {person.name}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-color2">
                        %  {new Intl.NumberFormat('fa-IR').format(person.Percent)}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-color2">
                        {new Intl.NumberFormat('fa-IR').format(person.todayPrice)}
                          
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-color2">
                        {new Intl.NumberFormat('fa-IR').format(person.yesterdayPrice)}
                          
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
