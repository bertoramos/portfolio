

import python_logo from "../logos/python_logo.svg";
import android_logo from "../logos/android_logo.svg";
import blender_logo from "../logos/blender_logo.svg";
import ble_logo from "../logos/ble_logo.svg";
import marvelmind_logo from "../logos/marvelmind_logo.svg";
import latex_logo from "../logos/latex_logo.svg";

import blender_tfg from "../images/projects/blender_tfg.webp";
import drone_tfm from "../images/projects/drone_tfm.webp";

interface TechnologyStruct {
    name: string;
    icon: string;
}

interface ProjectsStruct {
    name: string;
    description: string;
    resume: string;
    image: string;
    url: string;
    technologies: TechnologyStruct[];
}

const projects: ProjectsStruct[] = [
    {
        name: "Dron assisted Indoor Positioning System",
        description: "This work was developed in the context of Indoor Positioning Systems (IPS) based on Bluetooth Low Energy signals. IPS makes it possible to locate people or objects in environments where the reception of the Global Positioning System (GPS) signal is inaccessible or very weak, such as buildings, subway stations, etc. To implement these systems, an environment survey methodology to gather Received Signal Strength Indicators is required. Previous projects have proven that using an automated robotic platform reduces capture time and increases performance of positioning. This work is intended to use a Unmanned Aerial Vehicle (UAV) to capture data from Bluetooth Low Energy beacons. The capture will be done via an on-board mobile device and a 3D application that helps the pilot to follow a route.",
        resume: "Implements a drone capture system with a mobile device and a 3D application to capture Bluetooth Low Energy signals, enhancing the efficiency of Indoor Positioning Systems in GPS denied environments.",
        image: drone_tfm,
        url: "http://hdl.handle.net/10553/118069",
        technologies: [
            {name: "Android", icon: android_logo},
            {name: "Blender", icon: blender_logo},
            {name: "BLE", icon: ble_logo},
            {name: "Marvelmind", icon: marvelmind_logo},
            {name: "Latex", icon: latex_logo}
        ]
    },
    {
        name: "Development of a communication module in Blender for interoperation with a robotic platform.",
        description: "This project was developed in the context of Indoor Positioning Systems. The most used devices are Bluetooth Low Energy beacons or WiFi access points. These positioning systems require a environment survey procedure during which a radio-map is constructed by laboriously collecting Received Signal Strength Indicators. The collection of these signals is the necessary basis for correct functioning of the IPS. After an evaluation of different signal collecting methods, it was necessary to choose a robotic platform to automate the process. This work proposes the creation of a software solution that includes tools that facilitate 3D scenario design and a communication module with platform. Communication module permits design and send custom navigations plans, and a real-time tracking of a robotic platform.",
        resume: "This project focuses on automating signal collection for Indoor Positioning Systems using a software solution that includes 3D scenario design tools and a communication module for real-time tracking of a robotic platform.",
        image: blender_tfg,
        url: "http://hdl.handle.net/10553/77830",
        technologies: [
            {name: "Python", icon: python_logo},
            {name: "Blender", icon: blender_logo},
            {name: "Latex", icon: latex_logo}
        ],
    }
]

export type { ProjectsStruct };
export { projects }