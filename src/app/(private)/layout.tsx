import Menu from "@/components/private/menu";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row gap-3">
      <Menu />

      <main className="flex-1 py-2">{children}</main>
    </div>
  );
}
