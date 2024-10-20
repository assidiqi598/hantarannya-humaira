import { FC, ReactNode } from "react";

interface ISelect {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  items?: Array<any>;
  propKey?: string;
  value?: string;
  children?: ReactNode;
  onChange(value: string): void;
}

const Select: FC<ISelect> = ({
  items = [],
  propKey,
  value,
  children,
  onChange,
}) => {
  return (
    <select
      name="type-selection"
      id="type-selection"
      value={value}
      className="bg-pink-200 px-3 py-2 rounded-xl focus:outline-none cursor-pointer"
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">-</option>
      {items?.length > 0 &&
        propKey &&
        items.map((it) => (
          <option
            key={`${it[propKey]}`}
            id={`opt-choosing-${it[propKey]}`}
            value={it[propKey]}
          >
            {it[propKey]}
          </option>
        ))}
      {children}
    </select>
  );
};

export default Select;
