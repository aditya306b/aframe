AFRAME.registerComponent('toggle_profile', {
    init: function () {
      var plane = document.getElementById('profile_card');
      this.el.addEventListener('click', function () {
        console.log("click");
        plane.setAttribute('visible', !plane.getAttribute('visible'));
      });
    }
  });