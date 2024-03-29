import { location, mail, phone } from "../assets/icons"

export const navLinks = [
    { href: "#about-us", label: "About Us"},
    { href: "#services", label: "Services"},
    { href: "#technologies", label: "Technologies"},
    { href: "#how-to", label: "How To"},
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