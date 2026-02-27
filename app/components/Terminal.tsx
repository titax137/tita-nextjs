"use client";

import { useEffect, useRef, useState } from "react";

const lines = [
  { t: "> tita@dev:~$ python analyze.py --dataset superstore.csv", c: "" },
  { t: "> Loading dataset... 9,994 rows x 21 columns [OK]", c: "dim" },
  { t: "> Running RFM segmentation... clusters=5 · silhouette=0.68", c: "acc" },
  { t: "> Champion customers: 18.4% · At-risk: 22.1%", c: "" },
  { t: "> Insight: Top 20% customers drive 61% of revenue", c: "acc" },
  { t: "> tita@dev:~$ python churn_model.py --optimize recall", c: "" },
  { t: "> Training XGBoost... recall=0.91 · precision=0.84", c: "dim" },
  { t: "> False negatives reduced by 34% vs baseline", c: "acc" },
  { t: "> tita@dev:~$ jupyter notebook messi_analysis.ipynb", c: "" },
  { t: "> Parsing StatsBomb event data · 688 shots analyzed", c: "blue" },
  { t: "> xG model: Messi outperformed expectation by +3.2 goals", c: "acc" },
  { t: "> Generating dashboard... exporting to Tableau [DONE]", c: "dim" },
  { t: "> All analyses complete · 9 projects · 0 errors ■", c: "" },
];

export default function Terminal() {
  const [visible, setVisible] = useState<{ t: string; c: string }[]>([]);
  const idxRef = useRef(0);

  useEffect(() => {
    function addLine() {
      const line = lines[idxRef.current % lines.length];
      setVisible((prev) => {
        const next = [...prev, line];
        return next.length > 9 ? next.slice(next.length - 9) : next;
      });
      idxRef.current++;
      setTimeout(addLine, 800 + Math.random() * 700);
    }
    const t = setTimeout(addLine, 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-dots">● ● ●</div>
      {visible.map((l, i) => (
        <div
          key={i}
          className={`t-line${l.c ? ` t-${l.c}` : ""}`}
        >
          {l.t}
        </div>
      ))}
      <span className="cursor" />
    </div>
  );
}
