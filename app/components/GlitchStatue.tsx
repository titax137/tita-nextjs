"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function GlitchStatue() {
  const rRef = useRef<HTMLDivElement>(null);
  const bRef = useRef<HTMLDivElement>(null);

  return (
    <div className="statue-col">
      {/* Glitch statue */}
      <div className="glitch-wrap">
        {/* Base image */}
        <Image
          src="/statue.jpg"
          alt="Data statue"
          width={560}
          height={560}
          className="glitch-base"
          priority
        />

        {/* Red channel glitch layer */}
        <div className="glitch-r">
          <Image
            src="/statue.jpg"
            alt=""
            width={560}
            height={560}
            className="glitch-layer-img"
            aria-hidden
          />
        </div>

        {/* Blue channel glitch layer */}
        <div className="glitch-b">
          <Image
            src="/statue.jpg"
            alt=""
            width={560}
            height={560}
            className="glitch-layer-img"
            aria-hidden
          />
        </div>

        {/* Slice bars */}
        <div className="sl sl1" />
        <div className="sl sl2" />
        <div className="sl sl3" />
        <div className="sl sl4" />

        {/* CRT scanlines overlay */}
        <div className="statue-scan" />
      </div>

      {/* Data panel below statue */}
      <Image
        src="/panel.jpg"
        alt="Market data panel"
        width={680}
        height={439}
        className="data-panel-img"
      />
    </div>
  );
}
