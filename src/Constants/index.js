import { LinkedIn, facebook, instagram, location, mail, phone, pinterest, twitter } from "../assets/icons"
import { Education, oculus, outdoor, selfCare, simulation, unity, unrealEngine, vive } from "../assets/images"

export const navLinks = [
    { href: "#about-us", label: "About Us"},
    { href: "#services", label: "Services"},
    { href: "#technologies", label: "Technologies"},
    { href: "#how-to", label: "How To"},
    { href: "#join", label: "Join Hydra"},
]

export const contact = [
    {
        id:1,
        imgURl: location,
        name: "Pay Us a Visit",
        value: "Union St, Seattle, WA 98101, United States"
    },
    {
        id:2,
        imgURl: phone,
        name: "Give Us a call",
        value: "(110) 1111-1010"
    },
    {
        imgURl: mail,
        name: "Send Us a Message",
        value: "Contact@HydraVTech.com"
    },
]
export const Services = [
    {
        id:1,
        imgURl: simulation,
        heading: "SIMULATION",
        description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
    },
    {
        id:2,
        imgURl: Education,
        heading: "EDUCATION",
        description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
    },
    {
        id:3,
        imgURl: selfCare,
        heading: "SELF-CARE",
        description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
    },
    {
        id:4,
        imgURl: outdoor,
        heading: "OUTDOOR",
        description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
    },

]

export const technologies = [
    {
        id:1,
        imgUrl:unrealEngine,
    },
    {
        id:2,
        imgUrl:unity,
    },
    {
        id:3,
        imgUrl:oculus,
    },
    {
        id:4,
        imgUrl:vive,
    },
]
export const footerLinks = [

    {
        title: "Nav",
        links: [
            { name: "ABOUT", href: "#about-us" },
            { name: "SERVICES",  href: "#services" },
            { name: "Technologies", href: "#technologies"},
            { name: "HOW TO", href: "#how-to"},
            { name: "JOIN HYDRA",  href: "#join" },
        ],
    },
    {
        title:"help",
        links:[
            {name:"F.A.Q.",href: "/"},
            {name:"SITEMAP",href: "/"},
            {name:"CONDITIONS",href: "/"},
            {name:"LICENSES",href: "/"},
        ]
    },

];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
    { src: LinkedIn, alt: "LinkedIn logo" },
    { src: pinterest, alt: "Pinterest logo" },
    { src: mail, alt: "Mail logo" },
]; 