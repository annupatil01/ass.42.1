import realme from "./BlogImg/Skullcandy Hesh .jpg"
import onePlus from "./BlogImg/solo2_headphone.jpg"
import iphone from "./BlogImg/th.jpg"

const blogs = [
    {
        id: "realme NARZO N65 5G-001",
        title: "Skullcandy Hesh 2 Wireless Bluetooth Headphones (Black)",
        content: " The black Hesh 2 Wireless Bluetooth Headphones by Skullcandy are for personal listening with mobile devices. They can be used in various audio applications such as for smartphones, MP3 players, computers, tablets, and more. The Hesh 2 wireless headphones have a frequency response of 20 Hz to 20 kHz, and feature a power on/off button to answer and place calls on hold. The on-board +/- buttons let you adjust volume and choose songs. The Hesh 2 are built with a USB port and offer wireless pairing. The rechargeable battery can provide up to 15 hours of music when fully charged. In addition there is a battery status LED indicator that blinks red when the battery is at 10%. A back up cable is included for wired listening.",
        author : {
            name: "Sky Li",
            avtar: "https://i.pravatar.cc/150?img=3",
        },
        date: "May 16, 2024",
        categories: ["wireless","Headphone 2"], 
        imgURL:realme,  
       price: " ₹10,499",
    },
    {
        id: "oneplus 12-004",
        title: "Beats by Dr. Dre Solo2 Wired On-Ear Headphones (Luxe Edition, Blue)",
        content: "The blue, Luxe Edition Solo² Wired On-Ear Headphones from Beats by Dr. Dre have been completely redesigned to provide improved acoustics and sonic clarity from their predecessors. They feature a flexible headband and ergonomically angled ear cups to provide a comfortable fit, while the ear cup material helps dissipate heat while minimizing sound leakage. Their detachable RemoteTalk cable is iOS compatible, and allows you to control tracks, volume, and take calls on compatible iOS models. A carrying case is included.",
        author : {
            name: "Pete Lau",
            avtar: "https://i.pravatar.cc/150?img=68",
        },
        date: "January 30, 2024",
        categories: ["wireless","Headphone 1"], 
        imgURL:onePlus,    
        price: "₹1,500",
    },
    {
        id: "Apple iPhone 15-003",
        title: "Beats by Dr. Dre Studio3 Wireless Bluetooth Headphones (Defiant Black/Red / Decade Collection",
        content: "Put the world on hold with a pair of Beats by Dr. Dre Studio3 Wireless Bluetooth Headphones in defiant black/red. These over-ear headphones feature Pure Adaptive Noise Canceling for active noise blocking with real-time audio calibration based on fit. They connect to your device via Bluetooth and use the W1 chip to seamlessly pair with compatible devices, seamlessly switch between compatible Apple devices, and more.",
        author : {
            name: " Steve Jobs",
            avtar: "https://i.pravatar.cc/150?img=54",
        },
        date: "September 22, 2024",
        categories: ["wireless","Headphone 3"],   
        imgURL:iphone, 
        price:  "₹9,100", 
    },
    
]

export default blogs