"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * end));

      if (current >= steps) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [started, end, duration]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}

const metrics = [
  { value: 4, suffix: "", label: "Products in Development" },
  { value: 2, suffix: "", label: "Active Companies" },
  { value: 30, suffix: "+", label: "Engineers & Builders" },
  { value: 100, suffix: "%", label: "Internally Built" },
];

export default function Metrics() {
  const ref = useScrollReveal();

  return (
    <section className="py-32 lg:py-40 bg-surface-elevated" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="reveal text-[12px] font-medium text-muted tracking-[0.2em] uppercase">
            By the Numbers
          </span>
          <h2 className="reveal mt-4 text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
            Quietly building momentum
          </h2>
        </div>

        <div className="reveal mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-surface p-8 lg:p-10 text-center"
            >
              <div className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-foreground">
                <Counter end={metric.value} suffix={metric.suffix} />
              </div>
              <p className="mt-3 text-[13px] text-muted font-medium tracking-wide">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
