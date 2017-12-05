require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
//获取图片相关的数据
let imageDatas = require('../data/imageData.json');
//利用自执行，将图片名信息转换成图片URL路径信息
(function getImageURL (imageDatasArr) {
  for(let i = 0, j = imageDatasArr.length; i < j; i++){
    var singleImageData = imageDatasArr[i];
    singleImageData.imageUrl = require('../images/' + singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <section className="controller-nav"></section>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
