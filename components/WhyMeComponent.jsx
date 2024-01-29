"use client"

import React from 'react'

export default function WhyMeComponent() {
  return (
    <div className='w-[95%] md:w-[80%] mx-auto'>
        <div className='flex items-center justify-center w-full'>
            <span className='text-xl md:text-2xl font-bold'>
                <span className='text-color2 px-1'>
                    پارس زرگر 
                </span>
                <span className='text-color3'>
                    قابل اعتماد ترین و استاندارد ترین پلتفرم خرید طلا
                </span>
            </span>
        </div>
        <div className='w-full'>
            <div className='w-1/4 border border-color2 h-1 mx-auto mt-4 rounded-md bg-color2'>
                
            </div>
        </div>
        <div className='flex items-center justify-center w-full'>
            <span className='text-sm md:text-base text-color3 mt-3'>
            چرا باید  پارس زرگر را انتخاب کنید و از امنیت آن مطمئن باشید؟
            </span>
        </div>
        <div className='flex flex-col md:flex-row items-center min-h-56 py-10 gap-1 mt-10'>
            <div className='w-full px-3 md:px-0 md:w-1/3  flex flex-col items-center justify-center gap-3'>
                 <div className='w-full md:w-1/2 bg-color2 p-8 rounded-lg'>
                    <img src="/img/pro.svg" alt="pro"  />
                 </div>
                 <div className='w-full md:w-1/2'>
                    <span className='text-color2 font-semibold text-xl text-center block'>
                    ذخیره امن داده ها
                    </span>
                    <span className='text-color3 font-semibold text-base text-center block mt-3'>
                    الگوریتم های کاملا استاندارد و حرفه ای برای
                     ذخیره و ویرایش داده ها و مدیریت آنها در پلتفرم.
                    </span>
                 </div>
            </div>
            <div className='w-full px-3 md:px-0 md:w-1/3  flex flex-col items-center justify-center gap-3'>
                 <div className='w-full md:w-1/2 bg-color2 p-8 rounded-lg'>
                    <img src="/img/pro3.svg" alt="pro"  />
                 </div>
                 <div className='w-full md:w-1/2'>
                    <span className='text-color2 font-semibold text-xl text-center block'>
                       خرید و فروش نامحدود 
                    </span>
                    <span className='text-color3 font-semibold text-base text-center block mt-3'>
                    در  پارس زرگر شما می توانید نا محدود طلا را به 
                    موجودی خود افزوده و با ایجاد امکان تبدیل آنها را به ریال مهیا کنید.
                    </span>
                 </div>
            </div>
            <div className='w-full  px-3 md:px-0 md:w-1/3  flex flex-col items-center justify-center gap-3'>
                 <div className='w-full md:w-1/2 bg-color2 p-8 rounded-lg'>
                    <img src="/img/pro2.svg" alt="pro"  />
                 </div>
                 <div className='w-full md:w-1/2'>
                    <span className='text-color2 font-semibold text-xl text-center block'>
                    حفاظت از حریم خصوصی
                    </span>
                    <span className='text-color3 font-semibold text-base text-center block mt-3'>
                    ابزار های تأیید هویت چند مرحله ای مثل ورود 
                    دو مرحله ای گوگل یا تایید دو مرحله ای پیامکی برای امنیت بیشتر.
                    
                    </span>
                 </div>
            </div>
           
        </div>
    </div>
  )
}
