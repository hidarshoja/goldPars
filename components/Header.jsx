"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import NavBar from "./Navbar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure
      as="nav"
      className="bg-[#1b2924] shadow fixed w-full top-0 z-40"
      dir="rtl"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-1 lg:px-8">
            <div className="flex h-[80px]  justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center ml-0 lg:ml-2">
                  <img src="/img/dow.png" width={70} alt="logo" />
                </div>
                <div className="hidden sm:ml-0 sm:flex sm:space-x-4 justify-center items-center">
                  <NavBar />
                </div>
              </div>
              <div className="hidden sm:ml-0 sm:flex sm:items-center">
                <Link href="/login">
                  <button
                    type="button"
                    className="flex w-[60px] md:w-[100px] items-center justify-center rounded bg-green-600 px-4 md:px-6 py-2 text-xs text-[#fff] hover:bg-inherit border border-green-700"
                  >
                    ورود
                  </button>
                </Link>

                <Menu as="div" className="relative ml-0">
                  <div className="mr-1">
                    <Link href="/register">
                      <button
                        type="button"
                        className="flex w-[80px] md:w-[100px] items-center justify-center rounded border border-green-600 px-4 md:px-6 py-2 text-xs text-white hover:bg-green-700"
                      >
                        ثبت نام
                      </button>
                    </Link>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                خانه
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                درباره ما
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contactUs"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                تماس با ما
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/blog"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                بلاگ
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/faqs"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                سوالات متداول
              </Disclosure.Button>
              
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                       صفحات بیشتر
                    </Disclosure.Button>

                    {/* زیرمنو */}
                    <Disclosure.Panel>
                      <div className="space-y-1">
                        <Disclosure.Button
                          as="a"
                          href="/sellPage"
                          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                        >
                          فروش
                        </Disclosure.Button>
                        <Disclosure.Button
                          as="a"
                          href="/buyPage"
                          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                        >
                          خرید
                        </Disclosure.Button>
                        <Disclosure.Button
                          as="a"
                          href="/product"
                          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                        >
                          محصولات
                        </Disclosure.Button>
                        <Disclosure.Button
                          as="a"
                          href="/cart"
                          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                        >
                          سبد خرید
                        </Disclosure.Button>
                        <Disclosure.Button
                          as="a"
                          href="/professional"
                          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                        >
                          قیمت حرفه‌ای
                        </Disclosure.Button>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4"></div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="/login"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  ورود
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/register"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  ثبت نام
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
