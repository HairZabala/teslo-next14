import Sidebar from "@/components/ui/Sidebar";
import TopMenu from "@/components/ui/TopMenu";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <TopMenu />
      <Sidebar />
      <div className="px-10">{children}</div>
    </div>
  );
}
