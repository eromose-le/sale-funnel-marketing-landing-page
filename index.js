// --- Populate Elements with Data ---
function getPageName() {
  const path = window.location.pathname;
  const file = path.split("/").filter(Boolean).pop() || "index";

  // Remove `.html` extension if present
  const pageName = file.endsWith(".html") ? file.replace(".html", "") : file;

  return pageName;
}

async function loadSiteData() {
  const pageName = getPageName();

  try {
    const module = await import(`./data/siteData-${pageName}.js`);
    return module.default;
  } catch (err) {
    console.error(`❌ Could not load siteData for: ${pageName}`, err);
    return null;
  }
}

// --- Helper Functions ---
function formatPrice(price) {
  if (price === null || typeof price === "undefined") return "";
  // Format number as Nigerian Naira (NGN)
  return `₦${price.toLocaleString("en-NG")}`;
}

function populateElement(id, content) {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = content; // Use innerHTML to allow for potential HTML tags in content
  } else {
    console.warn(`Element with ID "${id}" not found.`);
  }
}

function populateHref(id, url) {
  const element = document.getElementById(id);
  if (element && element.tagName === "A") {
    element.href = url;
  } else {
    console.warn(`Anchor element with ID "${id}" not found.`);
  }
}

// --- Content Population Functions ---

function populateNavigation(navData) {
  const navList = document.getElementById("nav-links");
  if (!navList) return;
  navList.innerHTML = ""; // Clear existing
  navData.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item.text;
    a.href = item.link;
    li.appendChild(a);
    navList.appendChild(li);
  });
}

function populateHero(heroData) {
  populateElement("hero-title", heroData.title);
  populateElement("hero-subtitle", heroData.subtitle);
  populateElement("hero-desc1", heroData.description1);
  populateElement("hero-desc2", heroData.description2);
  populateElement("hero-tagline", heroData.tagline);
  populateElement("hero-subtitle", heroData.tagline);
}

function populateVideo(videoData) {
  populateElement("video-title", videoData.title);
  populateElement("video-duration", videoData.duration);
  populateElement("video-description", videoData.description);
  populateHref("video-link", videoData.videoUrl);
}

function populateBenefits(benefitsData) {
  const list = document.getElementById("benefits-list");
  if (!list) return;
  list.innerHTML = ""; // Clear existing
  benefitsData.forEach((benefit) => {
    const li = document.createElement("li");
    li.textContent = benefit;
    list.appendChild(li);
  });
}

function populateProducts(productData) {
  const container = document.getElementById("product-list");
  const selectDropdown = document.getElementById("product-select");
  if (!container || !selectDropdown) return;

  container.innerHTML = ""; // Clear existing products
  // Clear existing options except the placeholder
  selectDropdown.innerHTML =
    '<option value="" disabled selected>Select Product</option>';

  productData.forEach((product) => {
    // Create Product Card
    const itemDiv = document.createElement("div");
    itemDiv.className = "product-item";

    const img = document.createElement("img");
    img.src = product.imageUrl || "/images/chrisport-logo.png"; // Use placeholder if no image
    img.alt = product.name;
    // Handle image loading errors (optional but good practice)
    img.onerror = () => {
      img.src = "/images/chrisport-logo.png";
    }; // Fallback image

    const nameH3 = document.createElement("h3");
    nameH3.textContent = product.name;

    const featuresUL = document.createElement("ul");
    product.features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      featuresUL.appendChild(li);
    });

    const maxWeightP = document.createElement("p");
    maxWeightP.className = "max-weight";
    maxWeightP.textContent = `MAX User Weight: ${product.maxWeight}`;

    const priceP = document.createElement("p");
    priceP.className = "price";
    let priceHTML = formatPrice(product.price);
    if (product.oldPrice) {
      priceHTML = `<del>${formatPrice(product.oldPrice)}</del> ${priceHTML}`;
    }
    priceP.innerHTML = priceHTML;

    const orderButton = document.createElement("button");
    orderButton.className = "order-button";
    // Use more specific text based on product ID maybe?
    orderButton.textContent =
      product.id.includes("LUXURY") || product.id.includes("COMMERCIAL")
        ? "I NEED THIS ONE"
        : "ORDER THIS ONE";
    // Optional: Add functionality to button, e.g., pre-select in form
    orderButton.onclick = () => {
      selectDropdown.value = product.id;
      // Scroll to form (optional)
      document
        .getElementById("order-form")
        .scrollIntoView({ behavior: "smooth" });
    };

    itemDiv.appendChild(img);
    itemDiv.appendChild(nameH3);
    itemDiv.appendChild(featuresUL);
    itemDiv.appendChild(maxWeightP);
    itemDiv.appendChild(priceP);
    itemDiv.appendChild(orderButton);
    container.appendChild(itemDiv);

    // Add Product to Select Dropdown
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = `${product.name} - ${formatPrice(product.price)}`;
    selectDropdown.appendChild(option);
  });
}

function populateDeliveryInfo(deliveryData) {
  populateElement("delivery-headline", deliveryData.headline);
  populateElement("delivery-payment", deliveryData.paymentInfo);
  populateElement("delivery-timelines", deliveryData.timelines);
  populateElement("delivery-offer-headline", deliveryData.offerHeadline);
  populateElement("delivery-note", deliveryData.importantNote);

  const offersList = document.getElementById("delivery-offers");
  if (offersList) {
    offersList.innerHTML = "";
    deliveryData.offers.forEach((offer) => {
      const li = document.createElement("li");
      li.textContent = `✓ ${offer}`; // Add checkmark
      offersList.appendChild(li);
    });
  }
}

function populateTestimonials(testimonialData) {
  const container = document.getElementById("testimonials-container");
  if (!container) return;
  container.innerHTML = ""; // Clear existing
  testimonialData.forEach((testimonial) => {
    const div = document.createElement("div");
    div.className = "testimonial";
    const quoteP = document.createElement("p");
    quoteP.textContent = `"${testimonial.quote}"`; // Add quotes
    const authorP = document.createElement("p");
    authorP.innerHTML = `<strong>- ${testimonial.author}, ${testimonial.location}</strong>`;
    div.appendChild(quoteP);
    div.appendChild(authorP);
    container.appendChild(div);
  });
}

function populateFooter(footerData, contactData) {
  populateElement("contact-phone-footer", contactData.phone);
  populateElement("facebook-disclaimer", footerData.facebookDisclaimer);
  populateElement("copyright", footerData.copyright);
  populateElement("designer", footerData.designer);

  // Populate Legal Links
  const legalLinksContainer = document.getElementById("footer-legal-links");
  if (legalLinksContainer) {
    legalLinksContainer.innerHTML = ""; // Clear
    footerData.legalLinks.forEach((link, index) => {
      const a = document.createElement("a");
      a.href = link.link;
      a.textContent = link.text;
      legalLinksContainer.appendChild(a);
      // Add separator if not the last item
      if (index < footerData.legalLinks.length - 1) {
        const separator = document.createTextNode(" | ");
        legalLinksContainer.appendChild(separator);
      }
    });
  }

  // Populate Useful Links
  const usefulLinksContainer = document.getElementById("footer-useful-links");
  if (usefulLinksContainer) {
    usefulLinksContainer.innerHTML = ""; // Clear
    footerData.usefulLinks.forEach((link, index) => {
      const a = document.createElement("a");
      a.href = link.link;
      a.textContent = link.text;
      usefulLinksContainer.appendChild(a);
      // Add separator if not the last item
      if (index < footerData.usefulLinks.length - 1) {
        // We use CSS ::before for the "|" separator now, so no need to add it here
      }
    });
  }
}

function populateSlider(products) {
  const sliderTrack = document.getElementById("slider");
  sliderTrack.innerHTML = ""; // Clear if already populated

  products.forEach((product) => {
    const slide = document.createElement("div");
    slide.className = "slider-item";

    if (product.videoUrl) {
      const video = document.createElement("video");
      video.src = product.videoUrl;
      video.autoplay = true;
      video.muted = false;
      video.loop = true;
      slide.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = product.imageUrl;
      img.alt = product.name;
      slide.appendChild(img);
    }

    sliderTrack.appendChild(slide);
  });

  setupSliderControls(sliderTrack, products.length);
}

function setupSliderControls(track, totalSlides) {
  let index = 0;
  let isPlaying = true;
  let interval = startAutoSlider();

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const playPauseBtn = document.getElementById("playPauseBtn");

  function goToSlide(newIndex) {
    index = (newIndex + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function startAutoSlider() {
    return setInterval(() => {
      goToSlide(index + 1);
    }, 30000);
  }

  prevBtn.onclick = () => {
    goToSlide(index - 1);
  };

  nextBtn.onclick = () => {
    goToSlide(index + 1);
  };

  playPauseBtn.onclick = () => {
    if (isPlaying) {
      clearInterval(interval);
      playPauseBtn.textContent = "▶ Play";
    } else {
      interval = startAutoSlider();
      playPauseBtn.textContent = "⏸ Pause";
    }
    isPlaying = !isPlaying;
  };
}

function populateProductCheckboxes(products) {
  const container = document.getElementById("product-checkbox-group");
  if (!container) return;

  container.innerHTML = ""; // Clear existing checkboxes

  products.forEach((product) => {
    const checkboxId = `product-${product.id}`;
    const label = document.createElement("label");
    label.htmlFor = checkboxId;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "products";
    checkbox.value = product.id;
    checkbox.id = checkboxId;

    const span = document.createElement("span");
    span.textContent = `${product.name} - ${formatPrice(product.price)}`;

    label.appendChild(checkbox);
    label.appendChild(span);
    container.appendChild(label);
  });
}

// --- Main Execution ---

document.addEventListener("DOMContentLoaded", async () => {
  const siteData = await loadSiteData();
  if (!siteData) return;

  const whatsappBtn = document.getElementById("whatsapp-button");
  if (whatsappBtn) {
    const phone = siteData.contactInfo.whatsapp;
    const text = encodeURIComponent(
      `Hello! I'm interested in ordering a product - ${siteData.heroSection.title} from your website.`
    );
    whatsappBtn.href = `https://wa.me/${phone}?text=${text}`;
  }

  // Example:
  document.title = `${siteData.brandName} - ${
    siteData.heroSection?.title ?? "Welcome"
  }`;

  const scrollBtn = document.getElementById("scroll-to-shop");
  const shopSection = document.getElementById("shop");

  scrollBtn?.addEventListener("click", () => {
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Populate page content using the embedded siteData
  // document.title = `${siteData.brandName} - Treadmill`; // Set page title
  populateElement("brand-logo", siteData.brandName);
  populateNavigation(siteData.navigation);
  populateHero(siteData.heroSection);
  populateVideo(siteData.videoSection);
  populateBenefits(siteData.benefits);
  populateElement("guarantee-text", siteData.guarantee);
  populateElement(
    "benefits-headline",
    `BENEFITS OF ${siteData.heroSection.title}`
  );
  populateProducts(siteData.products);
  populateDeliveryInfo(siteData.deliveryInfo);
  populateElement("contact-phone-delivery", siteData.contactInfo.phone);
  populateTestimonials(siteData.testimonials);
  populateElement("customer-count", siteData.customerCount);
  populateFooter(siteData.footer, siteData.contactInfo);
  populateSlider(siteData.products);
  populateProductCheckboxes(siteData.products);

  // Form submission logic (remains the same)
  const form = document.getElementById("customer-order-form");
  const formMessage = document.getElementById("form-message");

  if (form) {
    emailjs.init("iRleGb4t1hrynXkJv"); // ✅ Correct place to initialize

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const address1 = document.getElementById("address1").value.trim();
      const city = document.getElementById("city").value.trim();
      const state = document.getElementById("state").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone1 = document.getElementById("phone1").value.trim();
      const phone2 = document.getElementById("phone2").value.trim();

      const checkedBoxes = document.querySelectorAll(
        '#product-checkbox-group input[type="checkbox"]:checked'
      );

      if (checkedBoxes.length === 0) {
        formMessage.textContent = "Please select at least one product.";
        formMessage.style.color = "red";
        return;
      }

      const productIds = Array.from(checkedBoxes).map((box) => box.value);
      const productNames = Array.from(checkedBoxes).map(
        (box) => box.nextSibling?.textContent || ""
      );

      if (!name || !address1 || !city || !state || !email || !phone1) {
        formMessage.textContent = "Please fill out all required fields (*).";
        formMessage.style.color = "red";
        return;
      }

      const orderData = {
        name,
        address1,
        city,
        state,
        email,
        phone1,
        phone2,
        productIds: productIds.join(", "),
        productNames: productNames.join(", "),
        order_id: productIds.join(", "),
      };

      emailjs
        .send("service_lsa2sbb", "template_pp08e7f", orderData)
        .then(() => {
          alert(
            "✅ Order submitted successfully!\nWe’ll contact you shortly via WhatsApp or Email."
          );
          // formMessage.textContent = "";
          formMessage.textContent =
            "✅ Order submitted! We’ll contact you shortly via WhatsApp or Email.";
          formMessage.style.color = "green";
          form.reset();
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          formMessage.textContent =
            "❌ Error sending order. Please try again or contact us directly.";
          formMessage.style.color = "red";
        });
    });
  }

  // Smooth scrolling logic (remains the same)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Allow normal behavior for non-section links
      if (
        this.getAttribute("href") === "#" ||
        (this.getAttribute("href").startsWith("#") &&
          !document.querySelector(this.getAttribute("href")))
      ) {
        return;
      }
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
}); // End DOMContentLoaded
