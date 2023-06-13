"use client";
import GitHubCalendar from "react-github-calendar";

export default function GitHubCalendarSection() {
  return (
    <div className="my-12 flex flex-col items-center">
      <h5 className="gradient inline-block mb-4">How frequently i code</h5>
      <GitHubCalendar username="shehza-d" />
    </div>
  );
}
