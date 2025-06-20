import Bannar from "@/component/BannarComponent/Bannar";
import FirstSection from "@/component/firstSection/FirstSection";
import Footer from "@/component/Footer/Footer";
import ForthSection from "@/component/ForthSection/ForthSection";
import SecondSection from "@/component/SecondSection/SecondSection";
import ThirdSection from "@/component/ThirdSection/ThirdSection";


export default function Home() {
  return (
   
    <div>
      <Bannar></Bannar>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <ForthSection></ForthSection>
      <Footer></Footer>
    </div>
  );
}
