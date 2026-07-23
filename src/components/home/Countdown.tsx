import React, { useEffect, useState } from "react";
import type { ITimeLeft, ICountdownProps } from "../../types/discount";

interface CountdownBoxProps {
  value: string;
  label: string;
}

// Sub-component hiển thị 1 ô đếm ngược tái sử dụng
const CountdownBox: React.FC<CountdownBoxProps> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-white rounded-xl flex items-center justify-center text-sm md:text-lg font-bold shadow-sm">
      {value}
    </div>
    <span className="text-[11px] text-gray-500 font-medium mt-1">{label}</span>
  </div>
);

const Countdown: React.FC<ICountdownProps> = ({ targetDate }) => {
  const [endTime] = useState<number>(() => {
    if (targetDate) return new Date(targetDate).getTime();
    return Date.now() + (2 * 24 * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 59) * 1000;
  });

  const [timeLeft, setTimeLeft] = useState<ITimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const difference = endTime - Date.now();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  const timeItems = [
    { value: timeLeft.days, label: "Ngày" },
    { value: timeLeft.hours, label: "Giờ" },
    { value: timeLeft.minutes, label: "Phút" },
    { value: timeLeft.seconds, label: "Giây" },
  ];

  return (
    <div className="flex items-center gap-1.5 md:gap-2.5 text-primary font-bold">
      {timeItems.map((item, index) => (
        <React.Fragment key={item.label}>
          <CountdownBox value={formatNumber(item.value)} label={item.label} />
          {index < timeItems.length - 1 && (
            <span className="text-base md:text-lg font-bold text-primary -mt-5">
              :
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Countdown;
