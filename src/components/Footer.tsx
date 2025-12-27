const Footer = () => {
  return (
    <footer className="px-4 py-8 border-t border-border">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg font-bold mb-2">
          <span className="text-gradient-gold">Badges</span>{" "}
          <span className="text-foreground">Market Place</span>
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          Rifa oficial • Todos os direitos reservados
        </p>
        <p className="text-xs text-muted-foreground/60">
          Ao participar, você concorda com os termos e condições da rifa.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
