"use client"
import MasonryCard from "./MasonryCard"
import CenterImage from "./CenterImage"

const ImageGallerySections = () => {
  return (
    <section className="relative w-full min-h-screen bg-white py-20">
      <div className="relative z-10 w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">

          <div className="left-col space-y-4">
            <MasonryCard
              src="/calming-interior-design.jpg"
              alt="Green textured surface"
              height="h-48"
            />
            <MasonryCard
              src="/calming-wellness-imagery.jpg"
              alt="Woman in meditation"
              height="h-64"
            />
          </div>


          <div className="center-col space-y-4">
            <MasonryCard
              src="/peaceful-wellness-background.jpg"
              alt="Skin texture close-up"
              height="h-32"
            />
            <CenterImage
              src="/serene-nature-landscape.png"
              alt="Orange striped pattern"
              height="20rem"
            />
            <MasonryCard
              src="/mindful-living-room.jpg"
              alt="Abstract green surface"
              height="h-40"
            />
          </div>


          <div className="right-col space-y-4">
            <MasonryCard
              src="/mindful-living-room.jpg"
              alt="Woman with glasses"
              height="h-56"
            />
            <MasonryCard
              src="/peaceful-wellness-background.jpg"
              alt="Wooden texture"
              height="h-48"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageGallerySections
