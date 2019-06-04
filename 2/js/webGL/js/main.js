window.earth = {};
var page = {
  init: function() {
  	if(!this.earth) {
  		this.earth = new Earth({
  	    el: "webgl-content"
  	  });
      earth = this.earth;
  		this.earth.animate = () => {
  			if(earth.rotateTargetX !== undefined && earth.rotateTargetY !== undefined) {
          earth.rotateVX += (earth.rotateTargetX - earth.rotateX) * 0.012;
          earth.rotateVY += (earth.rotateTargetY - earth.rotateY) * 0.012;
          if(Math.abs(earth.rotateTargetX - earth.rotateX) < 0.1 && Math.abs(earth.rotateTargetY - earth.rotateY) < 0.1) {
            earth.rotateTargetX = undefined;
            earth.rotateTargetY = undefined;
          }
        }
        earth.rotateX += earth.rotateVX;
        earth.rotateY += earth.rotateVY;
        earth.rotateVX *= 0.98;
        earth.rotateVY *= 0.98;
        if(earth.dragging || earth.rotateTargetX !== undefined) {
          earth.rotateVX *= 0.6;
          earth.rotateVY *= 0.6;
        }
        //earth.rotateY += earth.controllers.spin * 0.01;
        if(earth.rotateX < -earth.rotateXMax){
          earth.rotateX = -earth.rotateXMax;
          earth.rotateVX *= -0.95;
        }
        if(earth.rotateX > earth.rotateXMax){
          earth.rotateX = earth.rotateXMax;
          earth.rotateVX *= -0.95;
        }
        // TWEEN.update();
        earth.rotating.rotation.x = earth.rotateX;
        earth.rotating.rotation.y = earth.rotateY;
        //earth.render();
        earth.renderer.clear();               
        earth.renderer.render(earth.scene, earth.camera);
        requestAnimationFrame(earth.animate);
        /*if(THREE.SceneUtils && THREE.SceneUtils.traverseHierarchy) {
          THREE.SceneUtils.traverseHierarchy(earth.rotating, function(mesh) {
            if(mesh.update !== undefined) {
              mesh.update();
            }
          });
        } else {*/
          for(var i = 0; i < earth.linesCache.length; i++) {
            if(earth.linesCache[i].update !== undefined) {
              earth.linesCache[i].update();
            }
          }
        //}
        for(var i in earth.markers) {
          earth.markers[i].update()
        }
        //if(earth.shaderMaterial) {
          //earth.shaderMaterial.uniforms.time.value += 1;
        //}
        //earth.shaderMaterial.uniforms.time.value += 1;
        //earth.controls.update();
  	  }
  		this.earth.rotateCallback = (city) => {
  			/*if(!this.titleDom) {
  				this.titleDom = $("#id-title");
  			}
  			if(audio) {
  				audio.playFromTo("open", 0, 1);
  				this.titleDom.text(city.name);
  				this.refres(JSON[city.name]["attackType"], JSON[city.name]["sourceIp"]);
  			}*/
  		}
console.log(LINE_DATA);
  		this.earth.load();
  		this.earth.loadFlightLine(LINE_DATA);
console.log(HOT_DATA);  		
  		this.earth.loadHotspot(HOT_DATA);
  		/*this.earth.loadFlightLine([{
				start: {
					lat: 30.28,
					lon: 120.15,
		      name: "杭州",
		      value: 0,
		      type: 0
				},
				end: {
		      lat: 59.453751,
		      lon: 108.830719,
		      name: "俄罗斯",
		      value: 0,
		      type: 0
				},
				type: 3,
				lineType: 0
			}, {
				start: {
					lat: 30.28,
					lon: 120.15,
		      name: "杭州",
		      value: 0,
		      type: 0
				},
				end: {
		      lat: 46.710670,
		      lon: 1.718190,
		      name: "法国",
		      value: 0,
		      type: 0
				},
				type: 3,
				lineType: 0
			}], 2);*/
  		
  	}
  }		
}
page.init();