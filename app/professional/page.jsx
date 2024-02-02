"use client";

import { useState, useEffect } from "react";
import ChartComponent from "@/components/ChartComponent";
import axios from "axios";

export default function Professional() {
  const [activeTab, setActiveTab] = useState("menu1");
  const [activeDiv, setActiveDiv] = useState("bit");
  const [activeTabTop, setActiveTabTop] = useState("menuList1");
  const [data, setData] = useState([]);
  const [priceGold , setPriceGold] = useState(29120000);
  const [cash , setCash] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      setData(response.data);
      console.log("مقدار  سفارشات  ", response.data);
      //data = response.data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const orders = [
    {
      id: 1,
      date: "1399/01/01",
      product: "سکه امامی",
      quantity: 1,
      price: 2000,
      total: 2200,
      amount: 22000,
      status: "ارسال شده",
    },
    {
      id: 2,
      date: "1399/01/01",
      product: "ربع سکه",
      quantity: 6,
      price: 2000,
      total: 2200,
      amount: 22000,
      status: "پرداخت شده",
    },
    {
      id: 3,
      date: "1399/01/01",
      product: "ربع سکه",
      quantity: 6,
      price: 2000,
      total: 2200,
      amount: 22000,
      status: "منتظر تایید",
    },
    {
      id: 4,
      date: "1399/01/01",
      product: "ربع سکه",
      quantity: 6,
      price: 2000,
      total: 2200,
      amount: 22000,
      status: "لغو شده",
    },
    {
      id: 5,
      date: "1399/01/01",
      product: "ربع سکه",
      quantity: 6,
      price: 2000,
      total: 2200,
      amount: 22000,
      status: "منتظر تایید",
    },
  ];

  const showContent = (tab) => {
    setActiveDiv(tab);
  };

  const changeTab = (tab) => {
    console.log("Changing tab to:", tab);
    setActiveTabTop(tab);
  };

  const handleBuySubmit = async () => {
    try {
      const priceInput = document.getElementById('price');
      const paymentInput = document.getElementById('Payment');

      const priceValue = priceInput.value;
      const paymentValue = paymentInput.value; 

      const postData = {
        priceGold: priceGold,
        priceValue: priceValue,
        cash: cash,
        paymentValue: paymentValue,
        
      };

      
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);

      
      console.log('Response from server:', response.data);
    } catch (error) {
   
      console.error('Error:', error);
    }
  };

  const handleSellSubmit = async () => {
    try {
      const priceInput = document.getElementById('sellPrice');
      const paymentInput = document.getElementById('priceAmount');

      const priceValue = priceInput.value;
      const paymentValue = paymentInput.value; 

      const postData = {
        priceGold: priceGold,
        priceValue: priceValue,
        cash: cash,
        paymentValue: paymentValue,
        
      };

      
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);

      
      console.log('Response from server:', response.data);
    } catch (error) {
   
      console.error('Error:', error);
    }
  };
  return (
    <div className="mt-36" dir="rtl">
      <h2 className="text-center text-color2 text-xl md:text-3xl font-bold py-10">
        معامله حرفه ای
      </h2>
      <div className="flex p-3 gap-3">
        <div className="w-full md:w-1/4 p-3 border-2 border-color2 rounded-xl">
          <div className="flex items-center justify-center">
            <button
              onClick={() => showContent("bit")}
              style={{
                clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)",
                transform: "translateX(-15px)",
                width: "50%",
              }}
              className="bg-green-700 hover:bg-gray-400 text-gray-100 py-1 px-3 rounded-r"
            >
              خرید
            </button>
            <button
              onClick={() => showContent("toman")}
              style={{
                clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)",
                transform: "translateX(15px)",
                backgroundColor: "red",
                width: "50%",
              }}
              className="text-white py-1 px-3 rounded-l"
            >
              فروش
            </button>
          </div>
          {/* استارت حالت bit */}
          <div>
            {activeDiv === "bit" && (
              <div>
                {activeTab === "menu1" && (
                  <div className="w-full">
                    <div>
                      {/* قیمت فروش */}
                      <div className="flex items-center justify-between mt-5">
                        <label
                          htmlFor="price"
                          className=" text-[12px] font-medium leading-6 text-gray-100"
                        >
                          قیمت خرید
                        </label>
                        <span className=" text-[12px] font-medium leading-6 text-color2">
                          <span>
                          {new Intl.NumberFormat('fa-IR').format(priceGold)}
                          </span>
                          <span className="pr-2 text-color3">هزار تومان</span>
                        </span>
                      </div>
                      {/* Input for price */}
                      <div className="relative  rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm"> </span>
                        </div>

                        
                      </div>
                    </div>
                    {/* مقدار فروش */}
                    <div>
                      <label
                        htmlFor="price"
                        className="block text-[12px] font-medium leading-6 text-gray-100 pt-4"
                      >
                        مقدار خرید
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-1 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">تومان</span>
                        </div>
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="block w-full rounded-md border-0 py-1.5 pl-20 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          dir="ltr"
                          placeholder="000"
                        />
                       
                      </div>
                    </div>
                    {/* موجوی شما */}
                    <div className="flex gap-2 mt-2">
                      <span className="w-6 h-6 rounded-full border-[#f9d41a] border flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="6"
                          viewBox="0 0 192 512"
                        >
                          <path
                            fill="#f9d41a"
                            d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"
                          />
                        </svg>
                      </span>
                      <span>
                        <span className="text-gray-100 text-sm">
                          موجودی کیف پول شما :
                        </span>
                        <span className="text-[#f9d41a] px-2">
                        {new Intl.NumberFormat('fa-IR').format(cash)}
                        </span>
                      </span>
                    </div>
                    {/* پرداختی */}
                    <div>
                      <label
                        htmlFor="price"
                        className="block text-[12px] font-medium leading-6 text-gray-100 pt-4"
                      >
                        پرداختی
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-1 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">تومان</span>
                        </div>
                        <input
                          type="text"
                          name="Payment"
                          id="Payment"
                          className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          dir="ltr"
                          placeholder="000"
                        />
                      </div>
                    </div>
                    {/* ثبت سفارش فروش */}
                    <div className="mt-5">
                      <button
                        type="button"
                        onClick={handleBuySubmit}
                        className="text-gray-100 w-full bg-[#3fd63f] hover:bg-[#96dd54] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        ثبت سفارش خرید
                      </button>
                    </div>
                  </div>
                )}
                {/* Additional conditions for other tabs (menu2 and menu3) go here */}
              </div>
            )}
          </div>
          {/* اتمام حالت bit */}
          {/* استارت حالت تومان */}
          <div>
            {activeDiv === "toman" && (
              <div>
                {activeTab === "menu1" && (
                  <div className="w-full">
                     <div className="flex items-center justify-between mt-5">
                        <label
                          htmlFor="price"
                          className=" text-[12px] font-medium leading-6 text-gray-100"
                        >
                          قیمت فروش
                        </label>
                        <span className=" text-[12px] font-medium leading-6 text-color2">
                          <span>
                          {new Intl.NumberFormat('fa-IR').format(priceGold)}
                          </span>
                          <span className="pr-2 text-color3">هزار تومان</span>
                        </span>
                      </div>
                    {/* مقدار فروش */}
                    <div>
                      <label
                        htmlFor="price"
                        className="block text-[12px] font-medium leading-6 text-gray-100 pt-4"
                      >
                        مقدار فروش
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-1 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">تومان</span>
                        </div>
                        <input
                          type="text"
                          id="sellPrice"
                          className="block w-full rounded-md border-0 py-1.5 pl-20 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          dir="ltr"
                          placeholder="000"
                        />
                        
                      </div>
                    </div>
                    {/* موجوی شما */}
                    <div className="flex gap-2 mt-2">
                      <span className="w-6 h-6 rounded-full border-[#f9d41a] border flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="6"
                          viewBox="0 0 192 512"
                        >
                          <path
                            fill="#f9d41a"
                            d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"
                          />
                        </svg>
                      </span>
                      <span>
                        <span className="text-gray-100 text-sm">
                          موجودی کیف پول شما :
                        </span>
                        <span className="text-[#f9d41a] px-2">
                        {new Intl.NumberFormat('fa-IR').format(cash)}
                        </span>
                      </span>
                    </div>
                    {/* پرداختی */}
                    <div>
                      <label
                        htmlFor="price"
                        className="block text-[12px] font-medium leading-6 text-gray-100 pt-4"
                      >
                        پرداختی
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-1 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">تومان</span>
                        </div>
                        <input
                          type="text"
                          id="priceAmount"
                          className="block w-full rounded-md border-0 py-1.5 pl-20 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          dir="ltr"
                          placeholder="000"
                        />
                      </div>
                    </div>
                    {/* ثبت سفارش فروش */}
                    <div className="mt-5">
                      <button
                        type="button"
                        onClick={handleSellSubmit}
                        className="text-gray-100 w-full bg-[#d63f3f] hover:bg-[#dd5854] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        ثبت سفارش فروش
                      </button>
                    </div>
                  </div>
                )}
                {/* Additional conditions for other tabs (menu2 and menu3) go here */}
              </div>
            )}
          </div>
          {/* اتمام حالت تومان */}
        </div>
        <div className="hidden md:flex md:w-3/4  border-2 border-color2 rounded-xl p-3">
          <ChartComponent />
        </div>
      </div>

      <h3 className="text-center text-color2 text-xl md:text-3xl font-bold py-3 mt-5">
        سفارشات{" "}
      </h3>

      <div className="p-3">
        <div className="w-full p-3 border-2 border-color2 rounded-xl">
          <div>
            <div className="border-2 p-1 rounded-lg border-color3">
              <button
                onClick={() => changeTab("menuList1")}
                className={`text-[11px] md:text-sm py-1 w-1/3 text-color3 md:py-2 rounded-r-lg ${
                  activeTabTop === "menuList1" ? "active-tab" : ""
                }`}
                style={{
                  backgroundColor:
                    activeTabTop === "menuList1" ? "#ffb000" : "",
                  color: activeTabTop === "menuList1" ? "#004225" : "",
                }}
              >
                سفارشات باز
              </button>
              <button
                onClick={() => changeTab("menuList2")}
                className={`text-[11px] md:text-sm py-1 w-1/3 md:py-2 text-color3 ${
                  activeTabTop === "menuList2" ? "active-tab" : ""
                }`}
                style={{
                  backgroundColor:
                    activeTabTop === "menuList2" ? "#ffb000" : "",
                  color: activeTabTop === "menuList2" ? "#004225" : "",
                }}
              >
                تاریخچه سفارشات
              </button>
              <button
                onClick={() => changeTab("menuList3")}
                className={`text-[11px] md:text-sm py-1 w-1/3 text-color3 md:py-2 rounded-l-lg ${
                  activeTabTop === "menuList3" ? "active-tab" : ""
                }`}
                style={{
                  backgroundColor:
                    activeTabTop === "menuList3" ? "#ffb000" : "",
                  color: activeTabTop === "menuList3" ? "#004225" : "",
                }}
              >
                تاریخچه معاملات
              </button>
            </div>
            <div className="border-2 rounded-lg mt-4 p-3">
              {activeTabTop === "menuList1" && (
                <div className="w-full">
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-100 border border-gray-300 text-center">
                      <thead className="bg-gray-700 text-color3">
                        <tr>
                          <th className="py-3 px-4 border-b border-color2">
                            ردیف
                          </th>
                          <th className="py-3 px-4 border-b border-color2">
                            تاریخ
                          </th>
                          <th className="py-3 px-4 border-b border-color2">
                            عنوان
                          </th>
                          <th className="py-3 px-4 border-b border-color2">
                            وزن سفارش
                          </th>
                          <th className="py-3 px-4 border-b border-color2">
                            قیمت واحد
                          </th>
                          <th className="py-3 px-4 border-b border-color2">
                            قیمت بازار
                          </th>
                          <th className="py-3 px-4 border-b border-color2">
                            مبلغ کل
                          </th>
                          <th className="py-3 px-4 border-b border-color2">
                            وضعیت
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order, index) => (
                          <tr
                            key={order.id}
                            className={
                              index % 2 === 0
                                ? "bg-gray-100 text-color1"
                                : "bg-gray-300 text-color1"
                            }
                          >
                            <td className="py-2 px-4 border-b">
                              {new Intl.NumberFormat("fa-IR").format(order.id)}
                            </td>
                            <td className="py-2 px-4 border-b">{order.date}</td>
                            <td className="py-2 px-4 border-b">
                              {order.product}
                            </td>
                            <td className="py-2 px-4 border-b">
                              {new Intl.NumberFormat("fa-IR").format(
                                order.quantity
                              )}
                            </td>
                            <td className="py-2 px-4 border-b">
                              {new Intl.NumberFormat("fa-IR").format(
                                order.price
                              )}
                            </td>
                            <td className="py-2 px-4 border-b">
                              {new Intl.NumberFormat("fa-IR").format(
                                order.total
                              )}
                            </td>
                            <td className="py-2 px-4 border-b">
                              {new Intl.NumberFormat("fa-IR").format(
                                order.amount
                              )}
                            </td>
                            <td className="py-2 px-4 border-b">
                              <span
                                className={`rounded px-2 text-sm block ${
                                  order.status === "ارسال شده"
                                    ? "bg-green-500"
                                    : order.status === "پرداخت شده"
                                    ? "bg-green-700"
                                    : order.status === "منتظر تایید"
                                    ? "bg-yellow-500"
                                    : order.status === "لغو شده"
                                    ? "bg-red-500"
                                    : ""
                                } text-white`}
                              >
                                {order.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {activeTabTop === "menuList2" && (
                <div>
                  <div className="flex flex-col items-center  gap-3">
                    <img src="/img/no-data.svg" width="200px" alt="no-data" />
                    <p className="text-color3 text-sm py-3">
                      هیچ اطلاعاتی وجود ندارد !!
                    </p>
                  </div>
                </div>
              )}
              {activeTabTop === "menuList3" && (
                <div>
                  <div className="flex flex-col items-center  gap-3">
                    <img src="/img/no-data.svg" width="200px" alt="no-data" />
                    <p className="text-color3 text-sm py-3">
                      هیچ اطلاعاتی وجود ندارد !!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
