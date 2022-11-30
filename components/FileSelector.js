import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["mp3"];
const FileSelector = () => {
  const [file, setFile] = useState(null);
  const [filename, setFileName] = useState('');
  const handleChange = (file) => {
    setFile(file);
    setFileName(file[0].name)
  };
  return (
    <div className="fileuploader">
      <h1>Decode the voice with VoiceCue</h1>
      <h3>Find sentiments, tags, entities, actions instantly</h3>
      <FileUploader multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes} />
      <p>{filename}</p>
    </div>
  );
}
export default FileSelector;