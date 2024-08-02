import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Testimonial = () => {
  return (
    <>
      <div className='container py-11 px-16'>
        <div className="mb-10 space-y-4 px-6 md:px-0">
            <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                What our Customer says 
            </h2>
        </div>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900" id="reviews">

                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">



                    <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">


                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy"/>
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h6>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                                </div>
                            </div>
                            <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos
                                illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam
                                ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                                aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                                reprehenderit, veritatis harum et rerum.
                            </p>
                        </div>


                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane doe</h6>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p>
                                </div>
                            </div>
                            <p className="mt-8"> Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
                                cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
                            </p>
                        </div>


                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/18.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanick Doe</h6>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">Developer</p>
                                </div>
                            </div>
                            <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                                aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                                reprehenderit, veritatis harum et rerum.
                            </p>
                        </div>


                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane Doe</h6>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                                </div>
                            </div>
                            <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                                aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                                reprehenderit, veritatis harum et rerum.
                            </p>
                        </div>


                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/62.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">Andy Doe</h6>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">Manager</p>
                                </div>
                            </div>
                            <p className="mt-8"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
                                deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                                reprehenderit, veritatis harum et rerum.
                            </p>
                        </div>


                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar" width="400" height="400" loading="lazy"/>
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanndy Doe</h6>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                                </div>
                            </div>
                            <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                                aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                                reprehenderit, veritatis harum et rerum.
                            </p>
                        </div>

                    </div>
                </div>
              </div>
        </CarouselItem>
            <CarouselItem>
            <div className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900" id="reviews">

              <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">



                  <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">


                      <div
                          className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                          <div className="flex gap-4">
                              <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy"/>
                              <div>
                                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h6>
                                  <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                              </div>
                          </div>
                          <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos
                              illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam
                              ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                              aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                              reprehenderit, veritatis harum et rerum.
                          </p>
                      </div>


                      <div
                          className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                          <div className="flex gap-4">
                              <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                              <div>
                                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane doe</h6>
                                  <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p>
                              </div>
                          </div>
                          <p className="mt-8"> Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
                              cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
                          </p>
                      </div>


                      <div
                          className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                          <div className="flex gap-4">
                              <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/18.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                              <div>
                                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanick Doe</h6>
                                  <p className="text-sm text-gray-500 dark:text-gray-300">Developer</p>
                              </div>
                          </div>
                          <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                              aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                              reprehenderit, veritatis harum et rerum.
                          </p>
                      </div>


                      <div
                          className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                          <div className="flex gap-4">
                              <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                              <div>
                                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane Doe</h6>
                                  <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                              </div>
                          </div>
                          <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                              aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                              reprehenderit, veritatis harum et rerum.
                          </p>
                      </div>


                      <div
                          className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                          <div className="flex gap-4">
                              <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/62.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                              <div>
                                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Andy Doe</h6>
                                  <p className="text-sm text-gray-500 dark:text-gray-300">Manager</p>
                              </div>
                          </div>
                          <p className="mt-8"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
                              deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                              reprehenderit, veritatis harum et rerum.
                          </p>
                      </div>


                      <div
                          className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                          <div className="flex gap-4">
                              <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar" width="400" height="400" loading="lazy"/>
                              <div>
                                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanndy Doe</h6>
                                  <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                              </div>
                          </div>
                          <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                              aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                              reprehenderit, veritatis harum et rerum.
                          </p>
                      </div>

                  </div>
              </div>
            </div>
            </CarouselItem>
            <CarouselItem>
            <div className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900" id="reviews">

              <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">



                  <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">


                      <div
                          className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                          <div className="flex gap-4">
                              <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy"/>
                              <div>
                                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h6>
                                  <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                              </div>
                          </div>
                          <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos
                              illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam
                              ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                              aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                              reprehenderit, veritatis harum et rerum.
                          </p>
                      </div>


                      <div
                          className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                          <div className="flex gap-4">
                              <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                              <div>
                                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane doe</h6>
                                  <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p>
                              </div>
                          </div>
                          <p className="mt-8"> Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
                              cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
                          </p>
                      </div>


                      <div
                          className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                          <div className="flex gap-4">
                              <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/18.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                              <div>
                                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanick Doe</h6>
                                  <p className="text-sm text-gray-500 dark:text-gray-300">Developer</p>
                              </div>
                          </div>
                          <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                              aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                              reprehenderit, veritatis harum et rerum.
                          </p>
                      </div>


                      <div
                          className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                          <div className="flex gap-4">
                              <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                              <div>
                                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane Doe</h6>
                                  <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                              </div>
                          </div>
                          <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                              aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                              reprehenderit, veritatis harum et rerum.
                          </p>
                      </div>


                      <div
                          className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                          <div className="flex gap-4">
                              <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/62.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                              <div>
                                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Andy Doe</h6>
                                  <p className="text-sm text-gray-500 dark:text-gray-300">Manager</p>
                              </div>
                          </div>
                          <p className="mt-8"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
                              deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                              reprehenderit, veritatis harum et rerum.
                          </p>
                      </div>


                      <div
                          className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                          <div className="flex gap-4">
                              <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar" width="400" height="400" loading="lazy"/>
                              <div>
                                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanndy Doe</h6>
                                  <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                              </div>
                          </div>
                          <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                              aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                              reprehenderit, veritatis harum et rerum.
                          </p>
                      </div>

                  </div>
              </div>
            </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </>
  )
}

export default Testimonial