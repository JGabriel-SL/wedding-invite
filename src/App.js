import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [showInvitation, setShowInvitation] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenInvitation = () => {
    setShowInvitation(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          <h3 class="invite-title">Adrian e Jordânia</h3>

          <div class="invite-container">
            <span class="invite-text invite-text-color">
              Fevereiro
            </span>
            <div class="invite-detail invite-text-color">
              <span class="invite-detail-container">
                SÁBADO
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
            <span class="invite-text-color invite-container-background">Maison C'est Si Bon - Aquiraz</span>
          </div>
          <div class="invite-buttons">
            <div class="invite-container-button">
              <button class="invite-button invite-button-color" onClick={openModal}>
                <img src="./pix2.png" class="icon-img" />
              </button>
              <span class="invite-text-color text-detail">Presente Pix</span>
            </div>

            <div class="invite-container-button">
              <button class="invite-button invite-button-color" onClick={openModal}
              >
                <img src="./check.png" class="icon-img" />
              </button>
              <span class="invite-text-color text-detail">Confirmar Presença</span>
            </div>

            <div class="invite-container-button">
            <a href='https://maps.app.goo.gl/i9bUs4eJc1qrFGCHA'>
              <button class="invite-button invite-button-color"
              >
                <img src="./location.png" class="icon-img" />
              </button>
              </a>
              <span class="invite-text-color text-detail">Localização</span>
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
              <h2 className="modal-title">Colabore com nossa Lua de Mel</h2>
              <p>
                Se você deseja nos presentear de forma prática e rápida, disponibilizamos a
                opção de transferência via Pix. Sua contribuição será recebida com muito
                carinho e ajudará a tornar este momento ainda mais especial.
              </p>
              <p>
                <strong>Chave Pix:</strong> 998.360.253-91 (CPF)
              </p>
              <p>Ou escaneie o QR Code abaixo:</p>
              <div className="qrcode-container">
                <img src="./pix.jpeg" alt="QR Code para pagamento" />
              </div>
              <div>
                <strong>Jordânia Bezerra de Souza</strong>
                <p><strong>Banco Santander</strong></p> 
              </div>
              <p>
                Agradecemos de coração por sua generosidade e por fazer parte do nosso
                grande dia. ❤️
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
