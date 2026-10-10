/**
 * Team Rocket website content, version 1.4.0.
 * Edit this file, then commit to main to publish through the existing workflow.
 * Photos go in public/assets; image paths below start with assets/.
 * Keep quotes, commas, brackets, and export lines in place.
 * See EDITING-GUIDE.md and UPDATE-NOTES.md for instructions and document checks.
 */

// TEAM DETAILS: shared Home/Team photo, contact details, and main copy.
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
    "image": "assets/team-2026.webp",
    "alt": "All eight Team Rocket members standing together outdoors",
    "caption": "Team Rocket"
  },
  "about": "Our team is made up of 8 members across the Chicagoland area. We have been competing in FTC for four years.",
  "sponsorThanks": "We would not be who we are without our sponsors! Thank you to Google, Young Innovator Institute, Morningstar, The Wyndham Garden Kenosha Harborside, and Days Inn and Suites Hammond for your generous contributions. As a community team, we rely on sponsors to operate our team and spread STEM throughout our community."
};

// FIRST AND FTC: introductions shown before the team information.
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
  }
];

// TEAM MEMBERS: add, remove, or reorder complete blocks. Mia’s hobbies are pending.
export const members = [
  {
    "name": "Melanie",
    "area": "Software",
    "image": "assets/melanie-2026.webp",
    "position": "50% 25%",
    "bio": "Hi! I'm Melanie, a junior and the Captain/Software lead this year. Outside of robotics, I am an ardent fan of oil painting and experimental music."
  },
  {
    "name": "Ishika",
    "area": "Outreach",
    "image": "assets/ishika-2026.webp",
    "position": "20% 50%",
    "bio": "Hi! I'm Ishika, and I'm a junior and this year's outreach lead. Outside of robotics, I like to crochet and play badminton!"
  },
  {
    "name": "Rokas",
    "area": "Outreach, CAD, and Hardware",
    "image": "assets/rokas-2026.webp",
    "position": "50% 30%",
    "bio": "Hi! I'm Rokas, and I'm in 8th grade and a team member in outreach, CAD, and hardware. Outside of robotics, I like to read and play soccer."
  },
  {
    "name": "Lucia",
    "area": "Hardware and Outreach",
    "image": "assets/lucia-2026.webp",
    "position": "55% 35%",
    "bio": "Hi! I'm Lucia and I'm in 8th grade. I'm the project manager, and a member of the hardware and outreach subteams. Outside of robotics, I enjoy reading and spending time with my friends."
  },
  {
    "name": "Andy",
    "area": "Outreach, CAD, and Hardware",
    "image": "assets/andy-2026.webp",
    "position": "50% 40%",
    "bio": "Hi! I'm Andy, and I'm an 8th grader and a team member in outreach, CAD, and hardware. Outside of robotics, I like ping-pong and tennis!"
  },
  {
    "name": "Zaibas",
    "area": "Outreach, CAD, and Hardware",
    "image": "assets/zaibas-2026.webp",
    "position": "50% 35%",
    "bio": "Hi! I'm Zaibas, and I'm an 8th grader and a team member in outreach, CAD, and hardware. Outside of robotics, I like to ride my bicycle and play soccer!"
  },
  {
    "name": "Rohan",
    "area": "Outreach and Hardware",
    "image": "assets/rohan-2026.webp",
    "position": "50% 52%",
    "bio": "Hi! I'm Rohan, and I'm in 8th grade. I am part of this year's outreach and hardware teams. Outside of robotics, I like to play basketball and soccer."
  },
  {
    "name": "Mia",
    "area": "Outreach and Hardware",
    "image": "assets/mia-2026.webp",
    "position": "50% 40%",
    "bio": "Hi! I'm Mia, and I'm an 8th grader and a team member in outreach and hardware."
  }
];

// ROBOTS: newest first. Add BIOBUZZ here when its actual robot photo is available.
export const robots = [
  {
    "season": "2025–26",
    "game": "DECODE",
    "image": "assets/robot-decode.webp",
    "alt": "Team Rocket's DECODE robot on the competition field",
    "resultsSeason": "2025"
  },
  {
    "season": "2024–25",
    "game": "INTO THE DEEP",
    "image": "assets/robot.jpg",
    "alt": "Team Rocket's INTO THE DEEP robot on the competition field",
    "resultsSeason": "2024"
  },
  {
    "season": "2023–24",
    "game": "CENTERSTAGE",
    "image": "assets/robot-centerstage.webp",
    "alt": "Team Rocket with the CENTERSTAGE robot and team display",
    "resultsSeason": "2023"
  },
  {
    "season": "2022–23",
    "game": "POWERPLAY",
    "image": "assets/robot-powerplay.webp",
    "alt": "Team Rocket competing with its POWERPLAY robot",
    "resultsSeason": "2022"
  }
];

// ACHIEVEMENTS: existing results retained, newest season first.
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
  }
];

// OUTREACH: sourceOrder matches the numbered PDF. Array order controls display.
// The newer middle-school note repeats #56012; its second number is not guessed.
// Older repeated numbers are omitted at items 16 and 18 as requested.
export const outreach = [
  {
    "sourceOrder": 1,
    "id": "ftc-summer-camp",
    "title": "FTC Summer Camp",
    "duration": "Five days, seven hours per day",
    "paragraphs": [
      "We hosted a five-day FTC camp for six students in grades 8–10. Students learned to CAD, build, and program a robot to compete in our FTC mini challenge."
    ],
    "topics": [
      {
        "title": "Hardware",
        "text": "Students explored drivetrain and wheel configurations, different types of end effectors and their applications, and ways to transmit power using gears, belts, and chains."
      },
      {
        "title": "CAD",
        "text": "Students created and modified sketches using shapes, dimensions, and constraints, practiced turning 2D sketches into 3D models, and developed precision and problem-solving skills through CAD challenges."
      },
      {
        "title": "Software",
        "text": "Students learned about the Control Hub, power distribution, and wiring their robot with good wire management habits. They wrote teleoperation and autonomous OpModes and learned to tune PIDF."
      }
    ],
    "images": [
      {
        "src": "assets/ftc-camp-01.webp",
        "alt": "Students building and programming robots at the FTC summer camp, photo 1"
      },
      {
        "src": "assets/ftc-camp-02.webp",
        "alt": "Students building and programming robots at the FTC summer camp, photo 2"
      },
      {
        "src": "assets/ftc-camp-03.webp",
        "alt": "Students building and programming robots at the FTC summer camp, photo 3"
      },
      {
        "src": "assets/ftc-camp-04.webp",
        "alt": "Students building and programming robots at the FTC summer camp, photo 4"
      },
      {
        "src": "assets/ftc-camp-05.webp",
        "alt": "Students building and programming robots at the FTC summer camp, photo 5"
      }
    ]
  },
  {
    "sourceOrder": 2,
    "id": "lego-summer-camp-2026",
    "title": "LEGO Robotics Summer Camp",
    "partner": "Montessori Gift Prep",
    "location": "Chicago, Illinois",
    "duration": "August 10–14, 2026",
    "paragraphs": [
      "Rokas and Andy led a week-long FLL Challenge LEGO robotics camp for eight students at Montessori Gift Prep in Chicago. They introduced participants to FIRST, its programs and mission, Core Values, and Gracious Professionalism before exploring the innovation project and robot game through energy-themed missions."
    ],
    "topics": [
      {
        "title": "Innovation",
        "text": "Students explored renewable energy sources, including wind, solar, and geothermal energy. Each day, they built LEGO models of a different energy type and presented their findings, explaining how their models captured and converted energy."
      },
      {
        "title": "Robot",
        "text": "Teams built robots from instructions and learned to program driving, turning, and sensors to detect objects. They then attempted missions on an official FLL mat, with teams completing two to five different missions by the end of camp."
      }
    ],
    "images": [
      {
        "src": "assets/lego-camp-2026-01.webp",
        "alt": "Rokas and Andy teaching LEGO robotics at Montessori Gift Prep, photo 1"
      },
      {
        "src": "assets/lego-camp-2026-02.webp",
        "alt": "Rokas and Andy teaching LEGO robotics at Montessori Gift Prep, photo 2"
      }
    ]
  },
  {
    "sourceOrder": 3,
    "id": "orthodontics-demo",
    "title": "Orthodontics Office Demo",
    "paragraphs": [
      "We brought our DECODE robot to an orthodontics office for a demonstration."
    ],
    "images": [
      {
        "src": "assets/orthodontics-01.webp",
        "alt": "Team Rocket demonstrating its DECODE robot at an orthodontics office, photo 1"
      }
    ]
  },
  {
    "sourceOrder": 4,
    "id": "ray-chinese-school-2026",
    "title": "Ray Chinese School Demo",
    "duration": "2026",
    "paragraphs": [
      "We returned to Ray Chinese School for our annual robot demonstration. Students tried driving our DECODE robot and scoring game pieces."
    ],
    "images": [
      {
        "src": "assets/ray-2026-01.webp",
        "alt": "Students trying the DECODE robot at Ray Chinese School in 2026, photo 1"
      }
    ]
  },
  {
    "sourceOrder": 5,
    "id": "treasures-demo",
    "title": "Treasures Demo",
    "duration": "10th anniversary celebration",
    "paragraphs": [
      "We brought our INTO THE DEEP robot to Treasures’ 10th anniversary party, where children could drive it and interact with the team. The event brought together around 100 people and was a collaboration with Treasures, a new sponsor that season.",
      "Throughout the event, we spoke with families and younger students about FIRST and its different program levels. We also talked with students interested in FLL, encouraging them to take their first steps into robotics."
    ],
    "images": [
      {
        "src": "assets/treasures-01.webp",
        "alt": "Team Rocket sharing its robot at the Treasures anniversary celebration, photo 1"
      },
      {
        "src": "assets/treasures-02.webp",
        "alt": "Team Rocket sharing its robot at the Treasures anniversary celebration, photo 2"
      },
      {
        "src": "assets/treasures-03.webp",
        "alt": "Team Rocket sharing its robot at the Treasures anniversary celebration, photo 3"
      },
      {
        "src": "assets/treasures-04.webp",
        "alt": "Team Rocket sharing its robot at the Treasures anniversary celebration, photo 4"
      }
    ]
  },
  {
    "sourceOrder": 6,
    "id": "cad",
    "title": "Kickoff CAD Workshop",
    "partner": "DECODE kickoff",
    "location": "Wheaton Academy",
    "duration": "2025–26 season kickoff",
    "paragraphs": [
      "At kickoff, our team delivered a CAD presentation attended by around 20 FTC teams. We provided live demonstrations to show how CAD works in practice, taught foundational skills, and shared useful tips.",
      "We highlighted resources teams could use to continue learning independently and prepare for the season. The workshop helped make CAD more approachable for rookie and newer teams."
    ],
    "images": [
      {
        "src": "assets/cad-kickoff-01.webp",
        "alt": "Team Rocket presenting its CAD workshop at the DECODE kickoff, photo 1"
      },
      {
        "src": "assets/cad-kickoff-02.webp",
        "alt": "Team Rocket presenting its CAD workshop at the DECODE kickoff, photo 2"
      },
      {
        "src": "assets/cad-kickoff-03.webp",
        "alt": "Team Rocket presenting its CAD workshop at the DECODE kickoff, photo 3"
      }
    ]
  },
  {
    "sourceOrder": 7,
    "id": "scullen-stem-fair",
    "title": "Scullen STEM Fair",
    "location": "Scullen Middle School",
    "paragraphs": [
      "Our team hosted a presentation at Scullen Middle School’s annual STEM fair, an event with around 1,000 attendees. We met incoming and current middle schoolers, showcased our robot and achievements, and shared age-appropriate robotics opportunities with students and parents.",
      "Students could drive the robot and try scoring game pieces. Many were excited to participate and interested in joining robotics the next season. The event also let us give back to a school that many of our team members attended."
    ],
    "images": [
      {
        "src": "assets/scullen-01.webp",
        "alt": "Team Rocket demonstrating robotics at the Scullen STEM Fair, photo 1"
      },
      {
        "src": "assets/scullen-02.webp",
        "alt": "Team Rocket demonstrating robotics at the Scullen STEM Fair, photo 2"
      },
      {
        "src": "assets/scullen-03.webp",
        "alt": "Team Rocket demonstrating robotics at the Scullen STEM Fair, photo 3"
      }
    ]
  },
  {
    "sourceOrder": 8,
    "id": "ray-chinese-school-into-the-deep",
    "title": "Ray Chinese School Demo",
    "duration": "INTO THE DEEP season",
    "paragraphs": [
      "We introduced students at Ray Chinese School to FIRST, its Core Values, and FIRST Tech Challenge. We explained how teamwork and problem solving are part of building and programming a robot. The event announcement reached over 800 students through the school’s mailing system.",
      "During our presentation, we discussed past FTC seasons and how teams adapt their strategies to a new game each year. We focused on the 2024–25 season, its challenges, and ways to score points.",
      "We explained autonomous, tele-operated play, and endgame, including strategies for each part of a match. We also covered competition progression from local meets through league tournaments, state, and the world championship, along with advancement priorities and awards.",
      "We shared examples of our programming, CAD designs, and hardware to show how they work together. Afterward, we demonstrated scoring in the high basket, then let students drive the robot and try scoring themselves."
    ],
    "images": [
      {
        "src": "assets/ray-into-the-deep-01.webp",
        "alt": "Students participating in the INTO THE DEEP demonstration at Ray Chinese School, photo 1"
      },
      {
        "src": "assets/ray-into-the-deep-02.webp",
        "alt": "Students participating in the INTO THE DEEP demonstration at Ray Chinese School, photo 2"
      },
      {
        "src": "assets/ray-into-the-deep-03.webp",
        "alt": "Students participating in the INTO THE DEEP demonstration at Ray Chinese School, photo 3"
      },
      {
        "src": "assets/ray-into-the-deep-04.webp",
        "alt": "Students participating in the INTO THE DEEP demonstration at Ray Chinese School, photo 4"
      }
    ]
  },
  {
    "sourceOrder": 9,
    "id": "middle-school-fll-mentoring",
    "title": "Middle School FLL Mentoring",
    "paragraphs": [
      "We mentored two middle school FLL teams, including team #56012, as they advanced from qualifiers to sectionals. We supported their robot development and helped them prepare for competition.",
      "Across the two teams, their accomplishments included the Rising All-Star Award, a Mentor Award, and top-ten placements for robot points."
    ],
    "images": [
      {
        "src": "assets/fll-mentoring-01.webp",
        "alt": "Team Rocket with students from the middle school FLL teams, photo 1"
      }
    ]
  },
  {
    "sourceOrder": 10,
    "id": "elementary-fll-mentoring",
    "title": "Elementary School FLL Mentoring",
    "paragraphs": [
      "We worked with elementary school FLL teams #46325, #46329, #47946, #48456, #56019, and #64908. We helped students develop basic coding skills, introduced the design process and planning, and guided them as they developed their ideas.",
      "We also helped students practice teamwork and communication. Beyond FLL, we supported other FTC teams by sharing parts, software tips, and portfolios from previous seasons."
    ],
    "images": []
  },
  {
    "sourceOrder": 11,
    "id": "python",
    "title": "Python Programming Camp",
    "partner": "Project VISION",
    "location": "Chinatown–Bridgeport, Chicago",
    "duration": "Six-week program",
    "paragraphs": [
      "Our team partnered with Project VISION to teach Python to students from lower-income families in Chicago. Many students had no previous coding experience, so we focused on introducing programming concepts through creative, hands-on projects.",
      "We covered simple math operations, variables, loops, conditionals, lists, and functions. Students practiced problem solving and collaboration while connecting these ideas to real-world applications.",
      "Each session ended with a mini project that students could share. Their projects included chatbots, choose-your-own-path games, and quizzes. We wanted students to leave with an interest in STEM and confidence in their technical skills.",
      "Among participants, 92% came from low-income families, 96% from first-generation immigrant families, and 84% would be first-generation college students. We plan to expand the initiative into a summer camp to continue providing access to STEM education."
    ],
    "images": [
      {
        "src": "assets/python-camp-01.webp",
        "alt": "Students learning Python with Team Rocket and Project VISION, photo 1"
      },
      {
        "src": "assets/python-camp-02.webp",
        "alt": "Students learning Python with Team Rocket and Project VISION, photo 2"
      },
      {
        "src": "assets/python-camp-03.webp",
        "alt": "Students learning Python with Team Rocket and Project VISION, photo 3"
      },
      {
        "src": "assets/python-camp-04.webp",
        "alt": "Students learning Python with Team Rocket and Project VISION, photo 4"
      },
      {
        "src": "assets/python-camp-05.webp",
        "alt": "Students learning Python with Team Rocket and Project VISION, photo 5"
      },
      {
        "src": "assets/python-camp-06.webp",
        "alt": "Students learning Python with Team Rocket and Project VISION, photo 6"
      },
      {
        "src": "assets/python-camp-07.webp",
        "alt": "Students learning Python with Team Rocket and Project VISION, photo 7"
      },
      {
        "src": "assets/python-camp-08.webp",
        "alt": "Students learning Python with Team Rocket and Project VISION, photo 8"
      },
      {
        "src": "assets/python-camp-09.webp",
        "alt": "Students learning Python with Team Rocket and Project VISION, photo 9"
      }
    ]
  },
  {
    "sourceOrder": 12,
    "id": "scullen-stem-fair-earlier",
    "title": "Scullen STEM Fair",
    "duration": "Earlier season",
    "paragraphs": [
      "At an earlier Scullen Middle School STEM fair, we showcased our robot and achievements, shared summer program opportunities, and let students drive the robot and try scoring game pieces."
    ],
    "images": [
      {
        "src": "assets/scullen-earlier-01.webp",
        "alt": "Team Rocket at an earlier Scullen Middle School STEM fair, photo 1"
      }
    ],
    "compactPhotos": true
  },
  {
    "sourceOrder": 13,
    "id": "ftc-summer-camp-earlier",
    "title": "FTC Summer Camp",
    "duration": "Earlier season",
    "paragraphs": [
      "We hosted a week-long summer camp open to community members interested in robotics. Students were introduced to FTC software, hardware, CAD, and problem solving.",
      "We taught the design process from developing an idea and drawing sketches to creating CAD models and making improvements. Some participants went on to start FTC team #26239, ACS Cyber Seahorses."
    ],
    "images": [
      {
        "src": "assets/ftc-camp-earlier-01.webp",
        "alt": "Students participating in an earlier Team Rocket FTC summer camp, photo 1"
      },
      {
        "src": "assets/ftc-camp-earlier-02.webp",
        "alt": "Students participating in an earlier Team Rocket FTC summer camp, photo 2"
      }
    ],
    "compactPhotos": true
  },
  {
    "sourceOrder": 14,
    "id": "ray-chinese-school-earlier",
    "title": "Ray Chinese School Presentation",
    "duration": "Earlier season",
    "paragraphs": [
      "We introduced students to FIRST and FTC, demonstrated our robot, and gave students hands-on experience driving it."
    ],
    "images": [
      {
        "src": "assets/ray-earlier-01.webp",
        "alt": "Team Rocket presenting robotics at Ray Chinese School during an earlier season, photo 1"
      },
      {
        "src": "assets/ray-earlier-02.webp",
        "alt": "Team Rocket presenting robotics at Ray Chinese School during an earlier season, photo 2"
      }
    ],
    "compactPhotos": true
  },
  {
    "sourceOrder": 15,
    "id": "college-of-dupage-stemcon",
    "title": "College of DuPage STEMCON",
    "location": "College of DuPage",
    "paragraphs": [
      "We partnered with other FTC teams and an FRC team at STEMCON to showcase the local FIRST community. We talked with families about the progression between FIRST programs and shared our summer programs."
    ],
    "images": [
      {
        "src": "assets/cod-stemcon-01.webp",
        "alt": "Team Rocket and other FIRST teams demonstrating robots at College of DuPage STEMCON, photo 1"
      }
    ],
    "compactPhotos": true
  },
  {
    "sourceOrder": 16,
    "id": "fll-teams-earlier",
    "title": "FLL Team Mentoring",
    "duration": "Earlier season",
    "paragraphs": [
      "We mentored FLL team #55731, the Dino Divers, in programming, robot design, and strategy. At their qualifier, they earned second place for robot performance and the Champions Award, advancing to sectionals.",
      "At sectionals, they placed third for robot performance and were a Champion’s Award finalist. They advanced to state, earned first place for their Innovation Project, and qualified for an international invitational.",
      "We also mentored team #50613, Endangered Engineers. Its members were mostly rookies, and we helped them learn the basics of coding and building a robot, along with skills they could use beyond robotics."
    ],
    "images": [
      {
        "src": "assets/dino-divers-01.webp",
        "alt": "Dino Divers working on FLL robot missions, photo 1"
      },
      {
        "src": "assets/dino-divers-02.webp",
        "alt": "Dino Divers working on FLL robot missions, photo 2"
      },
      {
        "src": "assets/fll-earlier-01.webp",
        "alt": "Middle school FLL teams mentored by Team Rocket, photo 1"
      }
    ],
    "compactPhotos": true
  },
  {
    "sourceOrder": 17,
    "id": "fll-summer-camp-earlier",
    "title": "FLL Summer Camp",
    "duration": "Five-day program",
    "paragraphs": [
      "We held a five-day FLL summer camp for students entering grades 3–7. Students learned the basics of mechanical attachments and programming, built their own robots, and tried hands-on labs. On the last day, they completed missions from previous seasons."
    ],
    "images": [
      {
        "src": "assets/fll-camp-earlier-01.webp",
        "alt": "Students building and programming LEGO robots at the FLL summer camp, photo 1"
      },
      {
        "src": "assets/fll-camp-earlier-02.webp",
        "alt": "Students building and programming LEGO robots at the FLL summer camp, photo 2"
      },
      {
        "src": "assets/fll-camp-earlier-03.webp",
        "alt": "Students building and programming LEGO robots at the FLL summer camp, photo 3"
      }
    ],
    "compactPhotos": true
  },
  {
    "sourceOrder": 18,
    "id": "cyber-seahorses-fll",
    "title": "Cyber Seahorses",
    "partner": "FLL Team 56613",
    "paragraphs": [
      "Two students who attended our FLL summer camp went on to create their own team, Cyber Seahorses. They earned second place for robot performance and advanced to the state competition."
    ],
    "images": [
      {
        "src": "assets/cyber-seahorses-01.webp",
        "alt": "Cyber Seahorses students at an FLL competition, photo 1"
      }
    ],
    "compactPhotos": true
  },
  {
    "sourceOrder": 19,
    "id": "fll-regional-demo",
    "title": "FLL Regional Demo",
    "duration": "Early December, CENTERSTAGE season",
    "paragraphs": [
      "We brought our robot to an FLL regional tournament and demonstrated it for teams and families. We encouraged students to continue in robotics and let them drive the robot and try scoring pixels."
    ],
    "images": [
      {
        "src": "assets/fll-regional-demo-01.webp",
        "alt": "Students trying Team Rocket’s robot at an FLL regional tournament, photo 1"
      }
    ],
    "compactPhotos": true
  }
];

// CURRENT SPONSORS: supplied logos, shared between Home and Sponsors.
export const sponsors = [
  {
    "name": "Google",
    "image": "assets/sponsor-google.png",
    "website": ""
  },
  {
    "name": "Young Innovator Institute",
    "image": "assets/sponsor-young-innovator.png",
    "website": ""
  },
  {
    "name": "Morningstar",
    "image": "assets/sponsor-morningstar.png",
    "website": ""
  },
  {
    "name": "The Wyndham Garden Kenosha Harborside",
    "image": "assets/sponsor-wyndham.png",
    "website": ""
  },
  {
    "name": "Days Inn and Suites Hammond",
    "image": "assets/sponsor-days-inn.png",
    "website": ""
  }
];

// SPONSORSHIP LEVELS: separate from the current sponsor list.
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
  }
];
