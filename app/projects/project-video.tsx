"use client"
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
export const ProjectVideo:React.FC<{video:string}> = ({video}) => {
  return (
    <>
      <LiteYouTubeEmbed
        title="Live demo"
        poster="maxresdefault"
        id={video}
    />    </>
  )
}