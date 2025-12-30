import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import RequestForm from "@/components/RequestForm";

const Musor = () => {
  const prices = [
    { type: "1–2 пакета", price: "490 ₽", time: "10 минут" },
    { type: "3–5 пакетов", price: "690 ₽", time: "15 минут" },
    { type: "Коробки от мебели", price: "790 ₽", time: "20 минут" }
  ];

  const included = [
    "Вынос из квартиры",
    "Спуск по лестнице",
    "Выброс в контейнер",
    "Без мусора в подъезде",
    "Складирование коробок при необходимости"
  ];

  const faq = [
    {
      q: "Какой мусор выносите?",
      a: "Бытовой: пакеты, коробки, старая мебель (если разобрана). Строительный — не берём."
    },
    {
      q: "Что если мусора больше?",
      a: "Позвоню и назову новую цену. Обычно +200 ₽ за каждые 2–3 пакета сверх."
    },
    {
      q: "Выносите ли на высокий этаж?",
      a: "Да, 1–7 этаж в базовой цене. Выше 8 без лифта +200 ₽."
    },
    {
      q: "Можно ли срочно?",
      a: "Да, при свободном окне приеду за 1–2 часа. Срочность +30%."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4 md:py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Вынос мусора и коробок
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Быстро уберём. Без мусора в подъезде.
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
          <h2 className="text-3xl font-bold text-center mb-12">Цены</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {prices.map((item, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">{item.type}</p>
                  <p className="text-3xl font-bold text-primary mb-2">{item.price}</p>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Что входит:</h3>
              <ul className="space-y-2">
                {included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={24} className="text-primary mt-1" />
                <div>
                  <p className="font-semibold mb-2">Правила:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Этаж 8+ без лифта: +200 ₽</li>
                    <li>• Срочный выезд (1–2 часа): +30%</li>
                    <li>• Строительный мусор — не берём</li>
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

export default Musor;
