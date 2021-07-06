const path = require('path')
//얘는 노드js에서 기본적으로 가진 얘라서 안깔아줘도 됨

const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const  webpack  = require('webpack')
// webpack {}
module.exports={
    name: 'munyeong', //1. 이 웹팩의 이름을 정해주세요
    //이 밑 설정값들은 개발용/ 배포용에 따라 나뉨
    mode: 'development', // production
    devtool:'eval', // hidden-source-map

    resolve :{
        extensions:['.js','.jsx']
    },

    //entry - 내가 가져올 파일들을 설정함. 
    //내가 만약 가지고 오고 싶은 파일이 있다면
    // 이 파일들을 가리키면 됨. 
    
    //입력받을 내용들
    entry:{
        app:['./index.jsx']
    },

    //내보낼 내용들 (주로 경로와 파일명)
    output:{
        path:path.join(__dirname,'dist'), //구문 외우기 path.join(__dirname,"")
        //현대 디렉토리 + dist까지
        filename:'app.js',
        publicPath:'/dist' //해당 파일을 정적 파일로 바꾸겠다.
    },
    devServer:{ //이게 뭐지 왜 넣은거지
        publicPath:"/dist",
        hot:true,
    },

    module:{
        rules:[{
            test:/\.jsx?$/, //내가 지금 입력받은 파일의 확장자가 조건에 부합한다면 아래 내용을 실행하곘다.
            // 조건- jsx 파일인지 아닌지?
            loader:'babel-loader', //웹팩이 바벨을 읽을 수 있도록
            options:{
                presets:[
                    ['@babel/preset-env',{  
                        tergets:{
                            broesers:[">5% in KR",
                        'last 2 chrome version']
                        },
                        // debug:true, 그래서 얘를 지워줘도된대요
                    }],

                    '@babel/preset-react'
                ],
                plugins : [
                    'react-refresh/babel'
                ]
            }
        }]
    },
    plugins:[ //이것도
        new webpackPlugin(),
        new webpack.LoaderOptionsPlugin({debug:true}) //콘솔창에 찍어준대요
        //근데 디버그를 왜 찍어줘요? 
        //뭔가를 확인하려고
    ]    
}
