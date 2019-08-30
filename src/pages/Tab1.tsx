import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import "./Tab1.css";
import Chat from "./Chat";

const Tab1: React.FunctionComponent = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pizza Chat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Chat></Chat>
      </IonContent>
    </>
  );
};

export default Tab1;
