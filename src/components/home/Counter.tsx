import { useState, useEffect } from "react";

interface CounterProps {
  total: number;
  title: string;
}

const Counter = ({ total, title }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Thời gian chạy hiệu ứng 2 giây
    const steps = 60;
    const increment = total / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= total) {
        setCount(total);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [total]);

  return (
    <div className="w-full flex flex-col items-center justify-center p-6 bg-[#f5ebe6] border-b-4 border-primary rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <p className="text-[32px] md:text-[40px] font-bold text-primary leading-none mb-2">
        {count.toLocaleString()}+
      </p>
      <p className="text-[14px] md:text-[16px] text-center text-[#555] font-medium leading-snug">
        {title}
      </p>
    </div>
  );
};

export default Counter;
