export const metadata = {
  title: "Hudson MD Detailing",
  description: "Car detailing in Hudson, Ohio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
