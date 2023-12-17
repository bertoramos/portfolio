
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonGrid, IonRow } from "@ionic/react";

import { briefcase, school } from 'ionicons/icons';

import './Content.css'

import ExperienceTimeline from "./ExperienceTimeline";
import EducationTimeline from "./EducationTimeline";

const Experience = () => {
  return (
    <IonGrid className="ion-margin-top">
      <IonRow className="title-content">
        <IonIcon className="title-content-icon" icon={briefcase}></IonIcon>
        <div className="title-content-text">
          Experience
        </div>
      </IonRow>
      <IonRow className="ion-padding">
        <ExperienceTimeline />
      </IonRow>
    </IonGrid>
  );
}

const Education = () => {
  return (
    <IonGrid className="ion-margin-top">
      <IonRow className="title-content">
        <IonIcon className="title-content-icon" icon={school}></IonIcon>
        <div className="title-content-text">
          Education
        </div>
      </IonRow>
      <IonRow className="ion-padding">
        <EducationTimeline />
      </IonRow>
    </IonGrid>
  );
}

const Content = () => {
  return (
    <div className="ion-page" id="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-margin name-title">Alberto Ramos Sánchez</IonTitle>
          <IonTitle className="ion-margin titular-subtitle">Computer Scientist</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Experience />
        <Education />
      </IonContent>

    </div>
  )
}

export default Content;
