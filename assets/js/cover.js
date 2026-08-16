/* ============================================================
   Cover animation — pure CSS/DOM replacement for the old p5.js
   sketch. Builds a grid of translucent cells over the cover
   photo; a spotlight (pure CSS radial-gradient) follows the
   pointer, cells brighten on hover and flash yellow on press.
   ============================================================ */

class CoverGrid extends HTMLElement {
  connectedCallback() {
    this.setAttribute("aria-hidden", "true");
    this.reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    this.build();

    this.resizeObserver = new ResizeObserver(() => this.build());
    this.resizeObserver.observe(this.parentElement);

    // pointer spotlight: just move two CSS custom properties,
    // throttled to animation frames. The CSS does the rest.
    const cover = this.parentElement;
    let pending = null;
    cover.addEventListener("pointermove", (event) => {
      if (this.reducedMotion.matches || pending) return;
      pending = requestAnimationFrame(() => {
        const rect = cover.getBoundingClientRect();
        cover.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        cover.style.setProperty("--my", `${event.clientY - rect.top}px`);
        pending = null;
      });
    });
  }

  disconnectedCallback() {
    this.resizeObserver.disconnect();
  }

  build() {
    const { clientWidth: w, clientHeight: h } = this.parentElement;
    if (!w || !h) return;
    // roughly square cells, more columns on wide screens
    const cols = Math.min(12, Math.max(4, Math.round(w / 110)));
    const rows = Math.min(8, Math.max(3, Math.round(h / (w / cols))));
    const count = cols * rows;
    this.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    this.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    if (this.childElementCount === count) return;
    this.replaceChildren();
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      fragment.append(cell);
    }
    this.append(fragment);
  }
}
customElements.define("cover-grid", CoverGrid);
