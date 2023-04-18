import React from "react";

export const NavBarLeft = () => {
  return (
    <>
      <div className="flex w-20 bg-gray-200 items-left justify-left h-screen justify-between  flex-col">
        <div className=" flex flex-col items-center basis-3/4 ">
          <a href="/home">
            <img
              className="p-1"
              src="https://img.freepik.com/premium-vector/cinema-movie-logo-with-gradient-background-template_502990-937.jpg?w=740"
              alt="logo"
            />
          </a>
          <div className="p-2 items-center gap-10 flex flex-col">
            <a className="" href="/option1">
              <div className="hover:text-red-500 ">Opt1</div>
            </a>
            <a href="/option2">
              <div className="hover:text-red-500">Opt2</div>
            </a>
            <a href="/option3">
              <div className="hover:text-red-500">Opt3</div>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center basis-1/4 justify-end pb-8 p-3 gap-2">
          <a href="/userName">
            <img
              className="rounded-full	"
              src="https://img.freepik.com/premium-vector/cinema-movie-logo-with-gradient-background-template_502990-937.jpg?w=740"
              alt="logo"
            />
          </a>
          <a className="hover:text-red-500" href="/login">Login</a>
        </div>
      </div>
    </>
  );
};
