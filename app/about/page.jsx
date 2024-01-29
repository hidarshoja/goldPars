import React from 'react'

export default function About() {
  return (
    <div className='bg-color1 w-full h-[1000px]  flex items-center justify-center flex-col gap-10' dir='rtl'>
      <h3 className='text-lg md:text-3xl text-color2 font-semibold'>درباره پارس زرگر</h3>
         <div className='w-full md:w-[80%] border-2 rounded-xl h-[500px] mt-0 md:mt-10 px-6 py-4 shadow-lg shadow-slate-300 flex flex-col items-center justify-around'>
             <div className='w-full'>
             <p className='text-color2'>
             علاوه بر مصارف زینتی، طلا از دیرباز به عنوان یک
              دارایی امن و پشتوانه ای مقاوم در برابر تورم تلقی می‌شود، به‌طوری‌که 
              همواره در سبد دارایی اقشار مختلف، بخشی به این فلز گرانبها
               اختصاص دارد. با وجود تحولات سریع در زندگی روزمره و فراگیر 
              شدن بازارهای جدید آنلاین در سال‌های اخیر، همچنان خلأ یک بستر
               آنلاین، امن و عمومی برای خرید و فروش طلا به شدت احساس می‌شد.
               در این راستا تیمی از دانش آموختگان دانشگاه صنعتی شریف با 
              بهره‌گیری از دانش تخصصی و سوابق موفق در حوزه فینتک به منظور 
              برطرف کردن این نیاز کاربران، اقدام به ایجاد پارس زرگر نمودند.
             </p>
             </div>
             
             <div className='flex gap-10 items-center justify-center'>
              <div className='w-4/6'>
                <p className='text-color2'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                 و با استفاده از طراحان گرافیک است، چاپگرها و متون 
                 بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی 
                 می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
                  فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری 
                 را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو 
                 در زبان فارسی ایجاد کرد
                </p>
              </div>
              <div className='w-2/6'>
                <img src="/img/gold5-r.png" alt="" />
              </div>
             </div>
         </div>
    </div>
  )
}
