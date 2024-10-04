import Header from "@/app/_/header";
import HeroSection from "@/app/_/hero";
import Footer from "@/app/_/footer";

export default function Home() {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <HeroSection />
            <Footer />
        </div>
    );
}
