import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

async function saveConfirmation(name) {
    try {
        await addDoc(collection(db, "confirmations"), { name, timestamp: new Date() });
        alert("Confirmação salva com sucesso!");
    } catch (error) {
        console.error("Erro ao salvar a confirmação: ", error);
        alert("Erro ao salvar a confirmação.");
    }
}

export default saveConfirmation;