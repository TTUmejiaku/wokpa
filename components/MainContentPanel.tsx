import React from "react";
import NavHeader from "./NavHeader";

interface MainContentPanelProps {
  children: React.ReactNode;
}

export default function MainContentPanel({ children }: MainContentPanelProps) {
  return (
    <section className='w-full'>
      <NavHeader />
      MainContentPanel
    </section>
  );
}
