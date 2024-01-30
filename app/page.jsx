import HeaderHome from "@/components/HeaderHome";
import CarouselComponent from "@/components/CarouselComponent";
import WhyMeComponent from "@/components/WhyMeComponent";
 import ChartComponent from "@/components/ChartComponent";
import ProductsComponent from "@/components/ProductsComponent";

export default function Home() {
  return (
    <main className="mt-[80px]" dir="rtl">
      <HeaderHome />
      <div className="w-full bg-[#003610] py-24 sm:py-32">
        <div className="w-[80%] mx-auto">
          <h1 className="text-color2 text-2xl font-bold text-center">
            مراحل ثبت نام در  پارس زرگر
          </h1>
          <CarouselComponent />
        </div>
      </div>
      <div className="w-full bg-color1 py-24 sm:py-32">
        <div className="w-[90%] mx-auto">
          <h1 className="text-color2 text-2xl font-bold text-center">محصولات ما</h1>
          <ProductsComponent />
          
        </div>
      </div>
      <div className="w-full py-24 sm:py-32 bg-[#003610]">
        <WhyMeComponent />
      </div>
      <div className="w-full overflow-hidden py-16 bg-color1">
        <div className="w-[100%] md:w-[80%] mx-auto overflow-hidden mt-10">
        <p className="text-center text-color2 px-2 md:px-0 py-10 text-2xl font-semibold">
              نمودار نوسان قیمت طلا
        </p>
        <div className="w-ful flex items-center justify-center">
           <ChartComponent />
           </div>
        </div>
      </div>
    </main>
  );
}



