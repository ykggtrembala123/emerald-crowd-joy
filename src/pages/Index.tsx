import HeroSection from "@/components/HeroSection";
import ProgressBar from "@/components/ProgressBar";
import TopBuyersPrizes from "@/components/TopBuyersPrizes";
import QuotaSelector from "@/components/QuotaSelector";
import TopBuyersRanking from "@/components/TopBuyersRanking";
import RaffleInfo from "@/components/RaffleInfo";
import Footer from "@/components/Footer";

const Index = () => {
  // Mock data - em produção viria do backend
  const soldQuotas = 1847;
  const totalQuotas = 5000;

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProgressBar sold={soldQuotas} total={totalQuotas} />
      <TopBuyersPrizes />
      <QuotaSelector />
      <TopBuyersRanking />
      <RaffleInfo />
      <Footer />
    </main>
  );
};

export default Index;
