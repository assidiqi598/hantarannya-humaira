export const customEncodeURI = (
  type: string = '',
  theme: string = '',
  image: string = '',
  desc?: string,
  target?: string,
  href?: string
) => {
  return `${encodeURI(
    `${type}_${theme}_${image}_${prepareEncode(
      desc
    )}_${prepareEncode(target)}_${prepareEncode(href)}`
  )}`;
};

const prepareEncode = (str: string = ""): string => {
  return str
    .replace(/\//g, "sl4sh")
    .replace(/_/g, "und325c023")
    .replace(/:/g, "c0L0n");
};
