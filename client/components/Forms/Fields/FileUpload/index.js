import { FilePond, registerPlugin } from 'react-filepond';
import { StyledImageUpload } from './styled';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImagePreview);

const FileUpload = ({ files, setFiles }) => {
  const uploadFile = async (e) => {
    const data = new FormData();
    data.append('file', e[0].file);
    data.append('upload_preset', 'marketplace');

    // const res = await fetch('https://api.cloudinary.com/v1_1/dtnfsayor/image/upload', {
    //   method: 'POST',
    //   body: data,
    // });

    // const fileId = await res.json();

    // setFiles({
    //   image: fileId.secure_url,
    // });
  };

  return (
    <StyledImageUpload>
      <FilePond
        onupdatefiles={uploadFile}
        files={files}
        allowMultiple={true}
        maxFiles={6}
        name="files"
        labelIdle='Drag & Drop your photos or <span class="filepond--label-action">Browse</span>'
      />
    </StyledImageUpload>
  );
};

export default FileUpload;
