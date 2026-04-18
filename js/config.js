/**
 * ============================================
 *  PORTFOLIO CONFIGURATION FILE
 * ============================================
 *  Edit this file to update your portfolio.
 *  No coding knowledge required — just change
 *  the text between the quotes.
 * ============================================
 */

const PORTFOLIO_CONFIG = {

  // ── Personal Info ──────────────────────────
  personalInfo: {
    introText: "Introducing",
    name: "Syed Sufiyan",
    role: "Video Editor",
    tagline: "Crafting high-retention edits that turn attention into impact."
  },

  // ── Availability Tags ──────────────────────
  availability: {
    isAvailable: true,
    customText: "Available for Work"
  },

  // ── Bio Block ──────────────────────────────
  bioBlock: {
    introTitle: "About Me",
    introText: "I specialize in creating dynamic, fast-paced edits tailored for modern audiences. With a deep understanding of pacing and retention, my goal is to maximize engagement.",
    specialization: "Short-form content, Documentaries, & Brand Films",
    services: [
      "Advanced Color Grading",
      "Motion Graphics & VFX",
      "Sound Design & Mixing",
      "Thumbnail & Hook Strategy"
    ],
    importantNoteTitle: "Important Note",
    importantNoteText: "The videos edited by me will not include any form of background music as per my religious guidelines. If you are okay with using vocals-only Islamic nasheeds, we can discuss further."
  },

  // ── Filters Settings ───────────────────────
  filters: {
    enabled: true,
    categories: ["Short Form", "Long Form"]
  },


  // ── Contact Info ───────────────────────────
  contactInfo: {
    email: "loopzot@gmail.com",
    whatsapp: "https://wa.me/916383057549"
  },

  // ── Social Links ───────────────────────────
  socialLinks: {
    youtube: {
      url: "https://youtube.com/@loop_zot",
      label: "loop_zot"
    },
    instagram: {
      url: "https://instagram.com/loop_zot",
      label: "loop_zot"
    }
  },

  // ── Portfolio Videos ───────────────────────
  //  Add, remove, or reorder videos below.
  //  Supported sources: YouTube, Google Drive
  //
  //  For YouTube: use the embed URL format
  //    "https://www.youtube.com/embed/VIDEO_ID"
  //
  //  For Google Drive: use the preview URL format
  //    "https://drive.google.com/file/d/FILE_ID/preview"
  //
  portfolioVideos: [
    {
      id: "v1",
      title: "Cinematic Brand Story",
      description: "A high-energy brand film blending dynamic transitions, color grading, and rhythm-synced cuts to create a compelling narrative.",
      problem: "The brand struggled to connect with their audience emotionally and needed a narrative-driven center piece.",
      goal: "Create a compelling hook and energetic middle section to keep viewer retention above 60%.",
      solution: "Blended dynamic transitions, modern color grading, and rhythm-synced cuts for a high-energy brand film.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["Brand Film", "Color Grading", "Motion"],
      ratio: "16:9",
      categories: ["Long Form"],
      isVisible: true
    },
    {
      id: "v2",
      title: "YouTube Retention Edit",
      description: "Fast-paced editing designed for maximum viewer retention — jump cuts, zooms, text overlays, and sound design.",
      problem: "Previous videos had a steep drop-off rate within the first 30 seconds of the video.",
      goal: "Maximize viewer retention using visual pattern interrupts and fast-paced editing.",
      solution: "Implemented jump cuts, dynamic zooms, text overlays, and an active sound design layer.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["YouTube", "Retention", "Pacing"],
      ratio: "16:9",
      categories: ["Long Form"],
      isVisible: true
    },
    {
      id: "v3",
      title: "Short-Form Viral Content",
      description: "Snappy, scroll-stopping edits optimized for Reels and Shorts with hook-first storytelling.",
      problem: "Organic reach on social platforms was plateauing under previous content formats.",
      goal: "Build a snappy, scroll-stopping visual identity optimized entirely for Reels and Shorts.",
      solution: "Designed hook-first storytelling, using punchy visuals and quick pacing to maximize reach.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["Reels", "Shorts", "Viral"],
      ratio: "9:16",
      categories: ["Short Form"],
      isVisible: true
    },
    {
      id: "v4",
      title: "Documentary Style Edit",
      description: "Clean, narrative-driven editing with subtle transitions and atmospheric sound design that respects the story.",
      problem: "The raw footage was lengthy and lacked a clear, cohesive narrative structure.",
      goal: "Tell a clean, narrative-driven story while respecting the original material's tone.",
      solution: "Used subtle transitions, atmospheric sound design, and careful pacing to maintain interest.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["Documentary", "Storytelling", "Atmosphere"],
      ratio: "16:9",
      categories: ["Long Form"],
      isVisible: true
    },
    {
      id: "v5",
      title: "Music Video Production",
      description: "Beat-synced editing with creative visual effects and color treatment that amplifies the music's emotion.",
      problem: "The video needed to perfectly mirror the high energy and evolving beat of the music.",
      goal: "Visually emphasize key drops and ensure transitions feel like part of the music.",
      solution: "Applied beat-synced editing, complex visual effects, and a stylized color treatment.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["Music Video", "Beat Sync", "VFX"],
      ratio: "9:16",
      categories: ["Short Form"],
      isVisible: true
    }
  ],

  // ── Client Feedback ────────────────────────
  feedbacks: [
    {
      id: "f1",
      personName: "Creative Director, Apex Brands",
      feedbackText: "The level of detail and rhythm in his edits is unmatched. Turned our raw footage into an absolutely captivating story that drove massive engagement.",
      isVisible: true
    },
    {
      id: "f2",
      personName: "Lead Creator, ViralWave",
      feedbackText: "Syed completely understands the psychology of short-form content. His edits consistently bump our retention rates by over 40%.",
      isVisible: true
    }
  ],

  // ── FAQs ───────────────────────────────────
  faqs: [
    {
      id: "q1",
      question: "What software do you use for editing?",
      answer: "I primarily edit using Adobe Premiere Pro and After Effects for advanced motion graphics and VFX."
    },
    {
      id: "q2",
      question: "What is your typical turnaround time?",
      answer: "For short-form content (Reels/Shorts), my turnaround is typically 24-48 hours. Larger projects like documentaries or music videos take 1-2 weeks."
    },
    {
      id: "q3",
      question: "Do you offer revisions?",
      answer: "Yes, every project includes up to 2 rounds of revisions to ensure we nail the exact vision and pacing you're looking for."
    }
  ],

  // ── Admin Settings ─────────────────────────
  admin: {
    password: "sufiyan2024"   // Change this to your own password
  }
};

// Make config available globally
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_CONFIG;
}
