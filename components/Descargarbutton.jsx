import style from '../src/styles/Main.module.css'

const Descargarbutton = ({ imageName }) => {
    const handleDownload = () => {
      const imageUrl = '/invitacion.jpg'; // Ruta de la imagen en la carpeta /public
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = imageName;
      link.click();
    };
  
    return (
      <button className={style.button_descargar_img} onClick={handleDownload}>Descargar imagen</button>
    );
  };
  
  export default Descargarbutton;