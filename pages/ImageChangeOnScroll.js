import React, {useEffect, useState} from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {

  const [currentSpeakerId, setCurrentSpeakerId] =  useState()

  useEffect(()=>{
    window.document.title = currentSpeakerId;
  },[currentSpeakerId])

  return (
    <div>
      {[187, 823, 1124, 1269, 1530].map((speakerId) => {
        return (
          <div key={speakerId}
            onMouseOver={()=>{
              setCurrentSpeakerId(speakerId)
          }}>
            <ImageToggleOnScroll
              primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
              secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
