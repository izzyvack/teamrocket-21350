/**
 * TEAM ROCKET — edit your content here, then commit to main.
 * All text is escaped when the HTML is built. Keep image paths inside public/.
 * Roster and sponsor levels came from the supplied 2025–26 Canva website.
 * Awards use the official FIRST event records linked with each season.
 */
export const team = {
  name: 'Team Rocket',
  number: '21350',
  location: 'Naperville, Illinois',
  founded: '2022',
  email: 'teamrocket21350@gmail.com',
  instagram: 'https://www.instagram.com/ftcteamrocket/',
  instagramHandle: '@ftcteamrocket',
  rosterSeason: '2025–26',
  intro: 'We are Team Rocket, an all-girls community robotics team based in Naperville, Illinois. We have competed in FIRST Tech Challenge as Team 21350 since 2022.',
  mission: 'Our goal is to encourage more girls to pursue engineering and make STEM education accessible to students in our community. Through robotics and outreach, we provide opportunities to learn programming, design, and teamwork.',
  sources: {
    original: 'https://canva.link/ftc21350',
    reference: 'https://www.ftc19652.org/awards',
    latestEvents: 'https://ftc-events.firstinspires.org/2025/team/21350'
  },
  // Change this to a newer robot when you have its photos and details.
  robot: {
    season: '2024–25',
    game: 'INTO THE DEEP',
    name: '2024–25 competition robot',
    image: 'assets/robot.jpg',
    alt: 'Team Rocket robot 21350 on the INTO THE DEEP competition field',
    description: 'We competed in the 2024–25 INTO THE DEEP season with this robot. We qualified for the Illinois Championship and served as an alliance captain in the Cooper Division.',
    specs: [] // Optional: [{ label: 'Drive', value: 'Your verified specification' }]
  }
};

export const members = [
  { name: 'Zoey', area: 'Hardware and CAD', school: 'Naperville Central High School', image: 'assets/zoey.jpg', position: '50% 40%', bio: 'Zoey works on hardware and CAD. Outside robotics, she enjoys badminton, music, and arts and crafts.' },
  { name: 'Noga', area: 'Team member', school: 'Naperville Central High School', image: 'assets/noga.jpg', position: '36% 48%', bio: 'Noga brings experience across FLL, FTC, and FRC. Outside robotics, she enjoys traveling and is working toward becoming an Eagle Scout.' },
  { name: 'Melanie', area: 'Software lead', school: 'Illinois Mathematics and Science Academy', image: 'assets/melanie.jpg', position: '50% 30%', bio: 'Melanie leads software for Team Rocket. Outside robotics, she enjoys art, music, and math.' },
  { name: 'Ishika', area: 'Team member', school: 'Illinois Mathematics and Science Academy', image: 'assets/ishika.jpg', position: '52% 43%', bio: 'Ishika brings multiple seasons of FIRST experience to the team. Outside FTC, she enjoys physics, badminton, and playing the viola.' },
  { name: 'Mehek', area: 'Team member', school: 'Naperville Central High School', image: 'assets/mehek.jpg', position: '50% 35%', bio: 'Mehek joined FTC with experience in FRC and FLL. Beyond robotics, she participates in classical singing and math team.' },
  { name: 'Samadrita', area: 'CAD', school: 'Neuqua Valley High School', image: 'assets/samadrita.jpg', position: '50% 28%', bio: 'Samadrita works on CAD for the team. Her other interests include math, ice skating, and reading historical fiction.' },
  { name: 'Lucia', area: 'Hardware and CAD', school: 'Gregory Middle School', image: 'assets/lucia.jpg', position: '50% 35%', bio: 'Lucia works on hardware and is learning CAD. Outside robotics, she likes to read.' }
];

export const seasons = [
  {
    id: '2025', label: '2025–26', game: 'DECODE',
    source: 'https://ftc-events.firstinspires.org/2025/team/21350',
    highlights: [
      { title: '2 × FIRST Leadership Award semifinalists', event: 'Suburban South League Tournament', type: 'Recognition' },
      { title: '3rd of 27 in qualifications', event: 'Suburban South League Tournament', type: 'Competition' },
      { title: 'Alliance captain', event: 'Suburban South League Tournament', type: 'Competition' }
    ]
  },
  {
    id: '2024', label: '2024–25', game: 'INTO THE DEEP',
    source: 'https://ftc-events.firstinspires.org/2024/team/21350',
    highlights: [
      { title: 'Motivate Award — 3rd place', event: 'Illinois Championship', type: 'Award' },
      { title: 'Inspire Award — 2nd place', event: 'Suburban South League Tournament', type: 'Award' },
      { title: 'Finalist Alliance — 1st team selected', event: 'Suburban South League Tournament', type: 'Competition' },
      { title: 'Alliance captain', event: 'Illinois Championship, Cooper Division', type: 'Competition' },
      { title: 'Illinois Championship appearance', event: 'State championship', type: 'Milestone' }
    ]
  },
  {
    id: '2023', label: '2023–24', game: 'CENTERSTAGE',
    source: 'https://ftc-events.firstinspires.org/2023/team/21350',
    highlights: [
      { title: 'Winning Alliance Captain', event: 'Suburban South League Tournament', type: 'Competition' },
      { title: 'Illinois Championship appearance', event: 'State championship', type: 'Milestone' }
    ]
  },
  {
    id: '2022', label: '2022–23', game: 'POWERPLAY',
    source: 'https://canva.link/ftc21350',
    highlights: [
      { title: 'Regional elimination-round appearance', event: 'Our rookie season', type: 'Milestone' }
    ]
  }
];

export const outreach = [
  {
    id: 'python', title: 'Python Programming Camp',
    type: 'Python programming camp', partner: 'Project Vision', location: 'Chinatown, Chicago',
    description: 'We partnered with Project Vision to teach a six-week Python programming camp for students from lower-income families in Chicago’s Chinatown.',
    detail: 'Team members introduced students to programming and helped make coding education more accessible in the community.',
    duration: 'Six-week program',
    gallery: 'https://www.canva.com/design/DAGzJrIfxzw/-qZbWtXBAiWpx0MaqBbYGQ/view?embed&meta'
  },
  {
    id: 'cad', title: 'CAD Workshop',
    type: 'CAD workshop', partner: 'DECODE kickoff', location: 'Wheaton Academy',
    description: 'At the 2025–26 DECODE kickoff at Wheaton Academy, we ran a CAD workshop to share design skills with the robotics community.',
    detail: 'The workshop gave us an opportunity to introduce other students to computer-aided design and share what we have learned through FTC.',
    duration: '2025–26 season kickoff',
    gallery: 'https://www.canva.com/design/DAGzJ3xJa-4/acBUF8zU6tU0g14d1BxOIw/view?embed&meta'
  }
];

export const sponsorships = [
  { name: 'Platinum', title: 'Presented by', amount: 2500, benefits: ['Team presented by your business', 'Large logo on team shirts and website', 'Large 3D-printed logo on the robot', 'Robot demonstration at your company', 'Business link on our website', 'Social media shout-outs', 'Name on our sponsor sheet', 'Business cards at our pit table'] },
  { name: 'Gold', title: 'Lead sponsor', amount: 1000, benefits: ['Large logo on team shirts and website', 'Small logo on the robot', 'Robot demonstration at your company', 'Business link on our website', 'Social media shout-outs', 'Name on our sponsor sheet', 'Business cards at our pit table'] },
  { name: 'Silver', title: 'Core sponsor', amount: 500, benefits: ['Large logo on team shirts and website', 'Small logo on the robot', 'Name on our website and sponsor sheet', 'Business link on our website', 'Social media shout-out'] },
  { name: 'Bronze', title: 'Supporting sponsor', amount: 250, benefits: ['Small logo on team shirts, website, and robot', 'Name on our website and sponsor sheet', 'Business link on our website', 'Social media shout-out'] },
  { name: 'Copper', title: 'Contributing sponsor', amount: 100, benefits: ['Small logo on team shirts and website', 'Name on our website and sponsor sheet'] },
  { name: 'Nickel', title: 'Community sponsor', amount: 25, benefits: ['Name on our website and sponsor sheet'] }
];
