import { motion } from "framer-motion";
import badgesPrize from "@/assets/badges-prize.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background glow effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Floating badge image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mb-6"
      >
        <motion.img
          src={badgesPrize}
          alt="Early Supporter Esmeralda Dima Badges"
          className="h-24 md:h-32 object-contain drop-shadow-2xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-tight"
      >
        <span className="text-gradient-gold">Badges</span>{" "}
        <span className="text-foreground">Market Place</span>
      </motion.h1>

      {/* Main Prize */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="gradient-card rounded-2xl p-6 md:p-8 border border-border glow-emerald max-w-lg w-full text-center mb-6"
      >
        <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">
          Prêmio Principal
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gradient-emerald mb-3">
          Early Supporter Esmeralda Dima
        </h2>
        <div className="flex items-center justify-center gap-2">
          <span className="text-3xl md:text-4xl font-extrabold text-gold">+</span>
          <span className="text-4xl md:text-5xl font-extrabold text-gradient-gold">
            R$ 400
          </span>
        </div>
      </motion.div>

      {/* Info badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <div className="bg-muted/50 rounded-full px-5 py-2 border border-border">
          <span className="text-muted-foreground text-sm">5.000 cotas</span>
        </div>
        <div className="bg-muted/50 rounded-full px-5 py-2 border border-border">
          <span className="text-emerald font-semibold">R$ 1,00</span>
          <span className="text-muted-foreground text-sm"> por cota</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
