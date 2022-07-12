import React from 'react';
import Route from './Route';

const namePlaces = [
  { name: 'Гремячая грива', img: 'http://photos.wikimapia.org/p/00/06/51/55/95_1280.jpg' },
  { name: 'Торгашинский хребет', img: 'https://img.tourister.ru/files/2/8/3/9/5/6/7/5/original.jpg' },
  { name: 'Красноярские столбы', img: 'https://mos-holidays.ru/wp-content/uploads/2018/02/legend-krasnoyarskie-columns.jpg' },
  { name: 'Природный парк Ергаки', img: 'https://ergaki-park.ru/upload/resize_cache/iblock/159/1116_537_0/74z9wjs770j9h1j6pxel6u3oljed2rqy.jpg' },
  { name: 'Мининские столбы', img: 'https://static.mk.ru/upload/entities/2017/03/28/articles/facebookPicture/2e/b0/5a/b5/92b193074c2e35a08ae28848707e8913.jpg' },
  { name: 'Караульненское Нагорье', img: 'https://s.newslab.ru/photoalbum/40022/m/235386.jpg' },
  { name: 'Байкал', img: 'https://bestmaps.ru/files/content_images/20120110172240.jpg' },
  { name: 'Шушенский бор', img: 'https://visitsiberia.info/assets/images/resources/1717/bor4.jpg' },
  { name: 'Кутурчинское бологорье', img: 'https://cs8.pikabu.ru/post_img/big/2016/10/21/3/1477020483216222551.jpg' },
  { name: 'Качинские столбы', img: 'https://gorodprima.ru/wp-content/uploads/2020/07/kachinskie-stolby-glavnaya.jpg' },
  { name: 'Ивановские озёра', img: 'https://bele.ru/media/cache/thumb_750_422/uploads/image/acb7cf0e0a15a766a52e748e990db856970130e2.jpg' },
  { name: 'Окресности Дивногорска', img: 'https://static.ngs.ru/news/2021/99/preview/e33e1f452d7f9f0b8377dfd62fb51adb03147b48_599_399_c.jpg' },
  ]
;
class Routes extends React.Component {
  render() {
    return (
      <>
        {namePlaces.map((item) => <Route item={item} />) }
      </>
    );
  }
}

export default Routes;






