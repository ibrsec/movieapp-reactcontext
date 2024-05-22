import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import Switch from "./Switch";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { currentUser, logOut } = useAuth();

  const navigate = useNavigate();
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center   sm:items-stretch  justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <h1
                      className="text-white text-xl cursor-pointer"
                      onClick={() => navigate("/")}
                    >
                      Movie App
                    </h1>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <span className="text-white me-2">
                    {currentUser?.displayName}
                  </span>
                  <Switch />

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={
                            currentUser?.photoURL ||
                            "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-male-icon.png"
                          }
                          alt="profile"
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
                      {!currentUser?.accessToken   ?
                      <>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/login"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Login
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/register"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Register
                            </Link>
                          )}
                        </Menu.Item>
                        </>
                        :
                        <div></div>
                        }
                        <Menu.Item>
                          
                            {currentUser?.accessToken   ?
                            <button
                              className="block px-4 py-2 text-sm text-gray-700 w-full text-start"
                              onClick={() => {
                                logOut();
                                console.log("logging out"); 
                              }}
                            >
                              Sign out
                            </button> :
                            <div></div>
                            }
                          
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
      {/* <div className='h-[50px] bg-red-500'></div> */}
    </>
  );
};

export default Navbar;
