import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#97ce4c] flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-[#44281d] text-[#97ce4c] p-4 text-center">
        <p>&copy; 2024 Rick and Morty Universe. All rights reserved.</p>
      </footer>
    </div>
  );
}
