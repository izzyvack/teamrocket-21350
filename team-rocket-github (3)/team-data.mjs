/**
 * Edit this file to update your website. Commit to main to publish changes.
 * See EDITING-GUIDE.md for photo uploads and examples you can copy.
 * Image paths start with assets/ because the photos live in public/assets/.
 * Keep quotes, commas, brackets, and the export lines in place.
 */

// TEAM DETAILS, SHARED PHOTOS, AND HOMEPAGE TEXT
export const team = {
  "name": "Team Rocket",
  "number": "21350",
  "location": "Naperville, Illinois",
  "founded": "2022",
  "logo": "assets/logo.svg",
  "email": "teamrocket21350@gmail.com",
  "instagram": "https://www.instagram.com/ftcteamrocket/",
  "instagramHandle": "@ftcteamrocket",
  "intro": "We are Team Rocket, a community based FIRST Tech Challenge (FTC) team based in Naperville, Illinois. Our team is made up of 8 members ranging from middle school to high school and all levels of experience. We have competed in FTC since 2022, and this will be our fifth year competing.",
  "mission": "To bring together students from schools across Chicagoland and inspire the next generation of engineers by creating opportunities for young students interested in STEM. We want students of all backgrounds, regardless of gender or economic status, to have access to an encouraging environment where they can explore engineering, collaborate with others, and develop their ideas.",
  "sources": {
    "original": "https://canva.link/ftc21350",
    "reference": "https://www.ftc19652.org/awards",
    "latestEvents": "https://ftc-events.firstinspires.org/2025/team/21350"
  },
  "photo": {
    "image": "assets/team.jpg",
    "alt": "Team Rocket members with their medals and trophies",
    "caption": "Team Rocket"
  },
  "about": "Our team is made up of 8 members across the Chicagoland area. We have been competing in FTC for four years.",
  "sponsorThanks": "We would not be who we are without our sponsors! Thank you to Google, Young Innovators Institute, Morningstar, The Wyndham Garden, and Days Inn and Suites for your generous contributions. As a community team, we rely on sponsors to operate our team and spread STEM throughout our community."
};

// FIRST AND FTC: descriptions adapted from the official FIRST website.
export const programs = [
  {
    "name": "FIRST",
    "image": "assets/first-logo.png",
    "imageAlt": "FIRST logo",
    "description": "FIRST (For Inspiration and Recognition of Science and Technology) is a nonprofit organization that introduces young people to science and engineering through team robotics programs. Students build robots, solve problems, and learn to work together. Its three programs are FIRST LEGO League (FLL), which combines LEGO robotics and research; FIRST Tech Challenge (FTC), where students design and program robots for an annual game; and FIRST Robotics Competition (FRC), where high school teams build larger robots for competition.",
    "website": "https://www.firstinspires.org/about",
    "linkLabel": "Learn about FIRST"
  },
  {
    "name": "FIRST Tech Challenge",
    "image": "assets/biobuzz-logo.png",
    "imageAlt": "BIOBUZZ presented by RTX logo",
    "description": "FIRST Tech Challenge brings together students in grades 7–12 to design, build, and program robots for a new game each season. Teams work with mentors, compete with other teams, and share what they learn through outreach. The 2026–27 game is BIOBUZZ, presented by RTX, a challenge inspired by the natural world and part of the FIRST CANOPY season.",
    "website": "https://www.firstinspires.org/programs/ftc/",
    "linkLabel": "Learn about FIRST Tech Challenge"
  },
];

// ROBOTS: newest season first. Add each season's actual photo when supplied.
// An empty image omits the photo; it does not reuse a different year's robot.
// resultsSeason must match an id in seasons, or be empty to omit the button.
export const robots = [
  {
    "season": "2026–27",
    "game": "BIOBUZZ",
    "image": "",
    "alt": "",
    "resultsSeason": ""
  },
  {
    "season": "2025–26",
    "game": "DECODE",
    "image": "",
    "alt": "",
    "resultsSeason": "2025"
  },
  {
    "season": "2024–25",
    "game": "INTO THE DEEP",
    "image": "assets/robot.jpg",
    "alt": "Team Rocket robot 21350 on the INTO THE DEEP competition field",
    "resultsSeason": "2024"
  },
  {
    "season": "2023–24",
    "game": "CENTERSTAGE",
    "image": "",
    "alt": "",
    "resultsSeason": "2023"
  },
  {
    "season": "2022–23",
    "game": "POWERPLAY",
    "image": "",
    "alt": "",
    "resultsSeason": "2022"
  },
];

// TEAM MEMBERS: add, remove, or reorder complete { ... }, blocks.
// This remains the previous roster until the updated names, photos, and bios arrive.
export const members = [
  {
    "name": "Zoey",
    "area": "Hardware and CAD",
    "school": "Naperville Central High School",
    "image": "assets/zoey.jpg",
    "position": "50% 40%",
    "bio": "Zoey works on hardware and CAD. Outside robotics, she enjoys badminton, music, and arts and crafts."
  },
  {
    "name": "Noga",
    "area": "",
    "school": "Naperville Central High School",
    "image": "assets/noga.jpg",
    "position": "36% 48%",
    "bio": "Noga brings experience across FLL, FTC, and FRC. Outside robotics, she enjoys traveling and is working toward becoming an Eagle Scout."
  },
  {
    "name": "Melanie",
    "area": "Software",
    "school": "Illinois Mathematics and Science Academy",
    "image": "assets/melanie.jpg",
    "position": "50% 30%",
    "bio": "Melanie leads software for Team Rocket. Outside robotics, she enjoys art, music, and math."
  },
  {
    "name": "Ishika",
    "area": "",
    "school": "Illinois Mathematics and Science Academy",
    "image": "assets/ishika.jpg",
    "position": "52% 43%",
    "bio": "Ishika brings multiple seasons of FIRST experience to the team. Outside FTC, she enjoys physics, badminton, and playing the viola."
  },
  {
    "name": "Mehek",
    "area": "",
    "school": "Naperville Central High School",
    "image": "assets/mehek.jpg",
    "position": "50% 35%",
    "bio": "Mehek joined FTC with experience in FRC and FLL. Beyond robotics, she participates in classical singing and math team."
  },
  {
    "name": "Samadrita",
    "area": "CAD",
    "school": "Neuqua Valley High School",
    "image": "assets/samadrita.jpg",
    "position": "50% 28%",
    "bio": "Samadrita works on CAD for the team. Her other interests include math, ice skating, and reading historical fiction."
  },
  {
    "name": "Lucia",
    "area": "Hardware and CAD",
    "school": "Gregory Middle School",
    "image": "assets/lucia.jpg",
    "position": "50% 35%",
    "bio": "Lucia works on hardware and is learning CAD. Outside robotics, she likes to read."
  },
];

// ACHIEVEMENTS: keep the most recent season first.
export const seasons = [
  {
    "id": "2025",
    "label": "2025–26",
    "game": "DECODE",
    "source": "https://ftc-events.firstinspires.org/2025/team/21350",
    "highlights": [
      {
        "title": "2 × FIRST Leadership Award semifinalists",
        "event": "Suburban South League Tournament",
        "type": "Recognition"
      },
      {
        "title": "3rd of 27 in qualifications",
        "event": "Suburban South League Tournament",
        "type": "Competition"
      },
      {
        "title": "Alliance captain",
        "event": "Suburban South League Tournament",
        "type": "Competition"
      }
    ]
  },
  {
    "id": "2024",
    "label": "2024–25",
    "game": "INTO THE DEEP",
    "source": "https://ftc-events.firstinspires.org/2024/team/21350",
    "highlights": [
      {
        "title": "Motivate Award: 3rd place",
        "event": "Illinois Championship",
        "type": "Award"
      },
      {
        "title": "Inspire Award: 2nd place",
        "event": "Suburban South League Tournament",
        "type": "Award"
      },
      {
        "title": "Finalist Alliance: 1st team selected",
        "event": "Suburban South League Tournament",
        "type": "Competition"
      },
      {
        "title": "Alliance captain",
        "event": "Illinois Championship, Cooper Division",
        "type": "Competition"
      },
      {
        "title": "Illinois Championship appearance",
        "event": "State championship",
        "type": "Milestone"
      }
    ]
  },
  {
    "id": "2023",
    "label": "2023–24",
    "game": "CENTERSTAGE",
    "source": "https://ftc-events.firstinspires.org/2023/team/21350",
    "highlights": [
      {
        "title": "Winning Alliance Captain",
        "event": "Suburban South League Tournament",
        "type": "Competition"
      },
      {
        "title": "Illinois Championship appearance",
        "event": "State championship",
        "type": "Milestone"
      }
    ]
  },
  {
    "id": "2022",
    "label": "2022–23",
    "game": "POWERPLAY",
    "source": "https://canva.link/ftc21350",
    "highlights": [
      {
        "title": "Regional elimination-round appearance",
        "event": "Our rookie season",
        "type": "Milestone"
      }
    ]
  },
];

// OUTREACH: entries appear on the Outreach page, in this order, newest first.
// image, imageAlt, imageCaption, and gallery can be empty strings.
export const outreach = [
  {
    "id": "python",
    "title": "Python Programming Camp",
    "type": "Python programming camp",
    "partner": "Project Vision",
    "location": "Chinatown, Chicago",
    "description": "We partnered with Project Vision to teach a six-week Python programming camp for students from lower-income families in Chicago’s Chinatown.",
    "detail": "Team members introduced students to programming and helped make coding education more accessible in the community.",
    "duration": "Six-week program",
    "gallery": "https://www.canva.com/design/DAGzJrIfxzw/-qZbWtXBAiWpx0MaqBbYGQ/view?embed&meta",
    "image": "",
    "imageAlt": "",
    "imageCaption": ""
  },
  {
    "id": "cad",
    "title": "CAD Workshop",
    "type": "CAD workshop",
    "partner": "DECODE kickoff",
    "location": "Wheaton Academy",
    "description": "At the 2025–26 DECODE kickoff at Wheaton Academy, we ran a CAD workshop to share design skills with the robotics community.",
    "detail": "The workshop gave us an opportunity to introduce other students to computer-aided design and share what we have learned through FTC.",
    "duration": "2025–26 season kickoff",
    "gallery": "https://www.canva.com/design/DAGzJ3xJa-4/acBUF8zU6tU0g14d1BxOIw/view?embed&meta",
    "image": "",
    "imageAlt": "",
    "imageCaption": ""
  },
];

// CURRENT SPONSORS: upload each logo, then enter its assets/ path below.
// An empty image displays the sponsor name. An empty website adds no link.
export const sponsors = [
  {
    "name": "Google",
    "image": "",
    "website": ""
  },
  {
    "name": "Young Innovators Institute",
    "image": "",
    "website": ""
  },
  {
    "name": "Morningstar",
    "image": "",
    "website": ""
  },
  {
    "name": "The Wyndham Garden",
    "image": "",
    "website": ""
  },
  {
    "name": "Days Inn and Suites",
    "image": "",
    "website": ""
  },
];

// SPONSORSHIP LEVELS: these are separate from the current sponsor list.
export const sponsorships = [
  {
    "name": "Platinum",
    "title": "Presented by",
    "amount": 2500,
    "benefits": [
      "Team presented by your business",
      "Large logo on team shirts and website",
      "Large 3D-printed logo on the robot",
      "Robot demonstration at your company",
      "Business link on our website",
      "Social media shout-outs",
      "Name on our sponsor sheet",
      "Business cards at our pit table"
    ]
  },
  {
    "name": "Gold",
    "title": "Lead sponsor",
    "amount": 1000,
    "benefits": [
      "Large logo on team shirts and website",
      "Small logo on the robot",
      "Robot demonstration at your company",
      "Business link on our website",
      "Social media shout-outs",
      "Name on our sponsor sheet",
      "Business cards at our pit table"
    ]
  },
  {
    "name": "Silver",
    "title": "Core sponsor",
    "amount": 500,
    "benefits": [
      "Large logo on team shirts and website",
      "Small logo on the robot",
      "Name on our website and sponsor sheet",
      "Business link on our website",
      "Social media shout-out"
    ]
  },
  {
    "name": "Bronze",
    "title": "Supporting sponsor",
    "amount": 250,
    "benefits": [
      "Small logo on team shirts, website, and robot",
      "Name on our website and sponsor sheet",
      "Business link on our website",
      "Social media shout-out"
    ]
  },
  {
    "name": "Copper",
    "title": "Contributing sponsor",
    "amount": 100,
    "benefits": [
      "Small logo on team shirts and website",
      "Name on our website and sponsor sheet"
    ]
  },
  {
    "name": "Nickel",
    "title": "Community sponsor",
    "amount": 25,
    "benefits": [
      "Name on our website and sponsor sheet"
    ]
  },
];
