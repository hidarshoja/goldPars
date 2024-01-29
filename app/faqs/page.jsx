  "use client";

 



import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    id : 1 ,
    question: "  چگونه در سایت پارس زرگر ثبت نام کنیم ؟",
    answer:
      "پس از ورود به فروشگاه از قسمت سمت چپ منوی ورود و ثبت نام قرار دارد و  با ورود به پنجره ثبت نام و تکمیل اطلاعات فرم می توانید در فروشگاه ثبت نام کنید.",
  },
  {
    id : 2 ,
    question :"چگونه از سایت پارس زرگر خرید طلا انجام بدهیم ؟",
    answer :
     "بیایید نگاهی به ساختار صندوق سرمایه گذاری طلا بیندازیم تا به پاس سوالات‌مان برسیم. صندوق طلا سبدی متشکل از اوراق مشتقه طلا دارد. هر  چه قیمت طلا در بازار جهانی یا داخلی افزایش داشته باشد این اوراق نیز ارزش‌شان افزایش پیدا خواهد کرد و هر چه قیمت طلا کاهش داشته باشد به همان میزان قیمت این اوراق کم خواهد شد."
  },
  {
    id : 3 ,
     question : " چگونه طلای خود را تحویل یگیریم ؟",
     answer :
      "  صندوق طلا با جمع آوری وجوه نقد سرمایه گذاران اقدام به تشکیل سب می‌کند. گفتنی است که بعضی از این صندوق‌ها مانند صندوق طلا کیان با مزایای منحصر به فردی که دارند و نیز با مدیریت و هدایت درست سرمایه موجود در صندوق، ریسک کمتری نسبت به خرید طلای فیزیکی دارند."
  },
  {
    id : 4 ,
    question : " چگونه کارت الکترونیکی خود را شارژ کنیم ؟",
    answer : "  احتمالا برایتان پیش آمده باشد که پس از خرید محصولات از یک فروشگاه و وقتی می‌خواهید آنها را به خانه ببرید، به چند کیسه نیاز پیدا کرده باشید تا اجناس خریداری شده را تقسیم کنید. در واقع سعی می‌کنید آنها را در شرایطی متعادل قرار دهید تا در مسیر آسیب نبینند. سبد سرمایه گذاری صندوق طلا هم همین ویژگی را دارد. "
  },
  {
    id : 5 ,
    question: "  چگونه در سایت پارس زرگر ثبت نام کنیم ؟",
    answer:
      "پس از ورود به فروشگاه از قسمت سمت چپ منوی ورود و ثبت نام قرار دارد و  با ورود به پنجره ثبت نام و تکمیل اطلاعات فرم می توانید در فروشگاه ثبت نام کنید.",
  },
  {
    id : 6 ,
    question : " چگونه طلای خود را تحویل یگیریم ؟",
    answer :
     "  صندوق طلا با جمع آوری وجوه نقد سرمایه گذاران اقدام به تشکیل سب می‌کند. گفتنی است که بعضی از این صندوق‌ها مانند صندوق طلا کیان با مزایای منحصر به فردی که دارند و نیز با مدیریت و هدایت درست سرمایه موجود در صندوق، ریسک کمتری نسبت به خرید طلای فیزیکی دارند."
 },
]

export default function Fags() {
  return (
    <div className="bg-color1" dir='rtl'>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-color4"  >سوالات متداول</h2>
       
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.id} className="pt-6">
                
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-color2 bg-[#272523] px-3 py-3 rounded-lg">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-color4">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
