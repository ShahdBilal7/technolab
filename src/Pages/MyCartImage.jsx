import { useParams } from "../Constants";

const MyCartImage = () => {
  const {dataUrl} = useParams();
  const openImageInNewTab = () => {
  };
  return (
    <div>
    {dataUrl && (
      <div className="container myCart">
      <div className='down'>
      <a  href={decodeURIComponent(dataUrl)} download="myCart.png">
          Download Image
        </a>
      </div>
        
        <div id="capturedImageContainer" >
        <img src={decodeURIComponent(dataUrl)} alt="Captured Image" />
      </div>
      </div>
    )}
  </div>
  
  );
};

export default MyCartImage