let categories = [
  { id: "cat1", name: "Animals, Bugs & Pets" },
  { id: "cat2", name: "Art, Creativity & Music" },
  { id: "cat3", name: "General Literature" },
  { id: "cat4", name: "Hobbies, Sports & Outdoors" },
  { id: "cat5", name: "Science Fiction & Fantasy" },
  { id: "cat6", name: "Real Life" },
  { id: "cat7", name: "Science & Technology" },
  { id: "cat8", name: "Mystery & Suspense" },
  { id: "cat9", name: "Reference" },
];

let books = [
  {
    id: "book1",
    categoryId: "cat2",
    image: "/covers/book1.jpeg",
    title: "Lust for Life by Irving Stone",
    author: "Irving Stone",
    summary:
      "Written by Irving Stone, master of extremely well-researched historical biographies, Lust for Life is a semi-fictional re-telling of Vincent Van Gogh‘s life story, battling poverty and mental turmoil. Using more than 700 letters from Van Gogh to his brother Theo as his foundation, Stone poetically narrates the tormented life of the celebrated artist with a raw quality, fictionalizing some minor parts which seamlessly blend with the real ones into a fantastic biographical volume.",
  },
  {
    id: "book2",
    categoryId: "cat5",
    image: "/covers/book2.jpeg",
    title: "The Galactic Odyssey",
    author: "Astrid Nova",
    summary:
      "Embark on a thrilling space adventure with Captain Nova and her intergalactic crew as they navigate through unknown worlds and encounter extraterrestrial beings.",
  },
  {
    id: "book3",
    categoryId: "cat7",
    image: "/covers/book3.jpeg",
    title: "Tech Titans: Revolutionaries of Silicon Valley",
    author: "Max Codeberg",
    summary:
      "Explore the lives and innovations of the brilliant minds behind the tech revolution, from the garage startups to the global empires that shaped the modern world.",
  },
  {
    id: "book4",
    categoryId: "cat3",
    image: "/covers/book4.jpeg",
    title: "Whispers of the Heart",
    author: "Elena Harmon",
    summary:
      "A poignant tale of love and loss set against the backdrop of a small town. Follow the intertwined lives of the residents as they navigate the complexities of relationships and self-discovery.",
  },
  {
    id: "book5",
    categoryId: "cat8",
    image: "/covers/book5.jpeg",
    title: "Midnight Shadows",
    author: "Sara Nightingale",
    summary:
      "Step into the mysterious world of Detective Adrian Steele as he unravels a series of perplexing crimes that lead him to the heart of a dark and twisted conspiracy.",
  },
  {
    id: "book6",
    categoryId: "cat4",
    image: "/covers/book6.jpeg",
    title: "The Art of Archery: A Beginner's Guide",
    author: "Robin Archer",
    summary:
      "Master the ancient art of archery with this comprehensive guide, covering everything from choosing the right bow to perfecting your aim and hitting the bullseye.",
  },
  {
    id: "book7",
    categoryId: "cat1",
    image: "/covers/book7.jpeg",
    title: "Adventures in the Amazon Rainforest",
    author: "Jungle Jane",
    summary:
      "Join Jungle Jane on a thrilling expedition through the Amazon Rainforest, encountering exotic animals, hidden tribes, and facing the challenges of the wild.",
  },
  {
    id: "book8",
    categoryId: "cat6",
    image: "/covers/book8.jpeg",
    title: "The Ordinary Miracle",
    author: "Grace Evergreen",
    summary:
      "Experience the extraordinary moments of everyday life through the eyes of ordinary people. A collection of heartwarming stories that celebrate the beauty of simplicity.",
  },
  {
    id: "book9",
    categoryId: "cat9",
    image: "/covers/book9.jpeg",
    title: "The Encyclopedia of Curious Facts",
    author: "Quentin Curious",
    summary:
      "Dive into a treasure trove of intriguing and curious facts from around the world. An essential reference for those who crave knowledge and love to explore the unknown.",
  },
  {
    id: "book10",
    categoryId: "cat2",
    image: "/covers/book10.jpeg",
    title: "Harmony in Colors: The Art of Painting",
    author: "Olivia Palette",
    summary:
      "Unlock the secrets of creating harmonious and captivating paintings with this guide by renowned artist Olivia Palette. Learn the techniques that bring your imagination to life on canvas.",
  },
  {
    id: "book11",
    categoryId: "cat5",
    image: "/covers/book11.jpeg",
    title: "Realm of Illusions",
    author: "Mystica Spellbound",
    summary:
      "Journey through a fantastical realm where illusions come to life. Join the protagonist in a quest to unravel the mysteries of magic, deceit, and the power of belief.",
  },
  {
    id: "book12",
    categoryId: "cat7",
    image: "/covers/book12.jpeg",
    title: "Innovation Nation: Pioneers of Progress",
    author: "Eva Edison",
    summary:
      "Meet the visionaries who transformed ideas into groundbreaking inventions. From the lightbulb to the internet, discover the stories of those who shaped the course of history.",
  },
  {
    id: "book13",
    categoryId: "cat3",
    image: "/covers/book13.jpeg",
    title: "Echoes of Eternity",
    author: "Dylan Harmony",
    summary:
      "A sweeping tale that spans generations, exploring the timeless themes of love, loss, and the enduring human spirit. A literary masterpiece that transcends the boundaries of time.",
  },
  {
    id: "book14",
    categoryId: "cat8",
    image: "/covers/book14.jpeg",
    title: "Shadows of Deception",
    author: "Mara Enigma",
    summary:
      "In a world of intrigue and hidden agendas, follow the enigmatic detective as she navigates a web of lies to uncover the truth behind a series of mysterious disappearances.",
  },
  {
    id: "book15",
    categoryId: "cat4",
    image: "/covers/book15.jpeg",
    title: "The Ultimate Outdoor Adventure Guide",
    author: "Ranger Rick",
    summary:
      "Embark on thrilling outdoor escapades with Ranger Rick as your guide. From mountain trails to river rafting, discover the adrenaline-pumping world of outdoor adventure.",
  },
  {
    id: "book16",
    categoryId: "cat1",
    image: "/covers/book16.jpeg",
    title: "Bugs Galore!",
    author: "Buzz Beetleman",
    summary:
      "Delve into the fascinating world of bugs with Buzz Beetleman as he shares his passion for these tiny creatures. A colorful journey through the lives of the six-legged wonders.",
  },
  {
    id: "book17",
    categoryId: "cat6",
    image: "/covers/book17.jpeg",
    title: "Everyday Heroes: Stories of Inspiration",
    author: "Hopeful Heart",
    summary:
      "Celebrate the unsung heroes among us. From acts of kindness to selfless deeds, these stories showcase the extraordinary impact of ordinary people in our everyday lives.",
  },
  {
    id: "book18",
    categoryId: "cat9",
    image: "/covers/book18.jpeg",
    title: "The Almanac of Oddities",
    author: "Quirky Curator",
    summary:
      "Explore the eccentric and bizarre with the Quirky Curator's Almanac of Oddities. From peculiar traditions to extraordinary phenomena, this almanac is a delightful journey into the weird and wonderful aspects of our world.",
  },
  {
    id: "book19",
    categoryId: "cat2",
    image: "/covers/book19.jpeg",
    title: "Melodies of the Mind: A Musical Journey",
    author: "Harmony Maestro",
    summary:
      "Immerse yourself in the enchanting world of music with Harmony Maestro's exploration of the emotional power and artistic expression found in every note and rhythm.",
  },
  {
    id: "book20",
    categoryId: "cat5",
    image: "/covers/book20.jpeg",
    title: "Epic Odyssey: Chronicles of the Celestial Realms",
    author: "Astral Voyager",
    summary:
      "Embark on an epic journey through celestial realms, where gods and mythical beings clash in a battle for cosmic supremacy. A gripping tale of power, destiny, and the bonds that transcend worlds.",
  },
  {
    id: "book21",
    categoryId: "cat7",
    image: "/covers/book21.jpeg",
    title: "The Quantum Enigma: Unraveling the Mysteries of Reality",
    author: "Dr. Quantum",
    summary:
      "Dive into the mind-bending world of quantum physics with Dr. Quantum as your guide. Explore the strange and fascinating principles that govern the smallest building blocks of the universe.",
  },
  {
    id: "book22",
    categoryId: "cat3",
    image: "/covers/book22.jpeg",
    title: "Whispers in the Wind",
    author: "Serena Scribe",
    summary:
      "A collection of poignant short stories that capture the fleeting moments of life. Serena Scribe weaves tales that resonate with the universal human experience, leaving readers with a sense of introspection.",
  },
  {
    id: "book23",
    categoryId: "cat4",
    image: "/covers/book23.jpeg",
    title: "The Art of Fly Fishing",
    author: "Angler's Apprentice",
    summary:
      "Dive into the serene world of fly fishing with Angler's Apprentice. Learn the art of casting, tying flies, and connecting with nature as you embark on a peaceful and rewarding fishing adventure.",
  },
];

module.exports = { categories, books };
