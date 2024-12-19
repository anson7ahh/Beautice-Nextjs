import AboutUsService from "@/components/AboutUsService";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import MainService from "@/components/mainService";
import Professional from "@/components/professional";

export default function Home() {
  return (
    <>
      <Header />
      <MainService />
      <AboutUsService />
      <Professional />
      <ContactUs />
      <Footer />
    </>
  );
}
