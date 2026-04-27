import { Phone, Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6 leading-tight">
              Psk. Dan.
              <br />
              <span className="text-primary">Ruveyda Özdemir</span>
            </h1>

            <p className="text-xl text-foreground/80 mb-4 font-medium">
              Psikolojik Danışman
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              10 yıllık deneyimimle psikolojik iyi oluşunuzu desteklemek, kişiselleştirilmiş danışmanlık
              süreçleriyle içsel dengenizi bulmanızı ve potansiyelinizi keşfetmenizi sağlamak için buradayım.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://wa.me/905442150995" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="btn-cta text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Randevu Al
                </Button>
              </a>
              <a href="/Psk-Dan-RuveydaOzdemir.pdf" download="Psk-Dan-RuveydaOzdemir.pdf">
                <Button variant="outline" size="lg" className="btn-outline-cta text-lg px-8 py-4">
                  <Download className="w-5 h-5 mr-2" />
                  CV İndir
                </Button>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-primary">250+</div>
                <div className="text-muted-foreground">Danışan</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-muted-foreground">Yıl Deneyim</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-white/40 backdrop-blur-sm border-4 border-primary/20 flex items-center justify-center shadow-card">
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-primary-light to-primary overflow-hidden">
                  <div className="w-full h-full bg-white/10 flex items-center justify-center">
                    <span className="text-white text-6xl font-light">RÖ</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full backdrop-blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-light rounded-full backdrop-blur-sm shadow-sm"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
