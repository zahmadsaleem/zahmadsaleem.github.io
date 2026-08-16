/* ============================================================
   Web components for madsolame.com — vanilla, no dependencies.
   These only *enhance* the static HTML: every page works and
   is crawlable with JavaScript disabled.
   ============================================================ */

/* ---------- <project-media> ----------
   Usage:
   <project-media>
     <img class="pm-main" src="..." alt="...">
     <div class="pm-thumbs">
       <a href="/assets/img/full/x.jpg"><img src="..." alt="..."></a>
       ...
     </div>
   </project-media>
   Clicking a thumbnail swaps the main image (with a quick fade).
   Without JS the thumbnails are plain links to the full image. */
class ProjectMedia extends HTMLElement {
  connectedCallback() {
    this.main = this.querySelector(".pm-main");
    this.thumbs = [...this.querySelectorAll(".pm-thumbs a")];
    if (!this.main || this.thumbs.length === 0) return;

    this.setCurrent(this.thumbs[0]);
    for (const thumb of this.thumbs) {
      thumb.addEventListener("click", (event) => {
        event.preventDefault();
        if (thumb.getAttribute("aria-current") === "true") return;
        this.setCurrent(thumb);
      });
    }
  }

  setCurrent(thumb) {
    const img = thumb.querySelector("img");
    this.main.src = thumb.href;
    this.main.alt = img ? img.alt : this.main.alt;
    for (const t of this.thumbs) t.removeAttribute("aria-current");
    thumb.setAttribute("aria-current", "true");
    if (matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      this.main.animate(
        [{ opacity: 0.3 }, { opacity: 1 }],
        { duration: 250, easing: "ease-out" }
      );
    }
  }
}
customElements.define("project-media", ProjectMedia);

/* ---------- <gallery-lightbox> ----------
   Usage:
   <gallery-lightbox>
     <a href="/assets/img/full/1.jpg"><img src="thumb" alt="..."></a>
     ...
   </gallery-lightbox>
   Opens a <dialog> with prev/next navigation. Without JS the
   links simply open the full image in the browser. */
class GalleryLightbox extends HTMLElement {
  connectedCallback() {
    this.items = [...this.querySelectorAll("a")];
    if (this.items.length === 0) return;

    this.dialog = document.createElement("dialog");
    this.dialog.className = "lightbox";
    this.dialog.innerHTML = `
      <img alt="">
      <div class="lightbox-nav">
        <button type="button" data-prev>&lsaquo; Prev</button>
        <button type="button" data-next>Next &rsaquo;</button>
      </div>`;
    this.append(this.dialog);

    this.photo = this.dialog.querySelector("img");
    this.dialog.querySelector("[data-prev]").addEventListener("click", () => this.step(-1));
    this.dialog.querySelector("[data-next]").addEventListener("click", () => this.step(1));
    this.dialog.addEventListener("click", (event) => {
      if (event.target === this.dialog || event.target === this.photo) this.dialog.close();
    });
    this.dialog.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") this.step(-1);
      if (event.key === "ArrowRight") this.step(1);
    });

    this.items.forEach((a, i) =>
      a.addEventListener("click", (event) => {
        event.preventDefault();
        this.show(i);
      })
    );
  }

  show(index) {
    this.index = (index + this.items.length) % this.items.length;
    const item = this.items[this.index];
    const thumb = item.querySelector("img");
    this.photo.src = item.href;
    this.photo.alt = thumb ? thumb.alt : "";
    if (!this.dialog.open) this.dialog.showModal();
  }

  step(delta) {
    this.show(this.index + delta);
  }
}
customElements.define("gallery-lightbox", GalleryLightbox);
