import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const ServiceCalculator = () => {
  const [service, setService] = useState("");
  const [urgency, setUrgency] = useState("normal");
  const [floor, setFloor] = useState("1-3");
  const [priceRange, setPriceRange] = useState("");

  const calculatePrice = () => {
    if (!service) {
      setPriceRange("Выберите услугу");
      return;
    }

    let min = 0;
    let max = 0;

    if (service === "elka") {
      if (floor === "1-3") {
        min = 790;
        max = 990;
      } else if (floor === "4-7") {
        min = 1190;
        max = 1390;
      } else {
        min = 1490;
        max = 1690;
      }
    } else if (service === "musor") {
      min = floor === "1-3" ? 490 : 790;
      max = floor === "1-3" ? 690 : 990;
    } else if (service === "porucheniya") {
      min = 790;
      max = 2490;
    } else if (service === "master") {
      min = 2490;
      max = 4990;
    } else if (service === "tehnika") {
      min = 2990;
      max = 5990;
    }

    if (urgency === "urgent") {
      min = Math.round(min * 1.3);
      max = Math.round(max * 1.3);
    }

    setPriceRange(`${min}–${max} ₽`);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="Calculator" size={24} className="text-primary" />
          Оценить стоимость
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Услуга</Label>
          <Select onValueChange={setService} value={service}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите услугу" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="elka">Вынос ёлки</SelectItem>
              <SelectItem value="musor">Вынос мусора/коробок</SelectItem>
              <SelectItem value="porucheniya">Поручения (магазин/аптека)</SelectItem>
              <SelectItem value="master">Муж на час</SelectItem>
              <SelectItem value="tehnika">Бытовая техника</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {(service === "elka" || service === "musor") && (
          <div className="space-y-2">
            <Label>Этаж / Лифт</Label>
            <Select onValueChange={setFloor} value={floor}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-3">1–3 этаж или есть лифт</SelectItem>
                <SelectItem value="4-7">4–7 этаж без лифта</SelectItem>
                <SelectItem value="8+">8+ этаж без лифта</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="space-y-2">
          <Label>Срочность</Label>
          <Select onValueChange={setUrgency} value={urgency}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="normal">Обычная (1–3 часа)</SelectItem>
              <SelectItem value="urgent">Срочная (+30%)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={calculatePrice} className="w-full">
          Рассчитать
        </Button>

        {priceRange && (
          <div className="text-center p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Примерная стоимость:</p>
            <p className="text-2xl font-bold text-foreground">{priceRange}</p>
            <p className="text-xs text-muted-foreground mt-2">
              Точную цену назову после фото/описания
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCalculator;
