import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navbar from "../../components/Navbar.jsx";
import AvatarGroup from "../../components/AvatarGroup.jsx";

import Datepicker from "react-tailwindcss-datepicker"; 
import { Routes, Route, Outlet, Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    name: "Rn' Pattie ",
    position: "Nurse",
    href: "#",
    description:
      "#Illo sint voluptas. Error voluptates #culpa eligendi. Hic vel totam vitae illo. ",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    name: "Rn' Pattie ",
    position: "Nurse",
    href: "#",
    description:
      "#Illo sint voluptas. Error voluptates #culpa eligendi. Hic vel totam vitae illo. ",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    name: "Rn' Pattie ",
    position: "Nurse",
    href: "#",
    description:
      "#Illo sint voluptas. Error voluptates #culpa eligendi. Hic vel totam vitae illo. ",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Boost your conversion rate",
    name: "Rn' Pattie ",
    position: "Nurse",
    href: "#",
    description:
      "#Illo sint voluptas. Error voluptates #culpa eligendi. Hic vel totam vitae illo. ",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 5,
    title: "Boost your conversion rate",
    name: "Rn' Pattie ",
    position: "Nurse",
    href: "#",
    description:
      "#Illo sint voluptas. Error voluptates #culpa eligendi. Hic vel totam vitae illo. ",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 6,
    title: "Boost your conversion rate",
    name: "Rn' Pattie ",
    position: "Nurse",
    href: "#",
    description:
      "#Illo sint voluptas. Error voluptates #culpa eligendi. Hic vel totam vitae illo. ",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Search() {
  const [value, setValue] = useState({ 
  startDate: new Date(), 
  endDate: new Date().setMonth(11) 
  }); 
  
  const handleValueChange = (newValue) => {
  console.log("newValue:", newValue); 
  setValue(newValue); 
  } 
  
  return (
    <>
      <Navbar />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ค้นหาผู้ช่วยเหลือเพื่อแบ่งเบางานของคุณ
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              คุณสามารถค้นหาด้วยชื่อโรงพบาบาลที่คุณต้องการให้เราไปช่วยเหลือหรือระบุเป็นพื้นที่เพื่อหาผู้ให้บริการที่
              สะดวกให้บริการในพื้นที่นั้นๆได้อย่างง่ายดาย
            </p>
          </div>


          <form className="md:mt-8">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ค้นหาด้วย ชื่อโรงพยาบบาล, สถานที่ใกล้เคียง, บริเวณที่คุณต้องการความช่วยเหลือ"
                required
              ></input>
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>

          </form>


            
          <Datepicker 
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            primaryColor={"blue"} 
            value={value} 
            onChange={handleValueChange} 
            showShortcuts={true} 
            /> 




          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow white:bg-gray-800 white:border-gray-700">
                  <div className="flex justify-end px-4 pt-12"></div>
                  <div className="flex flex-col items-center pb-10">
                    <img
                      className="w-24 h-24 mb-3 rounded-full shadow-lg"
                      src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                      alt="Bonnie image"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-400">
                      {post.name}(
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.position}
                      </span>
                      )
                    </h5>
                    <AvatarGroup />
                    <div className="flex mt-4 space-x-3 md:ml-8">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.description}
                      </span>
                    </div>

                    <div className="flex mt-4 space-x-3 md:m-6">
                      <ul className="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400">
                        <li className="flex items-center">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          Upload your file to our website
                        </li>
                        <li className="flex items-center">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          Choose your file format
                        </li>
                      </ul>
                    </div>

                    <div className="flex mt-4 space-x-3 md:mt-6">
                      <Link
                        to="/staffdetail"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        See Detail
                      </Link>
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                      >
                        Message
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        
        
        
        
        
        
        </div>
      </div>
    </>
  );
}
