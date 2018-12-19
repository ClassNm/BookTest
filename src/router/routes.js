//引用自己的组件 @代表路径是从src开始的
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login';
import Home from '@/components/home/index.vue';
// 默认找文件夹下的  index.vue ； 若是其他名字 则必须写全
import List from '@/components/list';
import Collect from '@/components/collect';
import Add from '@/components/add';
import Product from '@/components/product';



const routes = [
        {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        children:[
                {
            path:'/home',
            component:Home        
            },
            {
            path:'/list',
            component:List        
            },
            {
            path:'/collect',
            component:Collect        
            },
            {
            path:'/add',
            component:Add        
            }        
        ]
        },
        {
        path:"/login",
        component:Login
        },
        {
        path:'/product',
        comments:Product        
        }
        // {
        // path:"/home",
        // component:Home       
        // }
];
export default routes;