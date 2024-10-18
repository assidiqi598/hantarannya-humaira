import { FC } from "react";
import cn from "classnames";

interface ITextInput {
  id: string;
  value: string;
  onChange: Function;
  additionalClassNames?: Array<string>;
}

const TextInput: FC<ITextInput> = ({
  id,
  value = "",
  onChange = () => {},
  additionalClassNames = [],
}) => {
  return (
    <input
      id={`${id}`}
      value={value}
      className={cn(
        "p-2 rounded-xl focus:outline-pink-600",
        additionalClassNames
      )}
      type="text"
      onChange={(e) => onChange(e)}
    />
  );
};

export default TextInput;
