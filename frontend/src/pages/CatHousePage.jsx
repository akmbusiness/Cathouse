import { useEffect } from "react";
import { Phone, MapPin, Star, Scissors, ShoppingBag, Cat, Dog, Bird, ShieldCheck, Sparkles, HeartHandshake, MessageCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const logoUrl = "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/cc0iozg8_Screenshot%202026-03-09%20045907.png";
const uploadedImages = [
  "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/cxrex4eg_Screenshot%202026-03-09%20052533.png",
  "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/alnmmhnp_Screenshot%202026-03-09%20052538.png",
  "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/2cmno9rl_Screenshot%202026-03-09%20052551.png",
  "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/7ea3ace3_Screenshot%202026-03-09%20052544.png",
  "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/7oyzowy1_Screenshot%202026-03-09%20052418.png",
  "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/m1dpqm7a_Screenshot%202026-03-09%20052404.png",
  "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/n9ii2f6p_Screenshot%202026-03-09%20052359.png",
  "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/2lvqgpqv_Screenshot%202026-03-09%20052352.png",
  "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/6wc4tdc9_Screenshot%202026-03-09%20052418.png",
  "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/ndov26ka_Screenshot%202026-03-09%20052544.png",
  "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/pwn1g019_Screenshot%202026-03-09%20052605.png",
];

const serviceItems = [
  {
    title: "Pet Bath & Grooming",
    text: "Clean and safe bath service with gentle grooming care for pets.",
    icon: Scissors,
    testId: "service-bath-grooming-card",
  },
  {
    title: "Premium Pet Food",
    text: "Balanced nutrition options for cats, dogs, and birds.",
    icon: ShoppingBag,
    testId: "service-premium-food-card",
  },
  {
    title: "Pet Toys & Accessories",
    text: "Fun toys and essential accessories to keep pets active and happy.",
    icon: Sparkles,
    testId: "service-toys-accessories-card",
  },
];

const productItems = [
  { title: "Pet Toys", image: "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/ojc51dj4_Screenshot%202026-03-09%20052458.png" },
  { title: "Cat Food", image: "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/5ouwdpj8_Screenshot%202026-03-09%20052551.png" },
  { title: "Dog Food", image: "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/ndov26ka_Screenshot%202026-03-09%20052544.png" },
  { title: "Bird Supplies", image: "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/6wc4tdc9_Screenshot%202026-03-09%20052418.png" },
  { title: "Pet Litter", image: "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/pwn1g019_Screenshot%202026-03-09%20052605.png" },
  { title: "Pet Equipment", image: "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/2lvqgpqv_Screenshot%202026-03-09%20052352.png" },
];

const whyChooseUs = [
  { title: "High Quality Pet Products", icon: ShieldCheck, testId: "why-quality-point" },
  { title: "Friendly Service", icon: HeartHandshake, testId: "why-friendly-point" },
  { title: "Clean and Safe Pet Bath", icon: Scissors, testId: "why-clean-bath-point" },
  { title: "Trusted by Local Pet Owners", icon: Star, testId: "why-trusted-point" },
];

const navItems = [
  { label: "About", href: "#about", testId: "about" },
  { label: "Services", href: "#services", testId: "services" },
  { label: "Products", href: "#products", testId: "products" },
  { label: "Why Choose Us", href: "#why-choose-us", testId: "why-choose-us" },
  { label: "Gallery", href: "#gallery", testId: "gallery" },
  { label: "Contact", href: "#contact", testId: "contact" },
];

export default function CatHousePage() {
  useEffect(() => {
    document.title = "Cat House | Modern Pet Store in Riyadh";

    const ensureMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name='${name}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    ensureMetaTag(
      "description",
      "Cat House is your local pet paradise for cats, dogs, and birds with pet bath, premium food, toys, and pet equipment.",
    );
    ensureMetaTag("keywords", "Cat House Riyadh, pet bath Riyadh, cat dog bird store, premium pet food Riyadh, pet toys and equipment");

    const preconnectUrls = ["https://images.unsplash.com", "https://customer-assets.emergentagent.com"];
    preconnectUrls.forEach((url) => {
      const existing = document.querySelector(`link[rel='preconnect'][href='${url}']`);
      if (!existing) {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = url;
        link.crossOrigin = "";
        document.head.appendChild(link);
      }
    });
  }, []);

  return (
    <main className="cat-gradient-bg min-h-screen text-[#151515]" data-testid="cat-house-main-page">
      <a
        href="https://wa.me/966595227853"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-20 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#1f1f1f] px-5 py-3 text-sm font-semibold text-white shadow-xl hover:-translate-y-1 hover:bg-[#2d2d2d] md:bottom-5"
        data-testid="floating-whatsapp-button"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>

      <header className="sticky top-0 z-40 border-b border-black/10 soft-glass" data-testid="top-navigation">
        <div className="mx-auto flex w-[92%] max-w-7xl items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-3" data-testid="brand-logo-link">
            <img
              src={logoUrl}
              alt="Cat House logo"
              className="h-12 w-12 rounded-full object-cover"
              data-testid="brand-logo-image"
              loading="eager"
              decoding="async"
            />
            <div data-testid="brand-name-container">
              <p className="text-base font-bold leading-none">Cat House</p>
              <p className="text-xs text-[#5b5b5b]">منزل القط</p>
            </div>
          </a>

          <nav className="hidden items-center gap-5 lg:flex" data-testid="desktop-navigation-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-semibold hover:text-[#a27125]" data-testid={`nav-link-${item.testId}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="tel:+966595227853" data-testid="nav-call-button-link">
            <Button className="hidden rounded-full bg-[#1c1c1c] px-5 text-white hover:bg-[#323232] lg:inline-flex" data-testid="nav-call-button">
              <Phone className="mr-2 h-4 w-4" /> Call Us
            </Button>
          </a>

          <details className="lg:hidden" data-testid="mobile-menu-wrapper">
            <summary className="list-none cursor-pointer rounded-full border border-black/15 bg-white/80 p-2" data-testid="mobile-menu-trigger">
              <Menu className="h-5 w-5" />
            </summary>
            <div className="absolute right-4 mt-2 flex min-w-44 flex-col rounded-xl border bg-white p-3 shadow-lg" data-testid="mobile-menu-list">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="rounded-md px-2 py-2 text-sm font-semibold hover:bg-[#f4ebdd]" data-testid={`mobile-nav-link-${item.testId}`}>
                  {item.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </header>

      <section id="home" className="mx-auto grid w-[92%] max-w-7xl gap-8 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20" data-testid="hero-section">
        <div className="slide-fade-up self-center" data-testid="hero-content">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#232323]/20 bg-white/80 px-4 py-1 text-xs font-semibold" data-testid="hero-rating-pill">
            <Star className="h-3.5 w-3.5 fill-[#d7a64f] text-[#d7a64f]" /> 4.8 ⭐ (40 Reviews)
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl" data-testid="hero-heading">
            Welcome to Cat House —
            <span className="block text-[#a27125]">Your Local Pet Paradise</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-[#3c3c3c] md:text-lg" data-testid="hero-subheading">
            Everything your pets need in one place.
          </p>

          <div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-2xl border border-[#d0832b]/25 bg-[#fff2df] px-4 py-2" data-testid="hero-animal-pill">
            <Cat className="h-4 w-4 text-[#d0832b]" />
            <Dog className="h-4 w-4 text-[#d0832b]" />
            <Bird className="h-4 w-4 text-[#d0832b]" />
            <span className="text-xs font-semibold text-[#6c4518]" data-testid="hero-animal-pill-text">All Animal Care: Cats • Dogs • Birds</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3" data-testid="hero-cta-group">
            <a href="#contact" data-testid="hero-visit-store-link">
              <Button className="rounded-full bg-[#161616] px-6 text-white hover:bg-[#2d2d2d]" data-testid="hero-visit-store-button">
                Visit Our Store
              </Button>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Umar+Ibn+Abdul+Aziz+Branch+Rd+Az+Zahra+Riyadh" target="_blank" rel="noreferrer" data-testid="hero-directions-link">
              <Button variant="outline" className="rounded-full border-[#161616]/20 bg-[#fffaf0] px-6 hover:bg-[#f8ecd8]" data-testid="hero-call-button">
                Get Directions
              </Button>
            </a>
          </div>
        </div>

        <div className="slide-fade-up-delay" data-testid="hero-image-wrapper">
          <div className="grid grid-cols-2 gap-3" data-testid="hero-image-grid">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-lg" data-testid="hero-cat-image-card">
              <img src="https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/n9ii2f6p_Screenshot%202026-03-09%20052359.png" alt="Happy cats at Cat House" className="aspect-square w-full rounded-2xl object-cover" data-testid="hero-cat-image" loading="eager" fetchPriority="high" decoding="async" />
            </div>
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-lg" data-testid="hero-dog-image-card">
              <img src="https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/ndov26ka_Screenshot%202026-03-09%20052544.png" alt="Dog care and products" className="aspect-square w-full rounded-2xl object-cover" data-testid="hero-dog-image" loading="eager" decoding="async" />
            </div>
            <div className="col-span-2 overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-lg" data-testid="hero-bird-image-card">
              <img src="https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/6wc4tdc9_Screenshot%202026-03-09%20052418.png" alt="Bird care section at store" className="aspect-[2/1] w-full rounded-2xl object-cover" data-testid="hero-bird-image" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="defer-render mx-auto w-[92%] max-w-7xl py-8 lg:py-14" data-testid="about-section">
        <div className="rounded-[2rem] border border-black/10 bg-white/80 p-8 shadow-sm lg:p-12" data-testid="about-card">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a27125]" data-testid="about-kicker">About Cat House</p>
          <h2 className="mt-3 text-base font-medium text-[#2f2f2f] md:text-lg" data-testid="about-title">
            A trusted local pet store for caring owners.
          </h2>
          <p className="mt-4 max-w-4xl text-sm text-[#4c4c4c] md:text-base" data-testid="about-description">
            Cat House is a trusted local pet store providing high-quality products and caring services for cats, dogs, and birds. From clean pet bath support
            to daily essentials, we make pet care easy, professional, and friendly for every family in Riyadh.
          </p>
        </div>
      </section>

      <section id="services" className="defer-render mx-auto w-[92%] max-w-7xl py-10 lg:py-14" data-testid="services-section">
        <div className="mb-7" data-testid="services-header">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a27125]" data-testid="services-kicker">Services</p>
          <h2 className="mt-2 text-base font-medium md:text-lg" data-testid="services-title">Professional services designed for healthy and happy pets.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3" data-testid="services-grid">
          {serviceItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="section-reveal rounded-3xl border-black/10 bg-white/85" data-testid={item.testId}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl" data-testid={`${item.testId}-title`}>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f5e8d2] text-[#a27125]" data-testid={`${item.testId}-icon-wrap`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-[#555] md:text-base" data-testid={`${item.testId}-description`}>
                    {item.text}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="products" className="defer-render mx-auto w-[92%] max-w-7xl py-10 lg:py-14" data-testid="products-section">
        <div className="mb-7" data-testid="products-header">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a27125]" data-testid="products-kicker">Products</p>
          <h2 className="mt-2 text-base font-medium md:text-lg" data-testid="products-title">Top categories for everyday pet care.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-testid="products-grid">
          {productItems.map((item, index) => (
            <Card key={item.title} className="overflow-hidden rounded-3xl border-black/10 bg-white/90" data-testid={`product-card-${index + 1}`}>
              <div className="overflow-hidden" data-testid={`product-image-wrap-${index + 1}`}>
                <img src={item.image} alt={item.title} className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105" data-testid={`product-image-${index + 1}`} loading={index < 2 ? "eager" : "lazy"} decoding="async" />
              </div>
              <CardContent className="pt-4">
                <p className="font-semibold" data-testid={`product-title-${index + 1}`}>{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="why-choose-us" className="defer-render mx-auto w-[92%] max-w-7xl py-10 lg:py-14" data-testid="why-choose-section">
        <div className="mb-7" data-testid="why-choose-header">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a27125]" data-testid="why-choose-kicker">Why Choose Us</p>
          <h2 className="mt-2 text-base font-medium md:text-lg" data-testid="why-choose-title">Professional care with a warm neighborhood experience.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2" data-testid="why-choose-grid">
          {whyChooseUs.map((point) => {
            const Icon = point.icon;
            return (
              <Card key={point.title} className="rounded-3xl border-black/10 bg-white/90" data-testid={point.testId}>
                <CardContent className="flex items-center gap-3 pt-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f8ead6] text-[#b16d1f]" data-testid={`${point.testId}-icon`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="font-semibold" data-testid={`${point.testId}-text`}>{point.title}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="gallery" className="defer-render mx-auto w-[92%] max-w-7xl py-10 lg:py-14" data-testid="gallery-section">
        <div className="mb-7" data-testid="gallery-header">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a27125]" data-testid="gallery-kicker">Gallery</p>
          <h2 className="mt-2 text-base font-medium md:text-lg" data-testid="gallery-title">Pets, toys, food, and store interior from Cat House.</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4" data-testid="gallery-grid">
          {uploadedImages.map((imageUrl, index) => (
            <div key={`${imageUrl}-${index}`} className="group overflow-hidden rounded-2xl border border-black/10 bg-white" data-testid={`gallery-item-${index + 1}`}>
              <img
                src={imageUrl}
                alt={`Cat House gallery image ${index + 1}`}
                className="aspect-square w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                data-testid={`gallery-image-${index + 1}`}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="defer-render mx-auto w-[92%] max-w-7xl pb-16 pt-10 lg:pt-14" data-testid="contact-section">
        <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]" data-testid="location-layout">
          <Card className="rounded-3xl border-black/10 bg-white/90" data-testid="location-info-card">
            <CardHeader>
              <CardTitle className="text-2xl" data-testid="location-card-title">Contact Cat House</CardTitle>
              <CardDescription className="text-sm md:text-base" data-testid="location-card-description">
                Umar Ibn Abdul Aziz Branch Rd, Az Zahra, Riyadh 12812, Saudi Arabia
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="flex items-center gap-2 text-sm md:text-base" data-testid="location-phone-text"><Phone className="h-4 w-4" /> +966 59 522 7853</p>
              <p className="flex items-start gap-2 text-sm md:text-base" data-testid="location-address-text"><MapPin className="mt-1 h-4 w-4" /> Az Zahra District, Riyadh</p>
              <p className="text-sm md:text-base" data-testid="location-hours-text">Opening Hours: Daily 10:00 AM - 11:00 PM</p>
              <div className="flex flex-wrap gap-2 pt-2" data-testid="location-action-buttons">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Umar+Ibn+Abdul+Aziz+Branch+Rd+Az+Zahra+Riyadh"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="get-directions-link"
                >
                  <Button className="rounded-full bg-[#161616] text-white hover:bg-[#323232]" data-testid="get-directions-button">Get Directions</Button>
                </a>
                <a href="tel:+966595227853" data-testid="call-store-link">
                  <Button variant="outline" className="rounded-full border-black/15" data-testid="call-store-button">Call Store</Button>
                </a>
                <a href="https://wa.me/966595227853" target="_blank" rel="noreferrer" data-testid="contact-whatsapp-link">
                  <Button className="rounded-full bg-[#d77d1f] text-white hover:bg-[#bc6510]" data-testid="contact-whatsapp-button">WhatsApp</Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="overflow-hidden rounded-3xl border border-black/10 shadow-md" data-testid="google-map-embed-wrapper">
            <iframe
              src="https://www.google.com/maps?q=Umar%20Ibn%20Abdul%20Aziz%20Branch%20Rd%20Az%20Zahra%20Riyadh&output=embed"
              title="Cat House Riyadh Location"
              className="h-[340px] w-full md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="google-map-embed"
            />
          </div>
        </div>
      </section>
    </main>
  );
}