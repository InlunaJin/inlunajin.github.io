/* global AFRAME */
AFRAME.registerComponent('to-link', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');
    this.LinkBut = {
      RoomButton: {
       link:'/room.html' 
      },
      GalleryButton: {
        link:'/gallery.html' 
       },
       TheaterButton: {
        link:'/theater.html' 
       }, TutorialButton: {
        link:'none'
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

  onMenuButtonClick: function (evt) {

    var SelectPage = this.LinkBut[evt.currentTarget.id];
    if(SelectPage.link =='none')
    {
      document.querySelector('#TutorialButton').object3D.position.set(100,100,100);
      document.querySelector('#TutorialButton').object3D.visible = false;
      document.querySelector('#TurPoster').object3D.visible = false;
      //evt.currentTarget.object3D.scale.set (2, 2, 2);
      
     // evt.currentTarget.object3D.visible = false;
    }
    else{
      window.location.href = SelectPage.link;
    }
    
  },

  onBackgroundClick: function (evt) {
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    this.fadeBackgroundEl.object3D.visible = false;
  }
});
