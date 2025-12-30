import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import RequestForm from "@/components/RequestForm";

const Master = () => {
  const services = [
    "Карнизы, полки, зеркала",
    "Монтаж ТВ на стену",
    "Сборка мебели (ИКЕА и др.)",
    "Регулировка дверей, петель",
    "Замена смесителей, сифонов",
    "Мелкий ремонт мебели"
  ];

  const pricing = {
    base: "2490 ₽",
    baseTime: "выезд + 60 минут работы",
    additional: "+350 ₽ / 30 минут"
  };

  const faq = [
    {
      q: "Как считаете время?",
      a: "Минималка 2490 ₽ включает выезд и 60 минут работы. Дальше каждые 30 минут +350 ₽. Время начинается с момента начала работы, не дороги."
    },
    {
      q: "Нужно ли покупать расходники?",
      a: "Да, дюбели/шурупы/саморезы покупаете заранее или я куплю (стоимость + 200 ₽ за поездку)."
    },
    {
      q: "Что если работа сложнее?",
      a: "Позвоню и назову новое время/цену. Если не согласны — уйду, возьму только за выезд (500 ₽)."
    },
    {
      q: "Даёте гарантию?",
      a: "30 дней на монтаж. Если упало/разболталось по моей вине — переделаю бесплатно."
    },
    {
      q: "Какие работы не делаете?",
      a: "Электрику (кроме простого подключения), сантехнику сложную (трубы), плитку, штукатурку."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4 md:py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Муж на час
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Монтаж, сборка, регулировки. Стоимость заранее по фото.
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
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {services.map((service, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6 flex items-center gap-3">
                  <Icon name="Wrench" size={24} className="text-primary" />
                  <span>{service}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-12">
            <CardContent className="pt-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Стоимость</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">{pricing.base}</p>
                  <p className="text-muted-foreground">{pricing.baseTime}</p>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-muted-foreground">Далее: {pricing.additional}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={24} className="text-primary mt-1" />
                <div>
                  <p className="font-semibold mb-2">Правила:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Стоимость согласуем заранее по фото/описанию</li>
                    <li>• Расходники покупаете заранее или я куплю (+200 ₽)</li>
                    <li>• Гарантия 30 дней на монтаж</li>
                    <li>• Сложные работы (электрика/сантехника) — не берём</li>
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

export default Master;
