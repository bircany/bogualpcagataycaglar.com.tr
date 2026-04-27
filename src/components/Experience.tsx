import { Download, Award, BookOpen, Users, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      period: 'Danışmanlık Yaklaşımı',
      title: 'Kişiye Özel ve Süreç Odaklı Çalışma',
      description: 'Her danışmanlık sürecini bireyin yaşam koşullarına, duygusal ihtiyaçlarına ve kendi hızına uygun biçimde yapılandırırım.',
      responsibilities: [
        'Danışanın ihtiyacına göre görüşme planı oluşturma',
        'Sürece uygun hedefleri birlikte belirleme',
        'Düzenli değerlendirme ve takip sağlama',
        'Güvenli ve yargısız bir görüşme alanı sunma',
      ],
    },
    {
      period: 'Çalışma İlkeleri',
      title: 'Etik, Sınırlar ve Güven',
      description: 'Danışmanlık ilişkisinde gizlilik, açıklık, karşılıklı güven ve profesyonel sınırları temel alırım.',
      responsibilities: [
        'Mahremiyete özen gösterme',
        'Etik çerçevede danışmanlık yürütme',
        'Danışanla şeffaf iletişim kurma',
        'Süreçte güven ilişkisini koruma',
      ],
    },
    {
      period: 'Görüşme Düzeni',
      title: 'Online ve Yüz Yüze Destek',
      description: 'İhtiyacınıza ve yaşam temponuza göre online ya da yüz yüze danışmanlık seçenekleriyle esnek bir görüşme düzeni sunarım.',
      responsibilities: [
        'Online görüşme planlaması',
        'Ofiste yüz yüze seans düzeni',
        'Randevu takibi ve süreklilik',
        'Ulaşılabilir ve yapılandırılmış süreç yönetimi',
      ],
    },
  ];

  const certifications = [
    'Bireyin ihtiyaçlarını merkeze alan danışmanlık yaklaşımı',
    'Gizlilik, etik ve profesyonel sınırlar doğrultusunda çalışma',
    'Duygusal farkındalık ve öz güven temalı destek süreçleri',
    'Kaygı, stres ve yaşam dönemlerine yönelik danışmanlık odağı',
    'Online ve yüz yüze görüşme süreçlerinde yapılandırılmış takip',
    'Güven ilişkisini merkeze alan sürdürülebilir çalışma biçimi',
  ];

  const publications = [
    'Danışanla kurulan güven ilişkisinin sürecin temel taşı olduğuna inanırım.',
    'Her görüşmenin, kişinin kendini daha net duymasına ve anlamlandırmasına alan açmasını önemserim.',
    'Psikolojik danışmanlık sürecini yalnızca sorun odaklı değil, güçlenme ve farkındalık odaklı da ele alırım.',
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Yaklaşımım ve Çalışma Biçimim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Psikolojik danışmanlık sürecinde güvenli ilişki, etik çerçeve ve kişiye özel yapılandırılmış destek anlayışıyla ilerliyorum.
          </p>
        </div>

        <div className="text-center mb-16">
          <Card className="card-professional max-w-lg mx-auto">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Detaylı CV'mi İndirin
              </h3>
              <p className="text-muted-foreground mb-6">
                Eğitim geçmişim ve mesleki bilgilerime daha yakından göz atmak için CV dosyamı inceleyebilirsiniz.
              </p>
              <a href="/Psk-Dan-RuveydaOzdemir.pdf" download="Psk-Dan-RuveydaOzdemir.pdf">
                <Button size="lg" className="btn-cta">
                  <Download className="w-5 h-5 mr-2" />
                  PDF Olarak İndir
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Danışmanlık Çerçevesi
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-professional">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <Badge variant="secondary" className="w-fit mb-2 md:mb-0">
                      <Target className="w-4 h-4 mr-2" />
                      {exp.period}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-foreground">
                    {exp.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <div key={respIndex} className="flex items-center text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {resp}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-foreground">
                <Award className="w-6 h-6 mr-3 text-primary" />
                Mesleki Öncelikler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-foreground">
                <BookOpen className="w-6 h-6 mr-3 text-primary" />
                Danışmanlık Notları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <div key={index} className="border-l-4 border-primary/30 pl-4">
                    <p className="text-foreground leading-relaxed">{pub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-xl">
                <div className="flex items-center text-primary mb-2">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Görüşme Düzeni</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-foreground">Online</div>
                    <div className="text-muted-foreground">Uzaktan görüşme</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Yüz Yüze</div>
                    <div className="text-muted-foreground">Atakum ofisinde</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
