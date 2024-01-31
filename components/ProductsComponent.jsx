"use client";
import { useState , useEffect } from "react";
import ProductModal from "./ProductModal";
import { FaHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import axios from "axios";

const products = [
  {
    id: 1,
    name: "انگشتر طلا",
    color: " سفید و طلایی",
    href: "#",
    imageSrc: "/img/im1.jpg",
    imageAlt: "انگشتر",
    price: 14000000,
  },
  {
    id: 2,
    name: "گوشواره طلا",
    color: " سفید و طلایی",
    href: "#",
    imageSrc: "/img/im2.jpg",
    imageAlt: "گوشواره",
    price: 12222440,
  },
  {
    id: 3,
    name: "کیف طلا",
    color: " سفید و طلایی",
    href: "#",
    imageSrc: "/img/im3.jpg",
    imageAlt: "کیف",
    price: 540,
  },
  {
    id: 4,
    name: "ساعت طلا",
    color: " سفید و طلایی",
    href: "#",
    imageSrc: "/img/im4.jpg",
    imageAlt: "ساعت",
    price: 33339400,
  },
  {
    id: 5,
    name: "انگشتر طلا",
    color: " سفید و طلایی",
    href: "#",
    imageSrc: "/img/im5.jpg",
    imageAlt: "انگشتر",
    price: 140899999,
  },
  {
    id: 6,
    name: "گوشواره طلا",
    color: " سفید و طلایی",
    href: "#",
    imageSrc: "/img/im6.jpg",
    imageAlt: "گوشواره",
    price: 44000000,
  },
  {
    id: 7,
    name: "کیف طلا",
    color: " سفید و طلایی",
    href: "#",
    imageSrc: "/img/im7.jpg",
    imageAlt: "کیف",
    price: 54000000,
  },
  {
    id: 8,
    name: "کیف طلا",
    color: " سفید و طلایی",
    href: "#",
    imageSrc: "/img/gold7.jpg",
    imageAlt: "کیف",
    price: 54000000,
  },
  {
    id: 9,
    name: "ساعت طلا",
    color: " سفید و طلایی",
    href: "#",
    imageSrc: "/img/im8.jpg",
    imageAlt: "ساعت",
    price: 9400000,
  },
  {
    id: 10,
    name: "ساعت طلا",
    color: " سفید و طلایی",
    href: "#",
    imageSrc: "/img/gold1.jpg",
    imageAlt: "ساعت",
    price: 9400000,
  },
  {
    id: 11,
    name: "ساعت طلا",
    color: " سفید و طلایی",
    href: "#",
    imageSrc: "/img/gold2.jpg",
    imageAlt: "ساعت",
    price: 9400000,
  },
  {
    id: 12,
    name: "ساعت طلا",
    color: " سفید و طلایی",
    href: "#",
    imageSrc: "/img/gold3.jpg",
    imageAlt: "ساعت",
    price: 11111940,
  },
  {
    id: 13,
    name: "ساعت طلا",
    color: " سفید و طلایی",
    href: "#",
    imageSrc: "/img/gold4.jpg",
    imageAlt: "ساعت",
    price: 94000000,
  },
  {
    id: 14,
    name: "ساعت طلا",
    color: " سفید و طلایی",
    href: "#",
    imageSrc: "/img/gold5.jpg",
    imageAlt: "ساعت",
    price: 2222940,
  },
  {
    id: 15,
    name: "ساعت طلا",
    color: " سفید و طلایی",
    href: "#",
    imageSrc: "/img/gold6.jpg",
    imageAlt: "ساعت",
    price: 5555940,
  },
  {
    id: 16,
    name: "ساعت طلا",
    color: " سفید و طلایی",
    href: "#",
    imageSrc: "/img/gold7.jpg",
    imageAlt: "ساعت",
    price: 9400000,
  },
  // More products...
];

export default function ProductsComponent() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
 
  const [heartColors, setHeartColors] = useState({});
  // جدید
  const [visibleBoxes, setVisibleBoxes] = useState(8);
  const boxesIncrement = 4;
  const totalBoxes = products.length;
  const [data, setData] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      setData(response.data);
      console.log("مقدار محصولات" , response.data);
      //data = response.data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleButtonClick = () => {
    if (visibleBoxes + boxesIncrement <= totalBoxes) {
      setVisibleBoxes(visibleBoxes + boxesIncrement);
    } else {
      setVisibleBoxes(totalBoxes);
    }
  };
  // انتهای جدید
  const handleClick = (productId) => {
    setHeartColors((prevColors) => ({
      ...prevColors,
      [productId]: !prevColors[productId] ? "red" : "gray",
    }));
  };

  
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.slice(0, visibleBoxes).map((product) => (
            <div
              key={product.id}
              className="rounded-lg shadow-lg shadow-stone-600 bg-color3"
            >
              <div className="relative">
                <div className="relative h-60 w-full overflow-hidden rounded-t-lg">
                  <div>
                    {heartColors[product.id] ? (
                      <span
                        className="absolute z-10 right-1 top-1 text-xl cursor-pointer"
                        style={{ color: heartColors[product.id] }}
                        onClick={() => handleClick(product.id)}
                      >
                        <FaHeart />
                      </span>
                    ) : (
                      <span
                        className="absolute z-10 right-1 top-1 text-xl cursor-pointer"
                        onClick={() => handleClick(product.id)}
                        style={{ color: "gray" }}
                      >
                        <IoIosHeart />
                      </span>
                    )}
                  </div>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4 py-5 text-center">
                  <h3 className="text-md font-medium text-color1 px-2">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-color2 px-2 py-2">
                    <span className="px-2 text-color1">
                       قیمت :
                    </span>
                    <span>
                    {new Intl.NumberFormat('fa-IR').format(product.price)}
                    </span>
                    <span className="px-2 text-color1">
                        ریال
                    </span>
                   
                  </p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-64 items-end justify-end overflow-hidden  p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                </div>
              </div>
              <div className="mt-1 p-2">
                <button
                  onClick={() => handleProductClick(product)}
                  className="relative w-full flex items-center justify-center rounded-md border border-transparent bg-color1 px-8 py-2 text-sm font-medium text-color2 hover:bg-[#5bff50]"
                >
                  مشاهده جزییات<span className="sr-only">, {product.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center py-10">
      {totalBoxes > visibleBoxes && (
        <button
          onClick={handleButtonClick}
          className="border border-color2  px-6 py-2 rounded-lg text-color2 hover:bg-color2 hover:text-color3"
          style={{ display :"block"}}
        >
          {visibleBoxes === totalBoxes ? 'بستن' : 'مشاهده بیشتر'}
          <i className={`fi-arrow-${visibleBoxes === totalBoxes ? 'up' : 'down'} me-2`}></i>
        </button>
      )}
       
      </div>
      {open && (
        <ProductModal
          open={open}
          setOpen={setOpen}
          selectedProduct={selectedProduct}
        />
      )}
    </div>
  );
}
