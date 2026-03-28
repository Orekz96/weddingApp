import { useState } from "react";
import { View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Container from "../components/Container";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";

import { storage, db } from "../services/firebase";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

export default function Upload() {

  const [image, setImage] = useState<string | null>(null)

  const pickImage = async () => {

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 0.7
    });

    console.log("PICK RESULT:", result);

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  }

  const uploadImage = async () => {

  if (!image) return;

  try {

    let blob;

    if (image.startsWith("data:")) {
      // web base64 image
      blob = await (await fetch(image)).blob();
    } else {
      const response = await fetch(image);
      blob = await response.blob();
    }

    const filename = Date.now();

    const storageRef = ref(storage, `weddingPhotos/${filename}.jpg`);

    await uploadBytes(storageRef, blob);

    const downloadURL = await getDownloadURL(storageRef);

    await addDoc(collection(db, "photos"), {
      imageUrl: downloadURL,
      createdAt: Date.now(),
    });

    console.log("UPLOAD SUCCESS:", downloadURL);

    setImage(null);

  } catch (error) {
    console.log("UPLOAD ERROR:", error);
  }
};

  return (
    <Container>

      <Header title="Upload Wedding Photo" />

      {image && (
        <Image
          source={{uri:image}}
          style={{
            width:"100%",
            height:250,
            borderRadius:20,
            marginBottom: 10
          }}
        />
      )}

      <PrimaryButton title="Select Photo" onPress={pickImage} />

      <PrimaryButton title="Upload Photo" onPress={uploadImage} />

    </Container>
  )
}