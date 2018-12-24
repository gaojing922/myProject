$.fn.removeArryValue = function(value){
	for(var i = 0;i<this.length;i++){
		if(this[i] == value){
			this.splice(i,1);
			break;
		}
	}
}
