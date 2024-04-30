import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "pdf-lib-table",
  description: "Table add on for pdf-lib",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="wireframe">
            <body className={`${inter.className} bg-base-100`} suppressHydrationWarning={true}>
                <div className="h-16">
                    <NavBar/>
                </div>
                {children}
            </body>
        </html>
    );
}
