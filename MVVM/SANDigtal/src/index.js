import san, {DataTypes} from 'san';
import './style.css'

var msg = san.defineComponent({
		template:'<div>'
		+'<p>'
		+'<input type="text" placeholder="姓名(string)" value="{= name =}">'
		+'<input type="text" placeholder="年龄(number)" value="{= age =}">'
		+'<input type="text" placeholder="简介(string)" value="{= profile =}">'
		+'</p>'
		+'<label>信息： <input type="button" value="移除信息"></label>'
		+'<br/>'
		+'<label>姓名:  <input style="border:0;border-bottom:1px solid #666666" value="{{name}}"></label><br/>'
		+'<label>年龄:  <input style="border:0;border-bottom:1px solid #666666" value="{{age}}"></label><br/>'
		+'<label>简介:  <input style="border:0;border-bottom:1px solid #666666" value="{{profile}}"></label><br/>'
		+'<br/></div>',
		dataTypes:{
			profile: DataTypes.string,
			name: DataTypes.string,
			age: DataTypes.number
		}
	});
var hqyMsg = new msg();
hqyMsg.attach(document.body);