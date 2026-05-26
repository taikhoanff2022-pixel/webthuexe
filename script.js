(() => {
  const qs = (sel, root = document) => root.querySelector(sel);
  const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const toastEl = qs("#toast");
  const toastInner = qs("#toastInner");
  let toastTimer = null;

  const formatVND = (value) => {
    try {
      return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);
    } catch {
      return `${value.toLocaleString("vi-VN")}đ`;
    }
  };

  const showToast = (message, durationMs = 2200) => {
    if (!toastEl || !toastInner) return;
    toastInner.textContent = message;
    toastEl.hidden = false;
    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toastEl.hidden = true;
    }, durationMs);
  };

  const setYear = () => {
    const y = qs("#year");
    if (y) y.textContent = String(new Date().getFullYear());
  };

  const wm = (fileName, width = 1800) =>
    `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=${width}`;

  const cars = [
    {
      id: "camry",
      name: "Toyota Camry",
      brand: "Toyota",
      type: "Sedan",
      pricePerDay: 1400000,
      stock: 4,
      promo: "Giảm 10% (T2–T5) • Tặng 1 lần giao xe nội thành",
      seats: 5,
      fuel: "Xăng",
      transmission: "Tự động",
      rating: 4.7,
      images: [
        wm("TOYOTA_CAMRY_(XV80)_China_(2).jpg"),
        wm("Toyota_Camry_GLI_(front,_pre-facelift).jpg"),
        wm(
          "The_rearview_of_Toyota_CAMRY_(6AA-AXVH70)_used_as_an_unmarked_police_automobile_of_Osaka_Prefectural_Police.jpg"
        )
      ],
      specs: {
        "Số ghế": "5",
        "Nhiên liệu": "Xăng",
        "Hộp số": "Tự động",
        "Tiêu hao": "7.2L/100km",
        "Hành lý": "2 vali lớn"
      },
      description:
        "Sedan lịch lãm, êm ái cho công tác và gia đình. Nội thất rộng rãi, cách âm tốt, phù hợp di chuyển đường dài.",
      policy: ["CCCD/Passport bản gốc", "Bằng lái B2 trở lên", "Đặt cọc theo dòng xe", "Không hút thuốc trong xe"]
    },
    {
      id: "bmw-x5",
      name: "BMW X5",
      brand: "BMW",
      type: "Luxury SUV",
      pricePerDay: 3900000,
      stock: 1,
      promo: "Ưu đãi doanh nghiệp • Miễn phí kiểm tra xe tận nơi",
      seats: 5,
      fuel: "Xăng",
      transmission: "Tự động",
      rating: 4.9,
      images: [
        wm("BMW_X5_3.0sd.jpg"),
        wm("0_BMW_X5_1.jpg"),
        wm("0_BMW_X5_2.jpg")
      ],
      specs: {
        "Số ghế": "5",
        "Nhiên liệu": "Xăng",
        "Hộp số": "Tự động",
        "Động cơ": "3.0 Turbo",
        "Tiện nghi": "HUD • Camera 360"
      },
      description:
        "SUV hạng sang với cảm giác lái thể thao, cách âm tốt và tiện nghi cao cấp. Phù hợp tiếp khách, sự kiện, công tác.",
      policy: ["CCCD/Passport bản gốc", "Bằng lái B2 trở lên", "Đặt cọc/giữ chỗ theo lịch", "Phụ phí nếu quá giờ trả"]
    },
    {
      id: "mercedes-c300",
      name: "Mercedes C300",
      brand: "Mercedes-Benz",
      type: "Luxury Sedan",
      pricePerDay: 3200000,
      stock: 2,
      promo: "Giảm 5% cho khách đặt trước 7 ngày",
      seats: 5,
      fuel: "Xăng",
      transmission: "Tự động",
      rating: 4.8,
      images: [
        wm("2014_Mercedes-Benz_C200_SE_Executive_Automatic_2.0_Front.jpg"),
        wm("2014_Mercedes-Benz_C200_SE_Executive_Automatic_2.0_Rear.jpg"),
        wm("Mercedes-Benz_C250_Sports_(W205)_interior.JPG")
      ],
      specs: {
        "Số ghế": "5",
        "Nhiên liệu": "Xăng",
        "Hộp số": "Tự động",
        "Gói an toàn": "ADAS",
        "Nội thất": "Da cao cấp"
      },
      description:
        "Phong cách sang trọng, cân bằng hoàn hảo giữa hiệu năng và sự tinh tế. Lựa chọn lý tưởng cho trải nghiệm premium.",
      policy: ["CCCD/Passport bản gốc", "Bằng lái B2 trở lên", "Đặt cọc theo dòng xe", "Giữ xe sạch sẽ khi hoàn trả"]
    },
    {
      id: "everest",
      name: "Ford Everest",
      brand: "Ford",
      type: "SUV 7 chỗ",
      pricePerDay: 1800000,
      stock: 3,
      promo: "Combo du lịch: giảm 5% từ 3 ngày",
      seats: 7,
      fuel: "Dầu",
      transmission: "Tự động",
      rating: 4.6,
      images: [
        wm("2014_Ford_Everest_2.5_TDCi_4x2_(Indonesia)_front_view.jpg"),
        wm("Ford_Everest_2.5_4x4_2006.jpg"),
        wm("Ford_Everest.jpg")
      ],
      specs: {
        "Số ghế": "7",
        "Nhiên liệu": "Dầu",
        "Hộp số": "Tự động",
        "Khoang hành lý": "Rộng",
        "Phù hợp": "Gia đình • Du lịch"
      },
      description:
        "SUV 7 chỗ mạnh mẽ, rộng rãi, phù hợp gia đình và chuyến đi dài. Khung gầm chắc chắn, vận hành ổn định.",
      policy: ["CCCD/Passport bản gốc", "Bằng lái B2 trở lên", "Không đi vào đường cấm/ngập sâu", "Trả xe đúng thời gian"]
    },
    {
      id: "vf8",
      name: "VinFast VF8",
      brand: "VinFast",
      type: "Electric SUV",
      pricePerDay: 2100000,
      stock: 2,
      promo: "Miễn phí giao xe sân bay (khung giờ 8:00–20:00)",
      seats: 5,
      fuel: "Điện",
      transmission: "1 cấp",
      rating: 4.5,
      images: [
        wm("2022_Vinfast_VF8_front_view.jpg"),
        wm("VinFast_VF8_at_Hillsdale_Shopping_Center.jpg"),
        wm("Interior_of_VinFast_VF8_car.jpg")
      ],
      specs: {
        "Số ghế": "5",
        "Nhiên liệu": "Điện",
        "Hộp số": "1 cấp",
        "Quãng đường": "Tuỳ pin",
        "Sạc": "Hỗ trợ trạm"
      },
      description:
        "SUV điện hiện đại, tăng tốc mượt và vận hành êm. Phù hợp di chuyển nội đô, trải nghiệm công nghệ và tiết kiệm.",
      policy: ["CCCD/Passport bản gốc", "Bằng lái B2 trở lên", "Tuân thủ hướng dẫn sạc", "Không tự ý can thiệp hệ thống điện"]
    },
    {
      id: "carnival",
      name: "Kia Carnival",
      brand: "Kia",
      type: "MPV 7/8 chỗ",
      pricePerDay: 1900000,
      stock: 2,
      promo: "Miễn phí ghế trẻ em (số lượng giới hạn)",
      seats: 8,
      fuel: "Dầu",
      transmission: "Tự động",
      rating: 4.7,
      images: [
        wm("Kia Carnival (KA4) 2.2 SX 2023.jpg"),
        wm("Kia Carnival 2.2 SX 2023 (1).jpg"),
        wm("Kia Carnival 2.2 SX 2023 (interior).jpg")
      ],
      specs: {
        "Số ghế": "7/8",
        "Nhiên liệu": "Dầu",
        "Hộp số": "Tự động",
        "Tiện nghi": "Ghế rộng • Điều hoà",
        "Phù hợp": "Gia đình • Nhóm"
      },
      description:
        "MPV rộng rãi, phù hợp gia đình đông người hoặc đoàn khách. Không gian thoải mái, tiện nghi cao, di chuyển êm.",
      policy: ["CCCD/Passport bản gốc", "Bằng lái B2 trở lên", "Không quá tải số người", "Giữ vệ sinh nội thất"]
    }
  ];

  const reviews = [
    {
      name: "Minh Anh",
      rating: 5,
      text: "Xe mới, sạch sẽ, thủ tục nhanh. Nhân viên hỗ trợ nhiệt tình, giao xe đúng giờ."
    },
    {
      name: "Hoàng Long",
      rating: 5,
      text: "Đặt xe siêu tiện. Giá hợp lý, xe vận hành mượt. Sẽ quay lại lần sau."
    },
    {
      name: "Thùy Dương",
      rating: 5,
      text: "Dịch vụ chuyên nghiệp, tư vấn kỹ. Xe đúng như mô tả, trải nghiệm rất premium."
    }
  ];

  const avatarDataUri = (name) => {
    const initials = String(name || "?")
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join("");
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stop-color="#2d8cff"/>
            <stop offset="1" stop-color="#8fd3ff"/>
          </linearGradient>
        </defs>
        <rect width="96" height="96" rx="22" fill="url(#g)"/>
        <rect x="6" y="6" width="84" height="84" rx="20" fill="rgba(0,0,0,0.18)"/>
        <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle"
          font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
          font-size="34" font-weight="800" fill="rgba(255,255,255,0.92)">${initials || "?"}</text>
      </svg>
    `.trim();
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };

  const renderStars = (rating) => {
    const stars = document.createElement("span");
    stars.className = "stars";
    const safe = Math.max(0, Math.min(5, Number(rating) || 0));
    stars.style.setProperty("--rating", String(safe));
    stars.setAttribute("aria-label", `${safe}/5 sao`);
    return stars;
  };

  const renderCars = () => {
    const grid = qs("#carGrid");
    const count = qs("#resultCount");
    if (!grid) return;
    grid.innerHTML = "";

    cars.forEach((car, idx) => {
      const card = document.createElement("article");
      card.className = "car-card reveal";
      card.setAttribute("data-index", String(idx));

      const media = document.createElement("div");
      media.className = "car-media";
      const img = document.createElement("img");
      img.className = "car-img";
      img.alt = `${car.name}`;
      img.loading = "lazy";
      img.src = car.images[0];
      media.appendChild(img);

      const body = document.createElement("div");
      body.className = "car-body";

      const top = document.createElement("div");
      top.className = "car-top";

      const nameWrap = document.createElement("div");
      const name = document.createElement("h3");
      name.className = "car-name";
      name.textContent = car.name;
      const brand = document.createElement("div");
      brand.className = "car-brand";
      brand.textContent = `${car.brand} • ${car.type}`;
      nameWrap.appendChild(name);
      nameWrap.appendChild(brand);

      const price = document.createElement("div");
      price.className = "price-pill";
      price.textContent = `${formatVND(car.pricePerDay)} / ngày`;

      top.appendChild(nameWrap);
      top.appendChild(price);

      const specs = document.createElement("div");
      specs.className = "car-specs";
      const specItems = [
        { k: "Số ghế", v: String(car.seats) },
        { k: "Nhiên liệu", v: car.fuel },
        { k: "Hộp số", v: car.transmission },
        { k: "Đánh giá", v: `${car.rating}/5` }
      ];
      specItems.forEach((s) => {
        const el = document.createElement("div");
        el.className = "spec";
        const label = document.createElement("span");
        label.textContent = s.k;
        const val = document.createElement("b");
        val.textContent = s.v;
        el.appendChild(label);
        el.appendChild(val);
        specs.appendChild(el);
      });

      const foot = document.createElement("div");
      foot.className = "car-foot";
      foot.appendChild(renderStars(car.rating));

      const actions = document.createElement("div");
      actions.className = "card-actions";
      const detailBtn = document.createElement("button");
      detailBtn.className = "btn btn-secondary btn-sm";
      detailBtn.type = "button";
      detailBtn.textContent = "Xem chi tiết";
      detailBtn.addEventListener("click", () => openCarModal(idx));
      const rentBtn = document.createElement("button");
      rentBtn.className = "btn btn-primary btn-sm";
      rentBtn.type = "button";
      rentBtn.textContent = "Thuê ngay";
      rentBtn.addEventListener("click", () => {
        openCarModal(idx);
        window.setTimeout(() => qs("#bookBtn")?.focus(), 50);
      });
      actions.appendChild(detailBtn);
      actions.appendChild(rentBtn);

      foot.appendChild(actions);

      body.appendChild(top);
      body.appendChild(specs);
      body.appendChild(foot);

      card.appendChild(media);
      card.appendChild(body);
      grid.appendChild(card);
    });

    if (count) count.textContent = `${cars.length} xe đang hiển thị`;
  };

  const header = qs("#header");
  const heroBg = qs("#heroBg");
  const backToTop = qs("#backToTop");

  let rafScroll = 0;
  const onScroll = () => {
    if (rafScroll) return;
    rafScroll = window.requestAnimationFrame(() => {
      rafScroll = 0;
      const y = window.scrollY || 0;
      if (header) header.classList.toggle("is-scrolled", y > 10);
      if (backToTop) backToTop.hidden = y < 600;
      if (heroBg) {
        const t = Math.min(180, y * 0.18);
        heroBg.style.transform = `translate3d(0, ${t}px, 0)`;
      }
    });
  };

  const setDefaultDates = () => {
    const form = qs("#searchForm");
    if (!form) return;
    const pickup = form.elements.namedItem("pickupDate");
    const dropoff = form.elements.namedItem("dropoffDate");
    if (!(pickup instanceof HTMLInputElement) || !(dropoff instanceof HTMLInputElement)) return;

    const today = new Date();
    const pad2 = (n) => String(n).padStart(2, "0");
    const toDateValue = (d) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;

    const min = toDateValue(today);
    pickup.min = min;
    dropoff.min = min;

    if (!pickup.value) pickup.value = min;
    if (!dropoff.value) {
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      dropoff.value = toDateValue(tomorrow);
    }

    pickup.addEventListener("change", () => {
      if (!pickup.value) return;
      dropoff.min = pickup.value;
      if (dropoff.value && dropoff.value < pickup.value) dropoff.value = pickup.value;
    });
  };

  const initSearch = () => {
    const form = qs("#searchForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const pickup = String(fd.get("pickupLocation") || "").trim();
      const dropoff = String(fd.get("dropoffLocation") || "").trim();
      const carType = String(fd.get("carType") || "").trim();
      showToast("Đang tìm kiếm xe phù hợp...");
      window.setTimeout(() => {
        const msg = `Đã tìm theo: ${pickup} → ${dropoff} • ${carType.toUpperCase()}`;
        showToast(msg, 2600);
      }, 900);
    });
  };

  const setPageLocked = (locked) => {
    document.documentElement.style.overflow = locked ? "hidden" : "";
  };

  const navToggle = qs("#navToggle");
  const navOverlay = qs("#navOverlay");
  const navDrawer = qs("#navDrawer");
  const navClose = qs("#navClose");

  const openDrawer = () => {
    if (!navOverlay || !navDrawer || !navToggle) return;
    navOverlay.hidden = false;
    navDrawer.hidden = false;
    navDrawer.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    setPageLocked(true);
  };

  const closeDrawer = () => {
    if (!navOverlay || !navDrawer || !navToggle) return;
    navDrawer.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    setPageLocked(false);
    window.setTimeout(() => {
      if (!navDrawer.classList.contains("is-open")) {
        navOverlay.hidden = true;
        navDrawer.hidden = true;
      }
    }, 220);
  };

  const initNav = () => {
    if (navToggle) navToggle.addEventListener("click", () => (navDrawer?.classList.contains("is-open") ? closeDrawer() : openDrawer()));
    if (navClose) navClose.addEventListener("click", closeDrawer);
    if (navOverlay) navOverlay.addEventListener("click", closeDrawer);

    if (navDrawer) {
      navDrawer.addEventListener("click", (e) => {
        const t = e.target;
        if (t instanceof HTMLAnchorElement && t.classList.contains("nav-link")) closeDrawer();
      });
    }
  };

  const carModal = qs("#carModal");
  const modalClose = qs("#modalClose");
  const modalTitle = qs("#modalTitle");
  const modalSubtitle = qs("#modalSubtitle");
  const modalImg = qs("#modalImg");
  const modalThumbs = qs("#modalThumbs");
  const modalPrice = qs("#modalPrice");
  const modalRating = qs("#modalRating");
  const modalSpecs = qs("#modalSpecs");
  const modalDesc = qs("#modalDesc");
  const modalPolicy = qs("#modalPolicy");
  const imgPrev = qs("#imgPrev");
  const imgNext = qs("#imgNext");
  const bookBtn = qs("#bookBtn");

  let lastFocused = null;
  let activeCarIndex = 0;
  let activeImageIndex = 0;

  const setActiveImage = (imgIndex) => {
    const car = cars[activeCarIndex];
    if (!car || !modalImg || !modalThumbs) return;
    activeImageIndex = (imgIndex + car.images.length) % car.images.length;
    modalImg.src = car.images[activeImageIndex];
    modalImg.alt = `${car.name} — ảnh ${activeImageIndex + 1}`;
    qsa(".thumb", modalThumbs).forEach((el, i) => el.classList.toggle("is-active", i === activeImageIndex));
  };

  const renderModal = (carIndex) => {
    const car = cars[carIndex];
    if (!car) return;
    if (modalTitle) modalTitle.textContent = car.name;
    if (modalSubtitle) modalSubtitle.textContent = `${car.brand} • ${car.type} • ${car.seats} chỗ`;
    if (modalPrice) modalPrice.textContent = `${formatVND(car.pricePerDay)} / ngày`;
    if (modalRating) {
      modalRating.innerHTML = "";
      modalRating.appendChild(renderStars(car.rating));
      const t = document.createElement("span");
      t.textContent = `${car.rating}/5`;
      modalRating.appendChild(t);
    }
    if (modalSpecs) {
      modalSpecs.innerHTML = "";
      Object.entries(car.specs).forEach(([k, v]) => {
        const row = document.createElement("div");
        row.className = "spec-row";
        const lk = document.createElement("span");
        lk.textContent = k;
        const lv = document.createElement("span");
        lv.textContent = v;
        row.appendChild(lk);
        row.appendChild(lv);
        modalSpecs.appendChild(row);
      });
    }
    if (modalDesc) modalDesc.textContent = car.description;
    if (modalPolicy) {
      modalPolicy.innerHTML = "";
      car.policy.forEach((p) => {
        const li = document.createElement("li");
        li.textContent = p;
        modalPolicy.appendChild(li);
      });
    }
    if (modalThumbs) {
      modalThumbs.innerHTML = "";
      car.images.forEach((src, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "thumb";
        b.setAttribute("aria-label", `Chọn ảnh ${i + 1}`);
        const im = document.createElement("img");
        im.alt = `${car.name} thumb ${i + 1}`;
        im.loading = "lazy";
        im.src = src;
        b.appendChild(im);
        b.addEventListener("click", () => setActiveImage(i));
        modalThumbs.appendChild(b);
      });
    }
    activeImageIndex = 0;
    setActiveImage(0);
  };

  const openCarModal = (carIndex) => {
    if (!carModal) return;
    lastFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    activeCarIndex = carIndex;
    renderModal(carIndex);
    carModal.hidden = false;
    carModal.classList.add("is-open");
    setPageLocked(true);
    window.setTimeout(() => modalClose?.focus(), 60);
  };

  const closeCarModal = () => {
    if (!carModal) return;
    carModal.classList.remove("is-open");
    setPageLocked(false);
    window.setTimeout(() => {
      if (!carModal.classList.contains("is-open")) carModal.hidden = true;
      lastFocused?.focus?.();
    }, 220);
  };

  const initModal = () => {
    if (!carModal) return;
    carModal.addEventListener("click", (e) => {
      const t = e.target;
      if (!(t instanceof HTMLElement)) return;
      if (t.dataset.close === "true" || t.classList.contains("modal-overlay")) closeCarModal();
    });
    modalClose?.addEventListener("click", closeCarModal);
    imgPrev?.addEventListener("click", () => setActiveImage(activeImageIndex - 1));
    imgNext?.addEventListener("click", () => setActiveImage(activeImageIndex + 1));
    bookBtn?.addEventListener("click", () => {
      const car = cars[activeCarIndex];
      showToast(`Đã gửi yêu cầu đặt xe: ${car?.name || "Xe"} (demo)`, 2600);
      closeCarModal();
      qs("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const initBackToTop = () => {
    if (!backToTop) return;
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

  const animateCounters = () => {
    const nums = qsa(".stat-number");
    nums.forEach((el) => {
      const target = Number(el.dataset.count || "0");
      const suffix = String(el.dataset.suffix || "");
      const start = performance.now();
      const duration = 1100;

      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const v = Math.round(target * eased);
        el.textContent = `${v.toLocaleString("vi-VN")}${suffix}`;
        if (p < 1) window.requestAnimationFrame(tick);
      };
      window.requestAnimationFrame(tick);
    });
  };

  const initCounters = () => {
    const stats = qs("#stats");
    if (!stats) return;
    let played = false;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.some((e) => e.isIntersecting);
        if (vis && !played) {
          played = true;
          animateCounters();
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(stats);
  };

  let reviewIndex = 0;
  let reviewTimer = 0;

  const setReviewIndex = (idx) => {
    const track = qs("#reviewTrack");
    const dots = qs("#reviewDots");
    if (!track || !dots) return;
    const total = reviews.length || 1;
    reviewIndex = (idx + total) % total;
    track.style.transform = `translate3d(${-reviewIndex * 100}%, 0, 0)`;
    qsa(".dot-btn", dots).forEach((d, i) => d.classList.toggle("is-active", i === reviewIndex));
  };

  const startReviewAuto = () => {
    stopReviewAuto();
    reviewTimer = window.setInterval(() => setReviewIndex(reviewIndex + 1), 4200);
  };

  const stopReviewAuto = () => {
    if (reviewTimer) window.clearInterval(reviewTimer);
    reviewTimer = 0;
  };

  const initReviews = () => {
    const track = qs("#reviewTrack");
    const dots = qs("#reviewDots");
    const prev = qs("#reviewPrev");
    const next = qs("#reviewNext");
    const slider = qs(".review-slider");
    if (!track || !dots) return;

    track.innerHTML = "";
    dots.innerHTML = "";

    reviews.forEach((r, idx) => {
      const slide = document.createElement("article");
      slide.className = "review";

      const top = document.createElement("div");
      top.className = "review-top";

      const person = document.createElement("div");
      person.className = "review-person";

      const av = document.createElement("div");
      av.className = "avatar";
      av.style.backgroundImage = `url("${avatarDataUri(r.name)}")`;
      av.style.backgroundSize = "cover";
      av.style.backgroundPosition = "center";

      const meta = document.createElement("div");
      const nm = document.createElement("div");
      nm.className = "review-name";
      nm.textContent = r.name;
      meta.appendChild(nm);

      person.appendChild(av);
      person.appendChild(meta);

      const starEl = renderStars(r.rating);
      top.appendChild(person);
      top.appendChild(starEl);

      const text = document.createElement("p");
      text.className = "review-text";
      text.textContent = r.text;

      slide.appendChild(top);
      slide.appendChild(text);
      track.appendChild(slide);

      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dot-btn";
      dot.setAttribute("aria-label", `Tới đánh giá ${idx + 1}`);
      dot.addEventListener("click", () => {
        setReviewIndex(idx);
        startReviewAuto();
      });
      dots.appendChild(dot);
    });

    prev?.addEventListener("click", () => {
      setReviewIndex(reviewIndex - 1);
      startReviewAuto();
    });
    next?.addEventListener("click", () => {
      setReviewIndex(reviewIndex + 1);
      startReviewAuto();
    });

    slider?.addEventListener("mouseenter", stopReviewAuto);
    slider?.addEventListener("mouseleave", startReviewAuto);
    slider?.addEventListener("focusin", stopReviewAuto);
    slider?.addEventListener("focusout", startReviewAuto);

    setReviewIndex(0);
    startReviewAuto();
  };

  const chatFab = qs("#chatFab");
  const chatPanel = qs("#chatPanel");
  const chatClose = qs("#chatClose");
  const chatBody = qs("#chatBody");
  const chatForm = qs("#chatForm");
  const chatInput = qs("#chatInput");
  const chatQuick = qs("#chatQuick");

  const nowTime = () => {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  };

  const pushMsg = (text, who) => {
    if (!chatBody) return;
    const wrap = document.createElement("div");
    wrap.className = `msg ${who}`;
    const bubble = document.createElement("div");
    bubble.className = "msg-bubble";
    bubble.textContent = text;
    const meta = document.createElement("div");
    meta.className = "msg-meta";
    meta.textContent = nowTime();
    wrap.appendChild(bubble);
    wrap.appendChild(meta);
    chatBody.appendChild(wrap);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const normalizeText = (v) =>
    String(v || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\p{L}\p{N}\s/.-]+/gu, " ")
      .replace(/\s+/g, " ")
      .trim();

  const chatState = {
    ctx: {
      seats: null,
      budgetPerDay: null,
      days: null,
      pickup: null,
      dropoff: null,
      pickupDate: null,
      dropoffDate: null,
      modelId: null,
      carType: null
    },
    awaiting: null,
    lastIntent: null
  };

  const getCarById = (id) => cars.find((c) => c.id === id);

  const matchCarFromText = (textNorm) => {
    const candidates = cars.map((c) => ({
      id: c.id,
      k1: normalizeText(c.name),
      k2: normalizeText(c.brand)
    }));
    for (const c of candidates) {
      if (textNorm.includes(c.k1)) return c.id;
    }
    for (const c of candidates) {
      const parts = c.k1.split(" ").filter(Boolean);
      const brandParts = c.k2.split(" ").filter(Boolean);
      const hitBrand = brandParts.some((p) => p.length >= 3 && textNorm.includes(p));
      const hitModel = parts.some((p) => p.length >= 3 && textNorm.includes(p));
      if (hitBrand && hitModel) return c.id;
    }
    return null;
  };

  const extractSeats = (textNorm) => {
    const m = textNorm.match(/(\d{1,2})\s*(cho|cho?|\bseat\b|\bseats\b)/i);
    if (m) return Number(m[1]);
    const m2 = textNorm.match(/xe\s*(\d{1,2})/i);
    if (m2) return Number(m2[1]);
    if (textNorm.includes("gia dinh") || textNorm.includes("7 cho") || textNorm.includes("7-8")) return 7;
    return null;
  };

  const extractDays = (textNorm) => {
    const m = textNorm.match(/(\d{1,2})\s*(ngay|day|dem|night)/i);
    if (m) return Number(m[1]);
    return null;
  };

  const extractBudgetPerDay = (textNorm) => {
    const cleaned = textNorm.replace(/,/g, ".");
    const mTr = cleaned.match(/(\d+(?:\.\d+)?)\s*(tr|trieu)\b/);
    if (mTr) return Math.round(Number(mTr[1]) * 1_000_000);
    const mK = cleaned.match(/(\d+(?:\.\d+)?)\s*(k|nghin)\b/);
    if (mK) return Math.round(Number(mK[1]) * 1_000);
    const mVnd = cleaned.match(/(\d{6,9})\s*(d|đ|vnd)\b/);
    if (mVnd) return Math.round(Number(mVnd[1]));
    return null;
  };

  const extractCarType = (textNorm) => {
    if (textNorm.includes("sedan")) return "sedan";
    if (textNorm.includes("suv")) return "suv";
    if (textNorm.includes("mpv")) return "mpv";
    if (textNorm.includes("luxury") || textNorm.includes("hang sang") || textNorm.includes("sang")) return "luxury";
    if (textNorm.includes("dien") || textNorm.includes("electric") || textNorm.includes("ev")) return "electric";
    if (textNorm.includes("7 cho") || textNorm.includes("7-8")) return "mpv";
    return null;
  };

  const inferPickupDropoff = (raw, textNorm) => {
    const m = raw.match(/(.+?)\s*(->|→|den|tới)\s*(.+)/i);
    if (m) {
      const a = String(m[1] || "").trim();
      const b = String(m[3] || "").trim();
      if (a.length >= 2) chatState.ctx.pickup = a;
      if (b.length >= 2) chatState.ctx.dropoff = b;
      return;
    }
    const m2 = raw.match(/nhan\s*(?:xe)?\s*(?:tai)?\s*(.+)/i);
    if (m2) {
      const a = String(m2[1] || "").trim();
      if (a.length >= 2) chatState.ctx.pickup = a;
    }
    const m3 = raw.match(/tra\s*(?:xe)?\s*(?:tai)?\s*(.+)/i);
    if (m3) {
      const b = String(m3[1] || "").trim();
      if (b.length >= 2) chatState.ctx.dropoff = b;
    }
    if (!chatState.ctx.pickup && (textNorm.includes("tp hcm") || textNorm.includes("hcm") || textNorm.includes("sai gon")))
      chatState.ctx.pickup = "TP.HCM";
    if (!chatState.ctx.pickup && textNorm.includes("ha noi")) chatState.ctx.pickup = "Hà Nội";
  };

  const atMidnight = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

  const toISODate = (d) => {
    const pad2 = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  };

  const diffDays = (start, end) => {
    const ms = 24 * 60 * 60 * 1000;
    const a = atMidnight(start).getTime();
    const b = atMidnight(end).getTime();
    return Math.round((b - a) / ms);
  };

  const parseNaturalDate = (textNorm) => {
    const today = atMidnight(new Date());
    if (textNorm.includes("hom nay")) return today;
    if (textNorm.includes("ngay kia")) {
      const d = new Date(today);
      d.setDate(d.getDate() + 2);
      return d;
    }
    if (textNorm.includes("mai")) {
      const d = new Date(today);
      d.setDate(d.getDate() + 1);
      return d;
    }
    return null;
  };

  const parseExplicitDate = (textNorm) => {
    const iso = textNorm.match(/\b(20\d{2})-(\d{1,2})-(\d{1,2})\b/);
    if (iso) {
      const y = Number(iso[1]);
      const m = Number(iso[2]);
      const d = Number(iso[3]);
      const dt = new Date(y, m - 1, d);
      if (dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d) return dt;
    }

    const dmY = textNorm.match(/\b(\d{1,2})[\/.-](\d{1,2})(?:[\/.-](20\d{2}))?\b/);
    if (dmY) {
      const day = Number(dmY[1]);
      const month = Number(dmY[2]);
      const year = dmY[3] ? Number(dmY[3]) : new Date().getFullYear();
      const dt = new Date(year, month - 1, day);
      if (dt.getFullYear() === year && dt.getMonth() === month - 1 && dt.getDate() === day) return dt;
    }

    return null;
  };

  const parseDateAny = (raw, textNorm) => parseExplicitDate(textNorm) || parseNaturalDate(textNorm) || parseExplicitDate(normalizeText(raw));

  const parseTwoDatesFromText = (raw) => {
    const norm = normalizeText(raw);
    const dates = [];
    const isoRe = /\b(20\d{2})-(\d{1,2})-(\d{1,2})\b/g;
    const dmRe = /\b(\d{1,2})[\/.-](\d{1,2})(?:[\/.-](20\d{2}))?\b/g;

    for (const m of norm.matchAll(isoRe)) {
      const y = Number(m[1]);
      const mo = Number(m[2]);
      const da = Number(m[3]);
      const dt = new Date(y, mo - 1, da);
      if (dt.getFullYear() === y && dt.getMonth() === mo - 1 && dt.getDate() === da) dates.push(dt);
    }
    for (const m of norm.matchAll(dmRe)) {
      const da = Number(m[1]);
      const mo = Number(m[2]);
      const y = m[3] ? Number(m[3]) : new Date().getFullYear();
      const dt = new Date(y, mo - 1, da);
      if (dt.getFullYear() === y && dt.getMonth() === mo - 1 && dt.getDate() === da) dates.push(dt);
    }

    if (norm.includes("hom nay")) dates.unshift(atMidnight(new Date()));
    if (norm.includes("mai")) {
      const d = atMidnight(new Date());
      d.setDate(d.getDate() + 1);
      dates.unshift(d);
    }
    if (norm.includes("ngay kia")) {
      const d = atMidnight(new Date());
      d.setDate(d.getDate() + 2);
      dates.unshift(d);
    }

    const uniq = [];
    const seen = new Set();
    for (const d of dates) {
      const key = toISODate(d);
      if (seen.has(key)) continue;
      seen.add(key);
      uniq.push(d);
    }

    return uniq.slice(0, 2);
  };

  const inferPickupDropoffDates = (raw, textNorm) => {
    const pair = parseTwoDatesFromText(raw);
    const mRange = raw.match(/(tu|từ)\s+(.+?)\s*(den|đến|toi|tới|->|→)\s+(.+)/i);
    if (mRange && pair.length === 2) {
      chatState.ctx.pickupDate = pair[0];
      chatState.ctx.dropoffDate = pair[1];
      return;
    }

    const mDash = raw.match(/(\d{1,2}[\/.-]\d{1,2}(?:[\/.-]20\d{2})?)\s*[-–]\s*(\d{1,2}[\/.-]\d{1,2}(?:[\/.-]20\d{2})?)/);
    if (mDash) {
      const a = parseDateAny(mDash[1], normalizeText(mDash[1]));
      const b = parseDateAny(mDash[2], normalizeText(mDash[2]));
      if (a && b) {
        chatState.ctx.pickupDate = a;
        chatState.ctx.dropoffDate = b;
        return;
      }
    }

    const pick = raw.match(/(nhan|nhận|lay|lấy)\s*(?:xe)?\s*(?:ngay|ngày)?\s*([^\n]+)/i);
    if (pick) {
      const dt = parseDateAny(pick[2], normalizeText(pick[2]));
      if (dt) chatState.ctx.pickupDate = dt;
    }

    const drop = raw.match(/(tra|trả)\s*(?:xe)?\s*(?:ngay|ngày)?\s*([^\n]+)/i);
    if (drop) {
      const dt = parseDateAny(drop[2], normalizeText(drop[2]));
      if (dt) chatState.ctx.dropoffDate = dt;
    }

    if (!pick && !drop && pair.length === 2 && (textNorm.includes("tu") || textNorm.includes("tu ") || textNorm.includes("den") || textNorm.includes("->") || textNorm.includes("→"))) {
      chatState.ctx.pickupDate = pair[0];
      chatState.ctx.dropoffDate = pair[1];
    }
  };

  const syncDaysFromDates = () => {
    const a = chatState.ctx.pickupDate;
    const b = chatState.ctx.dropoffDate;
    if (!a || !b) return;
    const d = diffDays(a, b);
    if (d < 0) return;
    chatState.ctx.days = d === 0 ? 1 : d;
  };

  const scoreCar = (car, ctx) => {
    let score = 0;
    if (ctx.modelId && car.id === ctx.modelId) score += 100;
    if (ctx.seats) score += car.seats >= ctx.seats ? 12 : -20;
    if (ctx.budgetPerDay) score += car.pricePerDay <= ctx.budgetPerDay ? 10 : -10;
    if (ctx.carType) {
      const t = normalizeText(car.type);
      const want = ctx.carType;
      if (want === "sedan" && t.includes("sedan")) score += 10;
      if (want === "suv" && t.includes("suv")) score += 10;
      if (want === "mpv" && (t.includes("mpv") || t.includes("7"))) score += 10;
      if (want === "luxury" && (t.includes("luxury") || t.includes("hang sang"))) score += 10;
      if (want === "electric" && (t.includes("electric") || normalizeText(car.fuel).includes("dien"))) score += 10;
    }
    score += Math.round((Number(car.rating) || 0) * 2);
    return score;
  };

  const buildRecommendText = (ctx) => {
    const ranked = [...cars]
      .map((c) => ({ c, s: scoreCar(c, ctx) }))
      .sort((a, b) => b.s - a.s)
      .map((x) => x.c);

    const filtered = ranked.filter((c) => {
      if (ctx.seats && c.seats < ctx.seats) return false;
      if (ctx.budgetPerDay && c.pricePerDay > ctx.budgetPerDay * 1.15) return false;
      if (ctx.carType) {
        const t = normalizeText(c.type);
        if (ctx.carType === "sedan" && !t.includes("sedan")) return false;
        if (ctx.carType === "suv" && !t.includes("suv")) return false;
        if (ctx.carType === "mpv" && !(t.includes("mpv") || t.includes("7"))) return false;
        if (ctx.carType === "electric" && !normalizeText(c.fuel).includes("dien")) return false;
      }
      return true;
    });

    const top = (filtered.length ? filtered : ranked).slice(0, 3);
    const parts = top.map((c, i) => {
      const p = `${formatVND(c.pricePerDay)}/ngày`;
      return `${i + 1}) ${c.name} • ${c.seats} chỗ • ${c.fuel} • ${p} • ${c.rating}/5`;
    });

    const ask = [
      !ctx.seats ? "Bạn đi mấy người (cần mấy chỗ)?" : null,
      !ctx.budgetPerDay ? "Ngân sách dự kiến/ ngày khoảng bao nhiêu?" : null,
      !ctx.pickup ? "Bạn nhận xe ở đâu (TP.HCM/Hà Nội/… )?" : null
    ]
      .filter(Boolean)
      .slice(0, 2)
      .join(" ");

    return `${parts.join("\n")}${ask ? `\n\nĐể chốt chính xác hơn: ${ask}` : ""}`;
  };

  const buildPriceText = (ctx) => {
    const car = ctx.modelId ? getCarById(ctx.modelId) : null;
    if (!car) return "Bạn muốn xem giá xe nào? Ví dụ: “Giá BMW X5” hoặc “Giá VF8”.";
    const perDay = formatVND(car.pricePerDay);
    if (ctx.pickupDate && ctx.dropoffDate) {
      const d = diffDays(ctx.pickupDate, ctx.dropoffDate);
      if (d < 0) return "Ngày trả phải sau hoặc bằng ngày nhận. Bạn gửi lại giúp mình: nhận ngày nào và trả ngày nào?";
      const days = d === 0 ? 1 : d;
      const total = car.pricePerDay * days;
      return `Giá ${car.name}: ${perDay}/ngày.\nTính theo ngày thực tế: ${days} ngày (từ ${toISODate(ctx.pickupDate)} đến ${toISODate(
        ctx.dropoffDate
      )}).\nTổng: ${formatVND(total)} (chưa gồm phụ phí giao xe/ quá giờ nếu có).`;
    }
    if (ctx.days && ctx.days > 0) {
      const total = car.pricePerDay * ctx.days;
      return `Giá ${car.name}: ${perDay}/ngày.\nƯớc tính ${ctx.days} ngày: ${formatVND(total)} (chưa gồm phụ phí giao xe/ quá giờ nếu có).`;
    }
    return `Giá ${car.name}: ${perDay}/ngày.\nBạn thuê mấy ngày (VD: 3 ngày) để mình tính tổng?`;
  };

  const buildPolicyText = (ctx) => {
    const car = ctx.modelId ? getCarById(ctx.modelId) : null;
    if (car) return `Điều kiện thuê ${car.name}:\n- ${car.policy.join("\n- ")}`;
    return "Điều kiện thuê mẫu:\n- CCCD/Passport bản gốc\n- Bằng lái hợp lệ (tự lái)\n- Đặt cọc theo dòng xe/hình thức thuê\n- Trả xe đúng thời gian, giữ vệ sinh\n- Độ tuổi tối thiểu 21+\n\nBạn muốn xem điều kiện của xe nào (VD: “chính sách Camry”)?";
  };

  const buildCompareText = (textNorm) => {
    const hits = cars
      .map((c) => ({ id: c.id, name: c.name, key: normalizeText(c.name) }))
      .filter((x) => textNorm.includes(x.key));
    const uniq = Array.from(new Set(hits.map((h) => h.id))).map((id) => getCarById(id)).filter(Boolean);
    if (uniq.length < 2) return "Bạn muốn so sánh 2 xe nào? Ví dụ: “So sánh Camry vs BMW X5”.";
    const [a, b] = uniq;
    return `So sánh nhanh:\n- ${a.name}: ${a.seats} chỗ • ${a.fuel} • ${a.transmission} • ${formatVND(a.pricePerDay)}/ngày • ${a.rating}/5\n- ${b.name}: ${b.seats} chỗ • ${b.fuel} • ${b.transmission} • ${formatVND(b.pricePerDay)}/ngày • ${b.rating}/5\n\nBạn ưu tiên gì hơn: giá, rộng rãi hay sang trọng?`;
  };

  const BUSINESS = {
    name: "CAR RENT",
    phone: "+84 901 234 567",
    email: "support@carrent.vn",
    address: "Ngõ 281 Vĩnh Hưng, Hoàng Mai, Hà Nội",
    hours: "08:00–21:00 (Hằng ngày)",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
    messenger: "https://m.me"
  };

  const pickCarForFollowUp = () => {
    if (!chatState.ctx.modelId) return null;
    return getCarById(chatState.ctx.modelId);
  };

  const buildPromotionText = () => {
    const list = cars
      .filter((c) => c.promo)
      .map((c) => `- ${c.name}: ${c.promo}`)
      .join("\n");
    return list ? `Các xe đang có ưu đãi:\n${list}` : "Hiện chưa có chương trình khuyến mãi nào (demo).";
  };

  const buildAvailabilityText = (car) => {
    if (car) {
      const n = Number(car.stock) || 0;
      if (n <= 0) return `${car.name} hiện đang hết xe. Bạn muốn mình gợi ý xe tương đương không?`;
      return `${car.name} hiện còn ${n} xe sẵn sàng. Bạn muốn nhận xe ngày nào?`;
    }
    const list = cars
      .map((c) => {
        const n = Number(c.stock) || 0;
        return `- ${c.name}: ${n > 0 ? `còn ${n} xe` : "hết xe"}`;
      })
      .join("\n");
    return `Tình trạng xe hiện tại (demo):\n${list}\n\nBạn muốn kiểm tra xe cụ thể nào?`;
  };

  const buildCatalogText = (textNorm) => {
    const has4 = textNorm.includes("4 cho") || textNorm.includes("4ch");
    const has7 = textNorm.includes("7 cho") || textNorm.includes("7ch");
    const wantSUV = textNorm.includes("suv");
    const wantLuxury = textNorm.includes("xe sang") || textNorm.includes("hang sang") || textNorm.includes("luxury");
    const wantFamily = textNorm.includes("gia dinh") || textNorm.includes("xe gia dinh");

    const group = (title, ids) => {
      const items = ids.map((id) => getCarById(id)).filter(Boolean);
      const line = items.map((c) => `${c.name} (${c.seats} chỗ)`).join(", ");
      return line ? `- ${title}: ${line}` : null;
    };

    const base = [
      group("Sedan", ["camry", "mercedes-c300"]),
      group("SUV", ["bmw-x5", "everest", "vf8"]),
      group("MPV", ["carnival"])
    ].filter(Boolean);

    const filtered = cars.filter((c) => {
      if (has4 && c.seats > 5) return false;
      if (has7 && c.seats < 7) return false;
      if (wantSUV && !normalizeText(c.type).includes("suv")) return false;
      if (wantLuxury && !normalizeText(c.type).includes("luxury")) return false;
      if (wantFamily && !(c.seats >= 7 || normalizeText(c.type).includes("mpv"))) return false;
      return true;
    });

    const picks = filtered.length
      ? `Gợi ý phù hợp yêu cầu:\n${filtered
          .map((c) => `- ${c.name}: ${c.seats} chỗ • ${c.fuel} • ${formatVND(c.pricePerDay)}/ngày`)
          .join("\n")}`
      : "";

    const tips = [
      "- Tiết kiệm nhiên liệu: VinFast VF8 (điện), Toyota Camry",
      "- Đi du lịch/đường dài: Ford Everest, Kia Carnival (rộng rãi)"
    ].join("\n");

    return `Danh sách xe hiện có:\n${base.join("\n")}\n\n${tips}${picks ? `\n\n${picks}` : ""}`;
  };

  const buildRentalInfoText = (textNorm) => {
    const lines = [];
    if (textNorm.includes("theo gio") || textNorm.includes("gio")) {
      lines.push(
        "- Thuê theo giờ: có (tối thiểu 4 giờ). Giá theo gói, thường cao hơn thuê theo ngày."
      );
    }
    if (textNorm.includes("theo thang") || textNorm.includes("thang")) {
      lines.push("- Thuê theo tháng: có. Giá tốt hơn theo ngày, tuỳ dòng xe và số km dự kiến.");
    }
    if (textNorm.includes("tai xe") || textNorm.includes("co tai") || textNorm.includes("tai x e")) {
      lines.push("- Có tài xế: có (tính theo gói giờ/ngày, tuỳ lịch trình).");
    }
    if (textNorm.includes("tu lai") || textNorm.includes("tu lai")) {
      lines.push("- Tự lái: có (yêu cầu giấy tờ + đặt cọc theo xe).");
    }
    if (textNorm.includes("xang") || textNorm.includes("nhien lieu") || textNorm.includes("bao gom xang")) {
      lines.push("- Giá thuê thường chưa bao gồm xăng/dầu (tự lái). Xe điện tính theo mức pin/bàn giao.");
    }
    if (textNorm.includes("phu phi")) {
      lines.push(
        "- Phụ phí có thể có: giao xe, quá giờ, vệ sinh, cầu đường/bãi xe, phát sinh ngoài hợp đồng."
      );
    }
    if (textNorm.includes("dat coc")) {
      lines.push("- Đặt cọc: có (tuỳ dòng xe và hình thức tự lái/có tài xế).");
    }
    if (textNorm.includes("toi thieu") || textNorm.includes("it nhat")) {
      lines.push("- Thời gian thuê tối thiểu: 1 ngày (hoặc 4 giờ nếu thuê theo giờ).");
    }

    if (!lines.length) {
      lines.push(
        "- Giá thuê theo ngày: từ khoảng 1.4tr/ngày (Sedan) đến ~3.9tr/ngày (Luxury).",
        "- Có thuê theo giờ/theo tháng, tự lái hoặc có tài xế tuỳ nhu cầu."
      );
    }

    return `Thông tin thuê xe:\n${lines.join("\n")}\n\nBạn muốn mình báo giá xe nào hoặc gợi ý theo số chỗ/ngân sách?`;
  };

  const buildPolicyDetailText = (textNorm) => {
    const lines = [];
    if (textNorm.includes("giay to") || textNorm.includes("can gi") || textNorm.includes("ho so")) {
      lines.push("- Giấy tờ: CCCD/Passport bản gốc + bằng lái hợp lệ (tự lái).");
    }
    if (textNorm.includes("bang lai")) {
      lines.push("- Bằng lái: bắt buộc khi thuê tự lái. Nếu thuê có tài xế thì không cần bằng lái.");
    }
    if (textNorm.includes("bao nhieu tuoi") || textNorm.includes("do tuoi") || textNorm.includes("tuoi")) {
      lines.push("- Độ tuổi: tối thiểu 21+ (tuỳ xe có thể yêu cầu 23+).");
    }
    if (textNorm.includes("tra tre") || textNorm.includes("tre")) {
      lines.push("- Trả xe trễ: tính phí quá giờ (VD: 100k/giờ). Quá 3 giờ có thể tính 1 ngày.");
    }
    if (textNorm.includes("huy") || textNorm.includes("huy dat") || textNorm.includes("cancel")) {
      lines.push("- Hủy đặt xe: miễn phí nếu báo trước ≥24h; dưới 24h có thể tính phí (demo).");
    }
    if (textNorm.includes("hoan tien") || textNorm.includes("refund")) {
      lines.push("- Hoàn tiền: xử lý theo phương thức thanh toán, thường 3–7 ngày làm việc (demo).");
    }
    if (textNorm.includes("xe hong") || textNorm.includes("su co") || textNorm.includes("hong giua duong")) {
      lines.push("- Xe gặp sự cố: liên hệ ngay hotline để được hướng dẫn/đổi xe (tuỳ tình huống).");
    }
    if (textNorm.includes("cuu ho") || textNorm.includes("c uu ho") || textNorm.includes("cứu hộ")) {
      lines.push("- Cứu hộ: có hỗ trợ 24/7 trong phạm vi chính sách (tuỳ khu vực).");
    }
    if (!lines.length) {
      lines.push(
        "- Giấy tờ & đặt cọc: tuỳ dòng xe.",
        "- Trả trễ/hủy đặt/hoàn tiền: áp dụng theo điều khoản hợp đồng."
      );
    }
    return `Chính sách thuê:\n${lines.join("\n")}\n\nBạn muốn xem điều kiện cụ thể của xe nào không?`;
  };

  const buildLocationDeliveryText = (textNorm) => {
    const lines = [];
    if (textNorm.includes("o dau") || textNorm.includes("dia chi") || textNorm.includes("shop o dau")) {
      lines.push(`- Địa chỉ (demo): ${BUSINESS.address}`);
    }
    if (textNorm.includes("giao xe") || textNorm.includes("tan noi") || textNorm.includes("tai nha")) {
      lines.push("- Giao xe tận nơi: có (nội thành/ngoại thành tuỳ khu vực).");
    }
    if (textNorm.includes("san bay")) {
      lines.push("- Giao xe sân bay: có (tuỳ khung giờ và khu vực).");
    }
    if (textNorm.includes("ban dem") || textNorm.includes("toi") || textNorm.includes("khuya")) {
      lines.push("- Giao xe ban đêm: có thể hỗ trợ, thường có phụ phí ngoài giờ.");
    }
    if (textNorm.includes("phi giao") || textNorm.includes("ph i giao")) {
      lines.push("- Phí giao xe (tham khảo): nội thành từ 150k, sân bay từ 250k; ngoài giờ +100k.");
    }
    if (!lines.length) {
      lines.push(
        `- Địa chỉ (demo): ${BUSINESS.address}`,
        "- Có giao xe tận nơi/sân bay và hỗ trợ ngoài giờ (có thể phát sinh phụ phí)."
      );
    }
    return `Địa điểm & giao xe:\n${lines.join("\n")}`;
  };

  const buildPaymentText = (textNorm) => {
    const lines = [];
    if (textNorm.includes("chuyen khoan") || textNorm.includes("bank")) lines.push("- Chuyển khoản: có.");
    if (textNorm.includes("khi nhan xe") || textNorm.includes("tien mat") || textNorm.includes("cod"))
      lines.push("- Thanh toán khi nhận xe: có (tuỳ trường hợp).");
    if (textNorm.includes("vi dien tu") || textNorm.includes("momo") || textNorm.includes("zalopay"))
      lines.push("- Ví điện tử: có (MoMo/ZaloPay tuỳ thời điểm).");
    if (textNorm.includes("hoa don") || textNorm.includes("vat"))
      lines.push("- Xuất hóa đơn: có (cần cung cấp thông tin doanh nghiệp).");
    if (!lines.length) {
      lines.push("- Chuyển khoản, tiền mặt, ví điện tử (tuỳ thời điểm).", "- Có hỗ trợ xuất hóa đơn (VAT) theo yêu cầu.");
    }
    return `Thanh toán:\n${lines.join("\n")}`;
  };

  const buildSupportText = (textNorm) => {
    if (textNorm.includes("gio") || textNorm.includes("lam viec")) {
      return `Giờ làm việc: ${BUSINESS.hours}\nHotline: ${BUSINESS.phone}`;
    }
    if (textNorm.includes("facebook")) return `Facebook: ${BUSINESS.facebook}`;
    if (textNorm.includes("tiktok")) return `TikTok: ${BUSINESS.tiktok}`;
    if (textNorm.includes("messenger")) return `Messenger: ${BUSINESS.messenger}`;
    return `Liên hệ hỗ trợ:\n- Hotline: ${BUSINESS.phone}\n- Email: ${BUSINESS.email}\n- Facebook: ${BUSINESS.facebook}\n- Messenger: ${BUSINESS.messenger}\n- TikTok: ${BUSINESS.tiktok}`;
  };

  const detectIntent = (textNorm) => {
    const greetings = ["xin chao", "chao", "hi", "hello", "hey"];
    if (greetings.some((g) => textNorm === g || textNorm.startsWith(`${g} `))) return "greeting";
    if (textNorm.includes("cam on") || textNorm === "thanks" || textNorm.includes("thank")) return "thanks";
    if (textNorm.includes("tam biet") || textNorm === "bye" || textNorm.includes("hen gap")) return "goodbye";
    if (
      textNorm.includes("ban la ai") ||
      textNorm.includes("ban ten gi") ||
      textNorm.includes("ai vay") ||
      textNorm.includes("ban co the giup gi") ||
      textNorm.includes("ban giup gi") ||
      textNorm.includes("ban lam duoc gi")
    )
      return "about_bot";
    if (textNorm.includes("reset") || textNorm.includes("xoa") || textNorm.includes("lam lai"))
      return "reset";
    if (
      textNorm.includes("so dien thoai") ||
      textNorm.includes("sdt") ||
      textNorm.includes("email") ||
      textNorm.includes("facebook") ||
      textNorm.includes("messenger") ||
      textNorm.includes("tiktok") ||
      textNorm.includes("lam viec") ||
      (textNorm.includes("gio") && textNorm.includes("shop"))
    )
      return "support";
    if (textNorm.includes("so sanh") || textNorm.includes("vs") || textNorm.includes("voi")) return "compare";
    if (textNorm.includes("chinh sach") || textNorm.includes("dat coc") || textNorm.includes("giay to") || textNorm.includes("dieu kien"))
      return "policy";
    if (
      textNorm.includes("huy") ||
      textNorm.includes("hoan tien") ||
      textNorm.includes("tra tre") ||
      textNorm.includes("xe hong") ||
      textNorm.includes("cuu ho")
    )
      return "policy_detail";
    if (textNorm.includes("khuyen mai") || textNorm.includes("uu dai")) return "promotion";
    if (textNorm.includes("danh sach xe") || textNorm.includes("shop co nhung loai xe") || textNorm.includes("loai xe nao"))
      return "car_list";
    if (
      textNorm.includes("4 cho") ||
      textNorm.includes("7 cho") ||
      textNorm.includes("suv") ||
      textNorm.includes("xe sang") ||
      textNorm.includes("xe gia dinh") ||
      textNorm.includes("tiet kiem") ||
      textNorm.includes("du lich") ||
      textNorm.includes("duong dai")
    )
      return "car_list";
    if (textNorm.includes("con xe") || textNorm.includes("con trong") || textNorm.includes("co san") || textNorm.includes("con hang"))
      return "availability";
    if (textNorm.includes("shop o dau") || textNorm.includes("dia chi") || textNorm.includes("o dau")) return "location_delivery";
    if (textNorm.includes("giao xe") || textNorm.includes("san bay") || textNorm.includes("tan noi") || textNorm.includes("phi giao"))
      return "location_delivery";
    if (
      textNorm.includes("thanh toan") ||
      textNorm.includes("chuyen khoan") ||
      textNorm.includes("vi dien tu") ||
      textNorm.includes("hoa don") ||
      textNorm.includes("vat")
    )
      return "payment";
    if (
      (textNorm.includes("nhan xe") || textNorm.includes("tra xe") || textNorm.includes("tu ngay") || textNorm.includes("den ngay")) &&
      textNorm.includes("ngay")
    )
      return "booking";
    if (textNorm.includes("dat xe") || textNorm.includes("thue ngay") || textNorm.includes("book") || textNorm.includes("giu xe"))
      return "booking";
    if (textNorm.includes("thue xe") || textNorm.includes("toi muon thue") || textNorm.includes("cach dat") || textNorm.includes("lam sao de thue"))
      return "booking";
    if (textNorm.includes("gia") || textNorm.includes("bao nhieu") || textNorm.includes("chi phi") || textNorm.includes("tinh tien"))
      return "price";
    if (
      textNorm.includes("theo gio") ||
      textNorm.includes("theo thang") ||
      textNorm.includes("tu lai") ||
      textNorm.includes("tai xe") ||
      textNorm.includes("xang") ||
      textNorm.includes("phu phi") ||
      textNorm.includes("toi thieu")
    )
      return "rental_info";
    if (
      textNorm.includes("goi y") ||
      textNorm.includes("tu van") ||
      textNorm.includes("chon xe") ||
      textNorm.includes("phu hop") ||
      textNorm.includes("nen thue")
    )
      return "recommend";
    if (textNorm.includes("ho tro") || textNorm.includes("lien he") || textNorm.includes("hotline")) return "support";
    if (
      textNorm.includes("thong tin") ||
      textNorm.includes("thong so") ||
      textNorm.includes("xe nao") ||
      (textNorm.includes("xe nay") &&
        (textNorm.includes("may cho") ||
          textNorm.includes("so cho") ||
          textNorm.includes("xang") ||
          textNorm.includes("dau") ||
          textNorm.includes("dien") ||
          textNorm.includes("tu dong") ||
          textNorm.includes("so san")))
    )
      return "info";
    return "fallback";
  };

  const updateContextFromInput = (raw, textNorm) => {
    const seats = extractSeats(textNorm);
    if (seats) chatState.ctx.seats = seats;

    const days = extractDays(textNorm);
    if (days) chatState.ctx.days = days;

    const budget = extractBudgetPerDay(textNorm);
    if (budget) chatState.ctx.budgetPerDay = budget;

    const carType = extractCarType(textNorm);
    if (carType) chatState.ctx.carType = carType;

    const modelId = matchCarFromText(textNorm);
    if (modelId) chatState.ctx.modelId = modelId;

    inferPickupDropoff(raw, textNorm);
    inferPickupDropoffDates(raw, textNorm);
    syncDaysFromDates();

    if (!chatState.ctx.pickupDate && (textNorm.includes("hom nay") || textNorm.includes("today"))) {
      chatState.ctx.pickupDate = atMidnight(new Date());
    }
    if (!chatState.ctx.pickupDate && textNorm.includes("cuoi tuan")) {
      const d = atMidnight(new Date());
      const day = d.getDay();
      const toSat = (6 - day + 7) % 7 || 7;
      d.setDate(d.getDate() + toSat);
      chatState.ctx.pickupDate = d;
    }
  };

  const botReply = (input) => {
    const raw = String(input || "").trim();
    const textNorm = normalizeText(raw);
    if (!textNorm) return "Bạn muốn mình hỗ trợ gì? VD: “mình cần xe 7 chỗ, 3 ngày, ngân sách 2tr/ngày, nhận TP.HCM”.";

    if (chatState.awaiting) {
      updateContextFromInput(raw, textNorm);
      const slot = chatState.awaiting;
      chatState.awaiting = null;
      if (slot === "days" && !chatState.ctx.days) {
        chatState.awaiting = "days";
        return "Bạn cho mình biết số ngày thuê (VD: 2 ngày / 3 ngày) nhé.";
      }
      if (slot === "model" && !chatState.ctx.modelId) {
        chatState.awaiting = "model";
        return "Bạn nói giúp tên xe cụ thể (VD: Camry, BMW X5, Mercedes C300, Everest, VF8, Carnival).";
      }
      if (slot === "pickupDate" && !chatState.ctx.pickupDate) {
        chatState.awaiting = "pickupDate";
        return "Bạn nhận xe ngày nào? (VD: 2026-06-01 hoặc 01/06)";
      }
      if (slot === "dropoffDate") {
        if (!chatState.ctx.dropoffDate) {
          chatState.awaiting = "dropoffDate";
          return "Bạn trả xe ngày nào? (VD: 2026-06-03 hoặc 03/06)";
        }
        if (chatState.ctx.pickupDate) {
          const d = diffDays(chatState.ctx.pickupDate, chatState.ctx.dropoffDate);
          if (d < 0) {
            chatState.ctx.dropoffDate = null;
            chatState.awaiting = "dropoffDate";
            return "Ngày trả phải sau hoặc bằng ngày nhận. Bạn nhập lại ngày trả nhé.";
          }
          chatState.ctx.days = d === 0 ? 1 : d;
        }
      }
    } else {
      updateContextFromInput(raw, textNorm);
    }

    const intent = detectIntent(textNorm);
    chatState.lastIntent = intent;

    if (intent === "reset") {
      chatState.ctx = {
        seats: null,
        budgetPerDay: null,
        days: null,
        pickup: null,
        dropoff: null,
        pickupDate: null,
        dropoffDate: null,
        modelId: null,
        carType: null
      };
      chatState.awaiting = null;
      return "Mình đã reset yêu cầu. Bạn muốn thuê xe loại nào và đi mấy người?";
    }

    if (intent === "greeting") {
      return "Chào bạn! Bạn cần thuê xe theo nhu cầu nào (số chỗ, ngân sách, số ngày, điểm nhận/trả)?";
    }

    if (intent === "about_bot") {
      return `Mình là trợ lý ảo của ${BUSINESS.name}. Mình có thể tư vấn xe theo số chỗ/ngân sách/ngày nhận-trả, báo giá, kiểm tra tình trạng xe và hướng dẫn đặt xe.`;
    }

    if (intent === "thanks") {
      return "Cảm ơn bạn! Nếu cần mình gợi ý xe theo nhu cầu, bạn nói giúp số chỗ + ngày nhận/trả nhé.";
    }

    if (intent === "goodbye") {
      return "Tạm biệt bạn! Khi cần thuê xe cứ nhắn mình nhé.";
    }

    if (intent === "support") {
      return buildSupportText(textNorm);
    }

    if (intent === "compare") {
      return buildCompareText(textNorm);
    }

    if (intent === "promotion") {
      return buildPromotionText();
    }

    if (intent === "car_list") {
      return buildCatalogText(textNorm);
    }

    if (intent === "availability") {
      const car = chatState.ctx.modelId ? getCarById(chatState.ctx.modelId) : null;
      return buildAvailabilityText(car);
    }

    if (intent === "location_delivery") {
      return buildLocationDeliveryText(textNorm);
    }

    if (intent === "payment") {
      return buildPaymentText(textNorm);
    }

    if (intent === "rental_info") {
      return buildRentalInfoText(textNorm);
    }

    if (intent === "policy") {
      if (!chatState.ctx.modelId && (textNorm.includes("xe nay") || textNorm.includes("xe do"))) {
        chatState.awaiting = "model";
        return "Bạn đang hỏi điều kiện của xe nào? (VD: “chính sách BMW X5”)";
      }
      return buildPolicyText(chatState.ctx);
    }

    if (intent === "policy_detail") {
      return buildPolicyDetailText(textNorm);
    }

    if (intent === "price") {
      if (!chatState.ctx.modelId) {
        if (
          textNorm.includes("gia thue") ||
          textNorm.includes("gia the nao") ||
          textNorm.includes("1 ngay") ||
          textNorm.includes("mot ngay")
        ) {
          return buildRentalInfoText(textNorm);
        }
        const maybe = buildRecommendText(chatState.ctx);
        chatState.awaiting = "model";
        return `Bạn muốn xem giá xe nào?\n\nNếu bạn chưa chọn xe, đây là gợi ý nhanh:\n${maybe}`;
      }
      if (!chatState.ctx.days && !(chatState.ctx.pickupDate && chatState.ctx.dropoffDate)) chatState.awaiting = "days";
      return buildPriceText(chatState.ctx);
    }

    if (intent === "booking") {
      const car = chatState.ctx.modelId ? getCarById(chatState.ctx.modelId) : null;
      if (!car) {
        if (textNorm.includes("cach") || textNorm.includes("lam sao") || textNorm.includes("huong dan")) {
          return `Cách đặt xe (demo):\n- Chọn xe trong mục Danh sách xe\n- Bấm “Xem chi tiết” để xem thông số/điều kiện\n- Bấm “Đặt xe” và cung cấp ngày nhận/trả + địa điểm\n\nBạn muốn đặt xe nào (Camry/BMW X5/C300/Everest/VF8/Carnival) hoặc bạn cần mấy chỗ?`;
        }
        return "Bạn muốn đặt xe nào (Camry/BMW X5/C300/Everest/VF8/Carnival) hoặc bạn cần mấy chỗ và ngân sách khoảng bao nhiêu?";
      }

      if (!chatState.ctx.pickupDate && (textNorm.includes("hom nay") || textNorm.includes("today"))) {
        chatState.ctx.pickupDate = atMidnight(new Date());
      }
      if (!chatState.ctx.pickupDate && textNorm.includes("cuoi tuan")) {
        const d = atMidnight(new Date());
        const day = d.getDay();
        const toSat = (6 - day + 7) % 7 || 7;
        d.setDate(d.getDate() + toSat);
        chatState.ctx.pickupDate = d;
      }

      if (!chatState.ctx.pickupDate) {
        chatState.awaiting = "pickupDate";
        return `Đặt xe theo form: bạn muốn nhận ${car.name} ngày nào? (VD: 2026-06-01 hoặc 01/06)`;
      }
      if (!chatState.ctx.dropoffDate) {
        chatState.awaiting = "dropoffDate";
        return `Bạn trả xe ngày nào? (VD: 2026-06-03 hoặc 03/06). Nếu thuê cuối tuần, bạn có thể trả Chủ nhật hoặc Thứ 2.`;
      }

      const d = diffDays(chatState.ctx.pickupDate, chatState.ctx.dropoffDate);
      if (d < 0) {
        chatState.ctx.dropoffDate = null;
        chatState.awaiting = "dropoffDate";
        return "Ngày trả phải sau hoặc bằng ngày nhận. Bạn nhập lại ngày trả nhé.";
      }
      chatState.ctx.days = d === 0 ? 1 : d;
      const total = car.pricePerDay * chatState.ctx.days;

      const extra = [
        chatState.ctx.pickup ? `Nhận: ${chatState.ctx.pickup}` : null,
        chatState.ctx.dropoff ? `Trả: ${chatState.ctx.dropoff}` : null,
        chatState.ctx.pickupDate ? `Ngày nhận: ${toISODate(chatState.ctx.pickupDate)}` : null,
        chatState.ctx.dropoffDate ? `Ngày trả: ${toISODate(chatState.ctx.dropoffDate)}` : null,
        chatState.ctx.days ? `Số ngày thực tế: ${chatState.ctx.days}` : null,
        chatState.ctx.days ? `Tổng (ước tính): ${formatVND(total)}` : null
      ].filter(Boolean);
      const meta = extra.length ? `\n\nTóm tắt yêu cầu:\n- ${extra.join("\n- ")}` : "";
      return `Để đặt ${car.name}: bạn bấm “Xem chi tiết” → “Đặt xe” (demo) hoặc kéo xuống mục Liên hệ để gửi yêu cầu.${meta}`;
    }

    if (intent === "info") {
      const car = chatState.ctx.modelId ? getCarById(chatState.ctx.modelId) : null;
      if (car) {
        if (textNorm.includes("may cho") || textNorm.includes("so cho")) return `${car.name} có ${car.seats} chỗ.`;
        if (textNorm.includes("xang") || textNorm.includes("dau") || textNorm.includes("dien"))
          return `${car.name} dùng ${car.fuel}.`;
        if (textNorm.includes("tu dong") || textNorm.includes("so tu dong") || textNorm.includes("so san"))
          return `${car.name} dùng hộp số: ${car.transmission}.`;
        if (textNorm.includes("con xe") || textNorm.includes("con trong") || textNorm.includes("co san"))
          return buildAvailabilityText(car);
        if (textNorm.includes("khuyen mai") || textNorm.includes("uu dai"))
          return car.promo ? `${car.name} đang có ưu đãi: ${car.promo}` : `${car.name} hiện chưa có ưu đãi riêng (demo).`;
        return `Thông tin ${car.name}:\n- Hãng: ${car.brand}\n- Loại: ${car.type}\n- Số chỗ: ${car.seats}\n- Nhiên liệu: ${car.fuel}\n- Hộp số: ${car.transmission}\n- Giá: ${formatVND(car.pricePerDay)}/ngày\n- Tình trạng: ${(Number(car.stock) || 0) > 0 ? `còn ${car.stock} xe` : "hết xe"}\n\nBạn muốn mình tính tổng chi phí theo ngày nhận/trả không?`;
      }
      return "Bạn muốn xem thông tin xe nào? (Camry/BMW X5/Mercedes C300/Everest/VF8/Carnival). Hoặc nói nhu cầu để mình gợi ý.";
    }

    if (intent === "recommend" || intent === "fallback") {
      return buildRecommendText(chatState.ctx);
    }

    return "Bạn có thể nói rõ hơn nhu cầu thuê xe không? VD: “7 chỗ, 3 ngày, ngân sách 2tr/ngày, nhận TP.HCM”.";
  };

  const openChat = () => {
    if (!chatPanel) return;
    chatPanel.hidden = false;
    chatPanel.classList.add("is-open");
    window.setTimeout(() => chatInput?.focus(), 60);
    if (chatBody && chatBody.childElementCount === 0) {
      pushMsg(
        "Xin chào! Mình có thể tư vấn theo yêu cầu (số chỗ/ngân sách/số ngày/điểm nhận).\nVD: “Mình cần xe 7 chỗ, 3 ngày, ngân sách 2tr/ngày, nhận TP.HCM”.",
        "bot"
      );
    }
  };

  const closeChat = () => {
    if (!chatPanel) return;
    chatPanel.classList.remove("is-open");
    window.setTimeout(() => {
      if (!chatPanel.classList.contains("is-open")) chatPanel.hidden = true;
    }, 220);
  };

  const initChat = () => {
    chatFab?.addEventListener("click", () => (chatPanel?.classList.contains("is-open") ? closeChat() : openChat()));
    chatClose?.addEventListener("click", closeChat);
    chatQuick?.addEventListener("click", (e) => {
      const t = e.target;
      if (!(t instanceof HTMLElement)) return;
      const quick = t.dataset.quick;
      if (!quick) return;
      openChat();
      pushMsg(quick, "me");
      window.setTimeout(() => pushMsg(botReply(quick), "bot"), 240);
    });
    chatForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const v = String(chatInput?.value || "").trim();
      if (!v) return;
      pushMsg(v, "me");
      if (chatInput) chatInput.value = "";
      window.setTimeout(() => pushMsg(botReply(v), "bot"), 240);
    });
  };

  const initReveal = () => {
    const els = qsa(".reveal");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "60px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
  };

  const initEscHandlers = () => {
    window.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      if (carModal && !carModal.hidden) {
        closeCarModal();
        return;
      }
      if (navDrawer && navDrawer.classList.contains("is-open")) {
        closeDrawer();
        return;
      }
      if (chatPanel && chatPanel.classList.contains("is-open")) {
        closeChat();
      }
    });
  };

  const initLoginDemo = () => {
    const loginForm = qs("#login");
    if (!(loginForm instanceof HTMLFormElement)) return;
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Đăng nhập thành công (demo).", 2200);
    });
  };

  const init = () => {
    setYear();
    renderCars();
    initReveal();
    initNav();
    initSearch();
    initModal();
    initCounters();
    initReviews();
    initChat();
    initBackToTop();
    initEscHandlers();
    initLoginDemo();
    setDefaultDates();
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
