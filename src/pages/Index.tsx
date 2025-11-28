import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Спортивные кроссовки Urban',
    price: 8990,
    category: 'Мужская',
    image: 'https://cdn.poehali.dev/projects/8d7e4bb5-140d-475a-9dd0-99562f5d7509/files/5986689d-f55a-4897-ba6c-9d8b48549e76.jpg'
  },
  {
    id: 2,
    name: 'Кожаные ботинки Classic',
    price: 12990,
    category: 'Мужская',
    image: 'https://cdn.poehali.dev/projects/8d7e4bb5-140d-475a-9dd0-99562f5d7509/files/f4df09ae-fbeb-4861-b179-e03625a09dd2.jpg'
  },
  {
    id: 3,
    name: 'Минималистичные кеды White',
    price: 5990,
    category: 'Женская',
    image: 'https://cdn.poehali.dev/projects/8d7e4bb5-140d-475a-9dd0-99562f5d7509/files/01dcddb7-564a-44bb-be64-1c4879f44681.jpg'
  },
  {
    id: 4,
    name: 'Спортивные кроссовки Urban',
    price: 8990,
    category: 'Детская',
    image: 'https://cdn.poehali.dev/projects/8d7e4bb5-140d-475a-9dd0-99562f5d7509/files/5986689d-f55a-4897-ba6c-9d8b48549e76.jpg'
  },
  {
    id: 5,
    name: 'Кожаные ботинки Classic',
    price: 12990,
    category: 'Женская',
    image: 'https://cdn.poehali.dev/projects/8d7e4bb5-140d-475a-9dd0-99562f5d7509/files/f4df09ae-fbeb-4861-b179-e03625a09dd2.jpg'
  },
  {
    id: 6,
    name: 'Минималистичные кеды White',
    price: 5990,
    category: 'Мужская',
    image: 'https://cdn.poehali.dev/projects/8d7e4bb5-140d-475a-9dd0-99562f5d7509/files/01dcddb7-564a-44bb-be64-1c4879f44681.jpg'
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [cart, setCart] = useState<Product[]>([]);

  const categories = ['Все', 'Мужская', 'Женская', 'Детская'];

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/1c71746d-0f0a-4c84-af2e-3ed229dc7b70.png" 
              alt="recalé" 
              className="h-10 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#catalog" className="text-foreground hover:text-accent transition-colors font-medium">
              Каталог
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">
              О нас
            </a>
            <a href="#contacts" className="text-foreground hover:text-accent transition-colors font-medium">
              Контакты
            </a>
          </nav>

          <Button variant="ghost" size="icon" className="relative">
            <Icon name="ShoppingCart" size={24} />
            {cart.length > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground">
                {cart.length}
              </Badge>
            )}
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              Стиль в каждом шаге
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Минималистичная обувь для современных людей. 
              Качество, комфорт и дизайн в одном.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-6 text-lg">
              Смотреть каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Наша коллекция
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                  : 'hover:bg-muted'
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden transition-all duration-300 hover:shadow-xl animate-scale-in border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                          {product.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-2xl font-bold text-foreground">
                        {product.price.toLocaleString('ru-RU')} ₽
                      </span>
                      <Button 
                        onClick={() => addToCart(product)}
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        <Icon name="ShoppingBag" size={18} className="mr-2" />
                        В корзину
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Бесплатная доставка по России
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            При заказе от 5000 ₽ доставляем бесплатно в любую точку страны. 
            Быстро, надёжно, с заботой о вас.
          </p>
          <div className="flex flex-wrap justify-center gap-12 mt-12">
            <div className="flex flex-col items-center">
              <Icon name="Truck" size={48} className="mb-4" />
              <span className="font-medium">Быстрая доставка</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Shield" size={48} className="mb-4" />
              <span className="font-medium">Гарантия качества</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="RotateCcw" size={48} className="mb-4" />
              <span className="font-medium">Лёгкий возврат</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/1c71746d-0f0a-4c84-af2e-3ed229dc7b70.png" 
                alt="recalé" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-muted-foreground">
                Минималистичная обувь для современной жизни
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Информация</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Возврат товара</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@recale.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (800) 555-35-35
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2024 recalé. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
