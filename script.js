// script.js
// This script injects a reusable navigation bar and footer into each page
// and renders page‑specific content based on the ID of the <body> tag.
// It assumes that content.js has already loaded and defined a global `data` object.

// Wait until the DOM is fully loaded before manipulating the document.
document.addEventListener("DOMContentLoaded", () => {
  injectNav();
  injectFooter();
  renderPageContent();
});

/**
 * Builds and inserts the navigation markup into the page.
 */
function injectNav() {
  const navContainer = document.getElementById("nav-container");
  if (!navContainer) return;
  navContainer.innerHTML = `
    <div class="navbar">
      <div class="logo"><a href="index.html">Learn Photography</a></div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="history.html">History</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="styles.html">Styles</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  `;
}

/**
 * Builds and inserts the footer markup into the page. Uses the current year dynamically.
 */
function injectFooter() {
  const footerContainer = document.getElementById("footer-container");
  if (!footerContainer) return;
  const year = new Date().getFullYear();
  footerContainer.innerHTML = `
    <div class="site-footer">
      <p>&copy; ${year} Learn Photography. All rights reserved.</p>
    </div>
  `;
}

/**
 * Determines which page is currently loaded (by checking the body ID)
 * and calls the appropriate render function with data from content.js.
 */
function renderPageContent() {
  const pageId = document.body.id;
  const container = document.getElementById("page-content");
  if (!container) return;
  if (!pageId) return;

  switch (pageId) {
    case "home":
      renderHome(container, data.home);
      break;
    case "history":
      renderHistory(container, data.history);
      break;
    case "gallery":
      renderGallery(container, data.gallery);
      break;
    case "styles":
      renderStyles(container, data.styles);
      break;
    case "contact":
      renderContact(container, data.contact);
      break;
    default:
      container.innerHTML = "<p>Page not found.</p>";
  }
}

/**
 * Renders the home page. Displays a full‑screen hero image and an about section.
 * @param {HTMLElement} container - The element to populate
 * @param {Object} homeData - Data for the home page from content.js
 */
function renderHome(container, homeData) {
  container.innerHTML = `
    <section class="hero" style="background-image: url('${homeData.heroImage}');">
      <div class="hero-text">
        <h1>${homeData.title}</h1>
        <p>${homeData.heroText}</p>
      </div>
    </section>
    <section class="about">
      <h2>${homeData.aboutHeading}</h2>
      <p>${homeData.aboutParagraph}</p>
    </section>
  `;
}

/**
 * Renders the history page. Outputs heading, paragraphs and a timeline.
 * @param {HTMLElement} container - The element to populate
 * @param {Object} historyData - Data for the history page from content.js
 */
function renderHistory(container, historyData) {
  // Build paragraphs
  const paragraphsHtml = historyData.paragraphs
    .map((p) => `<p>${p}</p>`) // Create a <p> for each paragraph
    .join("");
  // Build timeline list
  const timelineItems = historyData.timeline
    .map(
      (entry) => `
        <li>
          <span class="year">${entry.year}</span>
          <span class="desc">${entry.description}</span>
        </li>`
    )
    .join("");
  container.innerHTML = `
    <section class="history-section">
      <h1>${historyData.title}</h1>
      ${paragraphsHtml}
      <div class="timeline">
        <ul>
          ${timelineItems}
        </ul>
      </div>
    </section>
  `;
}

/**
 * Renders the gallery page. Uses CSS Grid to display responsive images.
 * @param {HTMLElement} container - The element to populate
 * @param {Array} galleryItems - Array of image objects from content.js
 */
function renderGallery(container, galleryItems) {
  const imagesHtml = galleryItems
    .map(
      (img) => `
        <div class="gallery-item">
          <img src="${img.src}" alt="${img.alt}">
        </div>
      `
    )
    .join("");
  container.innerHTML = `
    <section class="gallery-section">
      <h1>Gallery</h1>
      <div class="gallery-grid">
        ${imagesHtml}
      </div>
    </section>
  `;
}

/**
 * Renders the styles page. Uses flexbox cards to display different photography styles.
 * @param {HTMLElement} container - The element to populate
 * @param {Object} stylesData - Data for the styles page from content.js
 */
function renderStyles(container, stylesData) {
  const cardsHtml = stylesData.cards
    .map(
      (style) => `
        <div class="style-card">
          <img src="${style.image}" alt="${style.title}">
          <h3>${style.title}</h3>
          <p>${style.description}</p>
        </div>
      `
    )
    .join("");
  container.innerHTML = `
    <section class="styles-section">
      <h1>${stylesData.title}</h1>
      <div class="styles-grid">
        ${cardsHtml}
      </div>
    </section>
  `;
}

/**
 * Renders the contact page. Displays contact details and a simple message.
 * @param {HTMLElement} container - The element to populate
 * @param {Object} contactData - Data for the contact page from content.js
 */
function renderContact(container, contactData) {
  container.innerHTML = `
    <section class="contact-section">
      <h1>${contactData.title}</h1>
      <p>${contactData.description}</p>
      <div class="contact-details">
        <p><strong>Address:</strong> ${contactData.address}</p>
        <p><strong>Phone:</strong> ${contactData.phone}</p>
        <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
      </div>
    </section>
  `;
}