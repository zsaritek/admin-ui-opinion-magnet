import { useContext, useState, useEffect } from 'react';
import { AuthContext } from "../context/auth.context";
import profileService from '../services/profile.service';


function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(user.image)
  }, [])

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      if (!image) {
        console.log("Please select an image");
        return;
      }
      //console.log(image)
      const requestBody = new FormData();
      requestBody.append("image", image);
      console.log(requestBody.get("image"));
      console.log(requestBody)
      const response = await profileService.uploadImage(requestBody);

      // Assuming your server responds with the image URL after successful upload
      setUrl(response.data);
      console.log(user)
    } catch (error) {
      console.error(error);
    }
  };

  const handleImage = (e) => {

    setImage(e.target.files[0])
  }


  return (
    <div>
      {url && <img src={url} alt="Profile Image" />}
      <form onSubmit={handleUpload}>
        <label>image:</label>
        <input
          type="file"
          name="image"
          onChange={handleImage}
        />

        <button type="submit">Upload Profile image</button>
      </form>
    </div>
  )
}

export default ProfilePage