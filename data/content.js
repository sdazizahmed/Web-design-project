// content.js
// All textual and image content for the photography education website.
// Images are now loaded from a local /images folder.

const data = {
  home: {
    // Home page introduces the educational mission of the site
    title: "Learn Photography",
    heroImage: "images/hero-mountains.jpg", // full-screen hero image
    heroText: "Master the art of capturing beautiful images",
    aboutHeading: "Why Learn Photography?",
    aboutParagraph:
      "Photography is an accessible form of creative expression that allows you to preserve memories, tell stories and explore the world around you. Our lessons cover composition, exposure, lighting, camera settings and post-processing to help you build a solid foundation.<br /><br />Whether you're a beginner picking up a camera for the first time or an experienced shooter looking to refine your skills, you'll find step-by-step guides, practical exercises and galleries to inspire your creativity. Our goal is to help you unlock your artistic potential and become confident behind the lens.",
  },

  history: {
    // History page covers important milestones in photography
    title: "History of Photography",
    paragraphs: [
      "Photography has evolved tremendously since the early 19th century. Understanding its history helps you appreciate how far the art and science have come.",
      "Early methods like the daguerreotype required long exposure times and meticulous chemical processes. As technology progressed, cameras became smaller, film became more sensitive and photography became accessible to the masses.",
      "Today, digital sensors and smartphones allow anyone to take high-quality photos in an instant. Exploring this timeline will provide context for your photographic journey.",
      "During the late 20th century, instant and Polaroid cameras allowed photographers to see results immediately, paving the way for digital photography.",
      "The 21st century has seen photography converge with computing. Smartphones, social media and AI-powered tools have democratized image making and editing, empowering everyone to be a storyteller.",
    ],
    timeline: [
      { year: "1826", description: "Nicéphore Niépce captures the first permanent photograph using a camera obscura." },
      { year: "1839", description: "Louis Daguerre introduces the daguerreotype, the first commercially viable photographic process." },
      { year: "1888", description: "George Eastman patents the Kodak camera, putting photography into the hands of the general public." },
      { year: "1948", description: "Edwin Land launches the Polaroid Model 95, making instant photography possible." },
      { year: "1991", description: "Kodak releases the first professional digital SLR camera, ushering in the digital era." },
      { year: "2007", description: "The first iPhone is released, sparking the rise of smartphone photography." },
      { year: "2010", description: "Smartphone cameras become mainstream, making photography accessible to anyone with a phone." },
      { year: "2012", description: "Mirrorless interchangeable-lens cameras gain popularity, offering DSLR-like quality in a smaller form factor." },
      { year: "2020", description: "Advances in computational photography and AI drastically improve image quality and creative possibilities on mobile devices." },
    ],
  },

  // GALLERY IMAGES – now local files
  gallery: [
    { src: "images/gallery-01-sunset-mountains.jpg", alt: "Sunset over a mountain ridge" },
    { src: "images/gallery-02-lake-reflection.jpg", alt: "Calm lake with reflection of mountains" },
    { src: "images/gallery-03-forest-waterfall.jpg", alt: "Forest waterfall surrounded by rocks" },
    { src: "images/gallery-04-desert-stars.jpg", alt: "Starry night sky over a desert landscape" },
    { src: "images/gallery-05-dew-leaf.jpg", alt: "Close-up of dew on a leaf" },
    { src: "images/gallery-06-city-sunset.jpg", alt: "City skyline at sunset" },
    { src: "images/gallery-07-desert-road.jpg", alt: "Desert road leading into mountains" },
    { src: "images/gallery-08-tree-silhouette.jpg", alt: "Silhouette of a tree against a colorful sky" },
    { src: "images/gallery-09-beach-waves.jpg", alt: "Gentle waves on a sandy beach" },

    // Additional images to enrich the gallery
    { src: "images/gallery-10-street-motion.jpg", alt: "Crowded street with motion blur" },
    { src: "images/gallery-11-milky-way.jpg", alt: "Starry night sky and Milky Way" },
    { src: "images/gallery-12-photographer-sunset.jpg", alt: "Silhouette of a photographer at sunset" },
    { src: "images/gallery-13-mountain-lake-forest.jpg", alt: "Mountain lake surrounded by forest" },
    { src: "images/gallery-14-autumn-forest-path.jpg", alt: "Path through an autumn forest" },
    { src: "images/gallery-15-rainbow-mountains.jpg", alt: "Rainbow arching over mountains and valley" },
  ],

  // STYLES / TECHNIQUES
  styles: {
    // Styles page introduces different genres and techniques of photography
    title: "Photography Styles & Techniques",
    cards: [
      {
        title: "Portrait",
        description:
          "Learn how to capture the essence of a person through lighting, composition and interaction. Portrait photography focuses on bringing out the subject’s personality and character.",
        image: "images/style-portrait.jpg",
      },
      {
        title: "Landscape",
        description:
          "Discover techniques for photographing expansive vistas, from golden hour lighting to the use of leading lines and framing. Landscape photography emphasizes the natural world and its beauty.",
        image: "images/style-landscape.jpg",
      },
      {
        title: "Street",
        description:
          "Capture candid moments in everyday life while remaining unobtrusive. Street photography teaches observation, quick reflexes and storytelling through images.",
        image: "images/style-street.jpg",
      },
      {
        title: "Abstract",
        description:
          "Experiment with shapes, colors and textures to create artistic compositions that may not depict a recognizable subject. Abstract photography pushes you to see beyond the obvious.",
        image: "images/style-abstract.jpg",
      },
      {
        title: "Macro",
        description:
          "Delve into the world of the very small by photographing subjects at close range. Macro photography reveals textures and details invisible to the naked eye.",
        image: "images/style-macro.jpg",
      },
      {
        title: "Wildlife",
        description:
          "Learn how to capture animals in their natural habitats. Patience, timing and knowledge of animal behaviour are key to successful wildlife photography.",
        image: "images/style-wildlife.jpg",
      },
      {
        title: "Black & White",
        description:
          "Focus on light, shadow and contrast by stripping away colour. Black & white photography emphasises mood, texture and composition.",
        image: "images/style-black-and-white.jpg",
      },
      {
        title: "Travel",
        description:
          "Document your journeys with vibrant imagery that tells a story. Travel photography encompasses landscapes, architecture, people and culture.",
        image: "images/style-travel.jpg",
      },
      {
        title: "Minimalist",
        description:
          "Simplify your compositions by focusing on minimal elements. Negative space and clean lines create striking images with a modern aesthetic.",
        image: "images/style-minimalist.jpg",
      },
      {
        title: "Documentary",
        description:
          "Tell real stories through your camera lens. Documentary photography captures candid moments and socio-cultural events with honesty and empathy.",
        image: "images/style-documentary.jpg",
      },
      {
        title: "Fashion",
        description:
          "Highlight clothing and style with creative concepts and precise lighting. Fashion photography blends art and commerce to create striking visuals.",
        image: "images/style-fashion.jpg",
      },
      {
        title: "Sports",
        description:
          "Freeze action and convey the energy of sports. Master timing, panning and autofocus techniques to capture athletes in motion.",
        image: "images/style-sports.jpg",
      },
    ],
  },

  contact: {
    title: "Contact Us",
    description:
      "Do you have questions about photography techniques, equipment recommendations or photo editing? We’d love to help you on your learning journey. You can also follow us on social media for tips and inspiration.",
    address: "123 Learning Lane, Washington, DC, USA",
    phone: "+1 (555) 123-4567",
    email: "hello@learnphotography.com",
  },
};

// Export for module environments (Node/Webpack). If running in a browser without modules,
// this global declaration makes `data` available on window.
if (typeof module !== "undefined") {
  module.exports = data;
}
