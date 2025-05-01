import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonLabel } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegister = () => {
    // Dummy register logic
    alert('Registered successfully!');
    history.push('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)} type="email" />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput value={password} onIonChange={e => setPassword(e.detail.value!)} type="password" />
        </IonItem>

        <IonButton expand="block" onClick={handleRegister}>Register</IonButton>
        <IonButton fill="clear" onClick={() => history.push('/login')}>Already have an account? Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;
