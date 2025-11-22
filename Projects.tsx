import { Card } from "@/components/ui/card";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      image: project1,
      title: "مشروع التخرج - التخطيط الاستراتيجي",
      description: "دراسة شاملة حول التخطيط الاستراتيجي في المؤسسات الحديثة",
      category: "بحث أكاديمي",
    },
    {
      image: project2,
      title: "ورشة عمل القيادة",
      description: "المشاركة في ورشة عمل متخصصة في تطوير المهارات القيادية",
      category: "تطوير مهني",
    },
    {
      image: project3,
      title: "فعالية ريادة الأعمال",
      description: "المساهمة في تنظيم فعالية جامعية لدعم رواد الأعمال الشباب",
      category: "نشاط طلابي",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            الأعمال <span className="text-gradient-gold">والمشاركات</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مجموعة من الأعمال والمشاركات الأكاديمية والمهنية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:border-accent transition-all duration-500 hover:shadow-gold cursor-pointer bg-card animate-in fade-in zoom-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-primary-foreground">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-2">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-bold text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
