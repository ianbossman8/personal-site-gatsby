interface DataObj {
  [key: string]: string
}

export default function encode(data: DataObj): string {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
