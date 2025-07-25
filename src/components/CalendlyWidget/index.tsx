"use client";
import { useEffect } from "react";

type Props = {
  url: string;
  height?: string;
};

const CalendlyWidget = ({ url, height = "800px" }: Props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full"
      data-url={url}
      style={{ height }}
    />
  );
};

export default CalendlyWidget;
