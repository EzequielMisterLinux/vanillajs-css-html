import LoadContent from './src/components/ContentLoader'
import googleFonts from 'google-fonts';
import '/node_modules/ionicons/dist/ionicons/ionicons.esm.js'

const fonts = {
    Poppins: true, 
    Roboto: [400, 700] 
  };
  
  
  googleFonts.add(fonts);
  
  document.body.style.fontFamily = "'Poppins', sans-serif";

document.addEventListener('DOMContentLoaded', LoadContent())