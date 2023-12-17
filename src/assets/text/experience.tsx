
import cpp_logo from "../logos/cpp_logo.svg";
import python_logo from "../logos/python_logo.svg";
import ros_logo from "../logos/ros_logo.svg";
import nvidia_logo from "../logos/nvidia_logo.svg";
import legoev3_logo from "../logos/legoev3_logo.svg";
import inkscape_logo from "../logos/inkscape_logo.svg";
import docker_logo from "../logos/docker_logo.svg";

interface TechnologyStruct {
    name: string,
    icon: string
}

interface ExperienceStruct {
    company: string;
    position: string;
    start: string;
    end: string;
    place: string;
    technologies: TechnologyStruct[];
    description: string[];
}

const experiences: ExperienceStruct[] = [
    {
        company: 'Subsea Mechatronics',
        position: 'Computer Scientist',
        start: "1 January 2022",
        end: "1 July 2023",
        place: "Las Palmas de Gran Canaria",
        technologies: [
            {name: "Python", icon: python_logo},
            {name: "C/C++", icon: cpp_logo},
            {name: "ROS1", icon: ros_logo},
            {name: "NVIDIA Jetson", icon: nvidia_logo},
            {name: "Docker", icon: docker_logo}
        ],
        description: [
            "Software integration of sensors (LiDAR, camera, sonar, stereocameras) for the perception of underwater environments.",
            "3D reconstruction with stereo, LiDAR, sonar and photogrammetry tools.",
            "Analysis of data captured in campaigns."
        ]
    },
    {
        company: 'IUCTC - ULPGC',
        position: 'Computer Engineering Degree Internships',
        start: "1 September 2019",
        end: "1 December 2019",
        place: "Las Palmas de Gran Canaria",
        technologies: [
            {name: "LEGO Mindstorm", icon: legoev3_logo},
            {name: "Python", icon: python_logo},
            {name: "Inkscape", icon: inkscape_logo},

        ],
        description: [
            "Collaboration in ![Ciberlandia](https://ciberlandia.org/) project during \"Semana de las Ciencias\".",
            "Support in the design and development of activities for the ![Ciberlandia](https://ciberlandia.org/) project.",
        ]
    }
];

export { experiences };
export type { ExperienceStruct };

