import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const RequestForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    time: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-12 pb-12 text-center space-y-6">
          <Icon name="CheckCircle2" size={64} className="text-primary mx-auto" />
          <div>
            <h3 className="text-2xl font-bold mb-2">Заявка принята!</h3>
            <p className="text-muted-foreground">
              Отвечу в ближайшие 5–10 минут в рабочее время
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg">
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Написать в WhatsApp
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Send" size={18} className="mr-2" />
              Написать в Telegram
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Оставить заявку</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Имя</Label>
            <Input
              id="name"
              placeholder="Как к вам обращаться?"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Телефон</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Район / Адрес</Label>
            <Input
              id="address"
              placeholder="Левенцовка, ул. Примерная 1"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Что нужно сделать?</Label>
            <Select
              onValueChange={(value) => setFormData({ ...formData, service: value })}
              value={formData.service}
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите услугу" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="elka">Вынос ёлки</SelectItem>
                <SelectItem value="musor">Вынос мусора/коробок</SelectItem>
                <SelectItem value="porucheniya">Поручения (магазин/аптека/ПВЗ)</SelectItem>
                <SelectItem value="master">Муж на час</SelectItem>
                <SelectItem value="tehnika">Бытовая техника</SelectItem>
                <SelectItem value="other">Другое</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Удобное время</Label>
            <Input
              id="time"
              placeholder="Сегодня вечером / Завтра утром"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Подробности</Label>
            <Textarea
              id="description"
              placeholder="Опишите задачу или прикрепите фото"
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label>Фото (опционально)</Label>
            <div className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer">
              <Icon name="Upload" size={32} className="mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Нажмите или перетащите фото
              </p>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full">
            Отправить заявку
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RequestForm;
