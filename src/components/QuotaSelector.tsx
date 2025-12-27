import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, Shuffle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const quickAmounts = [5, 10, 25, 50, 100];

const QuotaSelector = () => {
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const handleIncrement = () => setQuantity((q) => Math.min(q + 1, 100));
  const handleDecrement = () => setQuantity((q) => Math.max(q - 1, 1));

  const handleQuickSelect = (amount: number) => {
    setQuantity(amount);
  };

  const handleRandomNumbers = () => {
    toast({
      title: "Números aleatórios selecionados!",
      description: `${quantity} cotas serão escolhidas aleatoriamente.`,
    });
  };

  const handleBuy = () => {
    toast({
      title: "Compra iniciada!",
      description: `Você selecionou ${quantity} cota${quantity > 1 ? "s" : ""} por R$ ${quantity.toFixed(2).replace(".", ",")}`,
    });
  };

  return (
    <section className="px-4 py-10">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-card rounded-2xl p-6 border border-border"
        >
          <h3 className="text-xl font-bold text-center mb-6">
            Escolha suas <span className="text-gradient-emerald">cotas</span>
          </h3>

          {/* Quick amounts */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {quickAmounts.map((amount) => (
              <Button
                key={amount}
                variant={quantity === amount ? "emerald" : "outline"}
                size="sm"
                onClick={() => handleQuickSelect(amount)}
                className="min-w-[60px]"
              >
                {amount}
              </Button>
            ))}
          </div>

          {/* Quantity selector */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={handleDecrement}
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </Button>
            
            <div className="w-20 h-14 flex items-center justify-center gradient-card border border-border rounded-lg">
              <span className="text-2xl font-bold">{quantity}</span>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={handleIncrement}
              disabled={quantity >= 100}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          {/* Total */}
          <div className="text-center mb-6">
            <p className="text-muted-foreground text-sm mb-1">Total a pagar</p>
            <p className="text-3xl font-extrabold text-gradient-gold">
              R$ {quantity.toFixed(2).replace(".", ",")}
            </p>
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <Button 
              variant="emerald" 
              size="xl" 
              className="w-full"
              onClick={handleBuy}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Participar Agora
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full"
              onClick={handleRandomNumbers}
            >
              <Shuffle className="w-4 h-4 mr-2" />
              Escolher números aleatórios
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuotaSelector;
