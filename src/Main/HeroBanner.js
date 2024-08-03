import React from "react";
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
];
class MyGallery extends React.Component {
    render() {
        return <ImageGallery items={images}
                             lazyLoad={true} // Enable lazy loading
                             showThumbnails={true} // Optionally show thumbnails
                             showFullscreenButton={true} // Optionally show fullscreen button
                             autoPlay={true} // Optionally enable autoplay
                             slideDuration={1000} // Optionally set slide duration
                             slideInterval={4000} // Optionally set slide interval
                             useTranslate3D={true}
                             showBullets={true}
        />;
    }
}
const HeroBanner =()=>{
    return (
        <>
            <MyGallery/>
            <p>This is a Hero Banner</p>
        </>
    )
}
export default HeroBanner;
