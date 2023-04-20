import React from "react";

export const NavBarLeft = () => {
  return (
    <>
      <div className="flex rounded-md w-20  border-slate-200 border items-left justify-left h-screen justify-between flex-col hover:bg-sky-500/75">
        <div className="flex flex-col items-center basis-3/4 ">
          <a href="/home">
            <div className="mt-2 border-slate-500 rounded-md border hover:opacity-80 hover:border-metal">
              <img
                className="w-11 border-[--color-text] rounded-md border-4 "
                src="https://images-platform.99static.com//5fVeexjJRN_kWQ709H5m_3-LniY=/0x0:1024x1024/fit-in/590x590/projects-files/30/3049/304958/43fd7dbe-c8f4-4337-b066-934b7827039b.jpg"
                alt="logo"
              />
            </div>
          </a>
          <div className="p-2 mt-10 items-center gap-10 flex flex-col">
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
          <a className="hover:text-red-500" href="/login">
            Login
          </a>
        </div>
      </div>
    </>
  );
};
