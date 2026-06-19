import { useState } from "react";
import { Calendar, Clock, ArrowRight, BookOpen, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { trackContactConversion } from "@/lib/googleTag";

interface ArticleContent {
  type: string;
  text?: string;
  items?: string[];
}

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: ArticleContent[];
}

const articles: Article[] = [
  {
    id: "emdr-terapisi-nedir",
    title: "EMDR Terapisi Nedir ve Nasıl Çalışır?",
    category: "Terapi Yaklaşımları",
    date: "19 Haziran 2026",
    readTime: "5 dk okuma",
    summary: "Travmatik veya zorlayıcı yaşantıların beyindeki işlenme şeklini yeniden düzenleyen EMDR terapisinin temel aşamaları ve iyileştirici gücü.",
    content: [
      {
        type: "paragraph",
        text: "Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme (EMDR), özellikle travma sonrası stres bozukluğu, kaygı, fobi ve geçmişin rahatsız edici anılarıyla çalışmada tüm dünyada kabul görmüş güçlü bir psikoterapi yaklaşımıdır. Geleneksel konuşma terapilerinden farklı olarak EMDR, beynin bilgi işleme sistemini doğrudan hedef alır."
      },
      {
        type: "heading",
        text: "Bilgi İşleme Modeli ve Travma"
      },
      {
        type: "paragraph",
        text: "Günlük yaşantımızda karşılaştığımız olaylar, beynimiz tarafından işlenerek sağlıklı anılar haline getirilir. Ancak kişi çok yoğun bir korku, çaresizlik veya stres anı yaşarsa (kaza, kayıp, şiddet veya çocuklukta yaşanan ihmal/istismar gibi), beynin bu bilgi işleme sistemi sekteye uğrayabilir. Sonuç olarak, o anı tüm canlılığıyla (görüntüler, sesler, kokular, bedensel duyumlar ve negatif inançlar) işlenmemiş bir şekilde kilitli kalır. Günlük yaşamda bu anıyı tetikleyen bir şey olduğunda, kişi sanki o travmatik anı hala devam ediyormuş gibi yoğun tepkiler verebilir."
      },
      {
        type: "heading",
        text: "EMDR Nasıl İyileşme Sağlar?"
      },
      {
        type: "paragraph",
        text: "EMDR terapisi, bu kilitli kalmış anıların 'çift yönlü uyarım' (genellikle terapistin parmağını takip eden sağa sola göz hareketleri, kulaklıktan verilen sesler veya ellere uygulanan hafif titreşimler) yoluyla yeniden işlenmesini sağlar. Bu süreçte:"
      },
      {
        type: "list",
        items: [
          "Duyarsızlaşma gerçekleşir: Geçmişteki acı veren anının getirdiği yoğun duygusal ve bedensel rahatsızlık seviyesi azalır.",
          "Bilişsel yeniden yapılanma sağlanır: Kişi olayla ilgili 'Ben değersizim', 'Güvende değilim' gibi olumsuz inançlar yerine 'Elimden geleni yaptım', 'Şu an güvendeyim' gibi olumlu ve gerçekçi inançlar geliştirmeye başlar."
        ]
      },
      {
        type: "heading",
        text: "EMDR Terapisinin Aşamaları"
      },
      {
        type: "paragraph",
        text: "EMDR süreci 8 aşamalı yapılandırılmış bir protokolden oluşur. İlk olarak danışanın geçmişi alınır, hedefler belirlenir ve danışan sürece hazırlanır. Daha sonra hedef anı seçilerek uyarım aşamasına geçilir. Terapist eşliğinde gerçekleştirilen uyarım setleri ile anı duyarsızlaşana ve olumlu inançlar yerleşene kadar devam edilir. Süreç, bedensel duyumların taranması ve kapanış ile son bulur."
      },
      {
        type: "paragraph",
        text: "EMDR, geçmişin yüklerinden arınarak bugünü ve geleceği daha sağlıklı, dengeli yaşayabilmek adına oldukça etkili bir köprü görevi görmektedir."
      }
    ]
  },
  {
    id: "dikkat-gelisimi-ve-moxo",
    title: "Çocuk ve Ergenlerde Dikkat Gelişimi ve MOXO Testi",
    category: "Dikkat ve Gelişim",
    date: "18 Haziran 2026",
    readTime: "6 dk okuma",
    summary: "Dikkat eksikliği ve dürtüsellik belirtilerinin erken tespiti için kullanılan objektif MOXO testinin önemi ve dikkat becerilerini güçlendirme yolları.",
    content: [
      {
        type: "paragraph",
        text: "Günümüz dünyasında çocukların ve gençlerin maruz kaldığı uyaran miktarı (akıllı telefonlar, tabletler, yoğun ders programları vb.) tarihte hiç olmadığı kadar yüksek. Bu durum dikkat dağınıklığı, odaklanma sorunları ve dürtüsellik gibi problemlerin daha sık yaşanmasına zemin hazırlıyor. Ancak, akademik başarıyı ve sosyal yaşamı doğrudan etkileyen dikkat gelişimini desteklemek ve olası eksiklikleri erken fark etmek mümkündür."
      },
      {
        type: "heading",
        text: "MOXO Dikkat Testi Nedir?"
      },
      {
        type: "paragraph",
        text: "MOXO, dikkat eksikliği ve hiperaktivite bozukluğu (DEHB) tanısına yardımcı olan, bilgisayar ortamında uygulanan, bilimsel olarak kanıtlanmış objektif bir dikkat ölçüm testidir. Test, sadece odaklanmayı ölçmekle kalmaz; danışanı tıpkı günlük hayattaki gibi çeşitli işitsel ve görsel çeldiricilere maruz bırakır. Bu sayede kişinin performansı 4 temel alanda değerlendirilir:"
      },
      {
        type: "list",
        items: [
          "Dikkat: Görevi sürdürme ve doğru hedeflere odaklanma yeteneği.",
          "Zamanlama: Doğru zamanda doğru tepkiyi verme hızı.",
          "Dürtüsellik: Aceleci kararlar vermeden kendini frenleyebilme becerisi.",
          "Hiperaktivite: Çeldiriciler karşısında gereksiz motor hareketlilik gösterme eğilimi."
        ]
      },
      {
        type: "heading",
        text: "Dikkat Geliştirme Programı (Attentioner)"
      },
      {
        type: "paragraph",
        text: "MOXO testi sonucunda dikkat profili belirlenen çocuk ve ergenlerde, eksik alanları güçlendirmek amacıyla yapılandırılmış programlar uygulanır. Bunlardan en etkilisi olan 'Attentioner Dikkat Geliştirme Programı', 7-18 yaş grubuna yönelik, beynin yönetici işlevlerini ve odaklanma becerilerini eğlenceli egzersizlerle geliştiren bir programdır."
      },
      {
        type: "paragraph",
        text: "Bu programla çocuklar, seçici dikkatlerini artırmayı, çeldiriciler karşısında odaklarını korumayı, zamanı yönetmeyi ve dürtülerini kontrol altında tutmayı öğrenirler."
      },
      {
        type: "heading",
        text: "Ebeveynlere Öneriler"
      },
      {
        type: "paragraph",
        text: "Çocuğunuzun dikkat gelişimini desteklemek için evde ekran süresini sınırlandırabilir, çalışma masasını çeldiricilerden uzak tutacak şekilde düzenleyebilir ve düzenli uyku/beslenme saatleri oluşturabilirsiniz. Unutmayın, dikkat kas gibidir; doğru egzersizlerle ve profesyonel rehberlikle geliştirilebilir."
      }
    ]
  },
  {
    id: "sinav-kaygisi-ve-ebeveyn",
    title: "Sınav Kaygısıyla Baş Etmede Ebeveyn Yaklaşımları",
    category: "Ebeveyn Rehberi",
    date: "15 Haziran 2026",
    readTime: "4 dk okuma",
    summary: "LGS, YKS gibi sınav dönemlerinde çocukların hissettiği yoğun kaygıyı azaltmak ve onlara doğru şekilde destek olmak için ebeveynlerin izlemesi gereken stratejiler.",
    content: [
      {
        type: "paragraph",
        text: "Sınav kaygısı; öğrenilen bilginin sınav sırasında etkili bir şekilde kullanılmasına engel olan ve başarının düşmesine yol açan yoğun bir endişe durumudur. Sınava hazırlanan öğrencilerde belirli düzeyde bir kaygı motivasyon sağlayıcıyken, aşırı düzeye ulaştığında öğrencinin potansiyelini sergilemesini engeller. Bu zorlu süreçte ebeveynlerin sergilediği tutumlar, kaygının seyrini belirleyen en önemli faktörlerdendir."
      },
      {
        type: "heading",
        text: "Sınav Kaygısının Belirtileri Nelerdir?"
      },
      {
        type: "paragraph",
        text: "Kaygılı bir child/gençte mide bulantısı, baş ağrısı, çarpıntı, terleme gibi fiziksel belirtilerin yanı sıra; 'Kazanamayacağım', 'Her şeyi unutacağım' gibi olumsuz düşünceler, ders çalışmaktan kaçınma ve ani öfke patlamaları gibi davranışsal tepkiler gözlemlenebilir."
      },
      {
        type: "heading",
        text: "Ebeveynler Nasıl Yaklaşmalı?"
      },
      {
        type: "list",
        items: [
          "Beklentilerinizi Gerçekçi Tutun: Çocuğunuzu kendi kapasitesinin üzerinde hedeflere zorlamayın veya başka çocuklarla kıyaslamaktan kaçının.",
          "Koşulsuz Sevgi Sunun: Çocuğunuza vereceğiniz değerin sınav sonucuna bağlı olmadığını, onu her halükarda sevdiğinizi ve destekleyeceğinizi hissettirin.",
          "Duygularını Küçümsemeyin: 'Bunda korkacak ne var?' demek yerine, 'Kaygılandığını görebiliyorum, bu çok normal. Yanındayım.' diyerek empati kurun.",
          "Evdeki Gündemi Sınavla Sınırlandırmayın: Aile içi sohbetlerin ve etkinliklerin sadece derslerden ibaret olmamasına özen gösterin."
        ]
      },
      {
        type: "heading",
        text: "Ne Zaman Profesyonel Destek Alınmalı?"
      },
      {
        type: "paragraph",
        text: "Eğer çocuğun uykusu ve iştahı bozulduysa, sınav lafı geçtiğinde ağlama krizleri yaşıyorsa ve kaygı düzeyi günlük yaşam kalitesini ciddi şekilde düşürüyorsa, bir uzmandan psikolojik destek (özellikle bilişsel davranışçı terapi veya EMDR) alınması sürecin çok daha sağlıklı yönetilmesine yardımcı olacaktır."
      }
    ]
  }
];

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleOpenDialog = (article: Article) => {
    setSelectedArticle(article);
    trackContactConversion("article_view", article.id);
  };

  return (
    <section id="articles" className="section-shell bg-[#fdfaf2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl animate-blur-in">
          <p className="section-kicker">Makaleler</p>
          <h2 className="section-title text-gradient-dark">Zihinsel Sağlık ve Gelişim Yazıları.</h2>
          <p className="section-copy">
            Uzmanlık alanlarımdan derlediğim, psikolojik gelişim, dikkat süreçleri ve terapi yaklaşımlarına dair bilgilendirici içerikler.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-blur-in [animation-delay:150ms]">
          {articles.map((article) => (
            <article
              key={article.id}
              className="flex flex-col justify-between rounded-[2rem] border border-primary/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card group cursor-pointer"
              onClick={() => handleOpenDialog(article)}
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary-dark">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-foreground/50">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="mb-4 font-heading text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary-dark">
                  {article.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-foreground/60">
                  {article.summary}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-primary/5 pt-4">
                <span className="flex items-center gap-1.5 text-xs text-foreground/45 font-medium">
                  <Calendar className="h-3.5 w-3.5" />
                  {article.date}
                </span>
                <span className="inline-flex items-center text-sm font-bold text-primary-dark transition-all group-hover:text-foreground">
                  Devamını Oku
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>

        <Dialog open={selectedArticle !== null} onOpenChange={(open) => !open && setSelectedArticle(null)}>
          {selectedArticle && (
            <DialogContent className="max-h-[85vh] overflow-y-auto max-w-2xl md:p-8 rounded-[2rem] border-primary/15 shadow-card bg-background">
              <DialogHeader className="mb-5 border-b border-primary/10 pb-4 text-left">
                <div className="mb-3.5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary-dark">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs text-foreground/45 flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> {selectedArticle.date}
                  </span>
                  <span className="text-xs text-foreground/45 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {selectedArticle.readTime}
                  </span>
                </div>
                <DialogTitle className="font-heading text-2xl font-bold leading-snug text-foreground md:text-3xl">
                  {selectedArticle.title}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  {selectedArticle.summary}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 text-base leading-relaxed text-foreground/85">
                {selectedArticle.content.map((block, idx) => {
                  if (block.type === "heading") {
                    return (
                      <h4 key={idx} className="font-heading text-lg font-bold text-foreground pt-3 border-l-2 border-primary pl-3">
                        {block.text}
                      </h4>
                    );
                  } else if (block.type === "list") {
                    return (
                      <ul key={idx} className="space-y-2.5 pl-5 list-disc text-foreground/75">
                        {block.items?.map((item, itemIdx) => {
                          const parts = item.split(":");
                          if (parts.length > 1) {
                            return (
                              <li key={itemIdx} className="leading-relaxed">
                                <b className="text-foreground font-semibold">{parts[0]}:</b>{parts.slice(1).join(":")}
                              </li>
                            );
                          }
                          return <li key={itemIdx} className="leading-relaxed">{item}</li>;
                        })}
                      </ul>
                    );
                  } else {
                    return (
                      <p key={idx} className="text-foreground/75">
                        {block.text}
                      </p>
                    );
                  }
                })}
              </div>

              {/* Modal CTA */}
              <div className="mt-8 rounded-2xl border border-primary/15 bg-secondary/25 p-5 text-center">
                <p className="text-sm font-medium text-foreground">
                  Bu ve benzeri konularda profesyonel danışmanlık hizmeti almak veya ön görüşme planlamak için iletişime geçebilirsiniz.
                </p>
                <a
                  href="https://wa.me/905070314041"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackContactConversion("whatsapp", `article_modal_cta_${selectedArticle.id}`)}
                  className="mt-4 inline-flex w-full justify-center sm:w-auto"
                >
                  <Button className="btn-cta w-full sm:w-auto">
                    <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp ile Randevu Al
                  </Button>
                </a>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Articles;
