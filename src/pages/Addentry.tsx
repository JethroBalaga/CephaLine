import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonDatetime,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonRange,
    IonIcon,
    IonToast
  } from '@ionic/react';
  
  import { happy, sad, ellipsisHorizontal } from 'ionicons/icons';
  import { useState } from 'react';
  
  const AddEntry: React.FC = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date().toISOString());
    const [category, setCategory] = useState('');
    const [mood, setMood] = useState(3);
    const [entry, setEntry] = useState('');
    const [showToast, setShowToast] = useState(false);
  
    const handleSubmit = () => {
      if (!title || !entry) {
        alert('Please fill in the title and entry.');
        return;
      }
  
      // Save entry logic goes here (API call or local storage)
      console.log({
        title,
        date,
        category,
        mood,
        entry
      });
  
      // Reset form
      setTitle('');
      setDate(new Date().toISOString());
      setCategory('');
      setMood(3);
      setEntry('');
      setShowToast(true);
    };
  
    return (
      <IonPage>
        <IonHeader translucent>
          <IonToolbar color="primary">
            <IonTitle>✍️ New Journal Entry</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Title</IonLabel>
            <IonInput value={title} onIonChange={(e) => setTitle(e.detail.value!)} />
          </IonItem>
  
          <IonItem>
            <IonLabel>Date</IonLabel>
            <IonDatetime
            display-format="MMM DD, YYYY"
            value={date}
            onIonChange={(e: CustomEvent) => {
                const newValue = e.detail.value;
                if (newValue) setDate(newValue);
            }}
          />
            
          </IonItem>
  
          <IonItem>
            <IonLabel>Category</IonLabel>
            <IonSelect placeholder="Select One" value={category} onIonChange={(e) => setCategory(e.detail.value!)}>
              <IonSelectOption value="bug">🐛 Bug</IonSelectOption>
              <IonSelectOption value="idea">💡 Idea</IonSelectOption>
              <IonSelectOption value="win">🚀 Win</IonSelectOption>
              <IonSelectOption value="note">📝 Note</IonSelectOption>
            </IonSelect>
          </IonItem>
  
          <IonItem>
            <IonLabel>Mood</IonLabel>
            <IonRange
              min={1}
              max={5}
              step={1}
              snaps
              value={mood}
              onIonChange={(e) => setMood(e.detail.value as number)}
            >
              <IonIcon slot="start" icon={sad} />
              <IonIcon slot="end" icon={happy} />
            </IonRange>
          </IonItem>
  
          <IonItem>
            <IonLabel position="floating">Your Journal Entry</IonLabel>
            <IonTextarea
              rows={6}
              value={entry}
              onIonChange={(e) => setEntry(e.detail.value!)}
            />
          </IonItem>
  
          <IonButton expand="block" color="tertiary" onClick={handleSubmit} className="ion-margin-top">
            ✅ Save Entry
          </IonButton>
  
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Entry saved successfully!"
            duration={2000}
            color="success"
          />
        </IonContent>
      </IonPage>
    );
  };
  
  export default AddEntry;
  