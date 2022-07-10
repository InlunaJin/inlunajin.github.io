/* global AFRAME */
AFRAME.registerComponent('change-video', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');

    this.ModelBut = {
      ExitButton: {
        modelname: '/index.html'
      },
      goodmonkey: {
        modelname: 'monkey.gltf'
      },
      badmonkey: {
        modelname: 'monkey2.gltf'
      },
    };

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector('#background');
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.onMenuButtonClick);
    }
    this.backgroundEl.addEventListener('click', this.onBackgroundClick);
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 9;
    fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
  },
   setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
},
 getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
},
  onMenuButtonClick: function (evt) {
    

    var videoframe = document.querySelector('#videoloc');
    var SelectModel = this.ModelBut[evt.currentTarget.id];
    if (evt.currentTarget.id == 'ExitButton') {
      window.location.href = SelectModel.modelname;
    } else if (evt.currentTarget.id == 'YoutubeButton') {
      window.location.href = "https://www.youtube.com/";
    }
    else {
      var oldvideo = getCookie("nowplaying");
      document.querySelector('#'+oldvideo).pause();
      document.querySelector('#'+oldvideo).currentTime = 0;
      videoframe.setAttribute('material', 'src:#' + evt.currentTarget.id.substring(2, 100));
      document.querySelector('#' + evt.currentTarget.id.substring(2, 100)).play();
      setCookie("nowplaying",evt.currentTarget.id.substring(2, 100),1);
      prevvid = evt.currentTarget.id.substring(2, 100);

      THREE.Cache.clear();
    }


  },

  onBackgroundClick: function (evt) {
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    this.fadeBackgroundEl.object3D.visible = false;
  }
});