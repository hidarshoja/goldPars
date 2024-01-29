import React from 'react'

export default function Register() {
  return (
    <div className="flex min-h-full flex-1 w-full h-screen">
        <div className="relative hidden  flex-1 lg:block w-1/2 bg-white">
          <div className='w-[70%] flex items-center justify-center'>
          <img
            className="absolute left-[14%] inset-0 h-full   w-[80%]"
            src="/img/register.svg"
            alt=""
          />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-1/2" dir='rtl'>
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className='w-full flex flex-col items-center justify-center'>
              <img
                className="h-32 w-32"
                src="/img/dow.png"
                alt="Your Company"
              />
              <h2 className="mt-2 text-2xl font-bold leading-9 tracking-tight text-color2">
              ثبت نام کنید
              </h2>
              <p className="mt-2 text-sm leading-6 text-color2">
                ثبت نام کرده اید؟
                <a href="#" className="font-semibold text-color4 hover:text-indigo-500">
                 ورود
                </a>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-color2">
                      ایمیل
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-color2">
                     پسورد
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-color2">
                     تکرار پسورد
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="remember-me" className="mr-3 block text-sm leading-6 text-color2">
                        مرا به خاطر بسپار
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <a href="#" className="font-semibold text-color2 hover:text-indigo-500">
                        رمز عبور خود را فراموش کرده اید؟
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-color2 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      ورود
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
        
      </div>
  )
}
