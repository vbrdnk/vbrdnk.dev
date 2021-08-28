import React from 'react';
import styles from './SocialLinks.module.scss';

const SocialLinks: React.FC = () => {
  return (
    <ul className={styles.socialLinks}>
      <li>
        <a
          href="https://stackoverflow.com/users/7106331/vbrdnk?tab=profile"
          target="_blank"
          rel="noreferrer"
        >
          stackoverflow
        </a>
      </li>
      <li>
        <a href="https://github.com/vbrdnk" target="_blank" rel="noreferrer">
          github
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/vladyslav-burdeniuk/" target="_blank" rel="noreferrer">
          linkedin
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
