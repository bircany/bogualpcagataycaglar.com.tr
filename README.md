# bogualpcagataycaglar.com.tr

Uzman Psikolojik Danışman Böğüalp Çağatay Çağlar için hazırlanan kurumsal web sitesi.

## Teknolojiler

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Vercel

## Yerel geliştirme

```bash
npm install
npm run dev
```

Üretim kontrolü:

```bash
npm run lint
npm run build
```

## GitHub deposu

```text
https://github.com/bircany/bogualpcagataycaglar.com.tr
```

## Vercel kurulumu

1. Vercel'de **Add New > Project** seçeneğini açın.
2. `bircany/bogualpcagataycaglar.com.tr` deposunu içe aktarın.
3. Framework Preset olarak **Vite** kullanın.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Production domain olarak `bogualpcagataycaglar.com.tr` ve `www.bogualpcagataycaglar.com.tr` alan adlarını ekleyin.
7. Tek bir ana alan adı seçip diğerini Vercel Domains ekranından ana alana yönlendirin. Sitedeki canonical adres `https://bogualpcagataycaglar.com.tr/` olarak ayarlanmıştır.

## Google Ads ve Google tag

Google Ads hesabında iki web sitesi dönüşümü oluşturun:

- Telefon bağlantısı tıklaması
- WhatsApp bağlantısı tıklaması

Google Ads'in verdiği kimlikleri Vercel **Project Settings > Environment Variables** bölümüne ekleyin:

```env
VITE_GOOGLE_TAG_ID=AW-XXXXXXXXXX
VITE_GOOGLE_ADS_ID=AW-XXXXXXXXXX
VITE_GOOGLE_ADS_PHONE_CONVERSION_LABEL=XXXXXXXXXXXX
VITE_GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL=XXXXXXXXXXXX
```

Değişkenleri `Production`, `Preview` ve gerekirse `Development` ortamlarına ayrı ayrı tanımlayın. `VITE_` ile başlayan değerler tarayıcıya açıktır; bu alanlara gizli API anahtarı koymayın.

Site şu olayları gönderir:

- `generate_lead` + `lead_source: phone`
- `generate_lead` + `lead_source: whatsapp`
- Ads dönüşüm etiketi: telefon ve WhatsApp için ayrı `send_to`

Google etiketi kullanıcı izin vermeden yüklenmez. Çerez tercihi Google Consent Mode v2 sinyallerine bağlanmıştır.

## SEO yayına alma kontrolü

1. Domain yayına alındıktan sonra Google Search Console'a `bogualpcagataycaglar.com.tr` alan adını ekleyin.
2. DNS TXT kaydıyla alan adı sahipliğini doğrulayın.
3. Sitemap olarak `https://bogualpcagataycaglar.com.tr/sitemap.xml` gönderin.
4. Ana sayfayı URL Denetleme aracıyla kontrol edip dizine eklenmesini isteyin.
5. Google Rich Results Test ile JSON-LD çıktısını doğrulayın.
6. Google Tag Assistant ile izin ve dönüşüm olaylarını test edin.
7. Google Business Profile üzerinde ad, telefon ve konum bilgisini sitedeki bilgilerle aynı tutun.

## SEO dosyaları

- `index.html`: title, description, canonical, Open Graph ve JSON-LD
- `public/robots.txt`: tarama kuralları ve sitemap adresi
- `public/sitemap.xml`: dizine alınacak sayfalar
- `public/og-image.png`: sosyal paylaşım görseli
- `src/pages/Privacy.tsx`: gizlilik ve çerez bilgilendirmesi

## Environment şablonu

Gerekli değişkenler [`.env.example`](./.env.example) dosyasında yer alır. Yerel kullanımda `.env.local` oluşturun; gerçek kimlikleri repoya commit etmeyin.
