import { motion } from "framer-motion";
import { Shield, Clock, Users, Gift } from "lucide-react";

const infoItems = [
  {
    icon: Gift,
    title: "Prêmio Garantido",
    description: "Sorteio realizado ao atingir 100% das cotas",
  },
  {
    icon: Clock,
    title: "Resultado Imediato",
    description: "Divulgação ao vivo após encerramento",
  },
  {
    icon: Users,
    title: "5.000 Participantes",
    description: "Chances reais de ganhar",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Pagamento via PIX com confirmação instantânea",
  },
];

const RaffleInfo = () => {
  return (
    <section className="px-4 py-10">
      <div className="max-w-2xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold text-center mb-8"
        >
          Como funciona?
        </motion.h3>
        
        <div className="grid grid-cols-2 gap-4">
          {infoItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-muted/30 rounded-xl p-4 border border-border text-center"
            >
              <item.icon className="w-8 h-8 text-emerald mx-auto mb-3" />
              <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RaffleInfo;
