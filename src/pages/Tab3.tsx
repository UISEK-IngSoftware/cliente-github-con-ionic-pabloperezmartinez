import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil de usuario</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <img alt="Silhouette of mountains" 
          src="https://img.a.transfermarkt.technology/portrait/big/55884-1635921417.JPG?lm=1" />
          <IonCardHeader>
            <IonCardTitle>Pablo Pérez Martínez</IonCardTitle>
            <IonCardSubtitle>pabloperezmartinez</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Soy un desarrollador de software apasionado por las tecnologías móviles y web. Me encanta crear aplicaciones que brinden experiencias excepcionales a los usuarios.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
