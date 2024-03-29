type Aspects =
  | "4:3"
  | "16:9"
  | "16:10"
  | "2.35:1"
  | "1.85:1"
  | "21:9"
  | "3:2"
  | "5:4"
  | "3:1"
  | "4:1"
  | "1:1"
  | "1:2"
  | "18:9"
  | "19:9"
  | "20:9"
  | "19.5:9"
  | "18.5:9"
  | "18.7:9"
  | "22.5:9"
  | "4/3"
  | "16/9"
  | "16/10"
  | "2.35/1"
  | "1.85/1"
  | "21/9"
  | "3/2"
  | "5/4"
  | "3/1"
  | "4/1"
  | "1/1"
  | "1/2"
  | "18/9"
  | "19/9"
  | "20/9"
  | "19.5/9"
  | "18.5/9"
  | "18.7/9"
  | "22.5/9"
  | string

export default function aspectRatio(width: number, aspectRatio: Aspects, precision: number = 2): number {
  const [aspectWidth, aspectHeight] = aspectRatio.split(/:|\//).map(Number)
  return parseFloat(((width * aspectHeight) / aspectWidth).toFixed(precision))
}
