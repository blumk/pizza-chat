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
  IonCardContent
} from "@ionic/react";

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
          <img src="/assets/hawaii.jpg" alt="" />
          <IonCardHeader>
            <IonCardSubtitle>Favorite</IonCardSubtitle>
            <IonCardTitle>Pizza Hawaii</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Hawaiian pizza is a pizza topped with tomato sauce, cheese,
            pineapple, and back bacon or ham.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Tab2;
