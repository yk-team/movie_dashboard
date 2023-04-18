import React from "react";

export const NavBarLeft = () => {
  return (
    <>
      <div className="flex w-20 bg-gray-200 items-left justify-left h-screen justify-between  flex-col">
        <div className=" flex flex-col items-center basis-3/4 bg-gray-400 ">
          <img
            className="p-1"
            src="https://img.freepik.com/premium-vector/cinema-movie-logo-with-gradient-background-template_502990-937.jpg?w=740"
            alt="logo"
          />
          <div className="p-2 items-center gap-10 flex flex-col">
            <div>Opt1</div>
            <div>Opt2</div>
            <div>Opt3</div>
          </div>
        </div>
        <div className="flex flex-col items-center basis-1/4 justify-end pb-8 p-3">
          <img
            className="rounded-full	"
            src="https://img.freepik.com/premium-vector/cinema-movie-logo-with-gradient-background-template_502990-937.jpg?w=740"
            alt="logo"
          />
          <a href="">Login</a>
        </div>
      </div>
    </>
  );
};
