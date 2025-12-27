import { motion } from "framer-motion";
import { Crown, TrendingUp } from "lucide-react";

// Mock data - em produção viria do backend
const topBuyers = [
  { name: "João S.", quotas: 127, position: 1 },
  { name: "Maria O.", quotas: 85, position: 2 },
  { name: "Pedro L.", quotas: 62, position: 3 },
  { name: "Ana C.", quotas: 45, position: 4 },
  { name: "Lucas M.", quotas: 38, position: 5 },
];

const getPositionStyle = (position: number) => {
  switch (position) {
    case 1:
      return "bg-gold/10 border-gold/30 text-gold";
    case 2:
      return "bg-foreground/5 border-foreground/20 text-foreground/80";
    case 3:
      return "bg-amber-600/10 border-amber-600/30 text-amber-600";
    default:
      return "bg-muted/50 border-border text-muted-foreground";
  }
};

const TopBuyersRanking = () => {
  return (
    <section className="px-4 py-10">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-card rounded-2xl p-6 border border-border"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-emerald" />
            <h3 className="text-xl font-bold">Ranking de Compradores</h3>
          </div>

          <div className="space-y-3">
            {topBuyers.map((buyer, index) => (
              <motion.div
                key={buyer.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-3 p-3 rounded-lg border ${getPositionStyle(buyer.position)}`}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-background/50">
                  {buyer.position === 1 ? (
                    <Crown className="w-4 h-4 text-gold" />
                  ) : (
                    <span className="text-sm font-bold">{buyer.position}</span>
                  )}
                </div>
                
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{buyer.name}</p>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-emerald">{buyer.quotas}</p>
                  <p className="text-xs text-muted-foreground">cotas</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopBuyersRanking;
