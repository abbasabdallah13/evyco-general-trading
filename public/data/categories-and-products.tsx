import papers from "../assets/products/papers.png"
import printers from "../assets/products/printers.png"
import toners from "../assets/products/toners.png"
import monitors from "../assets/products/monitors.png"
import laptops from "../assets/products/laptops.png"
import ssd from "../assets/products/ssd.png"
import cctv from "../assets/products/cctv.png"
import solarEnergySystem from "../assets/products/solar-energy-system.png"

export const categoriesAndProducts = [
    {
        title: "Printing supplies",
        products: [
            {
                image: papers,
                title: "A4 Papers"
            },
            {
                image: printers,
                title: "Printers"
            },
            {
                image: toners,
                title: "Toners"
            }
        ]
    },
    {
        title: "Computer supplies",
        products: [
            {
                image: monitors,
                title: "Monitors"
            },
            {
                image: laptops,
                title: "Laptops"
            },
            {
                image: ssd,
                title: "Solid State Drives"
            }
        ]
    },
    {
        title: "CCTV",
        products: [
            {
                image: cctv,
                title: "CCTV"
            },
        ]
    },
    {
        title: "Solar energy system",
        products: [
            {
                image: solarEnergySystem,
                title: "Solar Energy System"
            },
        ]
    }
]