// Basic Barbershop — interaksi ringan tanpa library

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ---------- Header: latar solid setelah scroll ---------- */
const head = $(".site-head");
const onScrollHead = () => head.classList.toggle("scrolled", window.scrollY > 24);
onScrollHead();
window.addEventListener("scroll", onScrollHead, { passive: true });

/* ---------- Menu mobile ---------- */
const menuBtn = $(".menu-btn");
menuBtn.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

// Tutup menu saat salah satu link diklik
$$(".nav a").forEach((a) =>
  a.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

/* ---------- Reveal saat elemen masuk viewport ---------- */
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduced || !("IntersectionObserver" in window)) {
  $$(".reveal").forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" }
  );
  $$(".reveal").forEach((el) => io.observe(el));
}

/* ---------- Lightbox galeri ---------- */
const lightbox = $("#lightbox");
const lightboxImg = $("img", lightbox);

$$(".gal").forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = $("img", btn);
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt;
    lightbox.showModal();
  });
});

$(".lightbox-close", lightbox).addEventListener("click", () => lightbox.close());

// Klik area gelap di luar gambar juga menutup
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.close();
});

/* ---------- Sorot baris jam buka untuk hari ini ---------- */
const today = new Date().getDay(); // 0 = Minggu
$$(".hours li").forEach((li) => {
  const days = li.dataset.day.split(",").map(Number);
  if (days.includes(today)) li.classList.add("today");
});

/* ---------- Bar CTA melayang setelah melewati hero ---------- */
const ctaBar = $("#ctabar");
const hero = $(".hero");
const onScrollBar = () => {
  ctaBar.classList.toggle("show", window.scrollY > hero.offsetHeight * 0.55);
};
onScrollBar();
window.addEventListener("scroll", onScrollBar, { passive: true });

/* ---------- Tahun di footer ---------- */
$("#tahun").textContent = new Date().getFullYear();
