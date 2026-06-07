import type { ReactNode } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';

/**
 * Layout for the student dashboard. All pages under /aluno will be wrapped
 * with the DashboardLayout, which includes the sidebar, navbar and other
 * shared components.
 */
export default function AlunoLayout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}