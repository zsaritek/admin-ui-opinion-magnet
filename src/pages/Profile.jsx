import { useContext, useState, useEffect } from 'react';
import { AuthContext } from "../context/auth.context";
import profileService from '../services/profile.service';
import Navbar from '../components/Navbar';
import { SelectedItemContext } from '../context/selectedItem.context';


function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const {profileImage, setProfileImage} = useContext(SelectedItemContext);

  useEffect(() => {
    // setUrl(user.image) 
    setUrl('https://readymadeui.com/profile_2.webp')
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
      setProfileImage(response.data)
      
      console.log(user)
    } catch (error) {
      console.error(error);
    }
  };

  const handleImage = (e) => {

    setImage(e.target.files[0])
  }


  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-20">
        {url && <img src={profileImage} alt="Profile Image" className="w-30 h-30 rounded-full mx-auto" />}
        <form onSubmit={handleUpload} className="max-w-md mx-auto space-y-4 font-[sans-serif] text-[#333] mt-4">
          <div className="font-[sans-serif] max-w-md mx-auto">
            <label className="text-sm text-black mb-2 block">Upload file</label>
            <input type="file"
              className="w-full text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-black rounded"
              onChange={handleImage}
            />
            <p className="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
          </div>
          <button type="submit" className="!mt-8 px-6 py-2 text-sm bg-[#333] text-white rounded hover:bg-[#222]">Upload Profile image</button>
        </form>
      </div>
    </>
  )
}

export default ProfilePage