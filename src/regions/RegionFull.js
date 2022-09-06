import React from 'react';
import { useParams } from 'react-router-dom';
import Griva from "../descriptions/Griva";
import TorgashinskkyRidge from "../descriptions/TorgashinskkyRidge";
import KrasnoyarskStolbi from "../descriptions/KrasnoyarskStolbi";
import Ergaki from "../descriptions/Ergaki";
import MininStolbi from "../descriptions/MininStolbi";
import KaraulnoeNagore from "../descriptions/KaraulnoeNagore";
import BaikalLake from "../descriptions/BaikalLake";
import ShushenskyBor from "../descriptions/ShushenskyBor";
import KuturchinskoeBelogorie from "../descriptions/KuturchinskoeBelogorie";
import KachinskieStolbi from "../descriptions/KachinskieStolbi";
import IvanovskiyLakes from "../descriptions/IvanovskiyLakes";
import Divnogorsk from "../descriptions/Divnogorsk";
import MyCompleted from "../descriptions/MyCompleted";

const regions = [
  {
    id: 1,
    img: 'http://photos.wikimapia.org/p/00/06/51/55/95_1280.jpg',
    description: Griva()
  },
  {
    id: 2,
    img: 'https://img.tourister.ru/files/2/8/3/9/5/6/7/5/original.jpg',
    description: TorgashinskkyRidge()
  },
  {
    id: 3,
    img: 'https://mos-holidays.ru/wp-content/uploads/2018/02/legend-krasnoyarskie-columns.jpg',
    description: KrasnoyarskStolbi()
  },
  {
    id: 4,
    img: 'https://ergaki-park.ru/upload/resize_cache/iblock/159/1116_537_0/74z9wjs770j9h1j6pxel6u3oljed2rqy.jpg',
    description: Ergaki()
  },
  {
    id: 5,
    img: 'https://static.mk.ru/upload/entities/2017/03/28/articles/facebookPicture/2e/b0/5a/b5/92b193074c2e35a08ae28848707e8913.jpg',
    description: MininStolbi()
  },
  {
    id: 6,
    img: 'https://s.newslab.ru/photoalbum/40022/m/235386.jpg',
    description: KaraulnoeNagore()
  },
  {
    id: 7,
    img: 'https://bestmaps.ru/files/content_images/20120110172240.jpg',
    description: BaikalLake()
  },
  {
    id: 8,
    img: 'https://visitsiberia.info/assets/images/resources/1717/bor4.jpg',
    description: ShushenskyBor()
  },
  {
    id: 9,
    img: 'https://cs8.pikabu.ru/post_img/big/2016/10/21/3/1477020483216222551.jpg',
    description: KuturchinskoeBelogorie()
  },
  {
    id: 10,
    img: 'https://gorodprima.ru/wp-content/uploads/2020/07/kachinskie-stolby-glavnaya.jpg',
    description: KachinskieStolbi()
  },
  {
    id: 11,
    img: 'https://cloud.pulse19.ru/uploads/2020/07/002_ivanovskiye_ozera_1-1.jpg',
    description: IvanovskiyLakes()
  },
  {
    id: 12,
    img: 'https://gornovosti.ru/media/filer_public/a7/b9/a7b9f793-9139-4e75-86ec-304f29cff9fc/petlya.jpg',
    description: Divnogorsk()
  },
];

function RegionFull() {
  const { regionId } = useParams();

  const region = regions.find(({ id }) => String(id) === String(regionId));

  return <>
    <button className="return">
      <a href="/" className="return-link">🡰 Назад</a>
    </button>
    <div>{MyCompleted()}</div>
    <div className="second-page">
      <img src={region.img} className="image" />
      <div className="description">{region.description}</div>
      <div className="buttons">
        <button className="map">Карта</button>
        <button className="routes">
          <a href={`/routes/${regionId}`} className="routes-link">Маршруты</a>
        </button>
      </div>
    </div>
  </>;
}
export default RegionFull;
