import React, { useState } from 'react';
import './App.css';
import saveConfirmation from './service/confirmation.js';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const translations = {
  pt: {
    invitationTitle: "Abrir Convite",
    coupleName: "Adrian e Jordânia",
    date: "Fevereiro",
    day: "SÁBADO",
    local: "Local",
    locationDetails: "Maison C'est Si Bon - Aquiraz",
    gift: "Presente",
    confirmPresence: "Confirmar",
    presence: "Presença",
    see: "Ver",
    location: "Localização",
    dressCode: "Dress Code",
    menDress: "Recomendamos roupas leves e elegantes, como calças de linho ou chino, combinadas com camisas claras. Evitem ternos formais, gravatas e o branco.",
    womenDress: "Sugerimos roupas em tons claros, leves e elegantes, ideais para um casamento na praia. Evitem o branco, que está reservado exclusivamente para a noiva.",
    honeyMoon: "Colabore com nossa Lua de Mel",
    modalTextPix: " Se você deseja nos presentear de forma prática e rápida, disponibilizamos a opção de transferência via Pix. Sua contribuição será recebida com muito carinho e ajudará a tornar este momento ainda mais especial.",
    pixKey: "Chave Pix",
    pixKey2: "Chave Aleatoria",
    qrCode: "Ou escaneie o QR Code abaixo:",
    thanks: " Agradecemos de coração por sua generosidade e por fazer parte do nosso grande dia. ❤️",
    men: "Homens",
    women: "Mulheres",
    dressCodeTitle: "Dress Code do Evento",
    yourName: "Escreva seu nome",
    titleConfirmePresence: "Confirme sua presença",
    name: "Nome:",
  },
  es: {
    invitationTitle: "Abrir Invitación",
    coupleName: "Adrián y Jordania",
    date: "Febrero",
    day: "SÁBADO",
    local: "Lugar",
    locationDetails: "Maison C'est Si Bon - Aquiraz",
    gift: "Regalo",
    confirmPresence: "Confirmar",
    presence: "Asistencia",
    see: "Ver",
    location: "Ubicación",
    dressCode: "Código de Vestimenta",
    menDress: "Recomendamos ropa ligera y elegante, como pantalones de lino o chino combinados con camisas claras. Eviten trajes formales, corbatas y el blanco.",
    womenDress: "Sugerimos ropa en tonos claros, ligera y elegante, ideal para una boda en la playa. Eviten el blanco, reservado exclusivamente para la novia.",
    honeyMoon: "Colabora con nuestra Luna de Miel",
    modalTextPix: "Si deseas hacernos un regalo de manera práctica y rápida, ponemos a tu disposición la opción de transferencia mediante Pix. Tu contribución será recibida con mucho cariño y ayudará a hacer este momento aún más especial.",
    pixKey: "Clave Pix",
    pixKey2: "Clave Aleatoria",
    qrCode: "O bien, escanea el código QR a continuación:",
    thanks: "Agradecemos de corazón por tu generosidad y por ser parte de nuestro gran día. ❤️",
    men: "Hombres",
    women: "Mujeres",
    dressCodeTitle: "Dress Code del Evento",
    yourName: "Escribe tu nombre",
    titleConfirmePresence: "Confirma tu asistencia",
    name: "Nombre:",
  }
};

const App = () => {
  const [showInvitation, setShowInvitation] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isDressModalOpen, setIsDressModalOpen] = useState(false);
  const [name, setName] = useState('');
   const [language, setLanguage] = useState('pt');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.trim()) {
      await saveConfirmation(name, language);
      setName('');
    } else {
      if (language == 'pt') {
        alert("Por favor, insira um nome.");
      } else {
        alert("Por favor, introduzca un nombre.");
      }
    }

    setIsConfirmModalOpen(false);

  };

  const handleOpenInvitation = () => {
    setShowInvitation(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const openDressModal = () => {
    setIsDressModalOpen(true);
  };

  const closeDressModal = () => {
    setIsDressModalOpen(false);
  };

  const handleLanguageToggle = () => {
    setLanguage((prevLang) => (prevLang === 'pt' ? 'es' : 'pt'));
  };

  const t = translations[language];

  return (
    <div className="App">
       
      {!showInvitation ? (
        <div class="open_invite initial-screen">
          <h3 class="open_invite_title">Open here...</h3>
          <img
            src="./selo.svg"
            alt="Abrir Convite"
            className="open-image"
            onClick={handleOpenInvitation}
          />
        </div>
      ) : (
        <div class="invite">
          <button className="language-toggle" class="language-button" onClick={handleLanguageToggle}>
            <FontAwesomeIcon icon={faLanguage} style={{fontSize: '18px', padding: '0 5px'}} />{language === 'pt' ? 'es' : 'pt'}
          </button>

          <h3 class="invite-title">{t.coupleName}</h3>

          <div class="invite-container">
            <span class="invite-text invite-text-color">
              {t.date}
            </span>
            <div class="invite-detail invite-text-color">
              <span class="invite-detail-container">
                {t.day}
              </span>
              <span class="invite-text">
                08
              </span>
              <span class="invite-detail-container">
                ÀS 16:00
              </span>
            </div>
          </div>
          <div class="invite-container">
            <span class="invite-text-color">Local</span>
            <span class="invite-text-color invite-container-background">{t.locationDetails}</span>
          </div>
          <div class="invite-buttons">
            <div class="invite-container-button">
              <button class="invite-button invite-button-color" onClick={openModal}>
                <img src="./pix2.png" class="icon-img" alt="Presente Pix" />
              </button>
              <span class="invite-text-color text-detail">{t.gift}</span>
              <span class="invite-text-color text-detail">Pix</span>
            </div>

            {/* <div class="invite-container-button">
              <button class="invite-button invite-button-color" onClick={openConfirmModal}
              >
                <img src="./check.png" class="icon-img" alt="Confirmar Presença" />
              </button>
              <span class="invite-text-color text-detail">{t.confirmPresence}</span>
              <span class="invite-text-color text-detail">{t.presence}</span>
            </div> */}

            {/* <div class="invite-container-button">
              <a href='https://maps.app.goo.gl/15PVAxiKqWRzcY9M8'>
                <button class="invite-button invite-button-color"
                >
                  <img src="./location.png" class="icon-img" alt="Localização" />
                </button>
              </a>
              <span class="invite-text-color text-detail">{t.see}</span>
              <span class="invite-text-color text-detail">{t.location}</span>
            </div> */}

            <div class="invite-container-button">
              <button class="invite-button invite-button-color" onClick={openDressModal}
              >
                <img src="./dress.png" class="icon-img" alt="Dress Code" />
              </button>
              <span class="invite-text-color text-detail">Dress</span>
              <span class="invite-text-color text-detail">Code</span>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <button className="close-modal-top" onClick={closeModal}>
                &times;
              </button>
              <h2 className="modal-title">{t.honeyMoon}</h2>
              <p>
                {t.modalTextPix}
              </p>
              <p>
                <strong>{t.pixKey}:</strong> 3dfc915a-f21d-44f9-b91a-78face70cbe5 ({t.pixKey2})
              </p>
              <p>{t.qrCode}</p>
              <div className="qrcode-container">
                <img src="./pix.jpeg" alt="QR Code para pagamento" />
              </div>
              <div>
                <strong>Jordânia Bezerra de Souza</strong>
                <p><strong>Banco Santander</strong></p>
              </div>
              <p style={{marginBottom: '50px'}}>
                {t.thanks}
              </p>
            </div>
          </div>
        </div>
      )}

      {isConfirmModalOpen && (
        <div className="modal-overlay-small" onClick={closeConfirmModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div style={{ margin: '20px', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
                <h1 class="modal-title">{t.titleConfirmePresence}</h1>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label htmlFor="name" class="form-label">{t.name}</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.yourName}
                    class="form-input"
                  />
                  <button
                    type="submit"
                    class="form-button"
                  >
                    Confirmar
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      )}

      {isDressModalOpen && (
        <div className="modal-overlay" onClick={closeConfirmModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <button className="close-modal-top" onClick={closeDressModal}>
                &times;
              </button>
              <h1 class="modal-title">{t.dressCodeTitle}</h1>

              <h3>{t.men}
              </h3>
              <div>
                <p class="modal-text">{t.menDress}</p>
                <img src="./dress-men.jpeg" class="modal-image" />
              </div>

              <h3>{t.women}</h3>
              <div style={{marginBottom: '50px'}}>
                <p class="modal-text">{t.womenDress}</p>
                <img src="./dress-women2.png" class="modal-image" />

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
