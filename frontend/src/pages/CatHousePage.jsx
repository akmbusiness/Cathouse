import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Phone, MapPin, Star, Scissors, ShoppingBag, Cat, Truck, MessageCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const logoUrl = "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/cc0iozg8_Screenshot%202026-03-09%20045907.png";
const galleryImages = [
  "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/n9ii2f6p_Screenshot%202026-03-09%20052359.png",
  "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/m1dpqm7a_Screenshot%202026-03-09%20052404.png",
  "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/2lvqgpqv_Screenshot%202026-03-09%20052352.png",
  "https://customer-assets.emergentagent.com/job_paws-premium-pets/artifacts/7oyzowy1_Screenshot%202026-03-09%20052418.png",
  "https://images.unsplash.com/photo-1725419876939-f8f9987cf0d2?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1722336131103-cfaa6461e8d6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1551178092-d341b7a63ae3?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1761618843734-ffd54d9c493b?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
];

const serviceItems = [
  {
    title: "Cat Sales",
    text: "Healthy, well cared-for cats ready to become loving companions.",
    icon: Cat,
    testId: "service-cat-sales-card",
  },
  {
    title: "Grooming",
    text: "Professional cat grooming with bathing, coat care, and hygiene support.",
    icon: Scissors,
    testId: "service-grooming-card",
  },
  {
    title: "Pet Supplies",
    text: "Premium food, toys, litter, and daily essentials for your cat.",
    icon: ShoppingBag,
    testId: "service-pet-supplies-card",
  },
  {
    title: "Delivery",
    text: "Convenient and fast delivery options across Riyadh.",
    icon: Truck,
    testId: "service-delivery-card",
  },
];

const testimonials = [
  "Good and affordable cats. Polite workers and good behaviour.",
  "Friendly and knowledgeable staff, clean store, great grooming services.",
  "Accessible location, accommodating crew, very clean shop.",
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function CatHousePage() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Cat House (منزل القط) | Premium Cat Store in Riyadh";

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
      "Cat House in Riyadh offers premium cats, grooming, and pet supplies with 4.8-star trusted service.",
    );
    ensureMetaTag("keywords", "Cat store Riyadh, Cat grooming Riyadh, Pet shop Riyadh, Buy cats Riyadh");

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

  const heroImage = useMemo(() => galleryImages[0], []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Please complete all fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(`${API}/contact-inquiries`, formData);
      toast.success("Thanks! Your inquiry was sent successfully.");
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Sorry, we couldn't submit right now. Please call us directly.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="cat-gradient-bg min-h-screen text-[#151515]" data-testid="cat-house-main-page">
      <a
        href="https://wa.me/966595227853"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#1f1f1f] px-5 py-3 text-sm font-semibold text-white shadow-xl hover:-translate-y-1 hover:bg-[#2d2d2d]"
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
              <a key={item.href} href={item.href} className="text-sm font-semibold hover:text-[#a27125]" data-testid={`nav-link-${item.label.toLowerCase()}`}>
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
                <a key={item.href} href={item.href} className="rounded-md px-2 py-2 text-sm font-semibold hover:bg-[#f4ebdd]" data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}>
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
            Riyadh&apos;s Favorite
            <span className="block text-[#a27125]">Cat Store</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-[#3c3c3c] md:text-lg" data-testid="hero-subheading">
            Premium cats, grooming, and supplies — all in one place. Discover a clean, professional, and warm experience for cat lovers in Riyadh.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3" data-testid="hero-cta-group">
            <a href="#location" data-testid="hero-visit-store-link">
              <Button className="rounded-full bg-[#161616] px-6 text-white hover:bg-[#2d2d2d]" data-testid="hero-visit-store-button">
                Visit Our Store
              </Button>
            </a>
            <a href="tel:+966595227853" data-testid="hero-call-link">
              <Button variant="outline" className="rounded-full border-[#161616]/20 bg-[#fffaf0] px-6 hover:bg-[#f8ecd8]" data-testid="hero-call-button">
                Call Us
              </Button>
            </a>
          </div>
        </div>

        <div className="slide-fade-up-delay" data-testid="hero-image-wrapper">
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-3 shadow-xl" data-testid="hero-image-card">
            <img
              src={heroImage}
              alt="Premium cats at Cat House"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center"
              data-testid="hero-image"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section id="about" className="defer-render mx-auto w-[92%] max-w-7xl py-8 lg:py-14" data-testid="about-section">
        <div className="rounded-[2rem] border border-black/10 bg-white/80 p-8 shadow-sm lg:p-12" data-testid="about-card">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a27125]" data-testid="about-kicker">About Cat House</p>
          <h2 className="mt-3 text-base font-medium text-[#2f2f2f] md:text-lg" data-testid="about-title">
            A trusted home for cats and cat lovers in Riyadh.
          </h2>
          <p className="mt-4 max-w-4xl text-sm text-[#4c4c4c] md:text-base" data-testid="about-description">
            At Cat House (منزل القط), we combine passion for cats with expert care. Our knowledgeable team helps every customer find the right companion,
            grooming service, and daily essentials in a clean and welcoming environment. With a 4.8-star customer rating, families across Riyadh trust us
            for quality, professionalism, and kindness.
          </p>
        </div>
      </section>

      <section id="services" className="defer-render mx-auto w-[92%] max-w-7xl py-10 lg:py-14" data-testid="services-section">
        <div className="mb-7" data-testid="services-header">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a27125]" data-testid="services-kicker">Services</p>
          <h2 className="mt-2 text-base font-medium md:text-lg" data-testid="services-title">Everything your cat needs, in one premium store.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2" data-testid="services-grid">
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

      <section id="reviews" className="defer-render mx-auto w-[92%] max-w-7xl py-10 lg:py-14" data-testid="reviews-section">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3" data-testid="reviews-header">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a27125]" data-testid="reviews-kicker">Customer Reviews</p>
            <h2 className="mt-2 text-base font-medium md:text-lg" data-testid="reviews-title">Loved by cat owners across Riyadh.</h2>
          </div>
          <div className="rounded-full bg-[#1f1f1f] px-4 py-2 text-sm font-bold text-white" data-testid="reviews-rating-badge">4.8 / 5 ⭐</div>
        </div>
        <div className="grid gap-4 md:grid-cols-3" data-testid="reviews-grid">
          {testimonials.map((review, index) => (
            <Card key={review} className="rounded-3xl border-black/10 bg-white/85" data-testid={`review-card-${index + 1}`}>
              <CardContent className="pt-6">
                <p className="text-sm text-[#333] md:text-base" data-testid={`review-text-${index + 1}`}>
                  “{review}”
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="gallery" className="defer-render mx-auto w-[92%] max-w-7xl py-10 lg:py-14" data-testid="gallery-section">
        <div className="mb-7" data-testid="gallery-header">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a27125]" data-testid="gallery-kicker">Gallery</p>
          <h2 className="mt-2 text-base font-medium md:text-lg" data-testid="gallery-title">Cats, grooming moments, store vibes, and quality products.</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4" data-testid="gallery-grid">
          {galleryImages.map((imageUrl, index) => (
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

      <section id="location" className="defer-render mx-auto w-[92%] max-w-7xl py-10 lg:py-14" data-testid="location-section">
        <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]" data-testid="location-layout">
          <Card className="rounded-3xl border-black/10 bg-white/90" data-testid="location-info-card">
            <CardHeader>
              <CardTitle className="text-2xl" data-testid="location-card-title">Visit Cat House</CardTitle>
              <CardDescription className="text-sm md:text-base" data-testid="location-card-description">
                Umar Ibn Abdul Aziz Branch Rd, Az Zahra, Riyadh 12812, Saudi Arabia
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="flex items-center gap-2 text-sm md:text-base" data-testid="location-phone-text"><Phone className="h-4 w-4" /> +966 59 522 7853</p>
              <p className="flex items-start gap-2 text-sm md:text-base" data-testid="location-address-text"><MapPin className="mt-1 h-4 w-4" /> Az Zahra District, Riyadh</p>
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

      <section id="contact" className="defer-render mx-auto w-[92%] max-w-7xl pb-16 pt-10 lg:pt-14" data-testid="contact-section">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]" data-testid="contact-layout">
          <Card className="rounded-3xl border-black/10 bg-white/90" data-testid="contact-details-card">
            <CardHeader>
              <CardTitle className="text-2xl" data-testid="contact-details-title">Contact Cat House</CardTitle>
              <CardDescription className="text-sm md:text-base" data-testid="contact-details-description">
                Reach us by phone, visit our store, or send a quick message below.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm md:text-base">
              <p data-testid="contact-details-phone">Phone: +966 59 522 7853</p>
              <p data-testid="contact-details-location">Location: Umar Ibn Abdul Aziz Branch Rd, Az Zahra, Riyadh</p>
              <p data-testid="contact-details-hours">Business Hours: Daily 10:00 AM - 11:00 PM</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-black/10 bg-white/90" data-testid="contact-form-card">
            <CardHeader>
              <CardTitle className="text-2xl" data-testid="contact-form-title">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                <div data-testid="contact-name-field-wrap">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="h-11 rounded-xl"
                    data-testid="contact-form-name-input"
                  />
                </div>
                <div data-testid="contact-phone-field-wrap">
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="h-11 rounded-xl"
                    data-testid="contact-form-phone-input"
                  />
                </div>
                <div data-testid="contact-message-field-wrap">
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need"
                    className="min-h-28 rounded-xl"
                    data-testid="contact-form-message-input"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-[#161616] py-6 text-white hover:bg-[#2f2f2f] disabled:cursor-not-allowed disabled:opacity-60"
                  data-testid="contact-form-submit-button"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}