"use client";

import { CountdownProps, TimePicker, TimePickerProps } from "antd";
import { useEffect, useState } from "react";
import { Statistic } from "antd";
const { Countdown } = Statistic;
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export default function Page() {
  const [seconds, setSeconds] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minute > 0) {
            setSeconds(59);
            setMinute(minute - 1);
          } else {
            if (hour > 0) {
              setSeconds(59);
              setMinute(59);
              setHour(hour - 1);
            } else {
              setSeconds(0);
              setMinute(0);
              setHour(0);
              setPause(true);
            }
          }
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  });
  const onChange: TimePickerProps["onChange"] = (time) => {
    const h = time?.hour() ?? 0; //* 1000 * 60 * 60
    const m = time?.minute() ?? 0; //* 1000 * 60
    const s = time?.second() ?? 0; //* 1000
    setHour(h);
    setMinute(m);
    setSeconds(s);
    setPause(true);
  };
  const start = () => {
    setPause(false);
  };
  const pauseTime = () => {
    setPause(true);
  };
  const resetTime = () => {
    setSeconds(0);
    setMinute(0);
    setHour(0);
    setPause(true);
  };
  return (
    <div className="grid justify-center text-center gap-y-8 p-12">
      <p className="text-center text-[60px]">
        {hour.toString().padStart(2, "0")}:{minute.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>

      <TimePicker
        changeOnScroll
        onChange={onChange}
        needConfirm
        showNow={false}
        size="large"
        value={dayjs().set("hour", hour).set("minute", minute).set("second", seconds)}
      />

      <div className="flex justify-center gap-4">
        <button
          className="text-green-500 border border-green-500 active:bg-green-500 active:text-white rounded-md shadow-sm px-2 "
          onClick={start}
        >
          Start
        </button>
        <button
          className="text-red-500 border border-red-500 active:bg-red-500 active:text-white rounded-md shadow-sm px-2 "
          onClick={pauseTime}
        >
          Stop
        </button>

        <button
          className="text-blue-500 border border-blue-500 active:bg-blue-500 active:text-white rounded-md shadow-sm px-2"
          onClick={resetTime}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
