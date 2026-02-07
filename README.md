# Nexus Language Academy

Nexus Language Academy'nin resmi web platformu. Online İngilizce eğitim hizmetleri sunan akademinin tanıtım sitesi ve (yakında) tam kapsamlı eğitim yönetim sistemi.

## Proje Yapısı

```
nexus-language-academy/
├── frontend/          # Next.js web uygulaması
├── backend/           # (Yakında...)
└── CLAUDE.md          # Geliştirici kılavuzu
```

---

## Frontend

Next.js 16 (App Router) ile geliştirilmiş, Vercel üzerinde deploy edilen statik site.

### Teknoloji

| Araç | Versiyon |
|------|---------|
| Next.js | 16 (App Router + Turbopack) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| Paket Yöneticisi | pnpm |

### Özellikler

- Responsive tasarım (mobil, tablet, masaüstü)
- Animasyonlu dekoratif arka plan elementleri ve dalga geçişleri
- Sıcak krem/beyaz/yeşil renk paleti
- WhatsApp entegrasyonu (CTA butonları, form yönlendirmeleri)
- SEO optimizasyonlu statik sayfalar
- Tüm Türkçe içerik JSON veri dosyalarından yönetiliyor

### Sayfalar

| Sayfa | Yol | Açıklama |
|-------|-----|----------|
| Ana Sayfa | `/` | Fiyat, tanıtım videosu, neden Nexus, kurs özeti, CTA |
| Programlar | `/courses` | Seviye bazlı eğitim programları (A1-B2) |
| Eğitmenler | `/teachers` | Eğitmen kadrosu ve tanıtım videoları |
| Ücretlendirme | `/pricing` | Paket seçenekleri ve fiyatlandırma |
| Seviye Tespit | `/placement-test` | Ücretsiz seviye tespit sınavı formu |

### Kurulum ve Çalıştırma

```bash
cd frontend
pnpm install
pnpm dev        # Geliştirme sunucusu (localhost:3000)
```

```bash
pnpm build      # Production build
pnpm lint       # ESLint kontrolü
```

### Ortam Değişkenleri

```env
NEXT_PUBLIC_WA_PHONE=905XXXXXXXXX   # WhatsApp iletişim numarası
```

---

## Backend

> ### Yakında geliyor...
>
> Backend tarafı aktif olarak planlanıyor ve geliştirme aşamasına geçmek üzere. Hedeflenen özellikler:
>
> - **Öğrenci Paneli** — Ders takibi, ödev yönetimi, ilerleme raporları
> - **Eğitmen Paneli** — Ders planlama, öğrenci değerlendirme, materyal paylaşımı
> - **Admin Dashboard** — Tam kapsamlı akademi yönetim sistemi
> - **Online Seviye Tespit Sınavı** — Otomatik değerlendirmeli interaktif sınav
> - **Ödeme Sistemi** — Online ders paketi satın alma
> - **Ders Rezervasyon Sistemi** — Takvim bazlı ders planlama ve hatırlatmalar
> - **Bildirim Sistemi** — E-posta ve WhatsApp bildirimleri
>
> Teknoloji seçimleri ve mimari kararlar netleştiriliyor. Bu alan güncellenecek.

---

## Geliştirme

Detaylı geliştirici kılavuzu için [CLAUDE.md](./CLAUDE.md) dosyasına bakın.

### Git Workflow

1. `main` branch'e direkt commit yapılmaz
2. Yeni branch: `NLA-XXX` formatında
3. PR açılır, review sonrası merge edilir
4. Vercel merge sonrası otomatik deploy eder
