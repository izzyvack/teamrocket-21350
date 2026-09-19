/**
 * TEAM ROCKET — edit your content here, then press Run again.
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
  intro: 'An all-girls, community-based FIRST Tech Challenge team from Naperville, Illinois. We design robots, chase better ideas, and make room for the next generation of women in STEM.',
  mission: 'Make engineering a place where every girl can see herself. Give every idea a fair shot. Build something we’re proud to put our name on.',
  sources: {
    original: 'https://canva.link/ftc21350',
    reference: 'https://www.ftc19652.org/awards',
    latestEvents: 'https://ftc-events.firstinspires.org/2025/team/21350'
  },
  // Change this to a newer robot when you have its photos and details.
  robot: {
    season: '2024–25',
    game: 'INTO THE DEEP',
    name: 'Our robot. In its element.',
    image: 'assets/robot.jpg',
    alt: 'Team Rocket robot 21350 on the INTO THE DEEP competition field',
    description: 'A look back at our INTO THE DEEP robot on the competition field. This was the season we returned to the Illinois Championship and captained an alliance in the Cooper Division.',
    specs: [] // Optional: [{ label: 'Drive', value: 'Your verified specification' }]
  }
};

export const members = [
  { name: 'Zoey', area: 'Hardware + CAD', school: 'Naperville Central High School', image: 'assets/zoey.jpg', position: '50% 40%', bio: 'Zoey works on hardware and CAD, turning ideas into parts that can take the field. Away from robotics, she enjoys badminton, music, and arts and crafts.' },
  { name: 'Noga', area: 'Team member', school: 'Naperville Central High School', image: 'assets/noga.jpg', position: '36% 48%', bio: 'Noga brings experience across FLL, FTC, and FRC. Outside robotics, she enjoys traveling and is working toward becoming an Eagle Scout.' },
  { name: 'Melanie', area: 'Software lead', school: 'Illinois Mathematics and Science Academy', image: 'assets/melanie.jpg', position: '50% 30%', bio: 'Melanie leads software for Team Rocket. Her interests in art, music, and math bring a creative perspective to the team’s programming work.' },
  { name: 'Ishika', area: 'Team member', school: 'Illinois Mathematics and Science Academy', image: 'assets/ishika.jpg', position: '52% 43%', bio: 'Ishika brings multiple seasons of FIRST experience to the team. Outside FTC, she enjoys physics, badminton, and playing the viola.' },
  { name: 'Mehek', area: 'Team member', school: 'Naperville Central High School', image: 'assets/mehek.jpg', position: '50% 35%', bio: 'Mehek joined FTC with experience in FRC and FLL. Beyond robotics, she participates in classical singing and math team.' },
  { name: 'Samadrita', area: 'CAD', school: 'Neuqua Valley High School', image: 'assets/samadrita.jpg', position: '50% 28%', bio: 'Samadrita works on CAD for the team. Her other interests include math, ice skating, and reading historical fiction.' },
  { name: 'Lucia', area: 'Hardware + learning CAD', school: 'Gregory Middle School', image: 'assets/lucia.jpg', position: '50% 35%', bio: 'Lucia works on hardware and is learning CAD. When she isn’t working on the robot, she likes to read and relax.' }
];

export const seasons = [
  {
    id: '2025', label: '2025–26', game: 'DECODE', kicker: 'The fourth chapter',
    source: 'https://ftc-events.firstinspires.org/2025/team/21350',
    highlights: [
      { title: '2 × FIRST Leadership Award semifinalists', event: 'Suburban South League Tournament', type: 'Recognition' },
      { title: '3rd of 27 in qualifications', event: 'Suburban South League Tournament', type: 'Competition' },
      { title: 'Alliance captain', event: 'Suburban South League Tournament', type: 'Competition' }
    ]
  },
  {
    id: '2024', label: '2024–25', game: 'INTO THE DEEP', kicker: 'Back at state',
    source: 'https://ftc-events.firstinspires.org/2024/team/21350',
    highlights: [
      { title: 'Motivate Award · 3rd place', event: 'Illinois Championship', type: 'Award' },
      { title: 'Inspire Award · 2nd place', event: 'Suburban South League Tournament', type: 'Award' },
      { title: 'Finalist Alliance · 1st team selected', event: 'Suburban South League Tournament', type: 'Competition' },
      { title: 'Alliance captain', event: 'Illinois Championship · Cooper Division', type: 'Competition' },
      { title: 'Illinois Championship appearance', event: 'State championship', type: 'Milestone' }
    ]
  },
  {
    id: '2023', label: '2023–24', game: 'CENTERSTAGE', kicker: 'A season to remember',
    source: 'https://ftc-events.firstinspires.org/2023/team/21350',
    highlights: [
      { title: 'Winning Alliance · Captain', event: 'Suburban South League Tournament', type: 'Competition' },
      { title: 'Illinois Championship appearance', event: 'State championship', type: 'Milestone' }
    ]
  },
  {
    id: '2022', label: '2022–23', game: 'POWERPLAY', kicker: 'Where it started',
    source: 'https://canva.link/ftc21350',
    highlights: [
      { title: 'Regional elimination-round appearance', event: 'Our rookie season', type: 'Milestone' }
    ]
  }
];

export const outreach = [
  {
    id: 'python', number: '01', title: 'A first line of code. A whole new world.',
    type: 'Python programming camp', partner: 'Project Vision', location: 'Chinatown, Chicago',
    description: 'We partnered with Project Vision to lead a six-week Python camp for students from lower-income families in Chicago’s Chinatown. The goal was simple: make the chance to explore coding more accessible.',
    detail: 'Six weeks of introducing students to programming, led by the people who know what it’s like to be learning it themselves.',
    stat: '06', statLabel: 'weeks of programming',
    gallery: 'https://www.canva.com/design/DAGzJrIfxzw/-qZbWtXBAiWpx0MaqBbYGQ/view?embed&meta'
  },
  {
    id: 'cad', number: '02', title: 'Share the tools. Build the community.',
    type: 'CAD workshop', partner: 'DECODE kickoff', location: 'Wheaton Academy',
    description: 'At the 2025–26 DECODE kickoff at Wheaton Academy, we ran a CAD workshop to share design skills with the robotics community.',
    detail: 'Good ideas get better when we share what we know. Teaching is part of how we contribute to FIRST beyond our own robot.',
    stat: 'CAD', statLabel: 'from ideas to designs',
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
