import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />

      <div className="min-h-screen p-4">{children}</div>

      <Footer />
    </div>
  );
}
