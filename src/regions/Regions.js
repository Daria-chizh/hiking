import React from 'react';
import RegionShort from './RegionShort';
import RoutesSearch from './RoutesSearch';

const regions = [
  { regionId: 1, name: 'Гремячая грива', img: 'http://photos.wikimapia.org/p/00/06/51/55/95_1280.jpg' },
  { regionId: 2, name: 'Торгашинский хребет', img: 'https://img.tourister.ru/files/2/8/3/9/5/6/7/5/original.jpg' },
  { regionId: 3, name: 'Красноярские столбы', img: 'https://mos-holidays.ru/wp-content/uploads/2018/02/legend-krasnoyarskie-columns.jpg' },
  { regionId: 4, name: 'Природный парк Ергаки', img: 'https://ergaki-park.ru/upload/resize_cache/iblock/159/1116_537_0/74z9wjs770j9h1j6pxel6u3oljed2rqy.jpg' },
  { regionId: 5, name: 'Мининские столбы', img: 'https://static.mk.ru/upload/entities/2017/03/28/articles/facebookPicture/2e/b0/5a/b5/92b193074c2e35a08ae28848707e8913.jpg' },
  { regionId: 6, name: 'Караульненское Нагорье', img: 'https://s.newslab.ru/photoalbum/40022/m/235386.jpg' },
  { regionId: 7, name: 'Байкал', img: 'https://bestmaps.ru/files/content_images/20120110172240.jpg' },
  { regionId: 8, name: 'Шушенский бор', img: 'https://visitsiberia.info/assets/images/resources/1717/bor4.jpg' },
  { regionId: 9, name: 'Кутурчинское бологорье', img: 'https://cs8.pikabu.ru/post_img/big/2016/10/21/3/1477020483216222551.jpg' },
  { regionId: 10, name: 'Качинские столбы', img: 'https://gorodprima.ru/wp-content/uploads/2020/07/kachinskie-stolby-glavnaya.jpg' },
  { regionId: 11, name: 'Ивановские озёра', img: 'https://cloud.pulse19.ru/uploads/2020/07/002_ivanovskiye_ozera_1-1.jpg' },
  { regionId: 12, name: 'Окресности Дивногорска', img: 'https://gornovosti.ru/media/filer_public/a7/b9/a7b9f793-9139-4e75-86ec-304f29cff9fc/petlya.jpg' },
];

function Regions() {
  return (
    <div>
      <RoutesSearch />
      {regions.map((region) => <RegionShort region={region} key={region.regionId} />)}
    </div>
  );
}

export default Regions;






