import React from 'react';
import {
  IonList,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { mailOutline, logoLinkedin } from 'ionicons/icons';
import { linkedinURL, mailURL } from '../assets/text/about';

const datos = {
  email: mailURL,
  linkedin: linkedinURL
}


const Contact: React.FC = () => {
  const titleStyle = {
    fontSize: '1em',
    margin: '0.1em',
    marginRight: '1em'
  };

  const itemStyle = { 
    textAlign: 'right',
    background: 'transparent', 
    '--background': 'transparent'
  };

  const imageDivStyle = {
    
  };

  const imageStyle = {
    width: '40%',
    display: 'block',
    margin: 'auto',
    borderRadius: '50%' // Ajusta el valor para cambiar la cantidad de redondeo
  };
  
  return (
    <>
      <IonList lines="none" style={itemStyle}>
        <IonItem style={itemStyle}>
          <IonLabel style={titleStyle}>{datos.email}</IonLabel>
          <IonIcon icon={mailOutline} />
        </IonItem>
        <IonItem style={itemStyle}>
          <IonLabel style={titleStyle}>{datos.linkedin}</IonLabel>
          <IonIcon icon={logoLinkedin}/>
        </IonItem>
      </IonList>
    </>
  );
};

export default Contact;
