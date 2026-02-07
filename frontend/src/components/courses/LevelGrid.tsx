"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import common from "@/data/tr/common.json";
import courses from "@/data/tr/courses.json";

export default function LevelGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {courses.levels.map((level) => {
        const isExpanded = expandedId === level.id;
        return (
          <Card key={level.id} className="overflow-hidden">
            <button
              type="button"
              onClick={() => setExpandedId(isExpanded ? null : level.id)}
              className="flex w-full items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {level.level}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-text-dark">
                    {level.name}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {level.duration} · {level.lessonsPerWeek}
                  </p>
                </div>
              </div>
              <svg
                className={`h-5 w-5 text-text-muted transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`grid transition-all duration-300 ${
                isExpanded ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="mb-4 text-text-muted">{level.description}</p>

                <h4 className="font-heading mb-2 font-semibold text-text-dark">
                  {common.courses.learnTitle}
                </h4>
                <ul className="mb-4 space-y-1">
                  {level.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>

                <h4 className="font-heading mb-2 font-semibold text-text-dark">
                  {common.courses.materialsTitle}
                </h4>
                <ul className="space-y-1">
                  {level.materials.map((material, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
