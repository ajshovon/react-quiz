import AddQuestionCard from "../components/AddQuestionCard";

import React, { useState } from "react";

const CreateQuiz = () => {
  const [question, addQuestion] = useState([]);

  const addQuestionHandler = () => {
    addQuestion(question.concat(<AddQuestionCard key={question.length} id={question.length}/>));
  };

  return (
    <>
      <div className="p-4 container mx-auto mt-8 bg-white rounded-lg border shadow-md sm:p-8">
        {/* Title */}
        <div className="mb-6">
          <label
            html="large-input"
            className="block mb-2 text-lg md:text-xl font-medium text-gray-900 dark:text-gray-300"
          >
            Quiz Title
          </label>
          <input
            type="text"
            id="large-input"
            className="block p-4 w-full text-gray-900 bg-gray-50 font-semibold rounded-lg border text-xl md:text-3xl border-gray-300 focus:ring-gray-800 focus:border-gray-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-800 dark:focus:border-gray-800"
          placeholder="Enter Quiz Title Here"/>
        </div>
      </div>

      {/* Quiz Part */}
      {question}

      {/* Add Button */}
      <div className="text-center">
        <button
          type="button"
          className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={addQuestionHandler}
        >
          Add Question
        </button>
      </div>
    </>
  );
};

export default CreateQuiz;
