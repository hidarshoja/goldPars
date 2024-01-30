"use client";

// components/NavBar.js

import { useState , Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const solutions = [
  { name: 'خرید طلای آبشده', description: 'در این صفحه می توانید طلا بخرید', href: '/buyPage' },
  {
    name: 'فروش طلای آبشده ',
    description: 'در این صفحه می توانید طلای خود را بفروشید',
    href: '/sellPage',
  },
  { name: 'محصولات', description: 'در این صفحه می توانید اقدام به  دیدن محصولات کنید', href: '/product' },
  { name: 'سبد خرید ', description: 'در این صفحه سبد خرید خود را مشاهده کنید', href: '/cart' },
  { name: 'قیمت حرفه ای', description: 'در این صفحه کی توانید براساس سطح خود قیمت  ها را ببینید', href: '#' },
]

const NavBar = () => {
  const router = usePathname();
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const showSubmenu = () => {
    setSubmenuVisible(true);
  };

  const hideSubmenu = () => {
    setSubmenuVisible(false);
  };

  const isActive = (pathname) => router === pathname;

  return (
    <ul className="flex gap-3">
      <li>
        <Link
          href="/"
          className={`cursor-pointer inline-flex items-center border-b-2 ${
            isActive("/") ? "border-green-500" : "border-transparent"
          } px-1 pt-1 text-sm font-medium ${
            isActive("/") ? "text-green-400" : "text-color3"
          } hover:border-gray-300`}
        >
          خانه
        </Link>
      </li>

      <li>
        <Link
          href="/about"
          className={`cursor-pointer inline-flex items-center border-b-2 ${
            isActive("/about") ? "border-green-500" : "border-transparent"
          } px-1 pt-1 text-sm font-medium ${
            isActive("/about") ? "text-green-400" : "text-color3"
          } hover:border-gray-300`}
        >
           درباره ما
        </Link>
      </li>
      <li>
        <Link
          href="/contactUs"
          className={`cursor-pointer inline-flex items-center border-b-2 ${
            isActive("/contactUs") ? "border-green-500" : "border-transparent"
          } px-1 pt-1 text-sm font-medium ${
            isActive("/contactUs") ? "text-green-400" : "text-color3"
          } hover:border-gray-300`}
        >
          تماس با ما
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          className={`cursor-pointer inline-flex items-center border-b-2 ${
            isActive("/blog") ? "border-green-500" : "border-transparent"
          } px-1 pt-1 text-sm font-medium ${
            isActive("/blog") ? "text-green-400" : "text-color3"
          } hover:border-gray-300`}
        >
          بلاگ
        </Link>
      </li>
      <li>
        <Link
          href="/faqs"
          className={`cursor-pointer inline-flex items-center border-b-2 ${
            isActive("/faqs") ? "border-green-500" : "border-transparent"
          } px-1 pt-1 text-sm font-medium ${
            isActive("/faqs") ? "text-green-400" : "text-color3"
          } hover:border-gray-300`}
        >
          سوالات متداول
        </Link>
      </li>

      <li>
      <Popover className="relative">
      <Popover.Button className="inline-flex items-center  px-1 pt-1 text-sm font-medium text-color3 cursor-pointer gap-1">
        <span>عملیات مالی </span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-sm flex-auto rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            {solutions.map((item) => (
              <div key={item.name} className="relative rounded-lg p-4 hover:bg-gray-50">
                <Link href={item.href} className="font-semibold text-color1">
                  {item.name}
                  <span className="absolute inset-0" />
                </Link>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
      </li>
    </ul>
  );
};

export default NavBar;
