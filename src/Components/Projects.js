import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="section" id="projects">
        <div className="container cc-experience">
          <div className="h4 text-center mb-4 title">Projects</div>

          {/* ROW WRAPPER */}
          <div className="row">
            {projects.map((project, index) => (
              <div
                key={index}
                className="col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-duration="500"
              >
                <div className="card h-100">
                  <div className="row h-100">
                    {/* LEFT SIDE */}
                    <div className="col-md-4 bg-primary">
                      <div className="card-body cc-experience-header">
                        <p>{project.duration}</p>
                        <div className="h6">Team: {project.teamSize}</div>
                      </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="h5">{project.name}</div>
                        <p><b>Environment:</b> {project.environment}</p>
                        <p>{project.description}</p>

                        <ul>
                          {project.responsibilities.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    );
  }
}

export default Projects;


/* ---------------- ALL PROJECTS ---------------- */

const projects = [
  {
    name: "Max Words",
    duration: "Oct 2018 – Jan 2019",
    teamSize: 1,
    environment: "React Native, MySQL",
    description: "Word-building mobile game.",
    responsibilities: [
      "Developed React Native app",
      "API integration for game logic",
      "Backend API support",
    ],
  },
  {
    name: "Sports Fans",
    duration: "Jan 2019 – Feb 2020",
    teamSize: 2,
    environment: "React Native, Node.js, GraphQL",
    description: "Sports app with video calls, chat and media storage.",
    responsibilities: [
      "React Native development",
      "GraphQL data integration",
    ],
  },
  {
    name: "MenuMD",
    duration: "Feb 2019 – Jun 2019",
    teamSize: 1,
    environment: "React Native, GraphQL",
    description: "Restaurant discovery application.",
    responsibilities: [
      "Database schema design",
      "Google Maps integration",
      "Analytics implementation",
    ],
  },
  {
    name: "Liquid Property",
    duration: "Jun 2019 – Aug 2019",
    teamSize: 2,
    environment: "React Native, Redux",
    description: "Business app for buying and selling products.",
    responsibilities: ["React Native development"],
  },
  {
    name: "MyFlatInfo",
    duration: "Aug 2019 – Jan 2020",
    teamSize: 2,
    environment: "React Native, Node.js, GraphQL",
    description: "Apartment management app.",
    responsibilities: [
      "GraphQL APIs",
      "Payment gateway integration",
      "Hooks-based state handling",
    ],
  },
  {
    name: "MyMart B2B",
    duration: "Sep 2019 – Feb 2020",
    teamSize: 2,
    environment: "React Native, Node.js, Redux",
    description: "B2B marketplace app.",
    responsibilities: [
      "Payment gateway",
      "Redux state management",
    ],
  },
  {
    name: "Harfan Vendor",
    duration: "Feb 2020 – Jun 2020",
    teamSize: 2,
    environment: "React Native, Node.js, Firebase",
    description: "Vendor-side service app.",
    responsibilities: [
      "Firebase phone authentication",
      "Payment integration",
    ],
  },
  {
    name: "Harfan Consumer",
    duration: "Jan 2020 – May 2020",
    teamSize: 2,
    environment: "React Native, Node.js, Firebase",
    description: "Consumer services & shopping app.",
    responsibilities: [
      "Firebase auth (Phone, Email, Facebook)",
      "GraphQL integration",
    ],
  },
  {
    name: "AUDVISOR",
    duration: "Jun 2020 – Nov 2020",
    teamSize: 5,
    environment: "React Native, Node.js",
    description: "Advisor booking application.",
    responsibilities: [
      "Audio player implementation",
      "Payment integration",
    ],
  },
  {
    name: "Syngenta Greencast Turf",
    duration: "Oct 2020 – Jan 2021",
    teamSize: 1,
    environment: "React Native, Expo, Firebase",
    description: "Agriculture chemical calculation app.",
    responsibilities: [
      "Expo-based RN app",
      "Firebase email authentication",
    ],
  },
  {
    name: "Syngenta GGP",
    duration: "Dec 2020 – Feb 2021",
    teamSize: 1,
    environment: "React.js, Cordova, Azure",
    description: "Audit verification web & mobile app.",
    responsibilities: [
      "Single codebase via Cordova",
      "Azure Microsoft login",
    ],
  },
  {
    name: "Syngenta Sumridhi Retailer",
    duration: "Feb 2021 – Jun 2021",
    teamSize: 2,
    environment: "React Native, Firebase",
    description: "Retailer QR verification app.",
    responsibilities: [
      "Barcode scanning",
      "GraphQL APIs",
    ],
  },
  {
    name: "Splinterland",
    duration: "Jun 2021 – Dec 2021",
    teamSize: 4,
    environment: "Next.js, Webpack",
    description: "Gaming website.",
    responsibilities: ["Next.js development"],
  },
  {
    name: "Oath Healthcare",
    duration: "Dec 2021 – Feb 2022",
    teamSize: 6,
    environment: "React Native, AWS Cognito",
    description: "Doctor appointment booking app.",
    responsibilities: ["AWS Cognito authentication"],
  },
  {
    name: "Clash",
    duration: "Feb 2022 – Jan 2023",
    teamSize: 4,
    environment: "React Native, Firebase",
    description: "Gaming tournaments app.",
    responsibilities: ["Firebase phone & Gmail auth"],
  },
  {
    name: "GamePe Wallet",
    duration: "Feb 2023 – Mar 2023",
    teamSize: 4,
    environment: "React Native, Blockchain",
    description: "Crypto wallet app.",
    responsibilities: ["Frontend lead", "Blockchain integration"],
  },
  {
    name: "Improve MG",
    duration: "Mar 2023 – Oct 2023",
    teamSize: 8,
    environment: "React Native, Firebase, AWS, HealthKit",
    description: "Healthcare app for MG patients.",
    responsibilities: [
      "Team leadership",
      "Apple HealthKit integration",
      "Push notifications",
    ],
  },
  {
    name: "Improve MG Dashboard",
    duration: "Oct 2023 – Jan 2024",
    teamSize: 3,
    environment: "React.js, Firebase",
    description: "Doctor dashboard web app.",
    responsibilities: ["Charts & analytics"],
  },
  {
    name: "Improve CIDP",
    duration: "Mar 2023 – Aug 2023",
    teamSize: 6,
    environment: "React Native, Firebase, HealthKit",
    description: "CIDP patient monitoring app.",
    responsibilities: ["Pedometer & stability tests"],
  },
  {
    name: "SUD Life",
    duration: "Aug 2024 – Dec 2024",
    teamSize: 3,
    environment: "React Native, Redux, Firebase",
    description: "Women empowerment app.",
    responsibilities: ["Offline courses", "Job applications"],
  },
  {
    name: "Uplevy Social",
    duration: "Dec 2024 – Feb 2025",
    teamSize: 2,
    environment: "React Native, Firebase",
    description: "Women social networking app.",
    responsibilities: ["Feeds, chat, posts"],
  },
  {
    name: "Uplevy Business",
    duration: "Feb 2025 – Present",
    teamSize: 1,
    environment: "React Native, Firebase",
    description: "Organization communication app.",
    responsibilities: ["Events, chat rooms, library"],
  },
  {
    name: "CAMS",
    duration: "Sep 2025 – Nov 2025",
    teamSize: 3,
    environment: "React Native, .NET",
    description: "Hospital employee tracking app.",
    responsibilities: ["React Native lead"],
  },
  {
    name: "Trusted Bank",
    duration: "Nov 2025 – Present",
    teamSize: 2,
    environment: "React Native, .NET, Fineract",
    description: "Mobile banking application.",
    responsibilities: [
      "Account, loan & deposit modules",
      "Fineract SDK integration",
    ],
  },
];
