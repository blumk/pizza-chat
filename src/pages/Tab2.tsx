import React from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

const Tab2: React.FunctionComponent<RouteComponentProps> = ({ history }) => {

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pizzas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

      <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt=""/>
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Ionic</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>
        
        <IonList>
          <IonItem href="/tab2/details">
            <IonLabel>
              <h2>Go to detail</h2>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};

export default Tab2;