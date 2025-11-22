import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-navy-gold py-8 border-t border-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-right">
            <p className="text-2xl font-bold font-playfair text-gradient-gold mb-1">
              رسل محمد
            </p>
            <p className="text-sm text-muted-foreground">
              خريجة إدارة أعمال - دفعة 2027
            </p>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <span>صُنع بكل</span>
            <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />
            <span>© {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
