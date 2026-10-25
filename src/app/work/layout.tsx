import FloatingDock from "@/components/FloatingDock";

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <FloatingDock />
    </>
  );
}
