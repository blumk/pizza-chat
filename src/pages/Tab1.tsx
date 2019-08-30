import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import "./Tab1.css";
import Chat from "./Chat";
import { RouteComponentProps } from "react-router";

const Tab1: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  console.log(history);

  const searchTerm = history ? history.location.search.split("=") : null;

  const pizza = searchTerm && searchTerm.length > 1 ? searchTerm[1] : "";
  console.log(pizza);
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pizza Chat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {pizza && <Chat channel={pizza}></Chat>}
        {!pizza && <p>select a pizza from tab2</p>}
      </IonContent>
    </>
  );
};

export default Tab1;
