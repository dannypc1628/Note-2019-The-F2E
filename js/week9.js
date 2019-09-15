var app = new Vue({
    el:'#page',
    data:{
        
        status:1,
        payMode:0,
        timer:"25:00",
        title:'STEP 1-請選擇付款方式',
        list:[{
                id:1,
                title:'靈感隨手記',
                content:'靈感總是說來就來，所以就隨手記一下～',
                start:true
            },
            {
                id:2,
                title:'無標題',
                content:'業們是上即善時心現背藥此望角西少，我以況這，心在如對今。次後其本電很我要檢期告創就張點禮文市腦什...',
                start:false
            },
            {
                id:3,
                title:'英文假字(10)網頁用',
                content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
                start:true
            },
            {
                id:4,
                title:'無標題',
                content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
                start:true
            }
        ]
    },
    methods:{
        nextStep:function( event){
            var a =event.currentTarget;
            if($(a).hasClass('my-button-none'))
                console.log("this button is block");
            else{
                if(this.status<4)
                    this.status=this.status+1;
                this.title=this.statusTitles[this.status];
            }
        },
        backStep:function(event){
            var a =event.currentTarget;
            if($(a).hasClass('my-button-none'))
                console.log("this button is block");
            else{
                if(this.status>1)
                    this.status=this.status-1;
                this.title=this.statusTitles[this.status];
            }
        },
        selectPayMode:function(mode){
            this.payMode=mode;
        },
        
    },
    computed:{
        count:function(){
            return this.list.length;
        }
    }
});