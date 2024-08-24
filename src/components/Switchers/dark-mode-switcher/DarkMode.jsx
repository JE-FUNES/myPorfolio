// front-end developer: Julia Funes - juliafunesaragon@gmail.com 

import { useRecoilValue, useSetRecoilState } from "recoil";
import { darkModeValue, darkMode as darkModeStore } from "../../../stores/dark-mode.js";
import dom from "@left4code/tw-starter/dist/js/dom";
import { Lucide } from "../../../utils/index.js";
import classnames from "classnames";

function DarkMode() {
  const darkMode = useRecoilValue(darkModeStore);
  const setDarkModeValue = useSetRecoilState(darkModeValue);

  const setDarkModeClass = () => {
    darkMode ? dom("html").addClass("dark") : dom("html").removeClass("dark");
  };

  const switchMode = () => {
    setDarkModeValue(() => !darkMode);
    localStorage.setItem("darkMode", !darkMode);
    setDarkModeClass();
  };

  setDarkModeClass();

  return (
    <>
      {/* BEGIN: Dark Mode Switcher */}
      <div
        className="dark-mode-switcher cursor-pointer right-0  w-30 h-8 flex items-center justify-center z-50 mr-1 ml-3"
        onClick={switchMode}
      >
        <div className="mr-2  dark:text-slate-200">
          {darkMode ? (
            <Lucide icon="Moon" className="w-5 h-5 text-secondary font-bold" />
          ) : (
            <Lucide icon="Sun" className="w-5 h-5 text-secondary font-bold" />
          )
          }
        </div>
        <div
          className={classnames({
            "dark-mode-switcher__toggle border": true,
            "dark-mode-switcher__toggle--active": darkMode,
          })}
        ></div>
      </div>
      {/* END: Dark Mode Switcher */}
    </>
  );
}

export default DarkMode;
