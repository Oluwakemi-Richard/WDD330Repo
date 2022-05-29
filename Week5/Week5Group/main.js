// import Hikes from './hikes'
import {Hikes} from './hikes.js';
const hike1 = new Hikes();
const myHike = new Hikes('hikeListId');
window.addEventListener("load", () => {
    hike1.showHikeList();
  });
  const currentHike = document.querySelector('#hikes');
  function addDetails(e) {
    console.log(e.target);
    var mainPage = document.getElementById('hikes');
    mainPage.innerHTML = "Name: " +hike1.hikeDetail.name +"<br/>"+"Description: "+hike1.hikeDetail.description+"<br/>"+"Direction: "+hike1.hikeDetail.directions;
    
  }
  // table version
  currentHike.addEventListener('click', addDetails);