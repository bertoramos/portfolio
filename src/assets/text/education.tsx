
import cpp_logo from "../logos/cpp_logo.svg";
import python_logo from "../logos/python_logo.svg";
import pytorch_logo from "../logos/pytorch_logo.svg";
import waspmote_logo from "../logos/waspmote_logo.svg";
import java_logo from "../logos/java_logo.svg";
import matlab_logo from "../logos/matlab_logo.svg";
import arduino_logo from "../logos/arduino_logo.svg";
import linux_logo from "../logos/linux_logo.svg";

interface TechnologyStruct {
    name: string;
    icon: string;
}

interface EducationStruct {
    name: string;
    institution: string;
    start: string;
    end: string;
    place: string;
    grade: number;
    technologies: TechnologyStruct[];
    description: string[];
}

const education: EducationStruct[] = [
    {
        name: "PhD in Business, Internet and Communications Technologies",
        institution: "EmITIC - ULPGC",
        start: "1 October 2022",
        end: "Present",
        place: "Las Palmas de Gran Canaria",
        grade: -1,
        technologies: [

        ],
        description: [

        ]
    },
    {
        name: "Master in Intelligent Systems and Engineering Numerical Applications",
        institution: "SIANI - ULPGC",
        start: "1 October 2020",
        end: "1 September 2022",
        place: "Las Palmas de Gran Canaria",
        grade: 9.505,
        technologies: [
            {name: "Python", icon: python_logo},
            {name: "C/C++", icon: cpp_logo},
            {name: "Pytorch", icon: pytorch_logo},
            {name: "Waspmote", icon: waspmote_logo}
        ],
        description: [
            "",
            ""
        ]
    },
    {
        name: "Bachelor degree in Computer Engineering",
        institution: "EII - ULPGC",
        start: "1 September 2016",
        end: "1 July 2020",
        place: "Las Palmas de Gran Canaria",
        grade: 8.163,
        technologies: [
            {name: "Python", icon: python_logo},
            {name: "Java", icon: java_logo},
            {name: "Matlab", icon: matlab_logo},
            {name: "Arduino", icon: arduino_logo},
            {name: "Linux", icon: linux_logo}
        ],
        description: [
            ""
        ]
    },
]

export type { EducationStruct };
export { education }