import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import RequestForm from "@/components/RequestForm";

const Elka = () => {
  const prices = [
    { height: "До 1,5 м", price: "790 ₽", time: "10 минут" },
    { height: "1,5–2,5 м", price: "1190 ₽", time: "15 минут" },
    { height: "Выше 2,5 м", price: "1490 ₽", time: "20 минут" }
  ];

  const included = [
    "Сборка и упаковка ёлки",
    "Вынос из квартиры",
    "Спуск по лестнице",
    "Вывоз на утилизацию",
    "Уборка иголок в прихожей"
  ];

  const faq = [
    {
      q: "Когда лучше вывезти ёлку?",
      a: "Сразу после праздников (с 8 января). Чем дольше стоит — тем больше иголок осыплется."
    },
    {
      q: "Что если ёлка не влезает в лифт?",
      a: "Разберу или сложу так, чтобы пронести. Если лифта нет — спущу по лестнице."
    },
    {
      q: "Убираете ли иголки?",
      a: "Да, быстро проведу веником/пылесосом в прихожей. Глубокая уборка — отдельно."
    },
    {
      q: "Можно ли срочно?",
      a: "Да, при свободном окне приеду за 1–2 часа. Срочность +30% к цене."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4 md:py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Вынос ёлки
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Быстро заберём и утилизируем. Без иголок в подъезде.
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
          <h2 className="text-3xl font-bold text-center mb-12">Цены по высоте</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {prices.map((item, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">{item.height}</p>
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
                    <li>• Вынос нескольких ёлок: скидка 20% на вторую и далее</li>
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

export default Elka;
