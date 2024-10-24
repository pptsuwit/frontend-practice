"use client";
import { useTheme } from "next-themes";
import { MoonFilled, SunFilled } from "@ant-design/icons";
import useHasMounted from "@/components/useHasMounted";
export default function Theme() {
  const { setTheme, theme } = useTheme();
  const hasMounted = useHasMounted();

  return (
    <div className="flex justify-end">
      {hasMounted && theme === "dark" ? (
        <div>
          <button
            className="rounded-full neon__purple hover:neon__light__btn "
            onClick={() => setTheme("light")}
          >
            <MoonFilled className="p-2 text-[18px] text-purple-500  hover:text-yellow-500  icon-rotate-270" />
          </button>
        </div>
      ) : (
        <div>
          <button
            className="rounded-full 
            neumorphism-flat
            hover:none__neumorphism hover:neon__dark__btn hover:dark__background"
            onClick={() => setTheme("dark")}
          >
            <SunFilled className="p-2 text-[18px] text-yellow-400 hover:text-purple-500 icon-rotate-270" />
          </button>
        </div>
      )}
    </div>
  );
}
