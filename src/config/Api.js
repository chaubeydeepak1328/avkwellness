
// Program 
import p1 from "../images/program/p1.png"
import p2 from "../images/program/p2.png"
import p3 from "../images/program/p3.jpeg"
import p4 from "../images/program/p4.png"
import p5 from "../images/program/p5.png"
import p6 from "../images/program/p6.png"

// Benefits
import b1 from "../images/Benefits/b1.png";
import b2 from "../images/Benefits/b2.png";
import b3 from "../images/Benefits/b3.png";
import b4 from "../images/Benefits/b4.png";
import b5 from "../images/Benefits/b5.png";
import b6 from "../images/Benefits/b6.png";

// testmonial
import t1 from "../images/Testmonial/t1.png"
import t2 from "../images/Testmonial/t2.png"
import t3 from "../images/Testmonial/t3.png"

// Team
import team1 from "../images/About/Teams/t1.jpg";
import team2 from "../images/About/Teams/t2.jpg";
import team3 from "../images/About/Teams/t3.jpg";





const Progrm_section = [
    {
        img: p1,
        title: "Executive Wellness Coaching",
        description: "Executive Wellness Coaching offers personalized guidance to senior leaders, focusing on physical health, mental resilience, and emotional well-being."
    },
    {
        img: p2,
        title: "Leadership Health Retreats",
        description: "Our Leadership Health Retreats provide an immersive wellness experience, designed to rejuvenate and refresh corporate leaders Set in serene Locations."
    },
    {
        img: p3,
        title: "Corporate Wellness Workshops",
        description: "These workshops are designed to integrate wellness into the corporate culture. We offer a series of interactive sessions that cover various aspects of wellness."
    },
    {
        img: p4,
        title: "Mental Health Advocacy",
        description: "Mental health is a critical component of overall well-being. Our programs focus on breaking the stigma around mental health issues and providing leaders with the skills to support their teams effectively"
    },
    {
        img: p5,
        title: "Digital Wellness Solutions",
        description: "In today’s digital age, managing screen time and digital distractions is vital. Our Digital Wellness Solutions help leaders and their teams develop healthy digital habits, enhancing productivity and well-being."
    },
    {
        img: p6,
        title: "Wellness Programs for Universities & Colleges",
        description: "Wellness services for students are essential in supporting their mental, physical, and emotional well-being, especially given the various pressures and challenges they face."
    },

]

const Benefits_section = [
    {
        img: b1,
        title: "Enhanced Decision Making",
        description: "Better health leads to clearer thinking and more effective decision-making"
    },
    {
        img: b2,
        title: "Enhanced Productivity",
        description: "Healthier employees are more focused, motivated, and efficient."
    },
    {
        img: b3,
        title: "Reduced Absenteeism",
        description: "Improved health leads to fewer sick days and reduced absenteeism."
    },
    {
        img: b4,
        title: "Increased Job Satisfaction",
        description: "Employees feel valued and supported, leading to higher job satisfaction and retention rates."
    },
    {
        img: b5,
        title: "Positive Work Environment",
        description: "A culture of wellness fosters a positive and collaborative work environment."
    },
    {
        img: b6,
        title: "Cost Savings",
        description: "Reduced healthcare costs and improved overall organizational performance."
    },

]


const testmonial = [
    {
        img: t1,
        description: "AVK Wellness’s innovative approach to holistic health and personalized wellness plans is commendable. Their dedication to mental well-being and effective guidance will undoubtedly inspire many. I am confident that AVK Wellness will thrive and positively impact countless lives.",
        name: "Mr.BK Ravi",
        title: "Rtd.IPS - 1989",
        experience: "Ex- DGP, Tamil nadu POLICE"
    },
    {
        img: t2,
        description: "Your emphasis as holistic health, personalized plans, mental wellness, etc. sets you apart in the industry.AVK Wellness have a supportive network of fellow wellness professionals, clients, and health advocates who believe in your vision and are eager to see you succeed.",
        name: 'Brig.Ajay K Saxena',
        title: "Ex Dypt.Director General, CICP",
        position: "(Ministry of defence)",
        experience: "EX CEO, Park Group of Hospitals"
    },
    {
        img: t3,
        description: '“Health is Wealth” must be an indispensable approach of everyone’s life. We are confident that AVK Wellness Startup will flourish and you all will inspire countless individuals to lead healthier, happier lives in realising them “ My grand wishes for your success.',
        name: "Amit Dwivedi",
        title: "Founder, Power On Wheels",
        experience: "4 Lakhs + 𝑭𝒂𝒎𝒊𝒍𝒚 𝑶𝒏 𝒀𝒐𝒖𝒕𝒖𝒃𝒆"
    },
]

const Team = [
    {
        img: team1,
        name: "CA Vasu Deo Sharma"
    },
    {
        img: team2,
        name: "Dr. Rakesh Trehan"
    },
    {
        img: team3,
        name: "Kundan Kumar Jha"
    }
]

const ProgramTypes = [
    {
        title: "Executive Wellness Coaching",
        description: "Executive Wellness Coaching offers personalized guidance to senior leaders, focusing on physical health, mental resilience, and emotional well-being. Our certified wellness coaches work one-on-one with executives to develop tailored plans.",
        key_features: [
            "Personalized wellness assessments",
            "Stress management techniques",
            "Nutrition and fitness plans",
            "Mindfulness and meditation practices",
            "Regular progress tracking and adjustments"
        ]
    },
    {
        title: "Leadership Health Retreats",
        description: "Our Leadership Health Retreats provide an immersive wellness experience, designed to rejuvenate and refresh corporate leaders. Set in serene locations, these retreats offer a perfect blend of relaxation, wellness activities, and leadership development.",
        key_features: [
            "Holistic health workshops",
            "Yoga and meditation sessions",
            "Nutritional counselling",
            "Outdoor activities and adventure sports",
            "Networking opportunities with other leaders"
        ]
    },
    {
        title: "Corporate Wellness Workshops",
        description: "These workshops are designed to integrate wellness into the corporate culture. We offer a series of interactive sessions that cover various aspects of wellness, aimed at equipping leaders with the knowledge and tools to promote well-being.",
        key_features: [
            "Stress management and resilience training",
            "Work-life balance strategies",
            "Nutrition and fitness education",
            "Mental health awareness",
            "Creating a wellness-centric corporate culture"
        ]
    },
    {
        title: "Mental Health Advocacy",
        description: "Mental health is a critical component of overall well-being. Our programs focus on breaking the stigma around mental health issues and providing leaders with the skills to support their teams effectively.",
        key_features: [
            "Mental health first aid training",
            "Workshops on recognizing and addressing mental health issues",
            "Creating supportive workplace environments",
            "Access to professional counselling services",
            "Brain Games for Mind-fullness & boosting up the Brain"
        ]
    },
    {
        title: "Digital Wellness Solutions",
        description: "In today’s digital age, managing screen time and digital distractions is vital. Our Digital Wellness Solutions help leaders and their teams develop healthy digital habits, enhancing productivity and well-being.",
        key_features: [
            "Digital Detox Programs",
            "Training on Healthy Screen Time Management",
            "Tools and Apps for Digital Well-Being",
            "Workshops on Balancing Technology Use"
        ]
    },
    {
        title: "Programs for Universities & Colleges",
        description: "Wellness services for students are essential in supporting their mental, physical, and emotional well-being, especially given the various pressures and challenges they face.",
        key_features: [
            "Mental Health Awareness Campaigns",
            "Wellness Workshop and Activities",
            "Physical Health Promotion",
            "Substance Abuse Prevention",
            "Sexual Health and Violence Prevention"
        ]
    }
];


export { Progrm_section, Benefits_section, testmonial, Team }
