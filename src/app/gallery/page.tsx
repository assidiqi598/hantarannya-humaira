import types from "@/data/types.json";
import Type from "./components/type";

export default function Gallery() {
  return (
    <div className="w-svw h-svh mt-6 p-3 portrait:bg-main-bg-vertical bg-no-repeat bg-cover landscape:bg-main-bg-horizontal animate-fadeup">
      <div className="overflow-y-auto">
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
    </div>
  );
}
