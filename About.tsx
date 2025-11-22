import { GraduationCap, Clock, Lightbulb, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/assets/profile-circle.jpg";

const About = () => {
  const cards = [
    {
      icon: GraduationCap,
      title: "التخصص",
      description: "إدارة أعمال",
      color: "text-accent",
    },
    {
      icon: Clock,
      title: "سنة التخرج",
      description: "2027",
      color: "text-accent",
    },
    {
      icon: Lightbulb,
      title: "الاهتمامات",
      description: "القيادة – تطوير الذات – ريادة الأعمال",
      color: "text-accent",
    },
    {
      icon: Globe,
      title: "الطموح",
      description: "بناء مسار إداري ناجح في بيئة احترافية",
      color: "text-accent",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            من <span className="text-gradient-gold">أنا</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center animate-in fade-in slide-in-from-right duration-700">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-accent shadow-gold">
                <img
                  src={profileImage}
                  alt="رسل محمد"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground">
                أنا <span className="font-bold text-accent">رسل محمد</span>، خريجة إدارة أعمال لعام 2027.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                أطمح لأن أكون من القيادات النسائية البارزة في مجال تطوير المشاريع وريادة الأعمال.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                أؤمن أن الإدارة الناجحة تبدأ من الرؤية الواضحة والعمل بروح الفريق.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {cards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Card
                    key={index}
                    className="border-border hover:border-accent transition-all duration-300 hover:shadow-gold hover:-translate-y-1 bg-card/50 backdrop-blur-sm animate-in fade-in slide-in-from-bottom"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 text-center space-y-3">
                      <Icon className={`w-10 h-10 mx-auto ${card.color}`} />
                      <h3 className="font-bold text-lg text-foreground">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
