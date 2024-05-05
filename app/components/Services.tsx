import React from "react";

const Services = () => {
  return (
    <>
      <section className="text-gray-600 body-font text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Services
        </h1>
        <div className="container px-5 py-10 mx-auto grid lg:grid-cols-2 sm:grid-cols-1 gap-8 gap-y-10">
          <div className="flex items-center flex-col bg-white shadow-lg p-2 rounded-md my-3  py-5 service">
            <div className="sm:w-52 sm:h-52 w-40 h-40 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-indigo-500 flex-shrink-0">
              <picture>
                <img
                  className="object-cover object-center"
                  alt="save-plants"
                  src="/pet-plant.png"
                />
              </picture>
            </div>
            <div className="flex-grow text-center mt-6 ">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Pet Compatible
              </h2>
              <p className="leading-relaxed text-base m-2">
                Plants are fine with pets. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Sapiente suscipit voluptatem
                atque?
              </p>
            </div>
          </div>
          <div className="flex items-center flex-col bg-white shadow-lg rounded-md my-3 service py-5">
            <div className="sm:w-52 sm:h-52 w-40 h-40 sm:order-none order-first sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-100 text-indigo-500 flex-shrink-0">
              <picture>
                <img
                  className="object-cover object-center"
                  alt="save-plants"
                  src="/sofa-plant.png"
                />
              </picture>
            </div>
            <div className="w-full flex-grow text-center mt-6 ">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Size Adaptive
              </h2>
              <p className="leading-relaxed text-base m-2">
                Available in all sizes and for every place!
              </p>
            </div>
          </div>
          <div className="flex items-center flex-col bg-white shadow-lg rounded-md my-3 service py-5">
            <div className="sm:w-52 sm:h-52 w-40 h-40 sm:mr-10 inline-flex items-center justify-center rounded-full  bg-green-100 text-indigo-500 flex-shrink-0">
              <picture>
                <img
                  className="object-cover object-center"
                  alt="save-plants"
                  src="/living-plant.png"
                />
              </picture>
            </div>
            <div className="w-full text-center flex-grow mt-6 ">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Customized Plants
              </h2>
              <p className="leading-relaxed text-base m-2">
                Customized for every place.
              </p>
            </div>
          </div>
          <div className="flex items-center flex-col bg-white shadow-lg rounded-md my-3 service py-5">
            <div className="sm:w-52 sm:h-52 w-40 h-40 sm:order-none order-first sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-100 text-indigo-500 flex-shrink-0">
              <picture>
                <img
                  className="object-cover object-center"
                  alt="save-plants"
                  src="/bookself-plant.png"
                />
              </picture>
            </div>
            <div className="w-full flex-grow text-center mt-6 ">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Anywhere
              </h2>
              <p className="leading-relaxed text-base m-2">
                For every available space.
              </p>
            </div>
          </div>
          <div className="flex items-center flex-col bg-white shadow-lg rounded-md my-3 service py-5">
            <div className="sm:w-52 sm:h-52 w-52 h-52 sm:order-none order-first sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-100 text-indigo-500 flex-shrink-0">
              <picture>
                <img
                width={250}
                height={250}
                  className="object-cover object-center"
                  alt="save-plants"
                  src="/package-delivery.png"
                />
              </picture>
              <picture>
                <img
                width={300}
                height={300}
                  className="object-cover object-center"
                  alt="save-plants"
                  src="/gift-plant.png"
                />
              </picture>
            </div>
            <div className="w-full flex-grow text-center mt-6 ">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Packaging
              </h2>
              <p className="leading-relaxed text-base m-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                deleniti.
              </p>
            </div>
          </div>
          <div className="flex items-center flex-col bg-white shadow-lg rounded-md my-3 service py-5">
            <div className="sm:w-52 sm:h-52 w-40 h-40 sm:order-none order-first sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-100 text-indigo-500 flex-shrink-0">
              <picture>
                <img
                  className="object-cover object-center"
                  alt="save-plants"
                  src="/showcase-plant.png"
                />
              </picture>
            </div>
            <div className="w-full flex-grow text-center mt-6 ">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Showcase
              </h2>
              <p className="leading-relaxed text-base m-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                deleniti.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
