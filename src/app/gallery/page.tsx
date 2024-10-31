import types from "@/data/types.json";
import Type from "./components/type";

export default function Gallery() {
  return (
    <div className="overflow-hidden mt-6 m-3 lg:m-8 animate-fadeup">
      <h1>Gallery</h1>
      {types.map((type) => (
        <Type
          key={type.type}
          type={type.type}
          themes={type.themes}
          maxTotal={type.maxTotal}
        />
      ))}
    </div>
  );
}
