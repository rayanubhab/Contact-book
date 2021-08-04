//TODO: DONE Export the Footer
import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';


const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center pt-3 pb-2 mt-5 fixed-bottom">
      Made with <FavoriteIcon color="secondary"/> by Anubhab
    </footer>
  );
};

export default Footer;
