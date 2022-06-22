/* global AFRAME */
AFRAME.registerComponent('change-model', {
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
     
      var modellocation = document.getElementById('modelloc');
      var imagelocation = document.getElementById('imageloc');
      var leftboard = document.getElementById('Description');
      var SelectModel = this.ModelBut[evt.currentTarget.id];
      
      if(evt.currentTarget.id == 'ExitButton')
      {
        window.location.href = SelectModel.modelname;
      }
      else if(evt.currentTarget.id.substring(0,1)=="i")
      {
        modellocation.setAttribute('visible','false');
        imagelocation.setAttribute('visible','true');
        imagelocation.setAttribute('gltf-model','material/gallery/'+evt.currentTarget.id.substring(2,100)+'.glb');
      }
      else if(evt.currentTarget.id.substring(0,1)=="m")
      {modellocation.setAttribute('visible','true');
      imagelocation.setAttribute('visible','false');
        modellocation.setAttribute('gltf-model','material/gallery/'+evt.currentTarget.id.substring(2,100)+'.glb');
        
        document.getElementById('tell').setAttribute('material','src:#P_ahri');
      }

      
    },
  
    onBackgroundClick: function (evt) {
      this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.visible = false;
      this.fadeBackgroundEl.object3D.visible = false;
    }
  });