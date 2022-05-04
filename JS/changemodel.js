/* global AFRAME */
AFRAME.registerComponent('change-model', {
    init: function () {
      var buttonEls = document.querySelectorAll('.menu-button');
      var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');
      this.ModelBut = {
        goodmonkey: {
         modelname:'monkey.gltf'  
        },
        badmonkey: {
            modelname:'monkey2.gltf' 
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
      var modellocation = document.getElementById('modelloc');
      var SelectModel = this.ModelBut[evt.currentTarget.id];
      modellocation.setAttribute('gltf-model',SelectModel.modelname);
      
    },
  
    onBackgroundClick: function (evt) {
      this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.visible = false;
      this.fadeBackgroundEl.object3D.visible = false;
    }
  });