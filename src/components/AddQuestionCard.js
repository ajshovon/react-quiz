const AddQuestionCard = (props) => {
  return <><div className="p-4 container mx-auto mt-8 bg-white rounded-lg border shadow-md sm:p-8">
  <label
    htmlFor="message"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
  >
    Question {props.id+1}:
  </label>
  <textarea
    id="message"
    rows="3"
    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-800 focus:border-gray-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-800 dark:focus:border-gray-800"
    placeholder="Type your Question"
  ></textarea>

  {/* 4 Option */}
  <div className="grid mt-6 gap-6 items-end mb-6 sm:grid-cols-2">
    <div className="relative">
      <input
        type="text"
        id="default_outlined"
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
        placeholder=" "
      />
      <label
        htmlFor="default_outlined"
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        Option 1
      </label>
    </div>
    <div className="relative">
      <input
        type="text"
        id="default_outlined"
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
        placeholder=" "
      />
      <label
        htmlFor="default_outlined"
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        Option 2
      </label>
    </div>
    <div className="relative">
      <input
        type="text"
        id="default_outlined"
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
        placeholder=" "
      />
      <label
        htmlFor="default_outlined"
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        Option 3
      </label>
    </div>
    <div className="relative">
      <input
        type="text"
        id="default_outlined"
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
        placeholder=" "
      />
      <label
        htmlFor="default_outlined"
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        Option 4
      </label>
    </div>
  </div>

  {/* Correct Option  */}
  <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
    Correct Option
  </h3>
  <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
      <div className="flex items-center pl-3">
        <input
          id="horizontal-list-radio-license"
          type="radio"
          value=""
          name="list-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          htmlFor="horizontal-list-radio-license"
          className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Option 1{' '}
        </label>
      </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
      <div className="flex items-center pl-3">
        <input
          id="horizontal-list-radio-id"
          type="radio"
          value=""
          name="list-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          htmlFor="horizontal-list-radio-id"
          className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Option 2
        </label>
      </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
      <div className="flex items-center pl-3">
        <input
          id="horizontal-list-radio-millitary"
          type="radio"
          value=""
          name="list-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          htmlFor="horizontal-list-radio-millitary"
          className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Option 3
        </label>
      </div>
    </li>
    <li className="w-full dark:border-gray-600">
      <div className="flex items-center pl-3">
        <input
          id="horizontal-list-radio-passport"
          type="radio"
          value=""
          name="list-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          htmlFor="horizontal-list-radio-passport"
          className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Option 4
        </label>
      </div>
    </li>
  </ul>
</div></>;
};

export default AddQuestionCard;
