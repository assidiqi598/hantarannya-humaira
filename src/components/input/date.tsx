import { FC, memo } from "react";
import cn from "classnames";

interface IDateInput {
  id: string;
  value: Date;
  onChange(value: string): void;
  additionalClassNames?: Array<string>;
}

const DateInput: FC<IDateInput> = ({
  id,
  value = new Date(),
  onChange = () => {},
  additionalClassNames = [],
}) => {
  return (
    <div className="relative">
      <input
        id={`${id}`}
        className={cn(
          "p-2 text-pink-600 rounded-xl focus:outline-none cursor-pointer",
          additionalClassNames
        )}
        type="date"
        value={value.toLocaleDateString("af-ZA")}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default memo(DateInput);
