import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-1 p-4">{children}</div>

      <Footer />
    </div>
  );
}
