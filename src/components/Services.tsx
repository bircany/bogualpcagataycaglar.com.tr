import { Users, Sparkles, ShieldCheck, Heart, Globe, MapPin, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Bireysel Danışmanlık',
      description: 'Duygusal zorlanmalarınızı, yaşamınızdaki tekrar eden örüntüleri ve kendinizi daha iyi anlama ihtiyacınızı birlikte ele alabileceğimiz bireysel bir danışmanlık süreci.',
      features: ['Kişiye özel görüşme planı', 'Düzenli seans takibi', 'Güvenli paylaşım alanı', 'Sürece uygun hedef belirleme'],
    },
    {
      icon: Sparkles,
      title: 'Ergen ve Genç Yetişkin Danışmanlığı',
      description: 'Kimlik gelişimi, sınav baskısı, aile ilişkileri ve gelecek kaygısı gibi dönemsel zorlanmalarda destekleyici bir danışmanlık alanı sunulur.',
      features: ['Dönemsel ihtiyaç analizi', 'Akademik ve sosyal uyum desteği', 'Duygusal farkındalık çalışmaları', 'Aile ile iş birliği çerçevesi'],
    },
    {
      icon: ShieldCheck,
      title: 'Kaygı ve Stres Yönetimi',
      description: 'Günlük yaşamı etkileyen yoğun stres, belirsizlik ve kaygı durumlarında baş etme becerilerinizi güçlendirmeye odaklanan görüşmeler yapılır.',
      features: ['Kaygı tetikleyicilerini anlama', 'Duygu düzenleme becerileri', 'İçsel kaynakları fark etme', 'İşlevsel baş etme yolları'],
    },
    {
      icon: Heart,
      title: 'Öz Güven ve Duygusal Farkındalık',
      description: 'Kendilik algınızı güçlendirmek, sınırlarınızı fark etmek ve duygularınızı daha sağlıklı ifade edebilmek için destekleyici bir süreç yürütülür.',
      features: ['Öz değer çalışmaları', 'Sınır koyma farkındalığı', 'İlişkilerde kendini ifade etme', 'Güçlü yönleri görünür kılma'],
    },
    {
      icon: Globe,
      title: 'Online Danışmanlık',
      description: 'Bulunduğunuz yerden bağımsız olarak, güvenli ve planlı bir şekilde çevrim içi görüşme desteği alabilirsiniz.',
      features: ['Video görüşme', 'Esnek planlama', 'Düzenli online takip', 'Farklı şehirlerden erişim'],
    },
    {
      icon: MapPin,
      title: 'Yüz Yüze Danışmanlık',
      description: 'Samsun Atakum’daki ofiste, sakin ve güvenli bir görüşme ortamında birebir danışmanlık desteği sunulur.',
      features: ['Ofiste birebir görüşme', 'Güvenli görüşme ortamı', 'Randevu planlaması', 'Yapılandırılmış seans süreci'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hizmetlerim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Her danışanın ihtiyacına göre şekillenen, destekleyici, etik ve kişiselleştirilmiş psikolojik danışmanlık süreçleri sunuyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-professional hover:shadow-card transition-all duration-300 group h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full btn-outline-cta">
                  Detayları Gör
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-card rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Size Uygun Danışmanlık Sürecini Birlikte Belirleyelim
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Online ya da yüz yüze görüşme seçenekleriyle, ihtiyaçlarınıza uygun ilk adımı birlikte planlayabiliriz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/905442150995" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="btn-outline-cta">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp İletişim
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
