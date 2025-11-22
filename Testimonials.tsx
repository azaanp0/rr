import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "رسل تمتلك روح القيادة وشغف النجاح المتميز",
      author: "د. منى الغامدي",
      role: "أستاذة إدارة الأعمال",
    },
    {
      quote: "تتمتع بالانضباط والطموح العالي والإصرار على التميز",
      author: "سارة الوتاري",
      role: "زميلة دراسة",
    },
    {
      quote: "شخصية قيادية واعدة بقدرات استثنائية في العمل الجماعي",
      author: "أ. خالد المالكي",
      role: "مشرف المشاريع",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 gradient-navy-gold relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-foreground">
            آراء <span className="text-gradient-gold">الزملاء</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-accent/50 bg-card/80 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-12 relative">
              <Quote className="absolute top-8 right-8 w-16 h-16 text-accent/20" />
              
              <div
                key={currentIndex}
                className="text-center space-y-6 animate-in fade-in slide-in-from-right duration-500"
              >
                <p className="text-2xl md:text-3xl font-playfair text-foreground leading-relaxed italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="pt-6 border-t border-accent/30">
                  <p className="font-bold text-xl text-accent">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>

              {/* Indicator dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-accent w-8"
                        : "bg-accent/30 hover:bg-accent/50"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
