"use client";

import { logout } from "@/features/auth/actions";
import { ValidRoles } from "@/graphql/generated";
import { useUIStore } from "@/store/ui/ui-store";
import { cn } from "@/utils/cn";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

function Sidebar() {
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
  const closeSidebar = useUIStore((state) => state.closeSidebar);

  const { data } = useSession();
  const isAuthenticated = !!data?.user;
  const isAdmin = data?.user?.roles?.includes(ValidRoles.Admin);

  return (
    <div>
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-30" />
      )}

      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      <nav
        className={cn(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          !isSidebarOpen && "translate-x-full"
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeSidebar()}
        />

        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-200"
          />
        </div>

        {/* Menu */}
        {isAuthenticated && (
          <>
            <Link
              href="/profile"
              onClick={closeSidebar}
              className="flex  items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoPersonOutline size={30} />
              <span className="ml-3 text-xl">Profile</span>
            </Link>

            <Link
              href="/"
              className="flex  items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoTicketOutline size={30} />
              <span className="ml-3 text-xl">Orders</span>
            </Link>
          </>
        )}

        {!isAuthenticated && (
          <Link
            href="/auth/login"
            onClick={closeSidebar}
            className="flex  items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoLogInOutline size={30} />
            <span className="ml-3 text-xl">SignIn</span>
          </Link>
        )}

        {isAuthenticated && (
          <button
            className="flex w-full items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            onClick={() => logout()}
          >
            <IoLogOutOutline size={30} />
            <span className="ml-3 text-xl">Logout</span>
          </button>
        )}

        {isAdmin && (
          <>
            <div className="w-full h-px bg-gray-200 my-10" />

            <Link
              href="/"
              className="flex  items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoShirtOutline size={30} />
              <span className="ml-3 text-xl">Products</span>
            </Link>

            <Link
              href="/"
              className="flex  items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoTicketOutline size={30} />
              <span className="ml-3 text-xl">Orders</span>
            </Link>

            <Link
              href="/"
              className="flex  items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoPeopleOutline size={30} />
              <span className="ml-3 text-xl">Users</span>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Sidebar;
