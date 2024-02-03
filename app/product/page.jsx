"use client";

import { Fragment, useState , useEffect } from "react";
import { toast, ToastContainer , Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Link from "next/link";
import {
  Dialog,
  Disclosure,
  Popover,
  Tab,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid";




const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};
const breadcrumbs = [{ id: 1, name: "خانه", href: "/" }];
const filters = [
  {
    id: "color",
    name: "رنگ",
    options: [
      { value: "white", label: "سفید" },
      { value: "gold", label: "طلایی" },
    ],
  },
  {
    id: "category",
    name: "دسته بندی ",
    options: [
      { value: "سکه", label: "سکه" },
      { value: "گردنبند", label: "گردنبند" },
      { value: "دستنبند", label: "دستبند" },
      { value: "انگشتر", label: "انگشتر" },
      { value: "النگو", label: "النگو" },
    ],
  },
  {
    id: "sizes",
    name: "سایز",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "2xl", label: "2XL" },
    ],
  },
];
const products = [
  {
    id: 1,
    name: "سکه",
    href: "#",
    price: "2000000",
    description: "گردنبند طرح شبنم به وزن تقریبی 8 گرم ",
    options: "8",
    imageSrc: "/img/Amin.jpg",
    imageAlt: "E",
  },
  {
    id: 2,
    name: "شمش",
    href: "#",
    price: "6000000",
    description: "انگشتر زمرد طرح یاقوت به وزن تقریبی 9 گرم",
    options: "9",
    imageSrc: "/img/ima.jpeg",
    imageAlt: "Front",
  },
  {
    id: 3,
    name: "سکه",
    href: "#",
    price: "2000000",
    description: "یقه بند طرح شبنم به وزن تقریبی 8 گرم ",
    options: "8",
    imageSrc: "/img/ima2.jpeg",
    imageAlt: "E",
  },
  {
    id: 4,
    name: "انگشتر یاقوت نگین دار",
    href: "#",
    price: "6000000",
    description: "انگشتر یاقوت نگین دار طرح یاقوت به وزن تقریبی 9 گرم",
    options: "9",
    imageSrc: "/img/gold4.jpg",
    imageAlt: "Front",
  },
  {
    id: 5,
    name: " انگشتر حلقه ای",
    href: "#",
    price: "2000000",
    description: "یقه بند طرح شبنم به وزن تقریبی 8 گرم ",
    options: "8",
    imageSrc: "/img/gold6.jpg",
    imageAlt: "E",
  },
  {
    id: 6,
    name: "انگشتر یاقوت نگین دار",
    href: "#",
    price: "6000000",
    description: "انگشتر یاقوت نگین دار طرح یاقوت به وزن تقریبی 9 گرم",
    options: "9",
    imageSrc: "/img/gold5.jpg",
    imageAlt: "Front",
  },
  {
    id: 7,
    name: " انگشتر حلقه ای",
    href: "#",
    price: "2000000",
    description: "یقه بند طرح شبنم به وزن تقریبی 8 گرم ",
    options: "8",
    imageSrc: "/img/gold7.jpg",
    imageAlt: "E",
  },
  {
    id: 8,
    name: "شمش طلا",
    href: "#",
    price: "2000000",
    description: "یقه بند طرح شبنم به وزن تقریبی 18 گرم ",
    options: "8",
    imageSrc: "/img/im6.jpg",
    imageAlt: "E",
  },
  {
    id: 9,
    name: "النگو ",
    href: "#",
    price: "6000000",
    description: "انگشتر یاقوت نگین دار طرح یاقوت به وزن تقریبی 9 گرم",
    options: "9",
    imageSrc: "/img/im7.jpg",
    imageAlt: "Front",
  },
  {
    id: 10,
    name: " انگشتر حلقه ای",
    href: "#",
    price: "2000000",
    description: "یقه بند طرح شبنم به وزن تقریبی 8 گرم ",
    options: "8",
    imageSrc: "/img/im8.jpg",
    imageAlt: "E",
  },
  {
    id: 11,
    name: "شمش طلا",
    href: "#",
    price: "2000000",
    description: "یقه بند طرح شبنم به وزن تقریبی 18 گرم ",
    options: "8",
    imageSrc: "/img/im1.jpg",
    imageAlt: "E",
  },
  {
    id: 12,
    name: "النگو ",
    href: "#",
    price: "6000000",
    description: "انگشتر یاقوت نگین دار طرح یاقوت به وزن تقریبی 9 گرم",
    options: "9",
    imageSrc: "/img/im2.jpg",
    imageAlt: "Front",
  },
  {
    id: 13,
    name: "گردنبند",
    href: "#",
    price: "2000000",
    description: "گردنبند طرح شبنم به وزن تقریبی 8 گرم ",
    options: "8",
    imageSrc: "/img/gold1.jpg",
    imageAlt: "E",
  },
  {
    id: 14,
    name: "انگشتر یاقوت",
    href: "#",
    price: "6000000",
    description: "انگشتر زمرد طرح یاقوت به وزن تقریبی 9 گرم",
    options: "9",
    imageSrc: "/img/gold2.jpg",
    imageAlt: "Front",
  },
  {
    id: 15,
    name: "یقه بند یاقوت",
    href: "#",
    price: "2000000",
    description: "یقه بند طرح شبنم به وزن تقریبی 8 گرم ",
    options: "8",
    imageSrc: "/img/gold3.jpg",
    imageAlt: "E",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Products() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [data, setData] = useState([]);
  const handleAddToCart = (product) => {
    // alert(`محصول "${product.name}" به سبد خرید اضافه شد!`);
    toast.success('محصول به سبد خرید شما اضافه شد', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      rtl: true,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: "light",
      transition: Bounce, 
      style: { top: '43px', fontSize:"14px" } 
    });
  };
  //   اضافه

  // const [open, setOpen] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState(null);

  // const [heartColors, setHeartColors] = useState({});
  // جدید
  const [visibleBoxes, setVisibleBoxes] = useState(6);
  const boxesIncrement = 3;
  const totalBoxes = products.length;
  const initialFormState = {};

  // وضعیت اینپوت‌ها با استفاده از useState
  const [formState, setFormState] = useState(initialFormState);

  const handleInputChange = (sectionId, optionValue) => {
    setFormState((prevState) => {
      if (sectionId === "section1") {
        // اگر بخش اول باشد، بررسی کنید چک باکس انتخاب شده یا نه
        const updatedSection1 = prevState.section1.includes(optionValue)
          ? prevState.section1.filter((value) => value !== optionValue)
          : [...prevState.section1, optionValue];

        return { ...prevState, section1: updatedSection1 };
      }

      // برای بخش‌های دیگر
      return { ...prevState, [sectionId]: optionValue };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formState
      );
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleButtonClick = () => {
    if (visibleBoxes + boxesIncrement <= totalBoxes) {
      setVisibleBoxes(visibleBoxes + boxesIncrement);
    } else {
      setVisibleBoxes(totalBoxes);
    }
  };

  const handleSelectChange = async (selectedValue) => {
    try {
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
      const requestData = {
        selectedValue: selectedValue,
      };
      const response = await axios.post(apiUrl, requestData);
  
      console.log('Response from server:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      setData(response.data);
      console.log("  محصولات به روز شد" , response.data);
      //data = response.data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-color1 mt-[130px]" dir="rtl">
      <div>
        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}
                  <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-gray-200">
                      <Tab.List className="-mb-px flex space-x-8 px-4">
                        {navigation.categories.map((category) => (
                          <Tab
                            key={category.name}
                            className={({ selected }) =>
                              classNames(
                                selected
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-900",
                                "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                              )
                            }
                          >
                            {category.name}
                          </Tab>
                        ))}
                      </Tab.List>
                    </div>
                    <Tab.Panels as={Fragment}>
                      {navigation.categories.map((category) => (
                        <Tab.Panel
                          key={category.name}
                          className="space-y-10 px-4 pb-8 pt-10"
                        >
                          <div className="grid grid-cols-2 gap-x-4">
                            {category.featured.map((item) => (
                              <div
                                key={item.name}
                                className="group relative text-sm"
                              >
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                  <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="object-cover object-center"
                                  />
                                </div>
                                <Link
                                  href={item.href}
                                  className="mt-6 block font-medium text-gray-900"
                                >
                                  <span
                                    className="absolute inset-0 z-10"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                                <p aria-hidden="true" className="mt-1">
                                  Shop now
                                </p>
                              </div>
                            ))}
                          </div>
                          {category.sections.map((section) => (
                            <div key={section.name}>
                              <p
                                id={`${category.id}-${section.id}-heading-mobile`}
                                className="font-medium text-color2"
                              >
                                {section.name}
                              </p>
                              <ul
                                role="list"
                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                className="mt-6 flex flex-col space-y-6"
                              >
                                {section.items.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <Link
                                      href={item.href}
                                      className="-m-2 block p-2 text-color2"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>

                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    {navigation.pages.map((page) => (
                      <div key={page.name} className="flow-root">
                        <Link
                          href={page.href}
                          className="-m-2 block p-2 font-medium text-color2"
                        >
                          {page.name}
                        </Link>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    <div className="flow-root">
                      <Link
                        href="/login"
                        className="-m-2 block p-2 font-medium text-color2"
                      >
                        ورود
                      </Link>
                    </div>
                    <div className="flow-root">
                      <Link
                        href="#"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Create account
                      </Link>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6">
                    <Link href="#" className="-m-2 flex items-center p-2">
                      <img
                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span className="ml-3 block text-base font-medium text-gray-900">
                        CAD
                      </span>
                      <span className="sr-only">, change currency</span>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>

      <div>
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 pb-4 pt-4"
                      >
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-5 w-5 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="px-4 pb-2 pt-4">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`${section.id}-${optionIdx}-mobile`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`${section.id}-${optionIdx}-mobile`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="border-b border-gray-200">
          <nav
            aria-label="Breadcrumb"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <ol role="list" className="flex items-center space-x-4 py-4">
              {breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <Link
                      href={breadcrumb.href}
                      className="ml-4 text-sm font-medium text-color2"
                    >
                      {breadcrumb.name}
                    </Link>
                    <svg
                      viewBox="0 0 6 20"
                      aria-hidden="true"
                      className="h-5 w-auto text-color3"
                    >
                      <path
                        d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <Link
                  href="#"
                  aria-current="page"
                  className="font-medium text-color2 mr-3"
                >
                  محصولات
                </Link>
              </li>
            </ol>
          </nav>
        </div>

        <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-color2">
              محصولات{" "}
            </h1>
            <div className="flex w-full items-center justify-between">
              <div>
                <p className="mt-4 text-base text-color2">
                  آخرین و جدید ترین محصولات پارس زرگر را اینجا ببینید!
                </p>
              </div>
              <div>
                <select
                  className="p-2 border border-color1 rounded-lg bg-white"
                  onChange={(e) => handleSelectChange(e.target.value)}
                >
                  <option value="ارزان">ارزان‌ترین</option>
                  <option value="گران">گران‌ترین</option>
                  <option value="جدید">جدیدترین</option>
                  <option value="پرفروش">پر‌فروش‌ترین</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">فیلتر کردن</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">فیلتر</span>
                <PlusIcon
                  className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-200">
                  {filters.map((section, sectionIdx) => (
                    <div
                      key={section.name}
                      className={sectionIdx === 0 ? null : "pt-10"}
                    >
                      <fieldset>
                        <legend className="block text-base font-medium text-color3">
                          {section.name}
                        </legend>
                        <div className="space-y-3 pt-6">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                onChange={() =>
                                  handleInputChange(section.id, option.value)
                                }
                                className="h-4 w-4 rounded border-gray-300 text-color2 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`${section.id}-${optionIdx}`}
                                className="mr-3 text-sm text-color2"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                  <div className="py-2">
                    <button
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                      className="text-color3 px-3 py-2 rounded-lg border-2 border-color2 hover:bg-color2"
                    >
                      اعمال فیلتر
                    </button>
                  </div>
                </form>
              </div>
            </aside>

            <section
              aria-labelledby="product-heading"
              className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
            >
              <h2 id="product-heading" className="sr-only">
                محصولات
              </h2>

              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                {products.slice(0, visibleBoxes).map((product) => (
                  <div
                    key={product.id}
                    className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                    
                  >
                    <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-44 ">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                      />
                    </div>
                    <div className="flex flex-1 flex-col space-y-2 p-4 relative">
                    
                      <div
                      onClick={() => handleAddToCart(product)}
                      className="absolute top-[-60px] left-2  cursor-pointer  transition-opacity">
                        <span className=" cursor-pointer text-color3 px-2   z-20    rounded-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="28"
                            width="28"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="#229922"
                              d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                            />
                          </svg>
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-color1 text-center">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </h3>
                      <p className="text-sm font-semibold text-color1 text-center">
                        {product.description}
                      </p>
                      <div className="flex flex-1 flex-col justify-end text-center">
                        <p className="text-sm italic text-color2">
                          <span className="text-color1">وزن :</span>
                          <span className="px-1">
                            {new Intl.NumberFormat("fa-IR").format(
                              product.options
                            )}
                          </span>
                          <span className="text-color1">گرم</span>
                        </p>
                        <p className="text-base font-medium text-color2">
                          <span className="text-color1">قیمت تقریبی :</span>
                          <span className="px-1">
                            {new Intl.NumberFormat("fa-IR").format(
                              product.price
                            )}
                          </span>
                          <span className="text-color1">تومان</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center py-10">
                {totalBoxes > visibleBoxes && (
                  <button
                    onClick={handleButtonClick}
                    className="border border-color2  px-6 py-2 rounded-lg text-color2 hover:bg-color2 hover:text-color3"
                    style={{ display: "block" }}
                  >
                    {visibleBoxes === totalBoxes ? "بستن" : "مشاهده بیشتر"}
                    <i
                      className={`fi-arrow-${
                        visibleBoxes === totalBoxes ? "up" : "down"
                      } me-2`}
                    ></i>
                  </button>
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition= 'Bounce'
/>

    </div>
  );
}
