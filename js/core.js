function core(){
	this.sendXhr = function(data,url,successFun){
		if(xhr){
			return;
		}
		xhr=new plus.net.XMLHttpRequest();
		xhr.onreadystatechange=function(){
			console.log("onreadystatechange: "+xhr.readyState);
			successFun(xhr);
		}
		xhr.open( "POST", url );
		xhr.send(JSON.stringify(data));
	}
		
}
