"use client"

import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid';
import axios from 'axios';
import Link from 'next/link'

const product = {
  name: "Women's Basic Tee",
  price: '$32',
  rating: 3.9,
  reviewCount: 512,
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
  imageAlt: "Back of women's Basic Tee in black.",
  colors: [
    { name: 'gold', bgColor: 'bg-color2', selectedColor: 'ring-gray-500' },
    { name: 'white', bgColor: 'bg-white', selectedColor: 'ring-gray-500' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: false },
  ],
}
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }



export const ProductModal = ({open, setOpen , selectedProduct}) => {
 const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  let productName = selectedProduct.name;
  let productPrice = selectedProduct.price;

   const addProductToCart = async (productName, productPrice) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        name: productName,
        price: productPrice,
      });
  
      if (response.status === 201) {
        console.log('محصول با موفقیت افزوده شد به سبد خرید.' );
        
        
      } else {
        console.error('خطا در افزودن محصول به سبد خرید.');
      }
    } catch (error) {
      console.error('خطا در ارسال درخواست POST:', error);
    }
  };


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden md:inline-block md:h-screen md:align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">بستن</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:items-center lg:gap-x-8" dir='rtl'>
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <img src={selectedProduct?.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7" dir='ltr'>
                      <h2 className="text-xl font-medium text-color2 sm:pr-12 text-right">{selectedProduct?.name}</h2>

                      <section aria-labelledby="information-heading" className="mt-1">
                        <h3 id="information-heading" className="sr-only">
                         محصولات
                        </h3>

                        <p className="font-medium text-color1">
                       
                        هزار تومان
                        {new Intl.NumberFormat('fa-IR').format(selectedProduct?.price)}
                        </p>

                        {/* Reviews */}
                        <div className="mt-4">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <p className="text-sm text-gray-700">
                              {product.rating}
                              <span className="sr-only"> out of 5 stars</span>
                            </p>
                            <div className="ml-1 flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <div className="ml-4 hidden lg:flex lg:items-center">
                              <span className="text-gray-300" aria-hidden="true">
                                &middot;
                              </span>
                              <Link href="#" className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                {/* See all {product.reviewCount} reviews */}
                                تعداد تمام نظرات {product.reviewCount}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section aria-labelledby="options-heading" className="mt-8">
                        <h3 id="options-heading" className="sr-only">
                          محصولات
                        </h3>

                        <form>
                          {/* Color picker */}
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Color</h4>

                            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                              <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                              <div className="flex items-center space-x-3">
                                {product.colors.map((color) => (
                                  <RadioGroup.Option
                                    key={color.name}
                                    value={color}
                                    className={({ active, checked }) =>
                                      classNames(
                                        color.selectedColor,
                                        active && checked ? 'ring ring-offset-1' : '',
                                        !active && checked ? 'ring-2' : '',
                                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                      )
                                    }
                                  >
                                    <RadioGroup.Label as="span" className="sr-only">
                                      {color.name}
                                    </RadioGroup.Label>
                                    <span
                                      aria-hidden="true"
                                      className={classNames(
                                        color.bgColor,
                                        'h-8 w-8 rounded-full border border-black border-opacity-10'
                                      )}
                                    />
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </RadioGroup>
                          </div>

                          {/* Size picker */}
                          <div className="mt-8">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-color2">سایز</h4>
                              <Link href="#" className="text-sm font-medium text-color2">
                             انتخاب سایز
                              </Link>
                            </div>

                            <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-2">
                              <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                              <div className="grid grid-cols-7 gap-2">
                                {product.sizes.map((size) => (
                                  <RadioGroup.Option
                                    key={size.name}
                                    value={size}
                                    className={({ active, checked }) =>
                                      classNames(
                                        size.inStock
                                          ? 'cursor-pointer focus:outline-none'
                                          : 'cursor-not-allowed opacity-25',
                                        active ? 'ring-2 ring-indigo-500 ring-offset-2' : '',
                                        checked
                                          ? 'border-transparent bg-color1 text-white hover:bg-green-700'
                                          : 'border-color1 bg-white text-color2 hover:bg-color1',
                                        'flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1'
                                      )
                                    }
                                    disabled={!size.inStock}
                                  >
                                    <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </RadioGroup>
                          </div>

                          <button
                            type="button"
                            onClick={() => addProductToCart()}
                            className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-color1 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                           افزودن به سبد خرید
                          </button>

                        
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ProductModal
