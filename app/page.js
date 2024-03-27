import { HomeLayout } from "./components";
import { PDFDocument, StandardFonts, degrees, rgb } from 'pdf-lib';

export default async function Home() {
  
  return (
    <div className="bg-base-100">
      <HomeLayout/>
    </div>
  );
};