import React, { useRef, useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonNavLink,
  IonToolbar,
  IonTitle,
  IonChip,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRange,
} from '@ionic/react';
import { closeCircle, add, close } from 'ionicons/icons';
import { Pizza, getDefaultPizzas } from '../data/pizzas';
import { Topping, getToppings } from '../data/toppings';


function Settings() {
  const newTopping = useRef<HTMLIonInputElement>(null);

  const [toppings, setToppings] = useState<Topping[]>(getToppings());
  const [addingTopping, setAddingTopping] = useState(false);
  const [pizzaSizes, setPizzaSizes] = useState<Pizza[]>(getDefaultPizzas());

  const handleNewToppingKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      addTopping();
    }
  }

  function addTopping() {
    const newToppings = [...toppings, {
      name: newTopping.current?.value as string,
      id: toppings.length
    }];

    setToppings(newToppings);

    setAddingTopping(false);
  }

  function removeTopping(id: number) {
    const newToppings = toppings.filter(x => x.id !== id);
    setToppings(newToppings);
  }

  function getMin(idx: number): number {
    if (idx === 0) {
      return 6;
    } else {
      return pizzaSizes[idx - 1].sizeInches + 1
    }
  }

  function getMax(idx: number): number {
    if (idx === pizzaSizes.length - 1) {
      return pizzaSizes[idx - 1].sizeInches + 10;
    } else {
      return pizzaSizes[idx + 1].sizeInches - 1;
    }
  }

  function removePizza(pizza: Pizza) {
    const newPizzas = pizzaSizes.filter(x => x.sizeInches != pizza.sizeInches);
    setPizzaSizes(newPizzas)
  }

  function setPizzaSize(id: number, newVal: number): void {
    const newPizzas = pizzaSizes.map(x => {
      if (x.id === id) {
        const updatedItem = {
          ...x,
          sizeInches: newVal
        } as Pizza

        return updatedItem;
      }

      return x;
    });

    setPizzaSizes(newPizzas)
  }
  
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3>Toppings</h3>
          <IonButton size='small' onClick={() => setToppings(getToppings())}>Restore Defaults</IonButton>
        </div>
        {toppings.map(t => (
          <IonChip key={t.id}>
            <IonLabel>{t.name}</IonLabel>
            <IonIcon icon={closeCircle} onClick={() => removeTopping(t.id)}></IonIcon>
          </IonChip>
        ))}
        {addingTopping ? <IonList>
          <IonItem>
            <IonInput placeholder="Enter topping..." autofocus ref={newTopping} onKeyDown={handleNewToppingKeyDown}></IonInput>
            <IonButton slot="end" onClick={() => addTopping()}>
              <IonIcon slot="icon-only" icon={add}></IonIcon>
            </IonButton>
            <IonButton slot="end" fill='clear' color="danger" onClick={() => setAddingTopping(false)}>
              <IonIcon slot="icon-only" icon={close}></IonIcon>
            </IonButton>
          </IonItem>
        </IonList>
          : <IonButton style={{ marginBottom: 10 }} size="small" shape='round' onClick={() => setAddingTopping(true)}><IonIcon slot="icon-only" icon={add}></IonIcon></IonButton>
        }
        <IonList style={{ marginTop: 20 }}>
          <IonListHeader>
            <IonLabel>Sizes</IonLabel>
          </IonListHeader>
          {pizzaSizes.map((p, i) => (
            <IonItem key={p.sizeInches}>
              <IonLabel position="stacked">{p.sizeName}</IonLabel>
              <IonRange class="size-picker" ticks={true} snaps={true} min={getMin(i)} max={getMax(i)} value={p.sizeInches} pin={true} pinFormatter={value => `${value} "`} onIonKnobMoveEnd={({ detail }) => setPizzaSize(p.id, detail.value as number)}></IonRange>
              <IonButton slot='end' color="danger" fill='clear' onClick={() => removePizza(p)}>
                <IonIcon slot="icon-only" icon={close}></IonIcon>
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </>
  );
}

export default Settings;