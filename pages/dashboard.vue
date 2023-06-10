<template>
  <div>
    <button
      id="button"
      type="button"
      class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span class="sr-only">Open sidebar</span
      ><svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>
    <aside
      id="sidebar"
      class="fixed top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
      aria-hidden="true"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-[#282c38]">
        <h2 class="p-2 mb-2 text-3xl font-medium text-white cursor-pointer">
          Qualyval
        </h2>
        <ul class="space-y-2 font-medium">
          <li>
            <a
              href="/"
              class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
              id="closeButton"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-6 h-6 text-gray-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                  clip-rule="evenodd"
                ></path></svg><span class="ml-3">Dashboard</span></a
            >
          </li>
          <li>
            <a
              href="/inbox"
              class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
              id="closeButton"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition duration-75"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.478 5.559A1.5 1.5 0 016.912 4.5H9A.75.75 0 009 3H6.912a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H15a.75.75 0 000 1.5h2.088a1.5 1.5 0 011.434 1.059l2.213 7.191H17.89a3 3 0 00-2.684 1.658l-.256.513a1.5 1.5 0 01-1.342.829h-3.218a1.5 1.5 0 01-1.342-.83l-.256-.512a3 3 0 00-2.684-1.658H3.265l2.213-7.191z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v6.44l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75z"
                  clip-rule="evenodd"
                ></path></svg><span class="flex-1 ml-3 whitespace-nowrap">Inbox</span></a
            >
          </li>
          <li>
            <a
              id="closeButton"
              class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition duration-75"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clip-rule="evenodd"
                ></path></svg>
            <span class="flex-1 ml-3 whitespace-nowrap"
                >Calendar &amp; Todos</span
              ></a
            >
          </li>
          <div class="h-[1px] w-full bg-gray-600"></div>
          <li>
            <a
              href="/jobs"
              class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
              id="closeButton"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition duration-75"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"
                ></path></svg>
              <span class="ml-3">Jobs</span></a
            >
          </li>
          <li>
            <a
              aria-current="page"
              href="/candidates"
              class="router-link-active router-link-exact-active flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
              id="closeButton"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition duration-75"
              >
                <path
                  d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"
                ></path></svg>
              <span class="ml-3">Candidates</span></a
            >
          </li>
          <li>
            <a
              id="closeButton"
              class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition duration-75"
              >
                <path
                  d="M15 3.75H9v16.5h6V3.75zM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5zM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 01-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875z"
                ></path></svg>
              <span class="ml-3">My Referrals</span></a
            >
          </li>
          <li>
            <a
              id="closeButton"
              class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition duration-75"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm18 3H3.75v9a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V9zm-15-3.75A.75.75 0 004.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H5.25zm1.5.75a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V6zm3-.75A.75.75 0 009 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H9.75z"
                  clip-rule="evenodd"
                ></path></svg>
              <span class="ml-3">Career Site</span></a
            >
          </li>
          <div class="h-[1px] w-full bg-gray-600"></div>
          <li>
            <a
              href="/employee"
              class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
              id="closeButton"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition duration-75"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clip-rule="evenodd"
                ></path></svg>
              <span class="ml-3">Employee</span></a
            >
          </li>
          <li>
            <a
              id="closeButton"
              class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition duration-75"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
                  clip-rule="evenodd"
                ></path></svg>
              <span class="ml-3">Structure</span></a
            >
          </li>
          <li>
            <a
              id="closeButton"
              class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition duration-75"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                  clip-rule="evenodd"
                ></path></svg>
              <span class="ml-3">Report</span></a
            >
          </li>
          <li>
            <a
              id="closeButton"
              class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition duration-75"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                  clip-rule="evenodd"
                ></path></svg>
              <span class="ml-3">Settings</span></a
            >
          </li>
          <li>
            <a
              href="/signUp"
              class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
              id="closeButton"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-500 transition duration-75"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                ></path></svg>
              <span class="ml-3">Sign Up</span></a
            >
          </li>
        </ul>
      </div>
    </aside>
    <div class="p-0 sm:ml-64">
      <header
        class="bg-white shadow-sm max-sm:mx-4 max-sm:rounded-md max-sm:mt-4"
      >
        <div class="flex">
          <div
            class="border-r border-r-gray-300 py-5 px-7 max-xl:px-6 max-xl:py-4 max-lg:hidden"
          >
            <div class="bg-gray-400 w-7 h-7 rounded-md p-1">
              <div class="w-1/2 h-5 bg-white rounded-sm">&nbsp;</div>
            </div>
          </div>
          <div
            class="border-r border-r-gray-300 pl-5 pr-4 flex items-center justify-center gap-4 max-lg:py-2 max-lg:border-none max-lg:w-1/2 max-lg:justify-start max-md:gap-1 max-md:w-8/12 max-md:py-4 max-md:pr-1 max-sm:pl-3"
          >
            <div>
              <h4 class="capitalize text-sm text-gray-500 max-md:hidden">
                your organization
              </h4>
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6 text-cyan-600 max-sm:hidden"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <h3 class="text-black text-base max-xl:text-sm">Qualyval</h3>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="text-gray-500 w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <form class="pl-5 flex items-center w-1/2 max-md:pl-0">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label
            >
            <div class="relative w-full">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-white rounded-lg bg-white focus:ring-yellow-300 focus:border-yellow-300 max-xl:py-3"
                required=""
              />
            </div>
          </form>
          <div
            class="ml-auto flex items-center gap-4 pr-6 pl-4 max-xl:gap-3 max-xl:pr-3"
          >
            <a
              href="/companyDropdown"
              class="flex items-center justify-center bg-yellow-300 p-3 rounded-full max-xl:p-2.5"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-6 h-6 max-xl:w-5 max-xl:h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clip-rule="evenodd"
                ></path></svg></a
            ><button
              class="flex items-center justify-center bg-slate-200 p-3 rounded-full max-xl:p-2.5 max-md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="w-6 h-6 max-xl:w-5 max-xl:h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                ></path>
              </svg></button
            ><button class="w-12 h-12 rounded-full max-xl:w-10 max-xl:h-10">
              <img
                class="border-2 border-slate-400 rounded-full"
                src="https://hire-management.netlify.app/_nuxt/user.735982cc.jpg"
                alt="user-avatar"
              />
            </button>
          </div>
        </div>
      </header>
      <div class="relative">
        <main class="main-container w-full">
          <div class="flex flex-col h-full lg:h-[91.5vh] px-5 pt-5">
            <header class="mb-10 max-lg:mb-6 max-sm:mb-8">
              <div
                class="flex items-center justify-between max-xl:flex-col max-xl:items-start max-xl:gap-4 max-sm:flex-row"
              >
                <div class="flex items-center">
                  <h3
                    class="mr-6 text-2xl max-xl:text-xl max-xl:mr-4 max-sm:hidden"
                  >
                    56 Candidates
                  </h3>
                  <button
                    id="filterDropDownBtn"
                    data-dropdown-toggle="filterDropDownMenu"
                    class="flex items-center gap-1 border bg-white border-gray-300 px-3 py-2.5 text-gray-500 hover:bg-gray-400 hover:text-white rounded-md max-xl:px-4 max-sm:p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="filterDropDownMenu"
                    class="z-10 hidden bg-white divide-y divide-gray-100 max-lg:w-28"
                    style="
                      position: absolute;
                      inset: 0px auto auto 0px;
                      margin: 0px;
                      transform: translate3d(492.8px, 140px, 0px);
                    "
                    data-popper-placement="bottom"
                  >
                    <ul
                      class="flex items-center gap-1 px-3 py-4 text-sm text-gray-700 rounded-md shadow-md max-lg:flex-col max-lg:items-start"
                      aria-labelledby="filterDropDownBtn"
                    >
                      <li class="mr-1 max-lg:hidden"><p>Where</p></li>
                      <li>
                        <select
                          id="candidate"
                          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full px-2 py-1 max-lg:w-full"
                        >
                          <option value="name" selected="">Name</option>
                          <option value="rating">Rating</option>
                          <option value="stages">Stages</option>
                          <option value="team">Team</option>
                          <option value="date">Date</option>
                          <option value="owner">Owner</option>
                        </select>
                      </li>
                      <li>
                        <select
                          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full py-1 max-lg:w-full"
                        >
                          <option value="is">is...</option>
                          <option value="is-not">is not...</option></select
                        ><!----><!---->
                      </li>
                      <li>
                        <input
                          type="text"
                          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block px-2 py-1 w-24 max-lg:w-full"
                          required=""
                        /><!----><!---->
                      </li>
                      <li class="max-lg:w-full">
                        <button
                          class="px-2 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-green-400 rounded-md text-sm text-gray-600 max-lg:w-full max-lg:bg-green-400 max-lg:text-gray-800"
                        >
                          Filter
                        </button>
                      </li>
                      <!---->
                    </ul>
                  </div>
                  <button
                    id="hideDropdownBtn"
                    data-dropdown-toggle="hideDropdownMenu"
                    class="focus:outline-none text-gray-600 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center border border-gray-300 hover:bg-gray-400 hover:text-white ml-4"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="hideDropdownMenu"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-md shadow dark:bg-gray-700 dark:divide-gray-600"
                    style="
                      position: absolute;
                      inset: 0px auto auto 0px;
                      margin: 0px;
                      transform: translate3d(534.4px, 140px, 0px);
                    "
                    data-popper-placement="bottom"
                  >
                    <ul
                      class="pl-2 py-2 pr-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="hideDropdownBtn"
                    >
                      <li>
                        <div
                          class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <label
                            class="relative inline-flex items-center w-full cursor-pointer"
                            ><input type="checkbox" class="sr-only peer" />
                            <div
                              class="w-9 h-5 bg-red-400 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-green-400"
                            ></div>
                            <span class="ml-3 text-sm dark:text-gray-300">
                              Rating</span
                            ></label
                          >
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <label
                            class="relative inline-flex items-center w-full cursor-pointer"
                            ><input type="checkbox" class="sr-only peer" />
                            <div
                              class="w-9 h-5 bg-red-400 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-green-400"
                            ></div>
                            <span class="ml-3 text-sm dark:text-gray-300">
                              Stages</span
                            ></label
                          >
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <label
                            class="relative inline-flex items-center w-full cursor-pointer"
                            ><input type="checkbox" class="sr-only peer" />
                            <div
                              class="w-9 h-5 bg-red-400 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-green-400"
                            ></div>
                            <span class="ml-3 text-sm dark:text-gray-300">
                              Team</span
                            ></label
                          >
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <label
                            class="relative inline-flex items-center w-full cursor-pointer"
                            ><input type="checkbox" class="sr-only peer" />
                            <div
                              class="w-9 h-5 bg-red-400 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-green-400"
                            ></div>
                            <span class="ml-3 text-sm dark:text-gray-300">
                              Applied Date
                            </span></label
                          >
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <label
                            class="relative inline-flex items-center w-full cursor-pointer"
                            ><input type="checkbox" class="sr-only peer" />
                            <div
                              class="w-9 h-5 bg-red-400 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-green-400"
                            ></div>
                            <span class="ml-3 text-sm dark:text-gray-300">
                              Owner</span
                            ></label
                          >
                        </div>
                      </li>
                    </ul>
                    <div
                      class="flex gap-1 justify-between text-gray-600 px-2 py-3 text-xs"
                    >
                      <button
                        class="bg-gray-100 px-3 py-1 rounded-sm hover:bg-gray-200"
                      >
                        Hide All</button
                      ><button
                        class="bg-gray-100 px-3 py-1 rounded-sm hover:bg-gray-200"
                      >
                        Show All
                      </button>
                    </div>
                  </div>
                  <button
                    id="sortDropDownBtn"
                    data-dropdown-toggle="sortDropDownMenu"
                    class="focus:outline-none text-gray-600 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center border border-gray-300 hover:bg-gray-400 hover:text-white ml-4"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="sortDropDownMenu"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-44"
                    style="
                      position: absolute;
                      inset: 0px auto auto 0px;
                      margin: 0px;
                      transform: translate3d(596px, 140px, 0px);
                    "
                    data-popper-placement="bottom"
                  >
                    <ul
                      class="px-3 py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="sortDropDownBtn"
                    >
                      <li class="flex items-center gap-2">
                        <span class="w-full py-2 text-start"> Name </span
                        ><select
                          class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400"
                        >
                          <option value="nameAsc">A → Z</option>
                          <option value="nameDesc">Z → A</option>
                        </select>
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="w-full py-2 text-start"> Rating </span
                        ><select
                          class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400"
                        >
                          <option value="ratingAsc">1 → 9</option>
                          <option value="ratingDesc">9 → 1</option>
                        </select>
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="w-full py-2 text-start"> Date </span
                        ><select
                          class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400"
                        >
                          <option value="dateAsc">1 → 9</option>
                          <option value="dateDesc">9 → 1</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                  <button
                    id="groupDropDownBtn"
                    data-dropdown-toggle="groupDropDownMenu"
                    class="flex items-center gap-1 px-3 py-2 ml-4 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-400 hover:text-white max-xl:px-4 max-sm:p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-6 h-6 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="groupDropDownMenu"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
                    style="
                      position: absolute;
                      inset: 0px auto auto 0px;
                      margin: 0px;
                      transform: translate3d(660px, 140px, 0px);
                    "
                    data-popper-placement="bottom"
                  >
                    <!---->
                    <ul
                      class="flex flex-col items-start w-full py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="groupDropDownBtn"
                    >
                      <li>
                        <button
                          type="button"
                          class="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-5 h-5 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                            ></path>
                          </svg>
                          Rating
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          class="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-5 h-5 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                            ></path>
                          </svg>
                          Stages
                        </button>
                      </li>
                      <li>
                        <button
                          typ="button"
                          class="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-5 h-5 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                            ></path>
                          </svg>
                          Team
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          class="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-5 h-5 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                            ></path>
                          </svg>
                          Owner
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="flex items-center">
                  <div
                    class="pr-5 mr-5 border-r border-gray-400 max-md:border-none max-md:mr-0"
                  >
                    <button
                      class="p-2 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-400 hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="w-6 h-6 font-semibold"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <button
                    class="p-2 mr-5 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-500 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-6 h-6 font-semibold"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      ></path>
                    </svg></button
                  ><button
                    class="p-2 mr-5 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-500 hover:text-white max-md:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-6 h-6 font-semibold"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                      ></path>
                    </svg></button
                  >
                </div>
              </div>
            </header>
            <div
              id="drawer-right"
              class="fixed top-0 right-0 z-50 h-screen overflow-y-auto transition-transform translate-x-full bg-white w-[45%] max-2xl:w-1/2 max-xl:w-2/3 max-lg:w-1/2 max-md:w-[55%] max-sm:w-[80%]"
              tabindex="-1"
              aria-labelledby="drawer-right-label"
              aria-hidden="true"
            >
              <header class="bg-slate-200 px-5 py-6 max-xl:p-4">
                <div class="flex justify-between max-sm:flex-col max-sm:gap-5">
                  <div class="flex items-center gap-4">
                    <div class="relative">
                      <img class="w-14 h-14 rounded-full" alt="" /><button
                        class="flex items-center gap-1 shadow-md bg-white px-1 rounded-full absolute bottom-[.01rem]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="w-3 h-3 text-gray-300"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          ></path></svg>
                        <span class="text-xs text-gray-600">.0</span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="w-3 h-3"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <h3 class="font-medium text-lg max-xl:text-base"></h3>
                        <span
                          class="bg-green-100 border rounded-md border-green-400 text-green-600 text-sm px-2 max-xl:text-xs"
                          >Active</span
                        >
                      </div>
                      <p class="text-sm text-slate-500 mb-2 max-lg:text-xs">
                        -
                      </p>
                      <div class="flex gap-1 items-center"><!----></div>
                    </div>
                  </div>
                  <div
                    class="flex gap-6 items-start max-lg:gap-3 max-lg:flex-col"
                  >
                    <div class="flex items-center gap-3">
                      <button class="bg-white p-1.5 shadow-sm rounded-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="text-slate-500 w-4 h-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                            clip-rule="evenodd"
                          ></path>
                        </svg></button
                      ><button class="bg-white p-1.5 shadow-sm rounded-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="text-slate-500 w-4 h-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div class="flex gap-3">
                      <button
                        class="flex gap-1 items-center shadow-sm bg-white p-1.5 rounded-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="text-slate-500 w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                          ></path></svg>
                        <span
                          class="text-xs text-gray-600 font-medium max-xl:hidden"
                          >Send Message</span
                        ></button
                      ><button
                        class="flex gap-1 items-center shadow-sm bg-white p-1.5 rounded-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="text-slate-500 w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          ></path></svg>
                        <span
                          class="text-xs text-gray-600 font-medium max-xl:hidden"
                          >Send Email</span
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </header>
              <div
                class="mb-4 border-b border-gray-200 dark:border-gray-700 mt-3"
              >
                <ul
                  class="flex flex-wrap -mb-px text-sm font-medium text-center"
                  id="myTab"
                  data-tabs-toggle="#myTabContent"
                  role="tablist"
                >
                  <li class="mr-2 ml-6" role="presentation">
                    <button
                      class="inline-block p-4 border-b-2 rounded-t-lg uppercase max-lg:pl-0 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                      id="details-tab"
                      data-tabs-target="#details"
                      type="button"
                      role="tab"
                      aria-controls="details"
                      aria-selected="true"
                    >
                      Details
                    </button>
                  </li>
                  <li class="mr-2" role="presentation">
                    <button
                      class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 uppercase dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                      id="resume-tab"
                      data-tabs-target="#resume"
                      type="button"
                      role="tab"
                      aria-controls="resume"
                      aria-selected="false"
                    >
                      Resume
                    </button>
                  </li>
                  <li class="mr-2" role="presentation">
                    <button
                      class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 uppercase dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                      id="pipeline-tab"
                      data-tabs-target="#pipeline"
                      type="button"
                      role="tab"
                      aria-controls="pipeline"
                      aria-selected="false"
                    >
                      hiring pipeline
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 uppercase max-lg:ml-2 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                      id="interviews-tab"
                      data-tabs-target="#interviews"
                      type="button"
                      role="tab"
                      aria-controls="interviews"
                      aria-selected="false"
                    >
                      interviews
                    </button>
                  </li>
                </ul>
              </div>
              <div id="myTabContent">
                <div
                  class="p-4 rounded-lg dark:bg-gray-800"
                  id="details"
                  role="tabpanel"
                  aria-labelledby="details-tab"
                >
                  <div class="flex flex-col gap-4">
                    <div class="rounded border border-slate-300">
                      <div
                        class="flex justify-between items-center px-4 py-2 border-b border-b-slate-300"
                      >
                        <h3 class="text-sm font-semibold">Basic Information</h3>
                        <div class="flex gap-1 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-6 h-6 text-slate-700"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            ></path></svg>
                          <span
                            class="text-sm text-slate-700 font-normal max-lg:hidden"
                            >Edit Info</span
                          >
                        </div>
                      </div>
                      <div
                        class="p-4 grid grid-cols-[40fr_60fr] gap-y-4 max-lg:grid-cols-1"
                      >
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Name</span
                          >
                          <p class="text-sm font-semibold text-gray-700">
                            Cody Fisher
                          </p>
                        </div>
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Email</span
                          >
                          <p class="text-sm font-semibold text-gray-700">
                            example@email.com
                          </p>
                        </div>
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Origin</span
                          >
                          <p class="text-sm font-semibold text-gray-700">
                            Sourced
                          </p>
                        </div>
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Phone</span
                          >
                          <p class="text-sm font-semibold text-gray-700">
                            +62 7583-9749
                          </p>
                        </div>
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Candidate ID</span
                          >
                          <p class="text-sm font-semibold text-gray-700">
                            TM_3_CFP
                          </p>
                        </div>
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Website</span
                          >
                          <p class="text-sm font-semibold text-gray-700">
                            www.example.com
                          </p>
                        </div>
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Address</span
                          >
                          <p class="text-sm font-semibold text-gray-700">
                            abc Street, 12347
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="rounded border border-slate-300">
                      <div
                        class="flex justify-between items-center px-4 py-2 border-b border-b-slate-300"
                      >
                        <h3 class="text-sm font-semibold">
                          Professional Details
                        </h3>
                        <div class="flex gap-1 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-6 h-6 text-slate-700"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            ></path></svg>
                          <span
                            class="text-sm text-slate-700 font-normal max-lg:hidden"
                            >Edit Info</span
                          >
                        </div>
                      </div>
                      <div
                        class="p-4 grid grid-cols-[40fr_60fr] gap-y-4 max-lg:grid-cols-1"
                      >
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Current Job Title</span
                          >
                          <p class="text-sm font-semibold text-gray-700">
                            UI/UX Designer
                          </p>
                        </div>
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Highest Qualification Held</span
                          >
                          <p class="text-sm font-semibold text-gray-700">
                            Bachelors in Engineering
                          </p>
                        </div>
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Expected Sallery</span
                          >
                          <p class="text-sm font-semibold text-gray-700">-</p>
                        </div>
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Current Sallery</span
                          >
                          <p class="text-sm font-semibold text-gray-700">-</p>
                        </div>
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Experience in Years</span
                          >
                          <p class="text-sm font-semibold text-gray-700">
                            3 Year
                          </p>
                        </div>
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Skype ID</span
                          >
                          <p class="text-sm font-semibold text-gray-700">
                            cody_fisher
                          </p>
                        </div>
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Address Info</span
                          >
                          <p class="text-sm font-semibold text-gray-700">
                            abc Street, 12347
                          </p>
                        </div>
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Skill Set</span
                          >
                          <div class="flex items-center gap-2">
                            <div class="bg-blue-300 rounded-full">
                              <p
                                class="text-xs font-medium py-[.15rem] px-2 text-gray-800"
                              >
                                Html
                              </p>
                            </div>
                            <div class="bg-blue-300 rounded-full">
                              <p
                                class="text-xs font-medium py-[.15rem] px-2 text-gray-800"
                              >
                                Css
                              </p>
                            </div>
                            <div class="bg-blue-300 rounded-full">
                              <p
                                class="text-xs font-medium py-[.15rem] px-2 text-gray-800"
                              >
                                Sketching
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="hidden p-4 rounded-lg dark:bg-gray-800"
                  id="resume"
                  role="tabpanel"
                  aria-labelledby="resume-tab"
                >
                  <div>
                    <div class="flex items-center gap-1 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="w-5 h-5 text-slate-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        ></path>
                      </svg>
                      <p class="text-sm font-medium">Cody_Fisher_Resume.pdf</p>
                    </div>
                    <div class="p-4 bg-slate-200 max-lg:p-2 max-sm:p-1">
                      <div
                        class="bg-white shadow-md pt-2 pr-2 pl-6 pb-6 max-lg:pl-3"
                      >
                        <header class="flex justify-end mb-2">
                          <div class="flex gap-1 rounded-sm">
                            <div class="border border-slate-400 w-fit p-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                class="w-5 h-5 text-gray-700"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                                ></path>
                              </svg>
                            </div>
                            <div
                              class="border border-slate-400 w-fit p-1 rounded-sm"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                class="w-5 h-5 text-gray-700"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </header>
                        <div>
                          <div>
                            <div class="flex justify-between items-center">
                              <p class="text-base font-semibold">Cody Fisher</p>
                              <span class="text-xs text-cyan-600 font-medium"
                                >example@email.com</span
                              >
                            </div>
                            <p class="text-sm">
                              UI/UX Designer with Human Centered Design Approach
                            </p>
                          </div>
                          <div class="mt-3">
                            <h3 class="font-medium text-sm">Profile</h3>
                            <p class="text-xs text-gray-700 font-medium">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Animi nihil quam id? Possimus,
                              repellendus illo necessitatibus assumenda adipisci
                              delectus totam Animi nihil quam id? Possimus,
                              repellendus illo necessitatibus assumenda adipisci
                              delectus totam
                            </p>
                          </div>
                          <div class="mt-4 border-b border-b-slate-200 pb-3">
                            <h3 class="font-medium text-sm mb-1">Experience</h3>
                            <p class="text-xs font-medium text-gray-700">
                              Marketing Manager
                            </p>
                            <div class="flex justify-between mb-2">
                              <p class="text-xs text-gray-500">
                                San Francisco USA
                              </p>
                              <p class="text-xs text-gray-500">
                                Feb 2017 - currently employed
                              </p>
                            </div>
                            <ul class="text-xs list-disc ml-4">
                              <li>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Natus aspernatur voluptatem
                                placeat error sapiente voluptatum?
                              </li>
                              <li>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Natus aspernatur voluptatem
                                placeat error
                              </li>
                              <li>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Natus aspernatur voluptatem
                                placeat error sapiente voluptatum? Natus
                                aspernatur voluptatem placeat error sapiente
                                voluptatum?
                              </li>
                              <li>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit.
                              </li>
                            </ul>
                          </div>
                          <div class="mt-4">
                            <h3 class="font-medium text-sm mb-1">Analyst</h3>
                            <p class="text-xs font-medium text-gray-700">
                              Marketing Manager
                            </p>
                            <div class="flex justify-between mb-2">
                              <p class="text-xs text-gray-500">
                                San Francisco USA
                              </p>
                              <p class="text-xs text-gray-500">
                                Feb 2017 - currently employed
                              </p>
                            </div>
                            <ul class="text-xs list-disc ml-4">
                              <li>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Natus aspernatur voluptatem
                                placeat error sapiente voluptatum?
                              </li>
                              <li>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Natus aspernatur voluptatem
                                placeat error
                              </li>
                              <li>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Natus aspernatur voluptatem
                                placeat error sapiente voluptatum? Natus
                                aspernatur voluptatem placeat error sapiente
                                voluptatum?
                              </li>
                              <li>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit.
                              </li>
                            </ul>
                          </div>
                          <div class="mt-4">
                            <h3 class="font-medium text-sm mb-1">Education</h3>
                            <p class="text-xs font-medium text-gray-700">
                              MSc. Stratgic Marketing
                            </p>
                            <div class="flex justify-between mb-2">
                              <p class="text-xs text-gray-500">
                                Liberty school of management
                              </p>
                              <p class="text-xs text-gray-500">
                                Feb 2017 - Sept 2017
                              </p>
                            </div>
                            <ul class="text-xs list-disc ml-4">
                              <li>Graduate with education</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="hidden p-4 rounded-lg dark:bg-gray-800"
                  id="pipeline"
                  role="tabpanel"
                  aria-labelledby="pipeline-tab"
                >
                  <div>
                    <div class="flex gap-2 items-center text-sm mb-4">
                      <span class="text-gray-600">Stage of:</span>
                      <p class="text-gray-800 font-medium">
                        Design Team - UI Designer
                      </p>
                    </div>
                    <ol
                      class="flex items-center justify-between flex-wrap w-full text-sm font-medium text-center text-gray-500 bg-white rounded-md gap-4 border border-slate-200 px-3 py-2 max-lg:justify-normal"
                    >
                      <li
                        class="flex items-center text-gray-600 max-lg:p-[.1rem]"
                      >
                        <span>Screening</span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 sm:ml-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                          ></path>
                        </svg>
                      </li>
                      <li class="flex items-center max-lg:p-[.1rem]">
                        <span class="">Design Challange</span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 sm:ml-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                          ></path>
                        </svg>
                      </li>
                      <li
                        class="flex items-center text-orange-400 max-lg:p-[.1rem]"
                      >
                        <span>Interview</span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 sm:ml-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                          ></path>
                        </svg>
                      </li>
                      <li class="flex items-center max-lg:p-[.1rem]">
                        <span>Test</span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 sm:ml-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                          ></path>
                        </svg>
                      </li>
                      <li class="flex items-center max-lg:p-[.1rem]">
                        <span>Hired</span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 sm:ml-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                          ></path>
                        </svg>
                      </li>
                    </ol>
                    <div class="rounded border border-slate-300 mt-4">
                      <div class="px-4 py-3 border-b border-b-slate-300">
                        <h3 class="text-sm font-semibold">Detail</h3>
                      </div>
                      <div
                        class="p-4 grid grid-cols-[40fr_60fr] gap-y-4 max-lg:grid-cols-1"
                      >
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Current Status</span
                          >
                          <div class="flex items-center gap-2">
                            <div
                              class="uppercase bg-green-900 rounded-full px-2 py-[.1rem] w-fit text-white flex items-center justify-center"
                            >
                              <span class="text-[.6rem] font-medium"
                                >Active</span
                              >
                            </div>
                            <button class="text-xs text-green-500 font-medium">
                              (View Workflow)
                            </button>
                          </div>
                        </div>
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Assignee</span
                          >
                          <div
                            class="flex gap-2 items-center max-lg:flex-col max-lg:items-start max-lg:gap-1 max-lg:mt-1"
                          >
                            <img
                              src="/_nuxt/pp-2.8fd5caa2.jpg"
                              alt="owner-image"
                              class="w-7 h-7 rounded-full"
                            />
                            <p class="text-xs text-gray-700 font-medium">
                              Andri R. Hemington
                            </p>
                          </div>
                        </div>
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Stage</span
                          >
                          <p class="text-sm font-semibold text-gray-700">
                            Interview
                          </p>
                        </div>
                        <div>
                          <span class="text-slate-500 text-sm font-medium"
                            >Owner</span
                          >
                          <div
                            class="flex gap-2 items-center max-lg:flex-col max-lg:items-start max-lg:gap-1 max-lg:mt-1"
                          >
                            <img
                              src="/_nuxt/pp-3.e17e60da.jpg"
                              alt="owner-image"
                              class="w-7 h-7 rounded-full"
                            />
                            <p class="text-xs text-gray-700 font-medium">
                              Qualyval
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <span class="text-slate-500 text-sm font-medium"
                              >Date</span
                            >
                            <p class="text-sm font-semibold text-gray-700">
                              14 - 16 Mar 2021
                            </p>
                          </div>
                        </div>
                        <div class="self-center justify-self-end">
                          <button
                            class="capitalize text-xs border border-green-700 rounded-md px-3 py-2 text-green-700 font-semibold"
                          >
                            move next status
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="rounded border border-slate-300 mt-4">
                      <div
                        class="px-4 py-3 border-b border-b-slate-300 flex justify-between items-center"
                      >
                        <h3 class="text-sm font-semibold">Notes</h3>
                        <div>
                          <button class="flex items-center gap-1">
                            <span class="text-sm font-medium text-slate-600"
                              >Recent First</span
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              class="w-4 h-4"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="px-4 py-6 pr-0">
                        <header>
                          <button class="flex items-center gap-1 ml-10">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              class="w-5 h-5 text-green-700"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                                clip-rule="evenodd"
                              ></path></svg>
                            <span class="text-green-500 font-semibold text-xs"
                              >Add Note</span
                            >
                          </button>
                        </header>
                        <div
                          class="flex gap-2 mt-4 border-b border-b-slate-200 pb-4"
                        >
                          <img
                            src="/_nuxt/pp-4.03f55394.jpg"
                            alt="people image"
                            class="w-8 h-8 rounded-full"
                          />
                          <div>
                            <div class="flex text-xs items-center gap-2">
                              <p class="font-semibold text-gray-600">
                                Qualyval
                              </p>
                              <span class="text-gray-700"
                                >13 Mar 2021 - 04:23 PM</span
                              >
                            </div>
                            <p class="text-xs text-gray-600 font-medium">
                              Candidate Successfully Interviewed for this stage
                            </p>
                            <button class="text-green-400 font-medium text-xs">
                              2 Reply
                            </button>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-500 ml-auto mr-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                            ></path>
                          </svg>
                        </div>
                        <div class="flex gap-2 mt-4">
                          <img
                            src="/_nuxt/pp-2.8fd5caa2.jpg"
                            alt="people image"
                            class="w-8 h-8 rounded-full"
                          />
                          <div>
                            <div class="flex text-xs items-center gap-2">
                              <p class="font-semibold text-gray-600">
                                Andri R. Hemi
                              </p>
                              <span class="text-gray-700"
                                >13 Mar 2021 - 04:23 PM</span
                              >
                            </div>
                            <p class="text-xs text-gray-600 font-medium">
                              Submitted for client review
                            </p>
                            <button class="text-green-400 font-medium text-xs">
                              2 Reply
                            </button>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-500 ml-auto mr-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="hidden p-4 rounded-lg dark:bg-gray-800"
                  id="interviews"
                  role="tabpanel"
                  aria-labelledby="interviews-tab"
                >
                  <div>
                    <header class="flex items-center justify-between">
                      <h4 class="text-sm font-semibold">Interview List</h4>
                      <button class="flex gap-1 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="w-5 h-5 text-green-700"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                            clip-rule="evenodd"
                          ></path></svg>
                        <span
                          class="capitalize text-xs font-semibold text-green-500"
                          >Add schedule interview</span
                        >
                      </button>
                    </header>
                    <div class="mt-6 flex flex-col gap-6">
                      <div>
                        <header class="flex justify-between mb-2">
                          <p class="text-xs font-medium text-gray-600">
                            Mar 18, 2021(Thursday)
                          </p>
                          <div class="flex items-center gap-1">
                            <button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                class="w-5 h-5 text-gray-500"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                ></path>
                              </svg></button
                            ><button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                class="w-5 h-5 text-gray-500"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </header>
                        <div
                          class="border border-slate-200 rounded-md px-3 py-4 border-l-4 border-l-cyan-500 shadow-sm"
                        >
                          <div
                            class="items-center grid grid-cols-[30fr_20fr_30fr_20fr] gap-x-2 max-xl:grid-cols-[35fr_20fr_30fr_15fr] max-lg:grid-cols-1 max-lg:gap-y-4"
                          >
                            <div
                              class="flex items-center gap-2 max-lg:flex-col max-lg:items-start"
                            >
                              <img
                                class="w-8 h-8 rounded-full"
                                src="/_nuxt/pp-1.7062269f.jpg"
                                alt="pp-1"
                              />
                              <div class="text-xs">
                                <p class="font-semibold">Bagus Fakri</p>
                                <p class="text-gray-600">
                                  Written Test - Onsite
                                </p>
                              </div>
                            </div>
                            <div class="text-xs">
                              <p class="font-semibold">3:30 - 4:30PM</p>
                              <p class="text-gray-600">1 Hour Interview</p>
                            </div>
                            <div class="text-xs">
                              <p class="font-semibold">Townhall Room 12</p>
                              <p class="text-gray-600">
                                Scheduled by
                                <span class="font-medium text-gray-800"
                                  >Qualyval</span
                                >
                              </p>
                            </div>
                            <button
                              class="text-green-700 text-xs font-semibold border border-green-700 px-3 py-2 rounded-md w-fit justify-self-end max-xl:p-2"
                            >
                              <span class="max-xl:hidden">
                                Submit Feedback </span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                class="w-5 h-5 hidden max-xl:inline-block"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <header class="flex justify-between mb-2">
                          <p class="text-xs font-medium text-gray-600">
                            Mar 18, 2021(Thursday)
                          </p>
                          <div class="flex items-center gap-1">
                            <button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                class="w-5 h-5 text-gray-500"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                ></path>
                              </svg></button
                            ><button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                class="w-5 h-5 text-gray-500"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </header>
                        <div
                          class="border border-slate-200 rounded-md px-3 py-4 border-l-4 border-l-yellow-400 shadow-sm"
                        >
                          <div
                            class="items-center grid grid-cols-[30fr_20fr_30fr_20fr] gap-x-2 max-xl:grid-cols-[35fr_20fr_30fr_15fr] max-lg:grid-cols-1 max-lg:gap-y-4"
                          >
                            <div
                              class="flex items-center gap-2 max-lg:flex-col max-lg:items-start"
                            >
                              <img
                                class="w-8 h-8 rounded-full"
                                src="/_nuxt/pp-2.8fd5caa2.jpg"
                                alt="pp-1"
                              />
                              <div class="text-xs">
                                <p class="font-semibold">Andri R. Herdi</p>
                                <p class="text-gray-600">Tec Round - Onsite</p>
                              </div>
                            </div>
                            <div class="text-xs">
                              <p class="font-semibold">2:30 - 3:00PM</p>
                              <p class="text-gray-600">1 Hour Interview</p>
                            </div>
                            <div class="text-xs">
                              <p class="font-semibold">Townhall Room 12</p>
                              <p class="text-gray-600">
                                Scheduled by
                                <span class="font-medium text-gray-800"
                                  >Qualyval</span
                                >
                              </p>
                            </div>
                            <button
                              class="text-green-700 text-xs font-semibold border border-green-700 px-3 py-2 rounded-md w-fit justify-self-end max-xl:p-2"
                            >
                              <span class="max-xl:hidden">
                                Submit Feedback </span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                class="w-5 h-5 hidden max-xl:inline-block"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <header class="flex justify-between mb-2">
                          <p class="text-xs font-medium text-gray-600">
                            Mar 18, 2021(Thursday)
                          </p>
                          <div class="flex items-center gap-1">
                            <button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                class="w-5 h-5 text-gray-500"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                ></path>
                              </svg></button
                            ><button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                class="w-5 h-5 text-gray-500"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </header>
                        <div
                          class="border border-slate-200 rounded-md px-3 py-4 border-l-4 border-l-cyan-500 shadow-sm"
                        >
                          <div
                            class="items-center grid grid-cols-[30fr_20fr_30fr_20fr] gap-x-2 max-xl:grid-cols-[35fr_20fr_30fr_15fr] max-lg:grid-cols-1 max-lg:gap-y-4"
                          >
                            <div
                              class="flex items-center gap-2 max-lg:flex-col max-lg:items-start"
                            >
                              <img
                                class="w-8 h-8 rounded-full"
                                src="/_nuxt/pp-3.e17e60da.jpg"
                                alt="pp-1"
                              />
                              <div class="text-xs">
                                <p class="font-semibold">Bagus Fakri</p>
                                <p class="text-gray-600">
                                  Culture Round - Onsite
                                </p>
                              </div>
                            </div>
                            <div class="text-xs">
                              <p class="font-semibold">3:30 - 4:30PM</p>
                              <p class="text-gray-600">1 Hour Interview</p>
                            </div>
                            <div class="text-xs">
                              <p class="font-semibold">Link Room Meet</p>
                              <p class="text-gray-600">
                                Scheduled by
                                <span class="font-medium text-gray-800"
                                  >Qualyval
                                </span>
                              </p>
                            </div>
                            <button
                              class="text-green-700 text-xs font-semibold border border-green-700 px-3 py-2 rounded-md w-fit justify-self-end max-xl:p-2"
                            >
                              <span class="max-xl:hidden">
                                Submit Feedback </span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                class="w-5 h-5 hidden max-xl:inline-block"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative overflow-x-auto rounded-md">
              <table
                class="w-full text-sm text-left text-gray-500 border-collapse dark:text-gray-400"
              >
                <thead class="text-sm text-gray-800 bg-white shadow-sm">
                  <tr>
                    <th scope="col" class="p-4 rounded-l-md">
                      <div class="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0"
                        /><label for="checkbox-all-search" class="sr-only"
                          >checkbox</label
                        >
                      </div>
                    </th>
                    <th scope="col" class="px-3 py-3">
                      <div class="flex items-center gap-1">
                        <span>Candidate Name</span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="w-4 h-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 cursor-pointer"
                      data-draggable="true"
                    >
                      <div class="flex items-center gap-1">
                        <span>Rating</span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="w-4 h-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 cursor-pointer"
                      data-draggable="true"
                    >
                      <div class="flex items-center gap-1">
                        <span>Stages</span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="w-4 h-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 cursor-pointer"
                      data-draggable="true"
                    >
                      <div class="flex items-center gap-1">
                        <span>Team</span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="w-4 h-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 cursor-pointer"
                      data-draggable="true"
                    >
                      <div class="flex items-center gap-1">
                        <span>Applied Date</span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="w-4 h-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 cursor-pointer"
                      data-draggable="true"
                    >
                      <div class="flex items-center gap-1">
                        <span>Owner</span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="w-4 h-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </th>
                    <th scope="col" class="px-3 py-3 rounded-r-md">
                      <div class="flex items-center gap-1">&nbsp;</div>
                    </th>
                  </tr>
                </thead>
                <tbody class="candidate-tbody">
                  <tr
                    class="text-base border-b bg-gray-50 max-xl:text-sm cursor-pointer"
                  >
                    <td class="w-4 p-4 rounded-tl-md" scope="row">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0"
                        /><label for="checkbox-table-search-1" class="sr-only"
                          >checkbox</label
                        >
                      </div>
                    </td>
                    <td
                      id="button-open"
                      scope="row"
                      class="flex items-center px-3 py-5 text-gray-900 w-[210px]"
                    >
                      <img
                        class="w-10 h-10 rounded-full"
                        src="/_nuxt/pp-1.7062269f.jpg"
                        alt="Jese image"
                      />
                      <p class="pl-3 truncate">Darlene Robertson</p>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <button
                          class="flex items-center gap-1 border px-2 py-[.05rem] rounded-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-4 h-4 text-gray-300"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            ></path></svg>
                          <span class="text-gray-500 text-sm">0.0</span>
                        </button>
                      </div>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <div class="flex items-center">
                          <button class="flex items-center gap-1">
                            <span class="text-black">Screening</span
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              class="w-4 h-4 font-semibold text-black"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div class="flex items-center gap-1 mt-1">
                          <div
                            class="bg-green-800 w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm"
                          >
                            1
                          </div>
                          <div
                            class="bg-green-800 w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm"
                          >
                            2
                          </div>
                          <div
                            class="flex items-center justify-center text-sm font-medium text-white bg-gray-200 rounded-sm w-7"
                          >
                            &nbsp;
                          </div>
                          <div
                            class="flex items-center justify-center text-sm font-medium text-white bg-gray-200 rounded-sm w-7"
                          >
                            &nbsp;
                          </div>
                          <div
                            class="flex items-center justify-center text-sm font-medium text-white bg-gray-200 rounded-sm w-7"
                          >
                            &nbsp;
                          </div>
                          <div
                            class="flex items-center justify-center text-sm font-medium text-white bg-gray-200 rounded-sm w-7"
                          >
                            &nbsp;
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <p class="text-black truncate">Junior UI Designer</p>
                        <p class="text-sm">Design Team</p>
                      </div>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <div class="text-black">15/02/2022</div>
                      </div>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <div class="flex items-center text-gray-900">
                          <img
                            class="w-10 h-10 rounded-full"
                            src="/_nuxt/pp-2.8fd5caa2.jpg"
                            alt="Jese image"
                          />
                          <p class="pl-3 truncate">Kristin Watson</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-3 py-4 rounded-tr-md">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr
                    class="text-base border-b bg-gray-50 max-xl:text-sm cursor-pointer"
                  >
                    <td class="w-4 p-4 rounded-tl-md" scope="row">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0"
                        /><label for="checkbox-table-search-1" class="sr-only"
                          >checkbox</label
                        >
                      </div>
                    </td>
                    <td
                      id="button-open"
                      scope="row"
                      class="flex items-center px-3 py-5 text-gray-900 w-[210px]"
                    >
                      <img
                        class="w-10 h-10 rounded-full"
                        src="/_nuxt/pp-3.e17e60da.jpg"
                        alt="Jese image"
                      />
                      <p class="pl-3 truncate">Cody Fisher</p>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <button
                          class="flex items-center gap-1 border px-2 py-[.05rem] rounded-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            class="w-4 h-4 text-yellow-300"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clip-rule="evenodd"
                            ></path></svg>
                          <span class="text-gray-800 font-semibold text-sm"
                            >2.0</span
                          >
                        </button>
                      </div>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <div class="flex items-center">
                          <button class="flex items-center gap-1">
                            <span class="text-black">New Applied</span
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              class="w-4 h-4 font-semibold text-black"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div class="flex items-center gap-1 mt-1">
                          <div
                            class="bg-emerald-400 w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm"
                          >
                            1
                          </div>
                          <div
                            class="flex items-center justify-center text-sm font-medium text-white bg-gray-200 rounded-sm w-7"
                          >
                            &nbsp;
                          </div>
                          <div
                            class="flex items-center justify-center text-sm font-medium text-white bg-gray-200 rounded-sm w-7"
                          >
                            &nbsp;
                          </div>
                          <div
                            class="flex items-center justify-center text-sm font-medium text-white bg-gray-200 rounded-sm w-7"
                          >
                            &nbsp;
                          </div>
                          <div
                            class="flex items-center justify-center text-sm font-medium text-white bg-gray-200 rounded-sm w-7"
                          >
                            &nbsp;
                          </div>
                          <div
                            class="flex items-center justify-center text-sm font-medium text-white bg-gray-200 rounded-sm w-7"
                          >
                            &nbsp;
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <p class="text-black truncate">Junior UX Designer</p>
                        <p class="text-sm">Design Team</p>
                      </div>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <div class="text-black">12/01/2023</div>
                      </div>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <div class="flex items-center text-gray-900">
                          <img
                            class="w-10 h-10 rounded-full"
                            src="/_nuxt/pp-4.03f55394.jpg"
                            alt="Jese image"
                          />
                          <p class="pl-3 truncate">Albert Flores</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-3 py-4 rounded-tr-md">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr
                    class="text-base border-b bg-gray-50 max-xl:text-sm cursor-pointer"
                  >
                    <td class="w-4 p-4 rounded-tl-md" scope="row">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0"
                        /><label for="checkbox-table-search-1" class="sr-only"
                          >checkbox</label
                        >
                      </div>
                    </td>
                    <td
                      id="button-open"
                      scope="row"
                      class="flex items-center px-3 py-5 text-gray-900 w-[210px]"
                    >
                      <img
                        class="w-10 h-10 rounded-full"
                        src="/_nuxt/pp-4.03f55394.jpg"
                        alt="Jese image"
                      />
                      <p class="pl-3 truncate">Jenny Wilson</p>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <button
                          class="flex items-center gap-1 border px-2 py-[.05rem] rounded-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            class="w-4 h-4 text-yellow-300"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clip-rule="evenodd"
                            ></path></svg>
                          <span class="text-gray-800 font-semibold text-sm"
                            >3.0</span
                          >
                        </button>
                      </div>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <div class="flex items-center">
                          <button class="flex items-center gap-1">
                            <span class="text-black">Design Challange</span
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              class="w-4 h-4 font-semibold text-black"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div class="flex items-center gap-1 mt-1">
                          <div
                            class="bg-orange-400 w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm"
                          >
                            1
                          </div>
                          <div
                            class="bg-orange-400 w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm"
                          >
                            2
                          </div>
                          <div
                            class="bg-orange-400 w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm"
                          >
                            3
                          </div>
                          <div
                            class="flex items-center justify-center text-sm font-medium text-white bg-gray-200 rounded-sm w-7"
                          >
                            &nbsp;
                          </div>
                          <div
                            class="flex items-center justify-center text-sm font-medium text-white bg-gray-200 rounded-sm w-7"
                          >
                            &nbsp;
                          </div>
                          <div
                            class="flex items-center justify-center text-sm font-medium text-white bg-gray-200 rounded-sm w-7"
                          >
                            &nbsp;
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <p class="text-black truncate">UX Researcher</p>
                        <p class="text-sm">Design Team</p>
                      </div>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <div class="text-black">15/12/2022</div>
                      </div>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <div class="flex items-center text-gray-900">
                          <img
                            class="w-10 h-10 rounded-full"
                            src="/_nuxt/pp-5.63b9ea41.jpg"
                            alt="Jese image"
                          />
                          <p class="pl-3 truncate">Dianne Russell</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-3 py-4 rounded-tr-md">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr
                    class="text-base border-b bg-gray-50 max-xl:text-sm cursor-pointer"
                  >
                    <td class="w-4 p-4 rounded-tl-md" scope="row">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0"
                        /><label for="checkbox-table-search-1" class="sr-only"
                          >checkbox</label
                        >
                      </div>
                    </td>
                    <td
                      id="button-open"
                      scope="row"
                      class="flex items-center px-3 py-5 text-gray-900 w-[210px]"
                    >
                      <img
                        class="w-10 h-10 rounded-full"
                        src="/_nuxt/pp-5.63b9ea41.jpg"
                        alt="Jese image"
                      />
                      <p class="pl-3 truncate">Diana Jane</p>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <button
                          class="flex items-center gap-1 border px-2 py-[.05rem] rounded-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            class="w-4 h-4 text-yellow-300"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clip-rule="evenodd"
                            ></path></svg>
                          <span class="text-gray-800 font-semibold text-sm"
                            >4.0</span
                          >
                        </button>
                      </div>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <div class="flex items-center">
                          <button class="flex items-center gap-1">
                            <span class="text-black">Interview</span
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              class="w-4 h-4 font-semibold text-black"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div class="flex items-center gap-1 mt-1">
                          <div
                            class="bg-violet-400 w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm"
                          >
                            1
                          </div>
                          <div
                            class="bg-violet-400 w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm"
                          >
                            2
                          </div>
                          <div
                            class="bg-violet-400 w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm"
                          >
                            3
                          </div>
                          <div
                            class="bg-violet-400 w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm"
                          >
                            4
                          </div>
                          <div
                            class="flex items-center justify-center text-sm font-medium text-white bg-gray-200 rounded-sm w-7"
                          >
                            &nbsp;
                          </div>
                          <div
                            class="flex items-center justify-center text-sm font-medium text-white bg-gray-200 rounded-sm w-7"
                          >
                            &nbsp;
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <p class="text-black truncate">UX Researcher</p>
                        <p class="text-sm">Developer Team</p>
                      </div>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <div class="text-black">15/02/2023</div>
                      </div>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <div class="flex items-center text-gray-900">
                          <img
                            class="w-10 h-10 rounded-full"
                            src="/_nuxt/pp-2.8fd5caa2.jpg"
                            alt="Jese image"
                          />
                          <p class="pl-3 truncate">Kristin Watson</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-3 py-4 rounded-tr-md">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <footer class="flex items-center justify-between py-3 mt-auto mb-2">
              <div class="flex items-center gap-4">
                <span
                  class="text-base text-gray-500 max-xl:text-sm max-md:hidden"
                  >View</span
                ><button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="text-gray-600 bg-white hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center max-xl:px-3 max-xl:py-2"
                  type="button"
                >
                  10
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="w-4 h-4 ml-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdown"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >1</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >2</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >3</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >4</a
                      >
                    </li>
                  </ul>
                </div>
                <span
                  class="text-base text-gray-500 max-xl:text-sm max-lg:hidden"
                  >Candidates per page</span
                >
              </div>
              <nav aria-label="Page navigation example">
                <ul class="inline-flex items-center gap-2 -space-x-px">
                  <li>
                    <div class="flex items-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        class="w-5 h-5 max-xl:w-4 max-xl:h-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                          clip-rule="evenodd"
                        ></path></svg>
                      <a
                        href="#"
                        class="py-2 pl-1 pr-2 ml-0 text-base leading-tight rounded-l-lg hover:text-gray-700 max-xl:text-sm"
                        >Prev</a
                      >
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="px-2 py-1 font-medium leading-tight bg-yellow-300 rounded-full hover:bg-yellow-400 max-xl:text-sm"
                      >1</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
                      >2</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
                      >3</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
                      >...</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
                      >24</a
                    >
                  </li>
                  <li>
                    <div class="flex items-center text-gray-500">
                      <a
                        href="#"
                        class="py-2 pl-1 pr-2 ml-0 text-base leading-tight rounded-l-lg hover:text-gray-700 max-xl:text-sm"
                        >Next</a
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        class="w-5 h-5 max-xl:w-4 max-xl:h-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </li>
                </ul>
              </nav>
            </footer>
          </div>
        </main>
        <div class="taskmenu absolute right-0 top-0 h-screen max-lg:hidden">
          <aside class="bg-white h-full shadow-sm px-3 max-xl:px-2">
            <div
              class="py-6 border-b flex items-center justify-center max-xl:py-4"
            >
              <button
                class="flex justify-center items-center bg-blue-500 p-2 rounded-full border-8 border-blue-100 max-xl:p-1 max-xl:border-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6 text-white max-xl:w-5 max-xl:h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="py-6 border-b flex items-center justify-center max-xl:py-4"
            >
              <button
                class="flex justify-center items-center bg-orange-400 p-2 rounded-full border-8 border-orange-100 max-xl:p-1 max-xl:border-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6 text-white max-xl:w-5 max-xl:h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="py-6 flex items-center justify-center max-xl:py-4">
              <button
                class="flex justify-center items-center bg-teal-400 p-2 rounded-full border-8 border-teal-100 max-xl:p-1 max-xl:border-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6 text-white max-xl:w-5 max-xl:h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="py-6 flex items-center justify-center max-xl:py-4">
              <button
                class="flex justify-center items-center p-2 rounded-full hover:bg-gray-300 max-xl:p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="w-7 h-7 text-gray-600 max-xl:w-6 max-xl:h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  ></path>
                </svg>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import { 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initTabs, 
 } from 'flowbite'

 onMounted(() => {
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initTabs();
})
</script>

<style></style>
