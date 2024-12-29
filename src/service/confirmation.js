import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

async function saveConfirmation(name, language) {
    try {
        await addDoc(collection(db, "confirmations"), { name, timestamp: new Date() });
        if (language == 'pt') {
            alert("Confirmação salva com sucesso!");
        } else {
            alert("¡Confirmación guardada con éxito!");
        }
    } catch (error) {
        console.error("Erro ao salvar a confirmação: ", error);
        if (language == 'pt') {
            alert("Erro ao salvar a confirmação.");
        } else {
            alert("Error al guardar la confirmación.");
        }
    }
}

export default saveConfirmation;