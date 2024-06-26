import Footer from "@/components/ui/Footer";
import Sidebar from "@/components/ui/Sidebar";
import TopMenu from "@/components/ui/TopMenu";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TopMenu />
      <Sidebar />
      <div className="md:px-10">{children}</div>
      <Footer />
    </div>
  );
}
