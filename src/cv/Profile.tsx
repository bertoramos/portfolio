
import { IonMenu, IonAvatar, IonRow, IonText, IonIcon, IonLabel, IonList, IonItem, IonContent, IonCol, IonGrid, IonListHeader } from "@ionic/react";

import profile_image_squared from "../assets/images/profile_image_squared.webp"
import { about_mini_txt, linkedinURL, mailURL } from "../assets/text/about";

import { logoIonic, logoLinkedin, mail, mailOutline } from "ionicons/icons";

import python_logo from "../assets/logos/python_logo.svg"
import cpp_logo from "../assets/logos/cpp_logo.svg"
import java_logo from "../assets/logos/java_logo.svg"
import matlab_logo from "../assets/logos/matlab_logo.svg"
import ros_logo from "../assets/logos/ros_logo.svg"
import docker_logo from "../assets/logos/docker_logo.svg"

import android_logo from "../assets/logos/android_logo.svg"
import linux_logo from "../assets/logos/linux_logo.svg"
import arduino_logo from "../assets/logos/arduino_logo.svg"
import nvidia_logo from "../assets/logos/nvidia_logo.svg"

import linkedin_logo from "../assets/logos/linkedin_logo.svg"

import "./Profile.css"

const TECHS = [
    { logo: python_logo, text: "Python" },
    { logo: cpp_logo, text: "C/C++" },
    { logo: java_logo, text: "Java" },
    { logo: matlab_logo, text: "Matlab" },
    { logo: ros_logo, text: "ROS1" },
    { logo: docker_logo, text: "Docker" },
    { logo: logoIonic, text: "Ionic" },
    { logo: android_logo, text: "Android" },
    { logo: linux_logo, text: "Linux" },
    { logo: arduino_logo, text: "Arduino" },
    { logo: nvidia_logo, text: "NVIDIA Jetson" },
];

const TechChip = (props: { logo: string, text: string }) => {
    return (

        <IonCol className="technologiesColumns" key={props.text}>
            <IonRow>
                <IonIcon className="technologyIcon" icon={props.logo} />
            </IonRow>
            <IonRow className="technologyText">
                {props.text}
            </IonRow>
        </IonCol>

    );
}

const Profile = () => {
    return (
        <IonMenu className="profile" contentId="main">
            <IonContent className="ion-margin">
                <IonRow className="ion-justify-content-center ion-margin">
                    <IonAvatar className="avatar-image">
                        <img alt="Alberto profile image" src={profile_image_squared} />
                    </IonAvatar>
                </IonRow>

                <IonRow className="ion-justify-content-center">
                    <IonText className="about-me">
                        {about_mini_txt}
                    </IonText>
                </IonRow>

                <div className="profile-subtitle">
                    Contact
                </div>
                <IonList className="contact-list">
                    {/* Elemento de Email */}

                    <IonItem lines="none">
                        <IonIcon icon={mailOutline} slot="start" />
                        <IonLabel style={{ whiteSpace: "normal" }}>
                            <a href={`mailto:${mailURL}`}>{mailURL}</a>
                        </IonLabel>
                    </IonItem>

                    {/* Elemento de Página Web */}
                    <IonItem lines="none">
                        <IonIcon icon={linkedin_logo} slot="start" />
                        <IonLabel style={{ whiteSpace: "normal" }}>
                            <a
                                href={linkedinURL}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {linkedinURL}
                            </a>
                        </IonLabel>
                    </IonItem>
                </IonList>

                <div className="profile-subtitle">
                    Skills
                </div>
                <IonGrid className="skills">

                    <IonRow>
                        {
                            TECHS.map(
                                (elem, key) => {
                                    return (
                                        <TechChip key={key} logo={elem.logo} text={elem.text} />
                                    );
                                }
                            )
                        }
                    </IonRow>
                </IonGrid>

            </IonContent>



        </IonMenu>
    )
}

export default Profile;

/*

<IonGrid className="ion-padding">
                            <IonCol>
                                <IonRow className="ion-justify-content-center">
                                    <IonAvatar className="avatar-image">
                                        <img alt="Silhouette of a person's head" src={profile_image_squared} />
                                    </IonAvatar>
                                </IonRow>

                                <IonRow className="ion-justify-content-center">
                                    <IonText className="ion-padding ion-margin-top">
                                        {about_mini_txt}
                                    </IonText>
                                </IonRow>

                                <IonList className="contact">
                                    <IonListHeader>
                                        <IonLabel>
                                            <h1>Contact</h1>
                                        </IonLabel>
                                    </IonListHeader>
                                    <IonItem className="item-text-wrap">
                                        
                                        {mailURL}
                                    </IonItem>
                                    <IonItem className="item-text-wrap">
                                        {linkedinURL}
                                    </IonItem>
                                </IonList>
                            </IonCol>
                        </IonGrid>
 */