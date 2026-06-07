import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DashboardAdmin } from '@/components/modules/DashboardAdmin';
import { AdminAuditLog } from '@/components/modules/AdminAuditLog';
export default function AdminPage() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-10 space-y-8">
        <DashboardAdmin /><AdminAuditLog />
      </div>
      <Footer />
    </main>
  );
}
