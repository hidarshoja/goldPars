import React from 'react'

export default function Forgot() {
  return (
    <div className="flex min-h-full flex-1 w-full h-screen">
        <div className="relative hidden  flex-1 lg:block w-1/2 bg-white">
          <div className='w-[70%] flex items-center justify-center'>
          <img
            className="absolute left-[14%] inset-0 h-full   w-[70%]"
            src="/img/forget.svg"
            alt="forget"
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
                فراموشی رمز عبور
              </h2>
             
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
                       dir='ltr'
                        id="email"
                        name="email"
                        type="email"
                        placeholder='h.....shoja@gmail.com'
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-color2 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      بازیابی کلمه عبور
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
