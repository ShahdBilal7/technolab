import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import domtoimage from 'dom-to-image';

const PngFile = () => {
  const takeImage = () => {
    const captureElement = document.querySelector("#capture");
    if (!captureElement) {
      console.error("Element with ID 'capture' not found");
      return;
    }
    domtoimage.toPng(captureElement)
      .then((dataUrl) => {
        // Create a download link
        const downloadLink = document.createElement("a");
        downloadLink.href = dataUrl;
        downloadLink.download = "image.png";

        // Append the download link to the document
        document.body.appendChild(downloadLink);

        // Trigger the click event on the download link
        downloadLink.click();

        // Remove the download link from the document
        document.body.removeChild(downloadLink);
      })
      .catch(error => {
        console.error("Error capturing image:", error);
      });
  };
  return (
    <FontAwesomeIcon className="csv" onClick={takeImage} title="Take a screenshot of my cart information." icon="fa-solid fa-camera-retro" />
  )
}

export default PngFile
