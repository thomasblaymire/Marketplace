// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImagePreview);

// Our app
const FileUpload = ({ files, setFiles }) => (
  <FilePond
    files={files}
    onupdatefiles={setFiles}
    allowMultiple={true}
    maxFiles={5}
    name="files"
    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
  />
);

export default FileUpload;
