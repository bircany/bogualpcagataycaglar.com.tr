import { GraduationCap, Award, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: 'Eğitim Odaklı Yaklaşım',
      description: 'Psikolojik danışmanlık sürecini bilimsel temellere dayanan, güncel ve etik bir bakış açısıyla yürütürüm.',
    },
    {
      icon: Award,
      title: 'Etik ve Gizlilik',
      description: 'Her görüşmeyi danışanın sınırlarına, mahremiyetine ve güven duygusuna özen göstererek planlarım.',
    },
    {
      icon: Users,
      title: 'Bireysel Süreç Takibi',
      description: 'Her danışanın yaşam deneyimini, ihtiyaçlarını ve hedeflerini merkeze alan kişiselleştirilmiş bir yol izlerim.',
    },
    {
      icon: Heart,
      title: 'Danışan Odaklı Çalışma',
      description: 'Anlaşılmaya, güçlenmeye ve içsel denge kurmaya alan açan sıcak ve destekleyici bir görüşme ortamı sunarım.',
    },
  ];

  const timeline = [
    {
      year: 'İlk Görüşme',
      title: 'İhtiyacı Birlikte Anlama',
      description: 'Süreci, başvuru nedeninizi, beklentilerinizi ve size iyi gelecek çalışma çerçevesini birlikte belirleyerek başlatırız.',
    },
    {
      year: 'Süreç Planlama',
      title: 'Kişiye Özel Yol Haritası',
      description: 'Danışmanlık hedeflerinize uygun, sizi zorlamadan ilerleyen ve düzenli takip içeren bir yapı oluştururum.',
    },
    {
      year: 'Düzenli Görüşmeler',
      title: 'Güvenli ve Sürdürülebilir Destek',
      description: 'Görüşmelerde duygularınızı, düşüncelerinizi ve yaşadığınız zorlukları güvenli bir alanda ele alırız.',
    },
    {
      year: 'Değerlendirme',
      title: 'İlerlemenin Gözden Geçirilmesi',
      description: 'Süreç boyunca kazanımlarınızı değerlendirir, ihtiyaçlarınıza göre danışmanlık akışını birlikte güncelleriz.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hakkımda
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Her bireyin yaşam öyküsünün kendine özgü olduğuna inanıyor, psikolojik danışmanlık sürecini güven, açıklık ve iş birliği temelinde yürütüyorum.
          </p>
        </div>

        <div className="mb-16">
          <Card className="card-professional max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Merhaba, ben Psk. Dan. Ruveyda Özdemir. Danışanlarımla kurduğum ilişkide yargısız, güvenli ve destekleyici bir alan oluşturmayı önemsiyorum. Her bireyin yaşadığı güçlüğün, hayat hikayesi içinde anlamı olduğuna inanıyor; süreci bu bütünlüğü gözeterek ele alıyorum.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Görüşmelerimde danışanın ihtiyaçlarını, duygusal ritmini ve hedeflerini merkeze alan kişiselleştirilmiş bir yaklaşım benimsiyorum. Amacım yalnızca bugünkü zorlanmaları konuşmak değil; aynı zamanda iç görü kazanmanıza, duygularınızı daha iyi anlamanıza ve kendi kaynaklarınızı fark etmenize eşlik etmek.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Psikolojik iyi oluşun, yaşamın her alanına yayılan bir denge hali olduğuna inanıyorum. Bu nedenle süreci; güven ilişkisi, düzenli takip ve birlikte düşünme odağında, sizi güçlendiren bir yolculuk olarak tasarlıyorum.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Çalışma İlkelerim
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-professional hover:shadow-card transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Danışmanlık Süreci
          </h3>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-32 text-right pr-8">
                  <div className="text-lg font-semibold text-primary">
                    {item.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-1.5 relative">
                  {index !== timeline.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-primary/30"></div>
                  )}
                </div>
                <div className="flex-1 pl-8">
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
