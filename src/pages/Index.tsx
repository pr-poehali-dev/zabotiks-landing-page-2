import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import ServiceCalculator from "@/components/ServiceCalculator";
import RequestForm from "@/components/RequestForm";

const Index = () => {
  const services = [
    {
      title: "Быстро по дому",
      link: "/musor",
      items: [
        "Вынос мусора / коробок: 490–790 ₽ (10–15 минут)",
        "Вынос ёлки: 790 / 1190 / 1490 ₽ (по высоте)",
        "Без мусора в подъезде"
      ]
    },
    {
      title: "Поручения",
      link: "/porucheniya",
      items: [
        "Магазин / аптека / ПВЗ рядом (до 30 мин): 790–1290 ₽",
        "Съездить / привезти (60–90 мин): 1490–2490 ₽",
        "Покупки строго по чеку"
      ]
    },
    {
      title: "Муж на час",
      link: "/master",
      items: [
        "Карнизы / полки / ТВ / зеркала / сборка мебели / регулировки",
        "Минималка: 2490 ₽ (выезд + 60 мин), далее +350 ₽/30 мин",
        "Стоимость согласуем заранее по фото/описанию"
      ]
    },
    {
      title: "Бытовая техника (лайт)",
      link: "/tehnika",
      items: [
        "Стиралка/посудомойка: подключение, фильтры, шланги, протечки",
        "Духовка: петли / уплотнитель / ручки / регулировка",
        "Диагностика 990 ₽ (входит при ремонте). Газ / платы / фреон — не делаем"
      ]
    }
  ];

  const trustMarkers = [
    { icon: "CheckCircle2", text: "Цена заранее по фото" },
    { icon: "Receipt", text: "Покупки строго по чеку" },
    { icon: "Clock", text: "Приезд по времени" },
    { icon: "Sparkles", text: "Аккуратно и чисто" }
  ];

  const howWeWork = [
    { icon: "MessageSquare", title: "Пишете задачу", text: "В WhatsApp или Telegram" },
    { icon: "MapPin", title: "Присылаете адрес + фото", text: "Видео или список покупок" },
    { icon: "Calculator", title: "Называю цену и время", text: "Заранее, без сюрпризов" },
    { icon: "ThumbsUp", title: "Приезжаю и делаю", text: "Оплата по факту работы" }
  ];

  const faq = [
    {
      q: "Как быстро можете приехать?",
      a: "Обычно 1–3 часа при свободном окне. Срочные выезды возможны, но +30% к стоимости."
    },
    {
      q: "Как считаете время работы?",
      a: "С момента начала работы до окончания. Дорога и ожидание не считаются."
    },
    {
      q: "Точно купите всё по списку?",
      a: "Да, строго по чеку. Если чего-то нет — согласую замену или верну деньги."
    },
    {
      q: "Какие районы обслуживаете?",
      a: "Базово Левенцовка и рядом. В другие районы Ростова выезжаю, но +200–500 ₽ за дорогу."
    },
    {
      q: "Что если на месте сложнее?",
      a: "Позвоню и назову новую цену. Если не согласны — уйду без оплаты."
    },
    {
      q: "Гарантия на монтаж?",
      a: "30 дней на установку карнизов, полок, ТВ. Если упало по моей вине — переделаю бесплатно."
    },
    {
      q: "Какую технику не чините?",
      a: "Газовые плиты, холодильники с фреоном/компрессором, платы/пайку. Только простые механические работы."
    },
    {
      q: "Можно ли оплатить картой?",
      a: "Да, наличные или перевод на карту. Без чеков и НДС."
    },
    {
      q: "Работаете в выходные?",
      a: "Да, ежедневно 09:00–21:00 включая выходные и праздники."
    },
    {
      q: "Что если опоздаете?",
      a: "Предупрежу заранее. Если опоздание больше 30 минут по моей вине — скидка 300 ₽."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Zabotiks — Я рядом
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-3">
            Бытовая помощь по району
          </p>
          <p className="text-sm md:text-base text-muted-foreground mb-8">
            Ростов-на-Дону • Левенцовка + рядом • выезды 09:00–21:00 • машина есть
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            {trustMarkers.map((marker, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 p-4 bg-card rounded-lg border">
                <Icon name={marker.icon} size={24} className="text-primary" />
                <p className="text-xs md:text-sm text-center text-foreground">{marker.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
            <Button size="lg" className="w-full sm:w-auto">
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Написать в WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Icon name="Send" size={18} className="mr-2" />
              Написать в Telegram
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              <Icon name="Camera" size={18} className="mr-2" />
              Оценить по фото
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Отвечаем 5–10 минут в рабочее время
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Услуги по ящикам
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    <Icon name="Camera" size={16} className="mr-2" />
                    Оценить по фото
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Как работаем
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howWeWork.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                  <Icon name={step.icon} size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Частые вопросы
          </h2>
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

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Для арендодателей и суточников
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Абонементы на 4, 8 или 12 выездов в месяц. Уборка между гостями, мелкий ремонт, закупка расходников.
          </p>
          <div className="text-center">
            <Button size="lg" variant="outline">
              <Icon name="Mail" size={18} className="mr-2" />
              Запросить условия
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-5xl mx-auto space-y-12">
          <ServiceCalculator />
          <RequestForm />
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Готовы помочь
          </h3>
          <p className="text-muted-foreground mb-6">
            Напишите, и мы назовём цену заранее
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
