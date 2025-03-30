import styles from './header.module.css'
import JCLogo from '../../assets/jc_logo_v2.svg'
import crown from '../../assets/crown.svg'
import searchIcon from '../../assets/ic_search.svg'
import voiceSearchIcon from '../../assets/voice-search.svg'
import JioIcon from '../../assets/jio-logo.svg'
import Show from '../../components/show/Show';

import { useState, useEffect } from 'react';

const Header = (props) => {
  let navLinks = ["Home", "Sports", "Movies", "TV Shows", "More"];
  let [searchTitle, setSearchTitle] = useState("");
  let [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (!props.movies) return; // Prevent errors if movies is undefined

    if (searchTitle.trim() === "") {
      setFilteredMovies([]); // Clear results when search is empty
    } else {
      let filterMovies = props.movies.filter((movie) =>
        movie.name.toUpperCase().includes(searchTitle.toUpperCase()) // ✅ FIXED
      );
      setFilteredMovies(filterMovies);
    }
  }, [searchTitle, props.movies]);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <div className={styles.logo}>
            <img src={JCLogo} alt='logo' />
            <div className={styles.premium}>
              <img src={crown} alt="image" />
              <p>Go Premium</p>
            </div>
          </div>

          <ul className={styles.navLinks}>
            {navLinks.map((link, index) => (
              <li key={index} className={styles.navLink}>{link}</li>
            ))}
          </ul>
        </nav>

        <div className={styles.search}>
          <div className={styles.searchBox}>
            <div className={styles.headerIcon}>
              <img src={searchIcon} alt="Icon" />
            </div>
            <input
              type="text"
              onChange={(event) => setSearchTitle(event.target.value)}
              className={styles.searchInput}
              placeholder='Movies, Shows, and more'
            />
            <div className={styles.headerIcon}>
              <img src={voiceSearchIcon} alt="Icon" />
            </div>
          </div>
          <img className={styles.usericon} src={JioIcon} alt="" />
        </div>
      </header>

      {filteredMovies.length > 0 && (
        <div className={styles.searchResults}>
          {filteredMovies.map((movie, index) => (
            <Show key={index} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
