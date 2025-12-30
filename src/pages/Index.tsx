import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Быстро по дому",
      items: [
        "Вынос мусора / коробок: 490–790 ₽",
        "Вынос ёлки: 790 / 1190 / 1490 ₽ (по высоте)",
        "Без мусора в подъезде"
      ]
    },
    {
      title: "Поручения",
      items: [
        "Магазин / аптека / ПВЗ рядом: 790–1290 ₽",
        "Магазин / аптека / ПВЗ съездить: 1490–2490 ₽",
        "Покупки строго по чеку"
      ]
    },
    {
      title: "Муж на час",
      items: [
        "Карнизы / полки / ТВ / зеркала / сборка мебели",
        "Минималка: 2490 ₽ (выезд + 60 мин), далее +350 ₽/30 мин",
        "Согласуем заранее по фото"
      ]
    },
    {
      title: "Бытовая техника (лайт)",
      items: [
        "Подключение, фильтры, шланги, протечки по соединениям",
        "Духовка: петли / уплотнитель / ручки / регулировка",
        "Диагностика 990 ₽ (входит при ремонте). Газ / платы / фреон — не делаем"
      ]
    },
    {
      title: "Поговорить по душам",
      items: [
        "Прогулка / кафе: 60 мин 1490–2490 ₽",
        "2 часа: 2990–3990 ₽",
        "Только публичные места. Я не психолог"
      ]
    }
  ];

  const trustMarkers = [
    { icon: "CheckCircle2", text: "Цена заранее по фото" },
    { icon: "Receipt", text: "Покупки строго по чеку" },
    { icon: "Clock", text: "Приезд по времени" },
    { icon: "Sparkles", text: "Аккуратно и чисто" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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

      {/* Services Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Услуги по ящикам
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Footer CTA */}
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
