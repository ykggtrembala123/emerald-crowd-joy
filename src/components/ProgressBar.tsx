import { motion } from "framer-motion";

interface ProgressBarProps {
  sold: number;
  total: number;
}

const ProgressBar = ({ sold, total }: ProgressBarProps) => {
  const percentage = Math.min((sold / total) * 100, 100);

  return (
    <section className="px-4 py-8">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-muted-foreground">Cotas vendidas</span>
          <span className="text-sm font-semibold">
            <span className="text-emerald">{sold.toLocaleString("pt-BR")}</span>
            <span className="text-muted-foreground"> / {total.toLocaleString("pt-BR")}</span>
          </span>
        </div>
        
        <div className="h-4 bg-muted rounded-full overflow-hidden border border-border">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="h-full gradient-emerald relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" 
              style={{ backgroundSize: "200% 100%" }}
            />
          </motion.div>
        </div>
        
        <div className="text-center mt-3">
          <span className="text-2xl font-bold text-gradient-emerald">{percentage.toFixed(1)}%</span>
          <span className="text-muted-foreground text-sm ml-2">completo</span>
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;
