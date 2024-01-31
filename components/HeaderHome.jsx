"use client";

import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import { useState ,useEffect } from "react";

import axios from "axios";

const cards = [
  {
    name: "مجموعه  پارس زرگر",
    description:
      "جهت برقرای تماس با ما به صفحه ارتباط با ما مراجعه کنید و یا از طریق ایمیل با ما در تماس باشید.",
    icon: PhoneIcon,
  },
  {
    name: "پشتیبانی فنی ",
    description:
      "تیم پشتبانی  پارس زرگر در 24 ساعت شبانه روز پاسخگوی شما مشتریان گرامی می باشد .",
    icon: LifebuoyIcon,
  },
  {
    name: "سوالات کاربران  ",
    description:
      "جهت مشاهده سوالات در خصوص نحوه ثبت نام ، نحوه خرید ، و تمام این موراد به صفحه سوالات مراجعه کنید .",
    icon: NewspaperIcon,
  },
];



export default function HeaderHome() {
  const [activeTab, setActiveTab] = useState("buy");
  const [price, setPrice] = useState("");
  const [gram, setGram] = useState("");
  const [priceSell, setPriceSell] = useState("");
  const [gramSell, setGramSell] = useState("");

  const handleBuyButtonClick = async () => {
    try {
      const dataToSend = {
        price,
        gram,
      };
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", dataToSend);

      console.log("Server Response:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  const handleSellButtonClick = async () => {
    try {
      const dataToSend = {
        priceSell,
        gramSell,
      };
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", dataToSend);

      console.log("Server Response:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
 

  const handleButtonClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div
      className="relative isolate overflow-hidden bg-color1 py-24 sm:py-32 w-full"
      dir="rtl"
    >
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className=" mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mx-auto max-w-2xl lg:mx-0 w-full md:w-1/2">
            <h2 className="text-4xl font-bold tracking-tight text-color2 sm:text-6xl">
              پارس زرگر
            </h2>
            <p className="mt-6 text-lg leading-8 text-color2">
              خرید و فروش آنلاین و بدون واسطه در هر ساعت از شبانه روز با پارس
              زرگر
            </p>
            <div className="w-full flex items-center justify-center mt-3">
              <button
                type="button"
                className="flex w-[200px] items-center justify-center rounded bg-green-600 px-6 py-3 text-xs  text-color2"
              >
                همین الان شروع کنید !
              </button>
            </div>
          </div>
          <div className="w-full md:w-2/3 flex items-center justify-end mt-8 md:mt-0">
            <div className="w-full  md:w-[300px] lg:w-[400px] h-[400px] flex flex-col  gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1 items-center justify-center py-2">
                  <p className="text-color2">قیمت خرید</p>
                  <p className="text-sm text-green-600">
                  <span>
                      {new Intl.NumberFormat("fa-IR").format(29502000)}
                    </span>
                    <span className="px-2">تومان</span>
                  </p>
                </div>
                <div>
                  <img src="/img/dow.png" width="50px" alt="logo" />
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                  <p className="text-color2">قیمت فروش</p>
                  <p className="text-sm text-red-600">
                    <span>
                      {new Intl.NumberFormat("fa-IR").format(29302000)}
                    </span>
                    <span className="px-2">تومان</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-2 w-full">
                <div className="w-1/2">
                  <button
                    type="button"
                    onClick={() => handleButtonClick("buy")}
                    className="flex w-full items-center justify-center rounded bg-green-600 px-6 py-2 text-xs  text-color3"
                  >
                    خرید
                  </button>
                </div>
                <div className="w-1/2">
                  <button
                    type="button"
                    onClick={() => handleButtonClick("sell")}
                    className="flex w-full items-center justify-center rounded bg-red-500 px-6 py-2 text-xs text-color3"
                  >
                    فروش
                  </button>
                </div>
              </div>
              <div className="mt-5">
                {activeTab === "buy" && (
                  <div className="buyBox">
                    <div>
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium leading-6 text-color2"
                      >
                        مبلغ
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-color1 sm:text-sm">ریال</span>
                        </div>
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="مقدار را به ریال وارد کنید"
                          aria-describedby="price-currency"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium leading-6 text-color2 mt-3"
                      >
                        مقدار
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-color1 sm:text-sm">گرم</span>
                        </div>
                        <input
                          type="text"
                          name="gram"
                          id="gram"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="مقدار طلا را به گرم وارد کنید"
                          aria-describedby="price-currency"
                          value={gram}
                          onChange={(e) => setGram(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="py-5 mt-3 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={handleBuyButtonClick}
                        className="text-color3 py-2 hover:text-white border border-green-700 hover:bg-green-500 w-full rounded-lg"
                      >
                        خرید
                      </button>
                    </div>
                  </div>
                )}
                {activeTab === "sell" && (
                  <div className="sellBox">
                    <div className="buyBox">
                      <div>
                        <label
                          htmlFor="price"
                          className="block text-sm font-medium leading-6 text-color2"
                        >
                          مقدار
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-color1 sm:text-sm">گرم</span>
                          </div>
                          <input
                            type="text"
                            name="price"
                            id="gram"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="مقدار طلا را به گرم وارد کنید"
                            aria-describedby="price-currency"
                            value={gramSell}
                            onChange={(e) => setGramSell(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="price"
                          className="block text-sm font-medium leading-6 text-color2 mt-3"
                        >
                          مبلغ
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-color1 sm:text-sm">ریال</span>
                          </div>
                          <input
                            type="text"
                            name="price"
                            id="price"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="مقدار را به ریال وارد کنید"
                            aria-describedby="price-currency"
                            value={priceSell}
                            onChange={(e) => setPriceSell(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="py-5 mt-3 flex items-center justify-center">
                        <button
                          type="button"
                          onClick={handleSellButtonClick}
                          className="text-color3 py-2 hover:text-white border bg-red-600 hover:bg-red-800 w-full rounded-lg"
                        >
                          فروش
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <card.icon
                className="h-7 w-5 flex-none text-indigo-400"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-color2">{card.name}</h3>
                <p className="mt-2 text-color2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
