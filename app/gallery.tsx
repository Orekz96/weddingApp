import { useEffect, useState } from "react";
import { Image, View, StyleSheet, ScrollView } from "react-native";

import Container from "../components/Container";
import Header from "../components/Header";

import { db } from "../services/firebase";

import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default function Gallery(){

  const [photos,setPhotos] = useState<any[]>([])

  useEffect(()=>{

    const q = query(
      collection(db,"photos"),
      orderBy("createdAt","desc")
    )

    const unsubscribe = onSnapshot(q,(snapshot)=>{

      const photoList:any[] = []

      snapshot.forEach((doc)=>{
        photoList.push({
          id:doc.id,
          ...doc.data()
        })
      })

      setPhotos(photoList)

    })

    return unsubscribe

  },[])

  return(

    <Container>

      <Header title="Wedding Gallery" />

      <ScrollView contentContainerStyle={styles.grid}>

        {photos.map((photo)=>(
          <Image
            key={photo.id}
            source={{uri:photo.imageUrl}}
            style={styles.image}
          />
        ))}

      </ScrollView>

    </Container>

  )
}

const styles = StyleSheet.create({

  grid:{
    flexDirection:"row",
    flexWrap:"wrap",
    gap:10
  },

  image:{
    width:"48%",
    height:150,
    borderRadius:15
  }

})