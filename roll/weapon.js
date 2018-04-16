var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var ox = require('./Character.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function weapon_make(id,name,species,Wname) {
var WMK;
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		if(ox.oC(i,19)!=0){
			rply.text=name+'你已有武器';
			return rply;
			}
			
			WMK='';
		if(species=='手槍'){
			WMK='1,10,15,1,3,3,'+Wname+',0,10';
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='重型手槍'){
			WMK='2,15,7,1,1,4,'+Wname+',0,10';
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='衝鋒槍'){
			WMK='3,8,30,0.8,10,4,'+Wname+',0,10';
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='短步槍'){
			WMK='4,12,30,0.8,5,5,'+Wname+',0,10';
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='步槍'){
			WMK='5,15,30,1.5,3,8,'+Wname+',0,10';
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='狙擊槍'){
			WMK='6,20,10,2,1,10,'+Wname+',0,10';
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='大口徑狙擊槍'){
			WMK='7,30,5,2,1,13,'+Wname+',0,10';
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='火炮'){
			WMK='8,100,1,1,1,20,'+Wname+',0,10';
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='短近距離武器'){
			WMK='9,20,1,1,1,0.2,'+Wname+',0,10';
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(species=='中近距離武器'){
			WMK='10,30,1,1,1,0.5,'+Wname+',0,10';
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
			}
		if(species=='長近距離武器'){
			WMK='11,40,1,1,1,0.8,'+Wname+',0,10';
			ox.WM(i,WMK);
			rply.text=name+'已製作完成';
			return rply;
		}
		if(WMK==''){
			rply.text=name+'沒有該種類 有'+
			'\n手槍,\n重型手槍,\n衝鋒槍,\n短步槍,\n步槍,\n狙擊槍,\n大口徑狙擊槍,\n火炮,\n短近距離武器,\n中近距離武器,\n長近距離武器';
			return rply;
		}
		if(Wname==null){
			rply.text=name+'武器沒有名字';
			return rply;
			}
  }
	}
}
function weapon_break(id,name) {
var WMK;
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		if(ox.oC(i,19)==0){
			rply.text=name+'你沒有武器';
			return rply;
			}
			WMK='0';
			ox.WM(i,WMK);
			rply.text=name+'已破壞完成';
			return rply;
		}

  }
	}

function weapon_view(id,name) {
var WMK;
  for(var i=0;i<ox.oL();i++){
	if(ox.oC(i,0)==id){
		if(ox.oC(i,19)==0){
			rply.text=name+'你沒有武器';
			return rply;
			}
			WMK=ox.oC(i,19);
			let WV = WMK.split(','); //定義輸入字串
			var ww=1;
			rply.text='';
			rply.text=name;
			rply.text+='\n武器名稱：'+WV[6];
			if(WV[0]==1){rply.text+='\n武器種類：手槍';ww=0.04;}
			if(WV[0]==2){rply.text+='\n武器種類：重型手槍';ww=0.1;}
			if(WV[0]==3){rply.text+='\n武器種類：衝鋒槍';ww=0.06;}
			if(WV[0]==4){rply.text+='\n武器種類：短步槍';ww=0.05;}
			if(WV[0]==5){rply.text+='\n武器種類：步槍';ww=0.05;}
			if(WV[0]==6){rply.text+='\n武器種類：狙擊槍';ww=0.13;}
			if(WV[0]==7){rply.text+='\n武器種類：大口徑狙擊槍';ww=0.22;}
			if(WV[0]==8){rply.text+='\n武器種類：火炮';ww=0.5;}
			if(WV[0]==9){rply.text+='\n武器種類：短近距離武器';ww=0.15;}
			if(WV[0]==10){rply.text+='\n武器種類：中近距離武器';ww=0.3;}
			if(WV[0]==11){rply.text+='\n武器種類：長近距離武器';ww=0.4;}
			rply.text+= '\n基礎傷害：'+WV[1]+
						'\n子彈：'+WV[2]+
						'\n傷害倍率：'+WV[3]+
						'\n連發數：'+WV[4]+
						'\n射程：'+WV[5]+
						'\n武器重量：'+(WV[1]*WV[2]*ww)+
						'\n可改造次數：'+WV[8]
						;
			if(Number(ox.oC(i,7))<Number((WV[1]*WV[2]*ww)))rply.text+='注意：武器過重'
			return rply;

  }
	}
}
module.exports = {
	weapon_make:weapon_make,
	weapon_break:weapon_break,
	weapon_view:weapon_view
};


