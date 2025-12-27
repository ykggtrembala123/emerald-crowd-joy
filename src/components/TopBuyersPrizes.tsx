import { motion } from "framer-motion";
import { Trophy, Medal, Award } from "lucide-react";

const prizes = [
  { position: 1, amount: 300, icon: Trophy, color: "text-gold", bg: "bg-gold/10", border: "border-gold/30" },
  { position: 2, amount: 200, icon: Medal, color: "text-foreground/80", bg: "bg-foreground/5", border: "border-foreground/20" },
  { position: 3, amount: 100, icon: Award, color: "text-amber-600", bg: "bg-amber-600/10", border: "border-amber-600/30" },
];

const TopBuyersPrizes = () => {
  return (
    <section className="px-4 py-10">
      <div className="max-w-xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold text-center mb-6"
        >
          Prêmios para <span className="text-gradient-gold">Top Compradores</span>
        </motion.h3>
        
        <div className="grid grid-cols-3 gap-3">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.position}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${prize.bg} ${prize.border} border rounded-xl p-4 text-center`}
            >
              <prize.icon className={`w-8 h-8 ${prize.color} mx-auto mb-2`} />
              <p className="text-xs text-muted-foreground mb-1">{prize.position}º lugar</p>
              <p className={`text-xl font-bold ${prize.color}`}>
                R$ {prize.amount}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBuyersPrizes;
