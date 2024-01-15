"use client"
export default function InicioLayout({ children }) {
    return (
      <html className="h-full bg-gray-100" lang="en">
        <body className="h-full">{children}</body>
      </html>
    );
  }
  