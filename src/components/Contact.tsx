import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 544 215 09 95',
      description: 'Randevu ve bilgi için arayabilirsiniz',
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'test@exemple.com',
      description: 'Mesajlarınıza en kısa sürede dönüş yapılır',
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Atakent, 3101. Sk. No:8',
      description: '55270 Atakum / Samsun',
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      content: '10.00 - 17.00',
      description: 'Pazar günü kapalı',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Randevu Talebi: ${formData.service || 'Genel danışmanlık'}`;
    const body = `Ad: ${formData.firstName}
Soyad: ${formData.lastName}
E-posta: ${formData.email}
Telefon: ${formData.phone}
İlgilendiği Hizmet: ${formData.service}

Mesaj:
${formData.message}`;

    window.location.href = `mailto:test@exemple.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            İletişim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Psikolojik danışmanlık sürecine başlamak ya da size uygun görüşme biçimini birlikte belirlemek için benimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Randevu Talep Formu
              </CardTitle>
              <p className="text-muted-foreground">
                Formu doldurun, size en uygun görüşme planı için geri dönüş sağlayalım.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Ad</Label>
                    <Input
                      id="firstName"
                      placeholder="Adınız"
                      required
                      className="mt-1"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Soyad</Label>
                    <Input
                      id="lastName"
                      placeholder="Soyadınız"
                      required
                      className="mt-1"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-posta</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ornek@email.com"
                    required
                    className="mt-1"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+90 5xx xxx xx xx"
                    required
                    className="mt-1"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Label htmlFor="service">İlgilendiğiniz Hizmet</Label>
                  <select
                    id="service"
                    className="mt-1 w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Bir hizmet seçin</option>
                    <option value="bireysel-danismanlik">Bireysel Danışmanlık</option>
                    <option value="ergen-genc-yetiskin">Ergen / Genç Yetişkin Danışmanlığı</option>
                    <option value="kaygi-stres">Kaygı ve Stres Yönetimi</option>
                    <option value="oz-guven">Öz Güven ve Duygusal Farkındalık</option>
                    <option value="online-danismanlik">Online Danışmanlık</option>
                    <option value="yuz-yuze-danismanlik">Yüz Yüze Danışmanlık</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Mesaj</Label>
                  <Textarea
                    id="message"
                    placeholder="Sürece dair paylaşmak istediğiniz kısa bir not yazabilirsiniz..."
                    rows={4}
                    className="mt-1"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full btn-cta">
                  <Send className="w-5 h-5 mr-2" />
                  Randevu Talep Et
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-professional text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-foreground font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Hızlı İletişim
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <a href="tel:+905442150995" className="block">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full btn-outline-cta justify-start"
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">Hemen Ara</div>
                        <div className="text-sm text-muted-foreground">+90 544 215 09 95</div>
                      </div>
                    </Button>
                  </a>

                  <a href="https://wa.me/905442150995" target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full btn-outline-cta justify-start"
                    >
                      <MessageCircle className="w-5 h-5 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">WhatsApp</div>
                        <div className="text-sm text-muted-foreground">Doğrudan mesaj gönderin</div>
                      </div>
                    </Button>
                  </a>

                  <a href="mailto:test@exemple.com" className="block">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full btn-outline-cta justify-start"
                    >
                      <Mail className="w-5 h-5 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">E-posta Gönder</div>
                        <div className="text-sm text-muted-foreground">test@exemple.com</div>
                      </div>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                Ofis Konumu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-[21/9] w-full bg-muted rounded-xl relative overflow-hidden group mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.41541165543396!2d36.24824964473852!3d41.34532623792879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408879007feb9bf9%3A0xe2dcd31f6cdd728f!2sPd.Rehberinden%20Psikolojik%20dan%C4%B1%C5%9Fmanl%C4%B1k%20ve%20rehberlik%20merkezi!5e0!3m2!1str!2str!4v1777296187047!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  title="Ofis Konumu"
                ></iframe>
              </div>
              <div className="text-center">
                <p className="font-medium text-foreground mb-1">
                  Pd.Rehberinden Psikolojik Danışmanlık ve Rehberlik Merkezi
                </p>
                <p className="text-muted-foreground text-sm">
                  Atakent, 3101. Sk. No:8
                  <br />
                  55270 Atakum / Samsun
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center bg-gradient-card rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Danışmanlık Sürecine İlk Adım
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kendinizi daha iyi anlamaya ve ihtiyaçlarınıza uygun bir danışmanlık süreci oluşturmaya bugün başlayabiliriz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+905442150995">
              <Button size="lg" className="btn-cta">
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara
              </Button>
            </a>
            <a href="https://wa.me/905442150995" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="btn-outline-cta">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Randevu
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
