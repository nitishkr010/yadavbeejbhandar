import { useState } from "react";

const CropDoctor = () => {
  const [image, setImage] = useState(null);

  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-800">
            🌾 Crop Doctor AI
          </h2>

          <p className="text-gray-600 mt-3">
            Upload crop image and identify disease instantly
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">

          <input
            type="file"
            className="border p-3 rounded-lg w-full"
            onChange={(e) =>
              setImage(URL.createObjectURL(e.target.files[0]))
            }
          />

          {image && (
            <img
              src={image}
              alt="crop"
              className="w-64 h-64 object-cover rounded-xl mt-6 mx-auto"
            />
          )}

          <button
            className="mt-6 w-full bg-green-700 text-white py-3 rounded-lg"
          >
            Detect Disease
          </button>

          <div className="mt-8 bg-gray-100 p-5 rounded-xl">

            <h3 className="text-xl font-bold">
              Disease Result
            </h3>

            <p className="mt-2">
              Disease Name: Wheat Rust
            </p>

            <p>
              Recommended Medicine:
              Propiconazole 25% EC
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CropDoctor;