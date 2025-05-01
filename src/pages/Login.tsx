import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonLabel } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Dummy logic: redirect if email/password match dummy values
    if (email === 'test@example.com' && password === 'password') {
      alert('Login successful!');
      history.push('/home'); // Replace with your actual route
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
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

        <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
        <IonButton fill="clear" onClick={() => history.push('/register')}>Don't have an account? Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
