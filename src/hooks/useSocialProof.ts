import { useState, useEffect } from 'react';
import { SocialProofNotification } from '../types';

const SOCIAL_PROOF_MESSAGES = [
  { user: 'João S.', prize: 'R$ 30,00' },
  { user: 'Ana P.', prize: 'um Apple Watch! 🎁' },
  { user: 'Carlos M.', prize: 'R$ 30,00' },
  { user: 'Maria L.', prize: 'o Apple Watch! 🏆' },
  { user: 'Pedro K.', prize: 'R$ 30,00' },
  { user: 'Julia R.', prize: 'um Apple Watch Series 9! ⌚' },
  { user: 'Rafael T.', prize: 'algo especial! ✨' },
  { user: 'Camila B.', prize: 'acabou de raspar 3 iguais!' },
];

export const useSocialProof = () => {
  const [notifications, setNotifications] = useState<SocialProofNotification[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const message = SOCIAL_PROOF_MESSAGES[currentIndex];
      const notification: SocialProofNotification = {
        id: `notif_${Date.now()}`,
        user: message.user,
        prize: message.prize,
        timestamp: new Date()
      };

      setNotifications(prev => [notification, ...prev.slice(0, 2)]);
      setCurrentIndex((prev) => (prev + 1) % SOCIAL_PROOF_MESSAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return notifications;
};