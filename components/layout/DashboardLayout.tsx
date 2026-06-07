"use client";
import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { MobileBottomNav } from './MobileBottomNav';

/**
 * DashboardLayout wraps pages with a sidebar and global navigation elements. It
 * arranges the sidebar on the left for desktop screens and renders the
 * children within the main content area. The top Navbar, bottom Footer, and
 * MobileBottomNav are included for a complete app experience.
 */
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b0b13] text-white">
      <Navbar />
      <div className="flex flex-1 flex-row">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden p-4 md:p-8">
          {children}
        </main>
      </div>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}