import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline, MdLocationOn } from "react-icons/md";


export const links = [
    {
      name: "Homepage",
      link: "/"
    },
    {
      name: "Products & services",
      link: "/products"
    },
    {
      name: "Contact us",
      link: "/#contact"
    },
  ]

  export const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Mobile",
      value: "+961 3 205 747"
    },
    {
      icon: <MdOutlineMailOutline />,
      title: "Email",
      value: "evyco.trading@hotmail.com"
    },
    {
      icon: <MdLocationOn />,
      title: "Address",
      value: "Beirut, Lebanon"
    }
  ]