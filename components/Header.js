import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const navigation = [
  { name: "ABOUT", href: "#About", id: 1 },

  { name: "CONTACT", href: "#Contact", id: 2 },
];

export default function Hero() {
  return (
    <div className="relative overflow-hidden tracking-tight font-body">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            {({ open }) => (
              <>
                <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#">
                          <span className="sr-only">MTC</span>
                          <img className="w-20 h-20 sm:h-20" src="logo.png" />
                        </a>
                        <div className="flex items-center -mr-2 md:hidden">
                          <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-900 bg-white rounded-md focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon
                              className="w-10 h-10"
                              aria-hidden="true"
                            />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="font-bold text-gray-900 hover:text-gray-700"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
                  >
                    <div className="overflow-hidden bg-white rounded-lg shadow-md ">
                      <div className="flex items-center justify-between px-5 pt-4">
                        <div>
                          <img
                            className="w-auto h-8"
                            src="logo.png"
                            alt="logo"
                          />
                        </div>
                        <div className="-mr-4">
                          <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-900 bg-white rounded-md hover:text-gray-500 focus:outline-none">
                            <span className="sr-only">Close main menu</span>
                            <XIcon
                              className="w-10 h-10 mt-4"
                              aria-hidden="true"
                            />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <Popover.Button
                            className="block"
                            onClick={() => (open = false)}
                          >
                            <a
                              key={item.name}
                              href={item.href}
                              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </a>
                          </Popover.Button>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <FadeIn>
              <div className="text-center lg:ml-4 lg:text-left">
                <h1 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl lg:pt-6">
                  <span className="block xl:inline">MASON'S TOUCH</span>{" "}
                  <span className="block xl:inline">CONSTRUCTION</span>
                </h1>
                <p className="mt-3 text-3xl font-extrabold text-gray-900 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 md:text-5xl lg:text-6xl lg:mx-0">
                  MASONRY AND FOUNDATION REPAIR
                </p>
                <p className="py-6 text-xl font-bold text-yellow-600 sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:text-3xl lg:mx-0">
                  FREE ESTIMATES
                </p>

                <button className="px-4 py-2 mt-2 text-xl font-bold text-white transition duration-200 ease-in-out transform bg-yellow-600 rounded shadow-md cursor-pointer lg:mt-4 hover:scale-105 hover:bg-yellow-700">
                  <a href="#Contact">CONTACT US</a>
                </button>
              </div>
            </FadeIn>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/wall1.jpg"
          alt="Stone work"
        />
      </div>
    </div>
  );
}
