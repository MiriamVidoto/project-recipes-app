import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './style/Profile.css';

function Profile() {
  const history = useHistory();

  const getEmail = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header title="Profile" />
      <p
        data-testid="profile-email"
        className="email-profile"
      >
        {getEmail}
      </p>
      <div className="btns-profile">
        <button
          data-testid="profile-done-btn"
          type="button"
          onClick={ () => history.push('/done-recipes') }
          className="btn-profile"
        >
          Done Recipes

        </button>
        <button
          data-testid="profile-favorite-btn"
          type="button"
          onClick={ () => history.push('/favorite-recipes') }
          className="btn-profile"
        >
          Favorite Recipes
        </button>
        <button
          data-testid="profile-logout-btn"
          type="button"
          onClick={ handleLogout }
          className="btn-profile"
        >
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
