// components/SignupModal.js

import {useState} from 'react';
import Modal from 'react-modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';

const SignupModal = ({isOpen,onRequestClose}) => {
  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [termsAccepted,setTermsAccepted] = useState(false);
  const [privacyAccepted,setPrivacyAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({email,username,password,termsAccepted,privacyAccepted});
    onRequestClose(); // Close modal after submission
  };

  const handleGoogleSignup = () => {
    console.log('Google signup initiated');
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={modalStyles}>
      <h2 className="animated-heading">Join the $TMONK Troop!</h2>
      <button type="button" style={styles.googleButton} onClick={handleGoogleSignup}>
        <FontAwesomeIcon icon={faGoogle} style={styles.icon} />
        Continue with Google
      </button>
      <div style={styles.or}>Or</div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <label>
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          I accept the <a href="#">Terms & Conditions</a> and <a href="#">Risk Disclosure</a>
        </label>
        <label>
          <input
            type="checkbox"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
          />
          I acknowledge that my information will be used in accordance with the <a href="#">Privacy Policy</a> and <a href="#">Cookie Policy</a>
        </label>
        <button type="submit" style={styles.submitButton}>Create Account</button>
      </form>
      <div style={styles.signInLink}>
        Have an account? <a href="#">Sign in</a>
      </div>
      <p style={styles.riskWarning}>
        All trading involves risk. Only risk capital you're prepared to lose.
      </p>
    </Modal>
  );
};

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    padding: '20px',
    borderRadius: '10px',
  },
};


const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  googleButton: {
    justifyContent: 'center',
    marginBottom: '10px',
    width: '100%', // Make it full width
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#4285F4', // Google Blue
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
  icon: {
    height: '1rem', // Increase icon size
    marginRight: '0.5rem',// Space between icon and text

  },
  or: {
    textAlign: 'center',
    margin: '10px 0',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  signInLink: {
    textAlign: 'center',
    marginTop: '10px',
  },
  riskWarning: {
    marginTop: '20px',
    fontSize: '12px',
    color: '#999',
    textAlign: 'center',
  },
};


export default SignupModal;
