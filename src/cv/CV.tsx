import { IonFabButton, IonPage, IonSplitPane, IonFab, IonIcon } from '@ionic/react';
import { print } from 'ionicons/icons'; // Importa el ícono que desees usar

import Profile from './Profile';
import Content from './Content';

import "./CV.css";

const CV = () => {
  return (
    <IonPage>
      <IonSplitPane when="xs" contentId="main">
        <Profile />
        <Content />
      </IonSplitPane>

      <IonFab className="no-print" vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton onClick={window.print}>
          <IonIcon icon={print}  />
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
}

export default CV;
