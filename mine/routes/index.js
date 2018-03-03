var express = require('express');
var router = express.Router();
//var UserModel=require("../model/User");
var GoodsModel = require("../model/Goods");
var multiparty = require("multiparty");

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
router.get("/login",function(req, res){
	res.render("login",{ttt:""});
});
/*router.post("/api/login",function(req, res, next){
	var username=req.body.username;
	var psw=req.body.psw;
	var result={
			code:1,
			message:"登陆成功"
		};*/
		//检查用户名是否被使用
		/*UserModel.find({username:username,psw:psw},function(err,docs){
			if(docs.length==0){
				result.code=-109;
				result.message="请输入正确的账号或密码";*/
			/*	result.json(result);
				return;*/
			/*}else{
				req.session.username = username;
			}
			res.json(result);*/
			/*//注册用户
			var um=new UserModel();
			um.username=username;
			um.psw=psw;
			um.save(function(err){
				
				if(err){
					result.code=-110;
					result.message="登陆失败";
					res.send("登陆失败");
				}
				res.json(result);
			});
});*/
router.get("/api/login",function(req, res){
	/*if(req.query.username=="" && req.query.psw=="" && req.query.yzm==""){
		res.send("-管理员用户名不能为空！-您没有输入验证码！");
		//res.send("-您没有输入验证码！");
	}else{
		if(req.query.yzm==""){
			res.send("-您没有输入验证码！");
		}else{
			//res.send("登陆成功");
			if(req.query.username=="admin" && req.query.psw=="h5h5h5h5"){
				res.send("200");//页面跳转
			}else{
				res.send("404");//页面跳转	
			}
		}
	}*/
	if(req.query.username == "admin" && req.query.psw == "h5h5h5h5") {
		res.send("200");		
	} else {
		res.send("404");
	}
})
router.get("/index",function(req, res){
	res.render("commodity",{ttt:""});
})
router.get("/productlist1",function(req, res){
	res.render("product_list1",{ttt:""});
})
router.get("/productlist2",function(req, res){
	res.render("product_list2",{ttt:""});
})
router.post('/api/goods_upload', function(req, res, next) {
	var form = new multiparty.Form({
		uploadDir: "public/images"
	});
	var result = {
		code: 1,
		message: "商品信息保存成功"
	};
	form.parse(req, function(err, body, files){
		if(err) {
			console.log(err);
		}
		console.log(body);
		var goods_name = body.goods_name[0];
		//var price = body.price[0];
		var imgPath = files["img"][0].path.replace("public\\", "");
		var gm = new GoodsModel();
		gm.goods_name = goods_name;
		//gm.price = price;
		gm.imgPath = imgPath;
		gm.save(function(err){
			if(err) {
				result.code = -99;
				result.message = "商品保存失败";
			}
			res.json(result);
		})
	})
});

module.exports = router;
