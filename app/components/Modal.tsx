import { useState } from 'react';

type WalletModalProps = {
  address: string;
  onClose: () => void;
};

const WalletModal: React.FC<WalletModalProps> = ({ address, onClose }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setIsCopied(true);
  };

  return (
    <div className="wallet-modal">
      <div className="wallet-modal-content">
        <div className="address">
          <span>{address}</span>
          <button onClick={handleCopy} disabled={isCopied}>
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <button className="disconnect-button" onClick={onClose}>
          Disconnect
        </button>
      </div>
    </div>
  );
};

export default WalletModal;
