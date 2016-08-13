import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './map.html';
import '../stylesheets/map.css'

Template.map.onRendered( function () {
	
	var mymap = L.map('map').setView([37.9838, 23.7275], 6);
	L.tileLayer('', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'earthquakes',
    accessToken: ''
	}).addTo(mymap);

	var circle = L.circle([37, 22], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(mymap);

});
