import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import RequestForm from "@/components/RequestForm";

const Tehnika = () => {
  const services = [
    {
      title: "Стиральная / посудомоечная машина",
      items: ["Подключение к воде и сливу", "Замена шлангов, фильтров", "Устранение протечек по соединениям", "Замена уплотнителей дверцы"]
    },
    {
      title: "Электрическая духовка",
      items: ["Регулировка дверцы", "Замена петель и уплотнителей", "Замена ручек", "Простая диагностика"]
    },
    {
      title: "Холодильник (лайт)",
      items: ["Замена уплотнителя", "Регулировка дверей", "Замена петель", "Простые механические работы"]
    }
  ];

  const pricing = {
    diagnostic: "990 ₽",
    base: "2990 ₽",
    note: "Диагностика входит в стоимость ремонта"
  };

  const excluded = [
    "Газовое оборудование",
    "Работа с фреоном и компрессором",
    "Ремонт плат и электроники",
    "Пайка и сложная электрика"
  ];

  const faq = [
    {
      q: "Какие работы делаете?",
      a: "Только простые механические: подключения, замена шлангов/уплотнителей/петель, регулировки. Сложный ремонт (платы, компрессор, газ) — не берём."
    },
    {
      q: "Сколько стоит диагностика?",
      a: "990 ₽. Если делаю ремонт — диагностика входит в общую стоимость."
    },
    {
      q: "Что если нужна запчасть?",
      a: "Называю название/артикул, вы покупаете, я ставлю. Либо я куплю (+200 ₽ за поездку)."
    },
    {
      q: "Даёте гарантию?",
      a: "На монтаж и замену — 14 дней. Если по моей вине — переделаю бесплатно."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4 md:py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Бытовая техника (лайт)
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Подключение, замены, простые работы. Без газа и плат.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg">
              <Icon name="MessageCircle" size={18} className="mr-2" />
              WhatsApp
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Send" size={18} className="mr-2" />
              Telegram
            </Button>
            <Button size="lg" variant="secondary">
              <Icon name="Camera" size={18} className="mr-2" />
              Оценить по фото
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Что делаем</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {services.map((service, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Settings" size={20} className="text-primary" />
                    {service.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-12">
            <CardContent className="pt-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Стоимость</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Диагностика</p>
                  <p className="text-3xl font-bold text-primary">{pricing.diagnostic}</p>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-1">Минималка за ремонт</p>
                  <p className="text-3xl font-bold text-primary">{pricing.base}</p>
                  <p className="text-xs text-muted-foreground mt-2">{pricing.note}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-destructive/10 border-destructive/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Icon name="AlertTriangle" size={24} className="text-destructive mt-1" />
                <div>
                  <p className="font-semibold mb-2 text-destructive">Что НЕ делаем:</p>
                  <ul className="text-sm space-y-1">
                    {excluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-destructive mt-1">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Частые вопросы</h2>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <RequestForm />
        </div>
      </section>
    </div>
  );
};

export default Tehnika;
