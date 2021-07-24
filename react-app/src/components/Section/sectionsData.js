export const sections = [
  {
    id: 1,
    name: "Arts",
    categories: ["Art", "Dance", "Photography", "Theater"],
    blurb: "Discover the artists and organizations using Kickstarter to realize ambitious projects in visual art and performance."
  },
  {
    id: 2,
    name: "Comics & Illustrations",
    categories: ["Comics"],
    blurb: "Explore fantastical worlds and original characters from Kickstarter’s community of comics creators and illustrators."
  },
  {
    id: 3,
    name: "Design & Tech",
    categories: ["Design", "Technology"],
    blurb: "From fine design to innovative tech, discover projects from creators working to build a more beautiful future."
  },
  {
    id: 4,
    name: "Film",
    categories: ["Film & Video"],
    blurb: "Join forces with the intrepid filmmakers and festival creators changing the way stories get told on screen."
  },
  {
    id: 5,
    name: "Food & Craft",
    categories: ["Crafts", "Fashion", "Food"],
    blurb: "See how artisans and entrepreneurs are using Kickstarter to break new ground in food, fashion, and crafts."
  },
  {
    id: 6,
    name: "Games",
    categories: ["Games"],
    blurb: "From tabletop adventures to beloved revivals, discover the projects forging the future of gameplay."
  },
  {
    id: 7,
    name: "Music",
    categories: ["Music"],
    blurb: "Discover new albums, performances, and independent venues from creators using Kickstarter to shape the future of sound."
  },
  {
    id: 8,
    name: "Publishing",
    categories: ["Journalism", "Publishing"],
    blurb: "Explore how writers and publishers are using Kickstarter to bring new literature, periodicals, podcasts, and more to life."
  },
];

export const filterProjectsBySection = (id, projects) => {
  switch (id) {
    case 1:
      return projects.filter(project => {
        return (
          project.category_id === 1 ||
          project.category_id === 4 ||
          project.category_id === 12 ||
          project.category_id === 15
        )
      });
    case 2:
      return projects.filter(project => project.category_id === 2);
    case 3:
      return projects.filter(project => {
        return (
          project.category_id === 5 ||
          project.category_id === 14
        )
      });
    case 4:
      return projects.filter(project => project.category_id === 7);
    case 5:
      return projects.filter(project => {
        return (
          project.category_id === 3 ||
          project.category_id === 6 ||
          project.category_id === 8
        )
      });
    case 6:
      return projects.filter(project => project.category_id === 9);
    case 7:
      return projects.filter(project => project.category_id === 11);
    case 8:
      return projects.filter(project => {
        return (
          project.category_id === 10 ||
          project.category_id === 13
        )
      });
  }
};
