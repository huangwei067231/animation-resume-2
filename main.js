/*把代码code写到id为code的style标签里*/
function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    // domCode.innerHTML = prefix || ''
    let n = 0
    let id = setInterval(() => {
        n += 1
        // domCode.innerHTML = code.slice(0, n);
        domCode.innerHTML = Prism.highlight(prefix + code.slice(0, n), Prism.languages.css);
        styleTag.innerHTML = prefix + code.slice(0, n);
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            fn && fn.call()                                                                 // fn2()                                                                                        // fn3(result)
        }
    }, 60)
}


function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.slice(0, n);
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn && fn.call()                                                                 // fn2()

        }
    }, 30)
}



var result = `
/*Inspired by http://strml.net/
 *大家好，我是黄威
 *将近六月份了，我还在自学前端课程，知识使人进步。
 *下面我来用代码实现会动的简历效果
 */

 /*首先给所有元素添加过度效果*/
 *{
    transition:all .5s
 }

 /*白色背景太单调了，我们来点背景*/
html{
    color:rgb(222,222,222);background:rgb(0,43,54);
    font-size:16px;
}
/*文字离边框太近了*/
.styleEditor{
    padding:.5em;
    border:1px solid;
    margin:.5em;
    overflow:auto;
    width:48vw;height:90vh;
}
/*让代码高亮*/
    .token.selector{color:rgb(133,153,0)}
    .token.property{color:rgb(187,127,0)}
    .token.punctuation{color:yellow}
    .token.function{color:rgb(42,161,152)}

/*加点3D效果呗*/
html{
    perspective:1000px;
}
.styleEditor{
    transform:rotate(360deg)
}
.styleEditor{
    position:fixed;left:0;top:0;
    -webkit-transition:none;
    transition:none;
    -webkit-transform:rotateY(10deg) translateZ(-100px);
            transform:rotateY(10deg)translateZ(-100px);
}
/*加一个呼吸效果*/
#code{
    animation:breath 0.5s infinite alternate
}
/*接下来我给自己准备一张白纸*/`

var result2 = `
 #paper{
     background:white;
     position:fixed;
     right:16px;top:16px;
     padding:.5em;margin:.5em
     width:45vw;
     height:90vh;       /* dispiay:flex;*/
     border:1px solid;  /*align-item:center;*/
     color:#222;        /*justify-content:center;*/   
     overflow:auto;          
                             
 }
 /*好了，我开始写简历了*/`

var md = `
 # 自我介绍
 
 我叫黄威
 1992年12月出生
 武汉科技大学学校毕业
 专业是土木工程
 系院是资源与环境工程学院
 自学前端历时70天
 
 # 技能介绍

 熟悉html,css,JavaScript,JSON,AJAX.
 
 # 项目介绍

 1.苹果风格的轮播
 2.会动的网页简历
 3.pc端的简易画板

 # 联系方式

 -QQ- 215767230
 -Email- weiwei215767@sina.com
 -手机- 18126425437
`

let result3 = `
 /*这就是我的会动的简历
  *谢谢观看
  */`
// var n = 0
// var id = setInterval(() => {
//     n += 1
//     code.innerHTML = result.slice(0, n);
//     code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);
//     console.log(2)
//     styleTag.innerHTML = result.slice(0, n);
//     if (n >= result.length) {
//         window.clearInterval(id)
//         fn2()
//         fn3(result)
//     }
// }, 10)
writeCode('', result, () => {//writeCode call the function
    creatPaper(() => {
        writeCode(result, result2, () => {
            writeMarkdown(md, () => {
                console.log(md)
                MarkdownToHtml(() => {
                    writeCode(result + result2, result3, () => {
                        console.log('完成')
                    })
                })
            })
        })
    })
})


function creatPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn & fn.call()
}

// function fn3(preResult){

//  var n=0
//  var id=setInterval(()=>{
//         n +=1
//         console.log(result.substring(0,n))
//         code.innerHTML =preResult+result.substring(0, n);
//         styleTag.innerHTML = preResult+result.substring(0, n);
//         if(n>=result.length){
//             window.clearInterval(id)
//         }
//     },10)
// }
function MarkdownToHtml(fn) {
    var div = document.createElement('div')
    div.className = 'Markdown html'
    div.innerHTML = marked(md)

    let Markdowncontent = document.querySelector('#paper>.content')
    Markdowncontent.replaceWith(div)
    fn && fn.call()
}












