export const sections = [
  {
    id: 1,
    name: "Arts",
    categories: ["Art", "Dance", "Photography", "Theater"],
    blurb:
      "Discover the artists and organizations using Quickstarter to realize ambitious projects in visual art and performance.",
    subscribeTitle:
      "Discover new work and big ideas from established and emerging artists.",
    subscribeSubtitle: "Sign up to receive Quickstarter’s Arts newsletter.",
  },
  {
    id: 2,
    name: "Comics & Illustrations",
    categories: ["Comics"],
    blurb:
      "Explore fantastical worlds and original characters from Quickstarter's community of comics creators and illustrators.",
    subscribeTitle: "Welcome to our library. Peruse the stacks with us.",
    subscribeSubtitle:
      "Sign up to receive Quickstarter Reads, our Publishing, Comics, and Journalism newsletter.",
  },
  {
    id: 3,
    name: "Design & Tech",
    categories: ["Design", "Technology"],
    blurb:
      "From fine design to innovative tech, discover projects from creators working to build a more beautiful future.",
    subscribeTitle: "See the future in your inbox.",
    subscribeSubtitle:
      "Sign up to receive Invent, Quickstarter's Design and Tech newsletter.",
  },
  {
    id: 4,
    name: "Film",
    categories: ["Film & Video"],
    blurb:
      "Join forces with the intrepid filmmakers and festival creators changing the way stories get told on screen.",
    subscribeTitle: "Love film? We do, too.",
    subscribeSubtitle: "Sign up to receive Quickstarter's Film newsletter.",
  },
  {
    id: 5,
    name: "Food & Craft",
    categories: ["Crafts", "Fashion", "Food"],
    blurb:
      "See how artisans and entrepreneurs are using Quickstarter to break new ground in food, fashion, and crafts.",
    subscribeTitle: "The zeitgeist, delivered to your inbox.",
    subscribeSubtitle:
      "Sign up to receive Quickstarter's Happening newsletter, highlighting new projects and buzzworthy stories.",
  },
  {
    id: 6,
    name: "Games",
    categories: ["Games"],
    blurb:
      "From tabletop adventures to beloved revivals, discover the projects forging the future of gameplay.",
    subscribeTitle: "Join our secret society.",
    subscribeSubtitle: "Sign up to receive Quickstarter's Games newsletter.",
  },
  {
    id: 7,
    name: "Music",
    categories: ["Music"],
    blurb:
      "Discover new albums, performances, and independent venues from creators using Quickstarter to shape the future of sound.",
    subscribeTitle:
      "It's like the radio but nothing sucks and also it’s a newsletter.",
    subscribeSubtitle:
      "Sign up to receive our Quickstarter Music newsletter, delivered once a month.",
  },
  {
    id: 8,
    name: "Publishing",
    categories: ["Journalism", "Publishing"],
    blurb:
      "Explore how writers and publishers are using Quickstarter to bring new literature, periodicals, podcasts, and more to life.",
    subscribeTitle: "Welcome to our library. Peruse the stacks with us.",
    subscribeSubtitle:
      "Sign up to receive Quickstarter Reads, our Publishing, Comics, and Journalism newsletter.",
  },
];

export const filterProjectsBySection = (id, projects) => {
  switch (id) {
    case 1:
      return projects.filter((project) => {
        return (
          project.category_id === 1 ||
          project.category_id === 4 ||
          project.category_id === 12 ||
          project.category_id === 15
        );
      });
    case 2:
      return projects.filter((project) => project.category_id === 2);
    case 3:
      return projects.filter((project) => {
        return project.category_id === 5 || project.category_id === 14;
      });
    case 4:
      return projects.filter((project) => project.category_id === 7);
    case 5:
      return projects.filter((project) => {
        return (
          project.category_id === 3 ||
          project.category_id === 6 ||
          project.category_id === 8
        );
      });
    case 6:
      return projects.filter((project) => project.category_id === 9);
    case 7:
      return projects.filter((project) => project.category_id === 11);
    case 8:
      return projects.filter((project) => {
        return project.category_id === 10 || project.category_id === 13;
      });
    default:
      return null;
  }
};
