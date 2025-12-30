import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import RequestForm from "@/components/RequestForm";

const Arendodateli = () => {
  const packages = [
    {
      visits: "4 выезда",
      period: "в месяц",
      description: "Базовый пакет для 1–2 квартир",
      features: [
        "Уборка между гостями",
        "Вынос мусора",
        "Замена расходников",
        "Мелкий ремонт (до 30 мин)"
      ]
    },
    {
      visits: "8 выездов",
      period: "в месяц",
      description: "Для 3–5 квартир или частых заездов",
      features: [
        "Всё из базового пакета",
        "Приоритетный выезд",
        "Закупка расходников (до 5000 ₽)",
        "Координация с гостями"
      ]
    },
    {
      visits: "12 выездов",
      period: "в месяц",
      description: "Полное сопровождение бизнеса",
      features: [
        "Всё из предыдущих пакетов",
        "Контроль состояния квартир",
        "Оперативное решение проблем",
        "Отчёты по каждому объекту"
      ]
    }
  ];

  const included = [
    "Уборка стандарт между гостями",
    "Смена постельного белья",
    "Вынос мусора",
    "Пополнение расходников (мыло, бумага)",
    "Мелкий ремонт (петли, лампочки, сифоны)",
    "Координация с гостями при необходимости",
    "Фото-отчёты после уборки",
    "Оперативная связь 09:00–21:00"
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4 md:py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Для арендодателей и суточников
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Абонементы на регулярное обслуживание квартир. Уборка, ремонт, закупки.
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
              <Icon name="Mail" size={18} className="mr-2" />
              Запросить условия
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Пакеты обслуживания</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {packages.map((pkg, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <p className="text-4xl font-bold text-primary mb-2">{pkg.visits}</p>
                    <p className="text-sm text-muted-foreground">{pkg.period}</p>
                    <p className="text-sm mt-2">{pkg.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2 text-sm">
                        <Icon name="CheckCircle2" size={18} className="text-primary mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Что входит в обслуживание</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {included.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Как работает абонемент</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "FileText", title: "Согласуем список квартир", text: "Адреса, ключи, особенности" },
              { icon: "Calendar", title: "Планируем график", text: "Выезды по заездам гостей" },
              { icon: "ClipboardCheck", title: "Делаем по чек-листу", text: "Уборка, проверка, фото-отчёт" },
              { icon: "MessageSquare", title: "Оперативно решаем", text: "Координация и срочные вопросы" }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                  <Icon name={step.icon} size={28} />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Icon name="Info" size={32} className="text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Почему абонемент выгоден</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Фиксированная стоимость выезда (дешевле разовых на 20–30%)</li>
                    <li>• Приоритет в графике — выезд по вашему расписанию</li>
                    <li>• Знаю ваши квартиры — быстрее и качественнее</li>
                    <li>• Не нужно каждый раз договариваться — просто пишете задачу</li>
                    <li>• Оплата раз в месяц, не за каждый выезд</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Запросить условия</h2>
            <p className="text-muted-foreground">
              Напишите количество квартир и район — я подберу пакет и назову цену
            </p>
          </div>
          <RequestForm />
        </div>
      </section>
    </div>
  );
};

export default Arendodateli;
