import {
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
  frame7,
  frame8,
  frame9,
  frame10,
  frame11,
  frame12,
} from "@/assets"
const images = [
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
  frame7,
  frame8,
  frame9,
  frame10,
  frame11,
  frame12,
]

export default function ImageGallery() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 py-20 ">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg opacity-0 animate-[fade-up_0.4s_ease-out_forwards]"
            style={{ animationDelay: `${index * 0.2}s` }} // Delayed fade-up effect
          >
            <img
              src={src.src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
