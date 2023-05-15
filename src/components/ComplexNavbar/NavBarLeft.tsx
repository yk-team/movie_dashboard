import React, { useEffect, useState } from "react";

export const NavBarLeft = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Симуляція завантаження даних або дій
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Приблизний час завантаження в мілісекундах
  }, []);

  return (
    <>
      <div className="flex rounded-md w-20 border-slate-600 border items-left justify-left h-screen justify-between flex-col">
        <div className="flex flex-col items-center basis-3/4 ">
          <a href="/home">
            <div className="mt-2 border-slate-500 rounded-md border hover:opacity-80 hover:border-light-grey active:opacity-50 ">
              <img
                className="w-11 border-[--color-text] rounded-md border-4"
                src="https://images-platform.99static.com//5fVeexjJRN_kWQ709H5m_3-LniY=/0x0:1024x1024/fit-in/590x590/projects-files/30/3049/304958/43fd7dbe-c8f4-4337-b066-934b7827039b.jpg"
                alt="logo"
              />
            </div>
          </a>
          <div className="p-2 mt-10 items-center gap-5 flex flex-col">
            <a className="" href="/option1">
              <div className="flex flex-col justify-center items-center hover:opacity-75 w-8 active:opacity-60 ">
                <img src="../../img/icon-search.png"></img>
                <span className="text-xs mt-2">search</span>
              </div>
            </a>
            <a href="/option2">
              <div className="flex flex-col justify-center items-center hover:opacity-75 w-12 active:opacity-60 ">
                <img src="../../img/icon-friends.png"></img>
                <span className="text-xs mb-3">friends</span>
              </div>
            </a>
            <a href="/option3">
              <div className="flex flex-col justify-center items-center hover:opacity-75 w-6 active:opacity-60 ">
                <img src="../../img/icon-playlist.png"></img>
                <span className="text-xs mt-2">playlist</span>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center basis-1/4 justify-end gap-2 mb-8">
          <a href="/help">
            <div className="flex flex-col justify-center items-center opacity-70 hover:opacity-60 w-6 active:opacity-50 mb-5">
              <img src="../../img/icon-help.png"></img>
            </div>
          </a>
          <a href="/settings">
            <div className="flex flex-col justify-center items-center opacity-70 hover:opacity-60 w-6 active:opacity-50 mb-10">
              <img src="../../img/icon-settings.png"></img>
            </div>
          </a>
          <div className="w-full h-px bg-light-grey opacity-50 "></div>
          <a
            className="border rounded-full border-slate-500 hover:opacity-80 hover:border-light-grey active:opacity-50"
            href="/userName"
          >
            <img
              className="w-12 rounded-full border-[--color-text] border "
              src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
              alt="logo"
            />
          </a>
        </div>
      </div>
    </>
  );
};
