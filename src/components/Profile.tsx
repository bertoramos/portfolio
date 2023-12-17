// Header.jsx
import React from 'react';
import './Profile.css'
import { IonAvatar, IonButton, IonChip, IonCol, IonGrid, IonIcon, IonLabel, IonRow } from '@ionic/react';
import { caretBack, documentText, downloadOutline, globe, globeOutline, link, locationOutline, logoLinkedin, mailOpenOutline, pulseOutline } from 'ionicons/icons';

import profile_image_squared from '../assets/images/profile_image_squared.webp'
import birthday_cake_logo from '../assets/logos/birthday_cake_logo.svg'
import { useHistory } from 'react-router';
import { mailURL, linkedinURL, cvDownloadURL } from '../assets/text/about';

const Profile: React.FC = () => {

  const linkedin_url = linkedinURL;
  const mailto_url = `mailto:${mailURL}`;
  const download_url = cvDownloadURL;

  return (
    <div className="profileComponent">
      <div className="profileBackground">

      </div>

      <div className="contactBackground">


        <IonGrid className="contactContent">

          <IonRow>
            <IonAvatar className="profileImage">
              <img src={profile_image_squared} />
            </IonAvatar>
          </IonRow>
          <IonRow>
            <a href={linkedin_url} target="_blank" rel="noopener noreferrer">
              <IonButton shape="round" color="light" className="linkedinButton">
                <IonIcon icon={logoLinkedin} style={{ marginRight: "10px" }}></IonIcon>
                <IonLabel>Connect</IonLabel>
              </IonButton>
            </a>
          </IonRow>

          <IonRow><h3>Alberto Ramos Sánchez</h3></IonRow>
          <IonRow><p>Computer scientist</p></IonRow>

          <IonRow className="iconsProfile">
            <IonChip><IonIcon icon={birthday_cake_logo} /> <IonLabel>November, 23rd</IonLabel></IonChip>
            <IonChip><IonIcon icon={globeOutline} /> <IonLabel>Arucas, Spain</IonLabel></IonChip>

            {false && <IonChip><IonIcon icon={link} /> <IonLabel>More about me</IonLabel></IonChip>}

          </IonRow>

          <IonRow className="extraLinkContainer">
            <IonCol>
              <IonChip onClick={(ev) => {
                window.open(mailto_url);
              }}>
                <IonIcon icon={mailOpenOutline} />
                <IonLabel>Mail me</IonLabel>
              </IonChip>
            </IonCol>

            <IonCol>
              <IonChip onClick={(ev) => {
                window.open(download_url);
              }}>
                <IonIcon icon={documentText} />
                <IonLabel>Download CV</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
        </IonGrid>

      </div>
    </div>
  );
};

export default Profile;
