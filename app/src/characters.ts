import img1 from './assets/characters/1.png';
import img2 from './assets/characters/2.png';
import img3 from './assets/characters/3.png';
import img4 from './assets/characters/4.png';
import img5 from './assets/characters/5.png';
import img6 from './assets/characters/6.png';
import photo1 from './assets/characters/01.jpg';
import photo2 from './assets/characters/02.jpg';
import photo3 from './assets/characters/03.png';
import photo4 from './assets/characters/04.png';
import photo5 from './assets/characters/05.jpg';
import photo6 from './assets/characters/06.jpg';

export type Character = {
  src: string;
  photo: string;
  bg: string;
  panel: string;
  id: string;
  name: string;
  role: string;
};

export const CHARACTERS: Character[] = [
  { src: img2, photo: photo2, bg: '#F4845F', panel: '#F79B7F', id: '67314445', name: 'พีรพัฒน์ ทองด้วง', role: 'Dev' },
  { src: img3, photo: photo3, bg: '#6BBF7A', panel: '#85CC92', id: '67312533', name: 'ธนภัทร วิชชากูล', role: 'Dev' },
  { src: img4, photo: photo4, bg: '#E882B4', panel: '#ED9DC4', id: '67312168', name: 'ณัฐวัตร มายูร', role: 'CEO' },
  { src: img1, photo: photo1, bg: '#6EB5FF', panel: '#8DC4FF', id: '67312670', name: 'ธรรมพล ทับทิมมงคล', role: 'CTO' },
  { src: img5, photo: photo5, bg: '#F2C94C', panel: '#F6D97A', id: '67312106', name: 'ณัฐภูมิ กาทองทุ่ง', role: 'Dev' },
  { src: img6, photo: photo6, bg: '#9B6BCE', panel: '#B48EDB', id: '67316258', name: 'สิงห์ชัย นันดอนคา', role: 'Dev' },
];
