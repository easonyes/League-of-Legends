# 开发报告


## 开发灵感 
-----

开发此个人网页的灵感主要来自于自己的兴趣爱好，由于我非常喜爱英雄联盟类游戏，而从接触到现在，英雄联盟已经陪伴我两年了。每个人都有自己的爱好，有人爱好运动，有人爱好音乐，而我爱好这类游戏，所以便下定决心做这个网页。

------





## 设计思路
-----

设计方面，我先是从主页设计开始，由于我准备设计的表单页有三个----英雄介绍页面，战队介绍页面和装备介绍页面。所以，主页的布局便大概想好了，在下边我会有所介绍。设计这个网页，也是想浏览这个网页的人对英雄的背景更加的了解，所以对英雄的背景有更多的关注。网页的内容多数来自于官网，其余的则是我在官方的一些周边网站找的官方资料。

-----


## 页面结构与说明
-----
[个人网页链接](https://easonyes.github.io/League-of-Legends/.)
站点由一个主页，三个列表页，一个表单页和若干个详细页组成。由于模版相同，所以详细页只使用一个作为代表。

[主页](https://easonyes.github.io/League-of-Legends/.)的作用主要在于对其他各个网页的简要介绍，让浏览者能够一目了然此网页的具体内容以及其简要作用。

[英雄介绍页](https://github.com/easonyes/League-of-Legends/blob/master/heroes.html)主要在于介绍各个英雄，而其[详细页](https://github.com/easonyes/League-of-Legends/blob/master/renma.html)主要介绍英雄的背景故事以及其玩法，并且侧重于其背景故事。

[战队介绍页](https://github.com/easonyes/League-of-Legends/blob/master/teams.html)主要在于介绍LPL赛区目前排名比较靠前的若干个战队，而其[详细页](https://github.com/easonyes/League-of-Legends/blob/master/rng.html)主要在于介绍该战队的荣誉与其在役成员。

[装备介绍页](https://github.com/easonyes/League-of-Legends/blob/master/equips.html)主页在于简要介绍各个装备的作用，而其[详细页](https://github.com/easonyes/League-of-Legends/blob/master/equips.html)中会具体介绍每个装备的属性值与其主动或者被动特效。

[表单页](https://github.com/easonyes/League-of-Legends/blob/master/form.html)主要在于调查在各年龄段与各个段位之间的玩家，对此网页的作用有何评价。

-----

## 技术指标
-----

兼容的浏览器版本在IE9及以上，所用的HTML有部分HTML5的内容，所用的CSS中也有部分CSS3中的内容。

开发工具：
> * 浏览器：firefox与chorme
> * 编辑器：sublime_text 3
> * 辅助手册：w3school

-----

## 技术点说明
-----

> * float元素的使用
>
> 因为主页的期望结构，所以想要一个大的块介绍一个列表页，而旁边有三个小块来介绍详细页。这个时候，用一个大的div包含两个小div，然后右边的div中又包含三个更小的div，再对中间的两个div使用float，就能达到预期的结果了。
```xml
>	.a{
		height: 500px;
	}

>	.b{
		margin: 5px;
		height: 480px;
		width: 49%;
		float: left;
	}

>	.c{
		margin: 5px;
		height: 150px;
	}
>	

<div class="a" >
    <div class="b"></div>
	<div class="b">
		<div class="c"></div>
		<div class="c"></div>
		<div class="c"></div>
	</div>
 </div>
 
```

> * jquery的引用
>
> 先进入[jquery之家](http://www.htmleaf.com/jQuery/)寻找自己喜爱的特效。进去之后单击查看演示，进去演示页面后，单击右键点击检查，找到iframe元素。按F2，进入该元素下的网页。之后查看网页源代码，找到JS特效代码及CSS。再将其改为自己的网页所需要的样子。
>而主要需要搬过来的代码为script元素下的JS特效代码，以及在head代码下的link引入的css代码。
示例代码：

```xml

<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>SmartPhoto-jquery移动手机响应式图片查看插件|DEMO_jQuery之家-自由分享jQuery、html5、css3的插件库</title>
	<link rel="stylesheet" type="text/css" href="css/normalize.css" />
	<link rel="stylesheet" type="text/css" href="css/htmleaf-demo.css">
	<link rel="stylesheet" href="css/smartphoto.css">
	<link rel="stylesheet" href="css/style2.css">
</head>
<body>

	
	<script src="http://cdn.bootcss.com/jquery/1.11.0/jquery.min.js" type="text/javascript"></script>
	<script>window.jQuery || document.write('<script src="js/jquery-1.11.0.min.js"><\/script>')</script>
	<script src="js/jquery-smartphoto.min.js?v=1"></script>
	<script>
	$(function(){
		$(".js-smartPhoto").smartPhoto();
	});
	</script>
</body>
</html>

示例代码中，我们需要的便只有：	<link rel="stylesheet" href="css/smartphoto.css">
	<script>window.jQuery || document.write('<script src="js/jquery-1.11.0.min.js"><\/script>')</script>
	<script src="js/jquery-smartphoto.min.js?v=1"></script>
	<script>
	$(function(){
		$(".js-smartPhoto").smartPhoto();
	});
	</script>

```


> * 自制的JS特效
>
>这个特效是一个可隐藏的类似于导航栏的特效。主要是它可隐藏，所以对网页的布局不造成影响，反而可以让我的各个网页联系更加密切。关键代码如下：
```xml

$('.side-btn').on('click', function () {
    if (!show) {
        $('.side-back').fadeIn(400);
        $('.side-area').animate({right: 0}, 300);
        $('body').css('overflow-y', 'hidden');
    } else {
        $('.side-back').fadeOut(400);
        $('.side-area').animate({right: -225}, 300);
        $('body').css('overflow-y', 'visible');
    }
    show = !show;
});

$('.side-back').on('click', function () {
    show = false;
    $('.side-back').fadeOut(400);
    $('.side-area').animate({right: -225}, 300);
    $('body').css('overflow-y', 'visible');
});

```
-----

## 开发心得
-----

此次网页开发，让我和我的未来程序员之路又近了一步。我原以为网页的开发会非常困难，可是，经过这一次尝试后才知道。原来，只要自己努力了，其实开发一个网页并没有那么难。只要自己肯花费时间和精力去做，慢慢就会发现，其实学习这些东西并没有那么费劲。相反，在网页的开发过程中，自己会慢慢对它产生兴趣，看着自己一个个敲的代码变成一个网页，是真的有一定的成就感的。而对本门课程的展望的话，由于此次课程已经引起了我学习的兴趣，所以下学期我会选与WEB相关的课程，让自己的网页开发技术得到进一步的提高。

-----