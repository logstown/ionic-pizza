import { useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonReorder,
  IonReorderGroup,
  IonToolbar,
  ItemReorderEventDetail,
  useIonViewWillEnter,
} from '@ionic/react';
import './Eater.css';
import { Topping, getToppings } from '../data/toppings';
import { close } from 'ionicons/icons';


function Eater() {
    const [toppings, setToppings] = useState<Topping[]>(getToppings());

    // useIonViewWillEnter(() => {
    //   const msgs = getMessages();
    //   setToppings(msgs);
    // });
  
    function handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
      // The `from` and `to` properties contain the index of the item
      // when the drag started and ended, respectively
      console.log('Dragged from index', event.detail.from, 'to', event.detail.to);
  
      // Finish the reorder and position the item in the DOM based on
      // where the gesture ended. This method can also be called directly
      // by the reorder group
      event.detail.complete();
    }

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonList>
          <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
          {toppings.map(t => (
            <IonItem key={t.id}>
              <IonButton slot="start" fill='clear' color="danger">
                <IonIcon slot="icon-only" icon={close}></IonIcon>
              </IonButton>
              <IonLabel>{t.name}</IonLabel>
              <IonReorder slot="end"></IonReorder>
            </IonItem>
          ))}
          </IonReorderGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default Eater;
