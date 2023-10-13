export interface Program {
  id: number;
  name: string;
  thumnail: Thumnail;
}

export interface Thumnail {
  id: number;
  url: string;
  alt: string;
}
