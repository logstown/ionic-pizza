import { useRef, useState } from 'react';
import { Topping, getToppings } from '../data/toppings';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonNavLink,
  IonPage,
  IonRange,
  IonReorder,
  IonReorderGroup,
  IonTitle,
  IonToolbar,
  ItemReorderEventDetail,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import { settings } from 'ionicons/icons';
import Settings from './Settings';

const Home: React.FC = () => {

  let toppings = getToppings();

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Pizza Party
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
        <IonNavLink routerDirection="forward" component={() => <Settings  />}>
          <IonItem button>
            <IonIcon slot="start" icon={settings}></IonIcon>
            <IonLabel>Settings</IonLabel>
          </IonItem>
        </IonNavLink>
        </IonList>
        {/* <IonButton expand='block' id='settings-modal'>Settings</IonButton> */}
        <IonButton expand='block'>Add Eaters</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
