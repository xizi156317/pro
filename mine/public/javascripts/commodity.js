//找到所有的li
	var list = document.getElementsByClassName("character");
	//console.log(list);
	for( var i = 0 ; i < list.length ; i++ ){
		//console.log(i);//0-14
		list[i].onclick = function(e){
			var e = e || event;
			/*//如果按住shift键  就阻止冒泡  否则就会实现冒泡
			if( e.shiftKey ){
				e.stopPropagation();
				window.getSelection().removeAllRanges();//清除操作文字时文字的选中状态
			}*/
			if( this.firstElementChild.style.display == "none" ){
				//console.log(this);
				//console.log(this.firstElementChild);
				this.firstElementChild.style.display = "block";
			}else{
				this.firstElementChild.style.display = "none";
			}
		}
	}







/*选项卡效果*/
//console.log($("#ul1 li"));
		var uli = $("#ul1 li");
		var oli = $("#ol1 li");
		oli.addClass("hide");
		oli.eq(0).removeClass().addClass("show");
		uli.addClass("normal");
		uli.eq(0).removeClass().addClass("click");
		
		uli.click(function(){
			
			var index = $(this).index();
			
			$(this).removeClass().addClass("click").siblings().removeClass().addClass("normal");
			
			oli.eq(index).removeClass().addClass("show").siblings().removeClass().addClass("hide");
			
			
		});
		






