import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { getCategories } from "../services";
import ProfilePicture from "../public/SquarePFP.png";
import Image from "next/image";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <Disclosure as="nav" className="mb-4 bg-gray-200">
      {({ open }) => (
        <>
          <div className="container md:mx-auto md:px-10 mb-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="CheatCodes"
                    />
                  </Link>
                  <Link href="/">
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="CheatCodes"
                    />
                  </Link>
                  <Link href="/">
                    <span className="transition duration-500 hover:text-indigo-500 cursor-pointer font-semibold px-3 text-2xl text-slate-600 hidden md:block">
                      {/* <span className="transition duration-500 hover:text-yellow-400 cursor-pointer font-header text-4xl text-white"> */}
                      CheatCodes
                    </span>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <div className="hidden sm:ml-6 sm:block px-3">
                  <div className="flex space-x-4">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                      >
                        <span className="md:float-right mt-1 align-middle text-slate-600 font-semibold cursor-pointer transition duration-500 hover:text-indigo-500">
                          {category.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        src={ProfilePicture}
                        alt="Profile Picture"
                        className="h-8 w-8 rounded-full"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://www.apurvashah.org/"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Portfolio
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://github.com/lazarulian"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            GitHub
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://www.goodreads.com/user/show/148133170-apurva-shah"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            GoodReads
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <div className=" text-white bg-indigo-600 opacity-70 block px-3 py-2 rounded-md text-base font-medium w-full text-center">
                <Link key="Home" href="/">
                  Home
                </Link>
              </div>
              {categories.map((category) => (
                <div className=" text-white bg-indigo-600 opacity-70 block px-3 py-2 rounded-md text-base font-medium w-full text-center">
                  <Link key={category.slug} href={`/category/${category.slug}`}>
                    {category.name}
                  </Link>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
