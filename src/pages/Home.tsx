import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonSearchbar,
  IonButtons,
  IonIcon
} from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar color="tertiary">
          <IonTitle> Journals</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/profile">
              <IonIcon icon={personCircleOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <div className="welcome-section">
          <h1 color='tertiary'>👋 Welcome back, Jethro!</h1>
          <p>Ready to log today’s coding adventure?</p>
          <IonButton expand="block" routerLink="/addentry" color="tertiary" shape="round">
             Add New Entry
          </IonButton>
        </div>

        <h2 style={{ marginTop: '30px' }}>📓 Recent Journal Entries</h2>

        <IonSearchbar placeholder="Search entries..." />

        <IonCard routerLink="/entry/1" color="light">
          <IonCardHeader>
            <IonCardSubtitle>May 5, 2025</IonCardSubtitle>
            <IonCardTitle>🐛 Fixed login API bug</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Adjusted token validation and updated error messages for failed auth.
          </IonCardContent>
        </IonCard>

        <IonCard routerLink="/entry/2" color="light">
          <IonCardHeader>
            <IonCardSubtitle>May 4, 2025</IonCardSubtitle>
            <IonCardTitle>🛠️ Refactored registration flow</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Simplified backend API call and form validation logic.
          </IonCardContent>
        </IonCard>

        <IonCard routerLink="/entry/3" color="light">
          <IonCardHeader>
            <IonCardSubtitle>May 3, 2025</IonCardSubtitle>
            <IonCardTitle>💡 Idea: Toggle for dark mode</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Thinking of adding a theme switcher in the profile settings.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
