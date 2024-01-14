AFRAME.registerComponent('limit', {    
  
    init: function () {   
      const camera = document.querySelector('#camera');

      camera.addEventListener('componentchanged', (event) => {
        console.log(event);
    if (event.detail.name === 'position') {
      const cameraPosition = camera.getAttribute('position');
      console.log(cameraPosition);
      if (cameraPosition.x < 0) {
        camera.setAttribute('position', { x: 0, y: cameraPosition.y, z: cameraPosition.z });
        console.log("consition 1");
      }
      else if ( cameraPosition.x > 950){
        camera.setAttribute('position', { x: 950, y: cameraPosition.y, z: cameraPosition.z });
      }

      if (cameraPosition.z < -125 && cameraPosition.x < 750) {
        camera.setAttribute('position', { x: cameraPosition.x, y: cameraPosition.y, z: -125 });
      }
    else  if (cameraPosition.z > 100) {
        camera.setAttribute('position', { x: cameraPosition.x, y: cameraPosition.y, z: 100 });
      }
    else  if (cameraPosition.z < -125 && cameraPosition.x > 750) {
        camera.setAttribute('position', { x: cameraPosition.x, y: cameraPosition.y, z: cameraPosition.z });

        if (cameraPosition.x >= 950){
          camera.setAttribute('position', { x: 950, y: cameraPosition.y, z: cameraPosition.z });
        }
        else if(cameraPosition.x < 750){
          camera.setAttribute('position', { x: 750, y: cameraPosition.y, z: cameraPosition.z });
        }
        else if(cameraPosition.z < -775){
          camera.setAttribute('position', { x: cameraPosition.x, y: cameraPosition.y, z: -775 });
        }
      }

    }
  });
    } 
  });