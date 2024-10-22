import { PhoneComponent, RippleBtn, Vortex } from "../components";
import { Link } from "react-router-dom";
import { useEffect, useState, memo } from "react";

const Phone = () => {
  const [messages, setMessages] = useState();
  useEffect(() => {
    fetch("api/getposts")
      .then((res) => res.text())
      .then((data) => setMessages(JSON.parse(data)));
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Vortex backgroundColor="black" className="min-h-screen">
        <Link to={"/hub"} className="absolute pl-4 pt-2">
          <RippleBtn
            className={
              "cursor-pointer rounded-xl border border-purple-600 bg-opacity-0 px-4 py-2 text-center text-xl text-purple-600 backdrop-blur-sm backdrop-filter"
            }
            rippleColor={"bg-purple-300"}
          >
            Go Back
          </RippleBtn>
        </Link>

        <h1 className="pt-1 text-center text-4xl font-thin text-purple-600">
          Comment Section
        </h1>
        <div className="flex w-full">
          <div className="flex h-screen flex-1 items-center justify-center">
            <PhoneComponent className={"h-[90%]"}>
              <div className="mt-6 text-3xl text-blue-600">Scroll down</div>
              <div className="scrollbar-color flex flex-col overflow-y-scroll py-8">
                {messages &&
                  messages.map((message, key) => (
                    <div key={key} className="chat chat-start last:mb-12">
                      <div className="chat-header text-blue-900/80">
                        {message.username}
                      </div>
                      <div
                        className={`chat-bubble ${key % 2 === 0 ? "bg-blue-500" : "bg-blue-600"} min-w-64 text-white/90`}
                      >
                        {message.message}
                      </div>
                    </div>
                  ))}
                <div className="divider divider-vertical text-blue-900/80">
                  Write a comment
                </div>
                <form
                  action="api/create"
                  method="POST"
                  className="flex flex-col items-center"
                >
                  <label
                    htmlFor="username"
                    className="input input-bordered mb-4 flex w-[80%] items-center gap-2 outline outline-blue-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                      type="text"
                      className=""
                      id="username"
                      name="username"
                      placeholder="Username"
                    />
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="textarea textarea-bordered textarea-lg mb-4 w-[80%] outline outline-blue-500"
                    placeholder="Leave a positive message"
                  ></textarea>
                  <input
                    type="submit"
                    className="input w-[80%] text-blue-500 outline outline-blue-500"
                    value={"Send"}
                  />
                </form>
                <div className="mb-14"></div>
              </div>
            </PhoneComponent>
          </div>
        </div>
      </Vortex>
    </div>
  );
};
export default memo(Phone);
