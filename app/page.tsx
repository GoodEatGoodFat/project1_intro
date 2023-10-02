import Image from "next/image";
import ContactUs from "./ContactUs/page";
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <br />
      <ContactUs></ContactUs>
    </>
  );
}
