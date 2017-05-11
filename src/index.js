
//import './index.less';

import  dva,{connect} from 'dva';
import 'antd/dist/antd.css';

const app=dva();
//2.Model
app.model(require('./models/Users.js'));
//3.Router
app.router(require('./router'));
//4.start
app.start(document.getElementById('root'));