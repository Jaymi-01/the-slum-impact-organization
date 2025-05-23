import React, { useState, useEffect } from "react";
import image1 from "../images/tso1/image1.jpg";
import image2 from "../images/tso1/image2.jpg";
import image3 from "../images/tso1/image3.jpg";
import image4 from "../images/tso1/image4.jpg";
import image5 from "../images/tso1/image5.jpg";
import image6 from "../images/tso1/image6.jpg";
import image7 from "../images/tso1/image7.jpg";
import image8 from "../images/tso1/image8.jpg";
import image9 from "../images/tso1/image9.jpg";
import image10 from "../images/tso1/image10.jpg";
import image11 from "../images/tso1/image11.jpg";
import image12 from "../images/tso2/image1.jpg";
import image13 from "../images/tso2/image2.jpg";
import image14 from "../images/tso2/image3.jpg";
import image15 from "../images/tso2/image4.jpg";
import image16 from "../images/tso2/image5.jpg";
import image17 from "../images/tso2/image6.jpg";
import image18 from "../images/tso2/image7.jpg";
import image19 from "../images/tso2/image8.jpg";
import image20 from "../images/tso2/image9.jpg";
import image21 from "../images/tso2/image10.jpg";
import image22 from "../images/tso2/image11.jpg";

const Projects = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const tso1 = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];
  const tso2 = [
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
  ];

  // Handle thumbnail click to change selected image
  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  // Autoplay logic with useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === tso1.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [tso1.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === tso2.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [tso2.length]);

  return (
    <div className="max-w-full mt-20 mx-auto px-4 md:px-6 lg:px-8">
      <div>
        <h1 className="text-3xl font-bold text-center md:text-2xl md:text-start">
          All Our Past Projects
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
          tempora debitis sequi doloremque nobis cumque suscipit deserunt sit
          distinctio perferendis.
        </p>
      </div>

      <div className="mt-10">
        <div>
          <h3 className="font-semibold">The Stretch Out 1.0</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse ullam
            id inventore, quos vitae quod.
          </p>
        </div>
        {/* Main Image */}
        <div className="mb-4">
          <img
            src={tso1[selectedImageIndex]}
            alt={`Selected Image ${selectedImageIndex + 1}`}
            className="w-full h-50 md:h-80 object-container rounded-lg shadow-lg"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-1 py-2">
          {tso1.map((image, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`cursor-pointer transition-transform transform ${
                index === selectedImageIndex ? "scale-110" : "scale-100"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-100 h-20 md:w-25 md:h-25 rounded-md border-2 border-transparent hover:border-gray-500"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div>
          <h3 className="font-semibold">The Stretch Out 2.0</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse ullam
            id inventore, quos vitae quod.
          </p>
        </div>
        {/* Main Image */}
        <div className="mb-4">
          <img
            src={tso2[selectedImageIndex]}
            alt={`Selected Image ${selectedImageIndex + 1}`}
            className="w-full h-50 md:h-80 object-container rounded-lg shadow-lg"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-1 py-2">
          {tso2.map((image, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`cursor-pointer transition-transform transform ${
                index === selectedImageIndex ? "scale-110" : "scale-100"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-100 h-20 md:w-25 md:h-25 rounded-md border-2 border-transparent hover:border-gray-500"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div>
          <h3 className="font-semibold">The Stretch Out 3.0</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse ullam
            id inventore, quos vitae quod.
          </p>
        </div>
        {/* Main Image */}
        <div className="mb-4">
          <img
            src={tso1[selectedImageIndex]}
            alt={`Selected Image ${selectedImageIndex + 1}`}
            className="w-full h-50 md:h-80 object-container rounded-lg shadow-lg"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-1 py-2">
          {tso1.map((image, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`cursor-pointer transition-transform transform ${
                index === selectedImageIndex ? "scale-110" : "scale-100"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-100 h-20 md:w-25 md:h-25 rounded-md border-2 border-transparent hover:border-gray-500"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div>
          <h3 className="font-semibold">The Stretch Out 4.0</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse ullam
            id inventore, quos vitae quod.
          </p>
        </div>
        {/* Main Image */}
        <div className="mb-4">
          <img
            src={tso1[selectedImageIndex]}
            alt={`Selected Image ${selectedImageIndex + 1}`}
            className="w-full h-50 md:h-80 object-container rounded-lg shadow-lg"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-1 py-2">
          {tso1.map((image, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`cursor-pointer transition-transform transform ${
                index === selectedImageIndex ? "scale-110" : "scale-100"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-100 h-20 md:w-25 md:h-25 rounded-md border-2 border-transparent hover:border-gray-500"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div>
          <h3 className="font-semibold">The Stretch Out 5.0</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse ullam
            id inventore, quos vitae quod.
          </p>
        </div>
        {/* Main Image */}
        <div className="mb-4">
          <img
            src={tso1[selectedImageIndex]}
            alt={`Selected Image ${selectedImageIndex + 1}`}
            className="w-full h-50 md:h-80 object-container rounded-lg shadow-lg"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-1 py-2">
          {tso1.map((image, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`cursor-pointer transition-transform transform ${
                index === selectedImageIndex ? "scale-110" : "scale-100"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-100 h-20 md:w-25 md:h-25 rounded-md border-2 border-transparent hover:border-gray-500"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div>
          <h3 className="font-semibold">The Stretch Out 6.0</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse ullam
            id inventore, quos vitae quod.
          </p>
        </div>
        {/* Main Image */}
        <div className="mb-4">
          <img
            src={tso1[selectedImageIndex]}
            alt={`Selected Image ${selectedImageIndex + 1}`}
            className="w-full h-50 md:h-80 object-container rounded-lg shadow-lg"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-1 py-2">
          {tso1.map((image, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`cursor-pointer transition-transform transform ${
                index === selectedImageIndex ? "scale-110" : "scale-100"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-100 h-20 md:w-25 md:h-25 rounded-md border-2 border-transparent hover:border-gray-500"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div>
          <h3 className="font-semibold">The Stretch Out 7.0</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse ullam
            id inventore, quos vitae quod.
          </p>
        </div>
        {/* Main Image */}
        <div className="mb-4">
          <img
            src={tso1[selectedImageIndex]}
            alt={`Selected Image ${selectedImageIndex + 1}`}
            className="w-full h-50 md:h-80 object-container rounded-lg shadow-lg"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-1 py-2">
          {tso1.map((image, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`cursor-pointer transition-transform transform ${
                index === selectedImageIndex ? "scale-110" : "scale-100"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-100 h-20 md:w-25 md:h-25 rounded-md border-2 border-transparent hover:border-gray-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
