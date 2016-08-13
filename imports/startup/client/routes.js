import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '../../ui/layouts/home.js';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('home');
  },
});