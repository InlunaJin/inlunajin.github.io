/* global AFRAME */
AFRAME.registerComponent('to-link', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');
    this.LinkBut = {
      GoogleButton: {
       link:'http://www.google.com' 
      },
      TwitterButton: {
        link:'/gallery.html' 
       },
       FacebookButton: {
        link:'https://www.facebook.com' 
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
      
      document.querySelector('#TutorialButton').object3D.position.set (0, 0, 3);
      document.querySelector('#TurPoster').object3D.scale.set (1, 1, 1);
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
