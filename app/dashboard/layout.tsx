import MainContentPanel from "@/components/MainContentPanel";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`flex bg-priBlack`}>
      <Sidebar />
      <MainContentPanel>{children}</MainContentPanel>
    </section>
  );
}
