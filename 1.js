var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request, response){
    fs.readdir(`data/menu`,function(error, fileList){
        // console.log(fileList);
        fs.readFile(`data/welcome`, 'utf8', function(err, contents){
            // console.log(contents);
            var pages = `<!doctype html>
            <html>
                <head>
                    <title>생활코딩</title>
                    <meta charset="utf8">
                </head>
                <body>
                    <!--
                        div 태그의 class head와
                        header 태그, hgroup 태그를 써봤는데 본 사이트와 같은 모양이 나오지 않았음
                    -->
                    <p class="title"><a href="1.html">생활코딩</a></p>
                    <p class="subtitle"><small>Coding Everybody</small></p>
                    <a class="title" href="https://opentutorials.org/">
                        <span>Open</span>"tutorials.org"
                    </a>
                    <nav>
                        <li>
                            <a class="title" href="https://opentutorials.org/module/180">도움말</a>
                        </li>
                        <li id="login">
                            <a class="title" href="https://opentutorials.org/auth?mode=login&returnURL=course/1">로그인</a>
                        </li>
                        <li id="donations">
                            <a href="https://opentutorials.org/module/1588/12591">후원</a>
                        </li>
                    </nav>
                    <table>
                        <tr>`;
            var i = 0;
            while(i < fileList.length){
                pages = pages + `<td>${fileList[i]}</td>`;
                i = i + 1;
            }
            pages = pages + `</tr>
                </table>
                    <h2>생활코딩</h2>
                    <center>
                        hello world<br>
                        <p>${contents}</p>
                    </center>
                </body>
            </html>`;
            response.writeHead(200);
            response.end(pages);
        });
    });
});

app.listen(3000);