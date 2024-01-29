"use clinet";

import React from "react";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const jobOpenings = [
  {
    id: 1,
    role: "نحوه کار و شراکت با پارس زرگر",
    href: "#",
    description:
      " شما می توانید با ثبت نام فرم مشارکت با ما ، و یا مراجعه حضوری به دفتر مرکزی ما واقع در تهران خیابان جمهوری شرکت پارس زرگر اقدام به پر کردن فرم همکاری نماید و همکاران ما در اولیفرصت با شما تماس خواهند گرفت",
    salary: "1.175,000 میانگین درامد ماهانه ",
    location: "تهران ",
  },
  {
    id: 2,
    role: "نحوه خرید فروش و ثبت شرکت",
    href: "#",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    salary: "125,000 میانگین در امد ماهانه ",
    location: "مشهد",
  }
];

const posts = [
  {
    id: 1,
    title: "نحوه فروش طلا در پارس زرگر",
    href: "#",
    description:
      "شما می توانید با ثبت نام در سایت پارس زرگر و شارژ کیف پول الکترونیکی خود در کوتاه ترین زمان اقدام به خرید  کنید و سپس در زمان مناسب اقدام به فروش نمایید",
    imageUrl:
      "/img/gold7.jpg",
    date: " دی ماه 1402",
    datetime: "22:23:56",
    author: {
      name: "مدیر شرکت",
      imageUrl:
        "/img/man3.jpg",
    },
  },
  {
    id: 2,
    title: "نحوه خرید طلا در پارس زرگر",
    href: "#",
    description:
      "شما می توانید پس از ثبت نام در سایت و سپس وارد صفحه خرید شده و کیف پول خود را شارز نموده و اقدام به خرید نماید ",
    imageUrl:
      "/img/gold4.jpg",
    date: "بهمن 1402",
    datetime: "20:11:45",
    author: {
      name: "مدیر مالی شرکت",
      imageUrl:
        "/img/man2.jpg",
    },
  },
  {
    id: 3,
    title: "نوسان قیمت ها در بازارها ",
    href: "#",
    description:
      "نوسان قیمت ها در بازار با توجه به اتفاقات در منطقه می باشد و با توجه به بالا و پایین رفتن قیمت جهانی طلا رخ می دهد.",
    imageUrl:
      "/img/gold3.jpg",
    date: "اسفند 1402",
    datetime: "19:23:11",
    author: {
      name: "مدیر روابط عمومی",
      imageUrl:
        "/img/man.jpg",
    },
  },
  // More posts...
];

export default function Blog() {
  return (
    <div>
      {/* box1 */}
        <div className="bg-color1 py-44" dir="rtl">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
              <div className="w-full lg:max-w-lg lg:flex-auto">
                <h2 className="text-lg md:text-2xl font-bold tracking-tight text-color2 sm:text-3xl text-center">
                  ما همیشه به دنبال افراد عالی هستیم که به ما بپیوندند
                </h2>
                <p className="mt-6 text-sm md:text-lg leading-8 text-color2 text-center">
                  شما می توانید در این مقاله با نمایندگی های ما در قسمت های
                  مختلف کشوراشنا شوید و متوجه شوید هر کدام در کدام شهر هستند تا
                  در بهبود تصمیم گیری خود جهت شروع کار اقدام نمایید.
                </p>
                <img
                  src="/img/gold1.jpg"
                  alt=""
                  className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
                />
              </div>
              <div className="w-full lg:max-w-xl lg:flex-auto">
                <h3 className="sr-only">Job openings</h3>
                <ul className="-my-8 divide-y divide-gray-100">
                  {jobOpenings.map((opening) => (
                    <li key={opening.id} className="py-8">
                      <dl className="relative flex flex-wrap gap-x-3">
                        <dt className="sr-only">Role</dt>
                        <dd className="w-full flex-none text-lg font-semibold tracking-tight text-color2">
                          <a href={opening.href}>
                            {opening.role}
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                          </a>
                        </dd>
                        <dt className="sr-only">Description</dt>
                        <dd className="mt-2 w-full flex-none text-base leading-7 text-color3">
                          {opening.description}
                        </dd>
                        <dt className="sr-only">Salary</dt>
                        <dd className="mt-4 text-base font-semibold leading-7 text-color3">
                          {opening.salary}
                        </dd>
                        <dt className="sr-only">Location</dt>
                        <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-color3">
                          <svg
                            viewBox="0 0 2 2"
                            className="h-0.5 w-0.5 flex-none fill-gray-300"
                            aria-hidden="true"
                          >
                            <circle cx={1} cy={1} r={1} />
                          </svg>
                          {opening.location}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      
      {/* box2 */}
      <div className="bg-color1 py-2 sm:py-3" dir="rtl">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-lg md:text-2xl leading-8 text-color2">
              با مشاوره تخصصی ما نحوه رشد کسب و کار خود را بیاموزید.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={post.imageUrl}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div className="-ml-4 flex items-center gap-x-4">
                    
                    <div className="flex gap-x-2.5" dir="ltr">
                      <img
                        src={post.author.imageUrl}
                        alt=""
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {post.author.name}
                    </div>
                  </div>
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ارسال دیدگاه */}
      <form className="py-10">
      <div className="space-y-12 p-10 rounded-xl  w-[90%] md:w-[81%] mx-auto mt-10 border border-sky-100" dir="rtl">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-color2">ارسال دیدگاه </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
           دیدگاهتان را بنویسید و با ما در ارتباط باشید 
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-color2">
                نام / ایمیل
              </label>
              <div className="mt-2">
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <span className="flex select-none items-center pr-3 text-color3 sm:text-sm" dir="ltr">@gmail.com</span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-color2">
                دیدگاه شما
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full min-h-[200px] rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-color2">چند جمله در مورد دیدگاهتان بنویسید.</p>
            </div>
          </div>
           <div className="flex items-center justify-end  w-full">
               <button className="text-color3  border-2 px-5 py-2 rounded-lg border-color2 hover:bg-color2">ارسال دیدگاه</button>
           </div>
        </div>


      </div>

      </form>
   </div>
  );
}
