import React, {useState, useEffect} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import './styles.css';
import './response.css';

import {User as UserInterface} from '../../../interfaces';
import api from '../../../services/api';
import User from '../../../components/User';
import Loading from '../../../components/Loading';
import ClosedVoting from './components/Closed/closed';
import Success from './components/Success/success';

function Voting() {
  const [captcha, setCaptcha] = useState<string | null>('');
  const [isOut, setIsOut] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [waiting, setWaiting] = useState<boolean>(false);
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [
    selected,
    setSelected,
  ] = useState<UserInterface | undefined>(undefined);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await api.get('/poll');
      const participants: UserInterface[] = response.data;

      setIsOut(participants.length < 3 || participants.length > 4);
      setUsers(participants);
      setLoading(false);
    })();
  }, []);

  const handleParticipant = (user: UserInterface) => {
    setSelected(user);
  };

  const handleVote = async () => {
    if (selected && captcha) {
      await api.put('/users', {id: selected?._id, clientResponse: captcha});
      setWaiting(true);
      setSelected(undefined);
      setTimeout(() => setWaiting(false), 2500);
    }
  };

  const handleCaptcha = (value: string | null) => setCaptcha(value);

  const reCaptchaSecret = process.env.REACT_APP_SECRET || '';

  return (
    <section className="voting-background">
      {
          !isOut ? (
            waiting ?
            (
              <Success />
            ) :
            (
              <div className="voting-container">
                <h1 className="voting-title" style={{color: '#F6AE2D'}}>
                QUEM DEVE VENCER A GRANJA?
                </h1>

                <div className={`voting-grid grid-${users.length}`}>
                  {
                    users.map((user) => (
                      <User
                        user={user}
                        onClick={handleParticipant}
                        key={user._id}
                        showPoints={false}
                        disable={false}
                        mode="voting"
                        selectedUser={selected}
                      />
                    ))
                  }
                </div>

                <div className="recaptcha">
                  <ReCAPTCHA
                    sitekey={reCaptchaSecret}
                    onChange={handleCaptcha}
                  />
                </div>

                <button
                  type="submit"
                  className="voting-button"
                  onClick={handleVote}
                  style={{backgroundColor: '#F6AE2D'}}
                >
                Votar
                </button>
              </div>
            )
              ) :
              (
            <ClosedVoting />
              )
      }
      <Loading open={loading}/>
    </section>
  );
};

export default Voting;
