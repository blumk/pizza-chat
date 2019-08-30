import React from "react";
import { RouteComponentProps } from "react-router";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton
} from "@ionic/react";

const Tab2: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Channels channels</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/hawaii.jpg" alt="" height="150px" />
          <IonCardHeader>
            <IonCardSubtitle>Favorite</IonCardSubtitle>
            <IonCardTitle>Pizza Hawaii Channel</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Hawaiian pizza is a pizza topped with tomato sauce, cheese,
            pineapple, and back bacon or ham.
            <IonButton>Chat</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/hawaii.jpg" alt="" height="150px" />
          <IonCardHeader>
            <IonCardSubtitle>Favorite</IonCardSubtitle>
            <IonCardTitle>Pizza Hawaii Channel</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Hawaiian pizza is a pizza topped with tomato sauce, cheese,
            pineapple, and back bacon or ham.
            <IonButton>Chat</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Tab2;
