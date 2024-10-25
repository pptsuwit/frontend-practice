"use client";

import Theme from "@/components/Theme";

import { GithubFilled, MailFilled, FilePdfFilled } from "@ant-design/icons";
export default function Page() {
  return (
    <div className="pt-12">
      <div className="__container">
        <div className="grid__container">
          <div className="introduce neumorphism-flat dark:none__neumorphism dark:neon__purple">
            <div className="p-2">
              <Theme />
              <div>
                <div className="flex flex-col items-center gap-6 p-3 text-center ">
                  <a
                    href="https://github.com/pptsuwit"
                    className="neumorphism-pressed dark:neon__purple dark:hover:neon__green icon-scale !rounded-full !p-1"
                  >
                    <img
                      className="object-cover w-14 rounded-full "
                      src="/images/avatar.ico"
                      alt="avatar"
                    />
                  </a>
                  <a
                    href="https://github.com/pptsuwit"
                    className="text-2xl text__default dark:!neon__text__purple"
                  >
                    github.com/pptsuwit
                  </a>
                </div>
              </div>
              <p className="text__default dark:!neon__text__purple">
                Hi, I'm toey, a web developer. I love coding and creating user-friendly web apps.
                Always excited to learn and take on new challenges!
              </p>

              <div className="flex justify-end items-center gap-4 pt-6">
                <a href="https://github.com/pptsuwit/" target="_blank" rel="noopener noreferrer">
                  <GithubFilled
                    className="text-[22px] icon-scale p-1.5
                              neumorphism-convex text-zinc-400 hover:text-black
                              dark:none__neumorphism dark:none__neumorphism dark:neon__purple 
                              dark:hover:text-white dark:hover:neon__green"
                  />
                </a>
                <a href="mailto:pptsuwit@gmail.com" target="_blank" rel="noopener noreferrer">
                  <MailFilled
                    className="text-[22px] icon-scale p-1.5
                              neumorphism-convex text-zinc-400 hover:text-red-500
                              dark:none__neumorphism dark:neon__purple  
                              dark:hover:neon__turquoise"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
