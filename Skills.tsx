import { Compass, Users, Briefcase, MessageCircle, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: Compass,
      title: "إدارة المشاريع",
      description: "تخطيط وتنظيم المشاريع من البداية للنهاية بكفاءة عالية",
    },
    {
      icon: Users,
      title: "بناء فرق العمل",
      description: "القدرة على تكوين فرق متجانسة وفعالة لتحقيق الأهداف",
    },
    {
      icon: Briefcase,
      title: "التخطيط الاستراتيجي",
      description: "وضع خطط استراتيجية محكمة للوصول للأهداف المنشودة",
    },
    {
      icon: MessageCircle,
      title: "التواصل الفعّال",
      description: "مهارات تواصل متميزة مع مختلف الأطراف والمستويات",
    },
    {
      icon: Brain,
      title: "اتخاذ القرار",
      description: "القدرة على اتخاذ قرارات مدروسة في المواقف الحرجة",
    },
  ];

  return (
    <section id="skills" className="py-20 gradient-navy-gold relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-foreground">
            المهارات <span className="text-gradient-gold">والطموحات</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مجموعة من المهارات والقدرات التي اكتسبتها خلال مسيرتي الأكاديمية والعملية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="group border-border bg-card/80 backdrop-blur-sm hover:border-accent transition-all duration-500 hover:shadow-gold hover:-translate-y-2 cursor-pointer animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-block p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-12 h-12 text-accent group-hover:animate-pulse" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
