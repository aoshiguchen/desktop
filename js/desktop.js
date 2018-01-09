var shortcuts = [
{	
	mode: 'inside',
	name: 'Asgc Blog',
	icon: './img/icon/asgc_blog.ico',
	url: 'http://blog.aoshiguchen.com',
	title: '傲世孤尘的博客'
},
{	
	mode: 'inside',
	name: 'How2u Blog',
	icon: './img/icon/how2u_blog.ico',
	url: 'http://blog.ee2j.com/',
	title: '视佬的博客'
},
{	
	mode: 'inside',
	name: 'Battcn Blog',
	icon: './img/icon/battcn_blog.png',
	url: 'http://blog.battcn.com/',
	title: '唐亚峰 的博客'
},
{	
	mode: 'outside',
	name: 'Asgc Github',
	icon: './img/icon/github.png',
	url: 'https://github.com/aoshiguchen',
},
{	
	mode: 'inside',
	name: '开源中国',
	icon: './img/icon/kyzg.png',
	url: 'https://www.oschina.net',
	title: '开源中国'
},
];

$(function(){
	var content = $('#win10-shortcuts');
	var h=parseInt($("#win10 #win10-shortcuts")[0].offsetHeight/100);
	var x=0,y=0;

	shortcuts.forEach(function(item){
		var shortcut = $('<div class="shortcut animated flipInX"></div>');

		shortcut.css({
			left:x*82+10,
            top:y*100+10,
        });

        y++;
	    if(y>=h){ 
	        y=0; 
	        x++;
	    }

		if(item.mode == 'inside'){
			shortcut.attr('onclick','Win10.openUrl("' + item.url + '","<img class=\'icon\' src=\'' + item.icon + '\' />' + item.title + '")');
		}else{
			shortcut.attr('onclick','window.open("' + item.url + '")');
		}

		shortcut.append('<img class="icon" src="' + item.icon + '"/>');
		shortcut.append('<div class="title">' + item.name + '</div>');

		content.append(shortcut);
	});

});	