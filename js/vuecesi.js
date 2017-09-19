/**
 * Created by Administrator on 2017/9/12.
 */
function over() {
    if( document.getElementById("ad2-1")==document.activeElement) {
        document.getElementById("ad2-1").style.cssText="border:1px solid red;background:blue;"
    }
}
var app = new Vue({
    el:"#ap",
    data:{
        message:"hello"
    }
});
var app2 = new Vue({
    el:"#ap2",
    data:{
        message:'页面加载与'+ new Date().toLocaleString()
    }
});
var app3 = new Vue({
    el:"#ap3",
    data:{
       message:true
    }
});
var app4 = new Vue({
    el:"#ap4",
    data:{
        todos:[
            {text:"学习"},
           {text:"12"},
           {text:"34"}
         ]
       }

});
var app5 = new Vue({
    el:"#ap5",
    data:{
        message:"hello world"
    },
    methods:{
       reversemessage:function () {
           this.message=this.message.split(' ').reverse().join(' ')
       }
    }
});
var app6 = new Vue({
    el:"#ap6",
    data:{
        message:"hello world!"
    }
});
// 定义名为todo-item 的新组件
// 将数据从父作用域传到子组件。够接受一个属性
Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
});
var app7 = new Vue({
    el:"#ap7",
    data:{
        groceryList:[
            {id:0,text:"1"},
            {id:1,text:"2"},
            {id:2,text:"3"}
            ]
    }
})
Vue.component('dk-da',{
    props:['dk'],
    template:'<li>{{dk.text}}</li>'
});
var app8 =new Vue({
    el:"#ap8",
    data:{
        message:[
            {id:0,text:"呵呵"},
            {id:1,text:"哈哈"},
            {id:2,text:"恩恩"}
        ]
    }
});
var data ={a:1};
    var vm=new Vue({
    el:"#example",
    data:data
})
if(vm.$data ===data )
{
 // alert("true")
}

vm.$el===document.getElementById("#example"); //true
// $watch 是一个实例方法
vm.$watch('a',function (newvalue,odlvalue) {
    // 这个回调将在 `vm.a` 改变后调用
})

// 每个 Vue 实例在被创建之前都要经过一系列的初始化过程。
// 例如需要设置数据监听、编译模板、挂载实例到 DOM、在数据变化时更新 DOM 等。
// 同时在这个过程中也会运行一些叫做生命周期钩子的函数，给予用户机会在一些特定的场景下添加他们自己的代码。
// 比如 created 钩子可以用来在一个实例被创建之后执行代码：
// 在实例生命周期的不同场景下调用，如 mounted、updated、destroyed。钩子的 this 指向调用它的 Vue 实例。
new Vue({
    data:{
        a:1
    },
    created: function () {
      // alert("a是"+this.a)
    }
})
var rp =new Vue({
    el:"#ap9",
    data:
        {
        rawhtml:"wqes"
    }
})
var hf = new Vue({
    el:"#ap10",
    data:
        {url:"https://cn.vuejs.org/v2/guide/syntax.html#参数"}
})
// var moddle =new Vue({
//     el:"#moddle",
//     data:{
//         clas:"moddle"
//     }
// });
var ad = new Vue({
    el: '#ad',
    data:
        {message: '人才'},


    computed: {
        // a computed getter
        reversedMessage: function() {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        },
        now:function () {
              return new Date().toLocaleString()
        }
    }


});
var ad1 = new Vue({
    el:"#ad1",
    data:{
        firstname:"1",
        lastname:"2",

    },
    computed:{
        // fullname:function () {
        //     return this.firstname+""+this.lastname
        // }
        fullname:{
            get:function () {
                return this.firstname+""+this.lastname
            },
            set: function(nameValue){
                 var names =nameValue.split("")
                this.firstname = names[0]
                this.lastname=names[names.length-1]
            }
        }
    }
});
var ad2 = new Vue({
    // Vue 通过 watch 选项提供一个更通用的方法，来响应数据的变化。
    el:"#ad2",

    data:
        {question:"",
        answer:"什么都没有"},
    watch:{
        question:function (newquestion) {
            this.answer ="输出中。。"
           this.getanswer()
        }
    },
    methods:{
        getanswer:function () {
            if(this.question===""){
                this.answer="什么都没有"


            }
        },

    },


})
var ad3=new Vue({
    el:"#ad3",
    data:{
        classObject: {
            active: true,
            'text-danger': true,
        }
    }
})
var ad4=new Vue({
    el:"#ad4",
    data:{

            activeClass: 'active',
            errorClass: 'text-danger',
            isActive:true

    }
})

Vue.component('items',{
    template:'<p class="text-danger">123</p>'
});
var ad5 =new Vue({
    el:"#ad5",
    data:{
         isActive: true,
         ad5:'ad5'

    }
})
var ad6 =new Vue({
    el:"#ad6",
    data: {
        // styleObject: {
        //     color: 'red',
        //     fontSize: '30px'
        // }
    }

});
Vue.component('ex-ep',{
    props:['ex'],
    template:'<p>{{ex.text}}</p>'
});

var ad7 =new Vue({
    el:"#ad7",
    data:{
        List:[
            {id:0,text:"呵呵"},
            {id:1,text:"哈哈"},
            {id:2,text:"恩恩"}
        ]
    }
})
var rd1 =new Vue({
    el:"#rd1",
    data:{
        loginType:"username"

    },

});
var rd2 =new Vue({
    el:"#rd2",
    data:{
        parentMessage:"Parent",
        items:
            {
                messageOne:"son1",
                messageTwo:"son2"
            }

    }
})
var rd3 =new Vue({
    el:"#rd3",
    data:{
        items:{
            name:"哈哈"
        }
    }

})

Vue.set(rd3.items,'Password',1231)
// rd3.items = Object.assign({}, this.items, {
//     age: 27,
//     favoriteColor: 'Vue Green'
// })
var rd4 =new Vue({
    el:"#rd4",
    data:{
        numbers:[1,5,3,4,2]
    },
    methods:{
        even:function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 == 0
            })
        }
    }
})
Vue.component('todo-item',{
    props:['title'],
    template:'<li>{{title}}' +
    '<button v-on:click="$emit(\'remove\')">x</button> '
})
var rd5 =new Vue({
    el:"#rd5",
    data:{
        newText:"",
        todos:[
            {id:1,title:"1"},
            {id:2,title:'2'},
            {id:3,title:'3'}
        ],
        newTextId:4
    },
    methods:{
      addNewText:function () {
          this.todos.push({
              id:this.newTextId++,
              title:this.newText
          }),
        this.newText=''
      }
    }
});
var rd6 =new Vue({
    el:"#rd6",
    data:{
        count:0
    }
})
var rd7 =new Vue({
    el:"#rd7",
    data:{
        name:"煞笔！"
    },
    methods:{
        greet:function (event) {
            alert('你好'+this.name);
            // `event` 是原生 DOM 事件
            if(event)
            {
              alert(event.target.tagName);
            }
        }
    }
})
// rd7.greet() 也可以用 JavaScript 直接调用方法
var rd8 =new Vue({
    el:"#rd8",
    data:{
      message:""
    },
    methods:{
        say:function (message) {
            alert(message)
        },
        // 内联语句处理器中访问原生 DOM 事件。可以用特殊变量 $event 把它传入方
        warn: function (message, event) {
            // 现在我们可以访问原生事件对象
            if (event) event.preventDefault()
            alert(message)
        }
    }
});
var rm1 =new Vue({
    el:"#rm1",
    data:{
        checked:"true"
    }
})



