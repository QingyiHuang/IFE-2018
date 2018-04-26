import san from 'san';
import './style.css'
var MyApp = san.defineComponent({
    template: '<p class="hello">Hello {{name}}!</p>',

    initData: function () {
        return {
            name: 'San'
        };
    }
});


var myApp = new MyApp();
myApp.attach(document.body);