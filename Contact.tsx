import { Mail, Linkedin, MessageCircle, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "تم الإرسال بنجاح",
      description: "شكراً لتواصلك! سأرد عليك في أقرب وقت",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: "rusul.mohammed@example.com",
      href: "mailto:rusul.mohammed@example.com",
      color: "text-accent",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "تواصلي على LinkedIn",
      href: "#",
      color: "text-blue-500",
    },
    {
      icon: MessageCircle,
      label: "واتساب",
      value: "تواصلي عبر واتساب",
      href: "https://wa.me/967776310172",
      color: "text-green-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            تواصلي <span className="text-gradient-gold">معي</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            يسعدني التواصل معك! لا تترددي في إرسال رسالة أو التواصل عبر القنوات التالية
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border hover:border-accent transition-all duration-300 shadow-elegant animate-in fade-in slide-in-from-right duration-700">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    الاسم
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="أدخلي اسمك"
                    className="border-border focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    البريد الإلكتروني
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="example@email.com"
                    className="border-border focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    الرسالة
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="اكتبي رسالتك هنا..."
                    rows={5}
                    className="border-border focus:border-accent transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold font-bold text-lg transition-all duration-300 hover:scale-105"
                >
                  <Send className="ml-2 h-5 w-5" />
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card
                    key={index}
                    className="border-border hover:border-accent transition-all duration-300 hover:shadow-gold hover:-translate-y-1 cursor-pointer group"
                  >
                    <CardContent className="p-6">
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4"
                      >
                        <div className={`p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all duration-300 ${method.color}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                            {method.label}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <Card className="border-green-500 bg-green-50 dark:bg-green-950/30">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <MessageCircle className="w-12 h-12 mx-auto text-green-500" />
                  <h3 className="font-bold text-xl text-foreground">
                    تواصل سريع عبر واتساب
                  </h3>
                  <p className="text-muted-foreground">
                    للتواصل الفوري، يمكنك مراسلتي مباشرة على واتساب
                  </p>
                  <Button
                    asChild
                    className="bg-green-500 hover:bg-green-600 text-white shadow-lg font-bold transition-all duration-300 hover:scale-105"
                  >
                    <a
                      href="https://wa.me/967776310172"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      ابدئي المحادثة
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
