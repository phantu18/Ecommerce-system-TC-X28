import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ProductDetail() {
  return (
    <div>
      <Header></Header>
      <div class="font-sans bg-white">
        <div class="p-4 lg:max-w-7xl max-w-4xl mx-auto">
          <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
            <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">
              <div class="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                <img
                  src="https://readymadeui.com/images/laptop5.webp"
                  alt="Product"
                  class="w-3/4 rounded object-cover mx-auto"
                />
                <button type="button" class="absolute top-4 right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    fill="#ccc"
                    class="mr-1 hover:fill-[#333]"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>

              <div class="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                <div class="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                  <img
                    src="https://readymadeui.com/images/laptop2.webp"
                    alt="Product2"
                    class="w-full"
                  />
                </div>
                <div class="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                  <img
                    src="https://readymadeui.com/images/laptop3.webp"
                    alt="Product2"
                    class="w-full"
                  />
                </div>
                <div class="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                  <img
                    src="https://readymadeui.com/images/laptop4.webp"
                    alt="Product2"
                    class="w-full"
                  />
                </div>
                <div class="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                  <img
                    src="https://readymadeui.com/images/laptop5.webp"
                    alt="Product2"
                    class="w-full"
                  />
                </div>
              </div>
            </div>

            <div class="lg:col-span-2">
              <h2 class="text-2xl font-extrabold text-gray-800">
                Acer Aspire Pro 12 | Laptop
              </h2>

              <div class="flex space-x-2 mt-4">
                <svg
                  class="w-5 fill-blue-600"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-blue-600"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-blue-600"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-blue-600"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <h4 class="text-gray-800 text-base">500 Reviews</h4>
              </div>

              <div class="flex flex-wrap gap-4 mt-8">
                <p class="text-gray-800 text-3xl font-bold">$1200</p>
                <p class="text-gray-400 text-base">
                  <strike>$1500</strike>{" "}
                  <span class="text-sm ml-1">Tax included</span>
                </p>
              </div>

              <div class="mt-8">
                <h3 class="text-xl font-bold text-gray-800">Choose a Color</h3>
                <div class="flex flex-wrap gap-3 mt-4">
                  <button
                    type="button"
                    class="w-10 h-10 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                  ></button>
                  <button
                    type="button"
                    class="w-10 h-10 bg-gray-300 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                  ></button>
                  <button
                    type="button"
                    class="w-10 h-10 bg-gray-100 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                  ></button>
                  <button
                    type="button"
                    class="w-10 h-10 bg-blue-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                  ></button>
                </div>
              </div>

              <div class="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded"
                >
                  Buy now
                </button>
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-2.5 border border-blue-600 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div class="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <h3 class="text-xl font-bold text-gray-800">Product information</h3>
            <ul class="mt-4 space-y-6 text-gray-800">
              <li class="text-sm">
                TYPE <span class="ml-4 float-right">LAPTOP</span>
              </li>
              <li class="text-sm">
                RAM <span class="ml-4 float-right">16 BG</span>
              </li>
              <li class="text-sm">
                SSD <span class="ml-4 float-right">1000 BG</span>
              </li>
              <li class="text-sm">
                PROCESSOR TYPE{" "}
                <span class="ml-4 float-right">INTEL CORE I7-12700H</span>
              </li>
              <li class="text-sm">
                PROCESSOR SPEED{" "}
                <span class="ml-4 float-right">2.3 - 4.7 GHz</span>
              </li>
              <li class="text-sm">
                DISPLAY SIZE INCH <span class="ml-4 float-right">16.0</span>
              </li>
              <li class="text-sm">
                DISPLAY SIZE SM <span class="ml-4 float-right">40.64 cm</span>
              </li>
              <li class="text-sm">
                DISPLAY TYPE{" "}
                <span class="ml-4 float-right">OLED, TOUCHSCREEN, 120 Hz</span>
              </li>
              <li class="text-sm">
                DISPLAY RESOLUTION{" "}
                <span class="ml-4 float-right">2880x1620</span>
              </li>
            </ul>
          </div>

          <div class="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <h3 class="text-xl font-bold text-gray-800">Reviews(10)</h3>
            <div class="grid md:grid-cols-2 gap-12 mt-4">
              <div class="space-y-3">
                <div class="flex items-center">
                  <p class="text-sm text-gray-800 font-bold">5.0</p>
                  <svg
                    class="w-5 fill-blue-600 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-400 rounded w-full h-2 ml-3">
                    <div class="w-2/3 h-full rounded bg-blue-600"></div>
                  </div>
                  <p class="text-sm text-gray-800 font-bold ml-3">66%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-gray-800 font-bold">4.0</p>
                  <svg
                    class="w-5 fill-blue-600 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-400 rounded w-full h-2 ml-3">
                    <div class="w-1/3 h-full rounded bg-blue-600"></div>
                  </div>
                  <p class="text-sm text-gray-800 font-bold ml-3">33%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-gray-800 font-bold">3.0</p>
                  <svg
                    class="w-5 fill-blue-600 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-400 rounded w-full h-2 ml-3">
                    <div class="w-1/6 h-full rounded bg-blue-600"></div>
                  </div>
                  <p class="text-sm text-gray-800 font-bold ml-3">16%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-gray-800 font-bold">2.0</p>
                  <svg
                    class="w-5 fill-blue-600 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-400 rounded w-full h-2 ml-3">
                    <div class="w-1/12 h-full rounded bg-blue-600"></div>
                  </div>
                  <p class="text-sm text-gray-800 font-bold ml-3">8%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-gray-800 font-bold">1.0</p>
                  <svg
                    class="w-5 fill-blue-600 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-400 rounded w-full h-2 ml-3">
                    <div class="w-[6%] h-full rounded bg-blue-600"></div>
                  </div>
                  <p class="text-sm text-gray-800 font-bold ml-3">6%</p>
                </div>
              </div>

              <div>
                <div class="flex items-start">
                  <img
                    src="https://readymadeui.com/team-2.webp"
                    class="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <div class="ml-3">
                    <h4 class="text-sm font-bold text-gray-800">John Doe</h4>
                    <div class="flex space-x-1 mt-1">
                      <svg
                        class="w-4 fill-blue-600"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        class="w-4 fill-blue-600"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        class="w-4 fill-blue-600"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        class="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        class="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <p class="text-xs !ml-2 font-semibold text-gray-800">
                        2 mins ago
                      </p>
                    </div>
                    <p class="text-sm mt-4 text-gray-800">
                      Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                      eiusmod tempor incidunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  class="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-blue-600 text-gray-800 font-bold rounded"
                >
                  Read all reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ProductDetail;
