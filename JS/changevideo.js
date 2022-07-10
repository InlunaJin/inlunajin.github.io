/* global AFRAME */
AFRAME.registerComponent('change-video', {
    init: function () {
      var buttonEls = document.querySelectorAll('.menu-button');
      var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');
      this.ModelBut = {
        ExitButton:{
          modelname:'/index.html' 
        },
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
     
    
    var videoframe = document.querySelector("#videoloc");
      var SelectModel = this.ModelBut[evt.currentTarget.id];
      if(evt.currentTarget.id == 'ExitButton')
      {
        window.location.href = SelectModel.modelname;
      }else if(evt.currentTarget.id == 'YoutubeButton')
      {
        window.location.href = "https://www.youtube.com/";
      }
      else{

       // videoframe.setAttribute('material','src:#'+evt.currentTarget.id.substring(2,100));
        videoframe.play();
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