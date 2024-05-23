'use client'
import Questions from "@/components/quiz/Questions";
import { QuestionModel, QuestionRequestResult } from "@/models/question-model";
import { Suspense, useState } from "react";

type QuizState = "initial" | "loading" | "error" | "answering" | "finish";

export default function Home() {
  const [theme, setTheme] = useState<string>();
  const [questions, setQuestions] = useState<QuestionModel[]>();
  const [message, setMessage] = useState<string | undefined>();
  const [quizState, setQuizState] = useState<QuizState>("initial");
  const [showAnswers, setShowAnswers] = useState<boolean | undefined>();

  return (<>
    <main className="flex flex-col items-center justify-between p-24 rounded-md">
      <div className="w-full max-w-screen-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 rounded-md">
          <div className="mb-4 ">
            <label className="block text-gray-700 text-md font-bold mb-2 rounded-full ">
              Enter any theme and we will give you a trivia quiz about it (anything!):


              <input className="shadow appearance-none border rounded-full w-full py-3 px-3 pt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-2 border-black"
                id="theme" type="text" placeholder="Theme of the question"
                onChange={(e) => setTheme(e.target.value)} />
            </label>
          </div>

          {
            quizState === "initial" &&
            <div className="flex items-center justify-between">
              <button
                className=" bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline border-2 border-black"
                type="button"
                onClick={() => loadQuestions()}>
                Generate question
              </button>
            </div>
          }
        </form>
        {quizState === "loading" && <p>Loading...</p>}
      </div>

      {theme && questions && (quizState === "answering" || quizState === "finish") &&
        <Questions questions={questions} showAnswers={quizState === "finish"}></Questions>
      }
      {message && <p>{message}</p>}
      {
        quizState !== "initial" && quizState !== "loading" &&
        <div className="flex flex-row gap-2">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setQuizState("finish")}
            disabled={showAnswers}
          >
            Check
          </button>
          <input
            type="reset"
            className="bg-transparent border-gray-100 border-1 border-solid text-white hover:bg-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setQuizState("initial")}
            value="Restart"
          />
        </div>
      }
    </main>
    <footer></footer>
  </>);

  function loadQuestions() {
    setQuizState("loading");
    fetch(`/api/question/${theme}`, {
      method: 'GET', headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        Connection: "keep-alive",
      }
    })
      .then(response => response.json())
      .then((data: QuestionRequestResult) => {
        if (data.isOk) {
          setQuizState("answering");
          setQuestions(data.questions);
        } else {
          setQuizState("error");
          setMessage(data.message);
        }
      });
  }
}
