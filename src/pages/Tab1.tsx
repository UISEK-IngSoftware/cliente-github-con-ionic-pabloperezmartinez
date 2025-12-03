import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Tab1.css';
import RepoItem from '../components/RepoItem';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <RepoItem
            name="android-project"
            imageUrl="https://cdn.worldvectorlogo.com/logos/android-6.svg"
          />
          <RepoItem
            name="ios-project"
            imageUrl="https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg"
          />
          <RepoItem
            name="ionic-project"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGBvwDpkM6XjnQ1dn-pMGSERfNX9Yr8PxNg&s"
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
