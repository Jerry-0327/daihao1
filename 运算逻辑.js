var xl1=0;//血量
var xl2=0;
var yxl1=0;//原血量
var yxl2=0;
var xlsx1=0;//血量上限
var xlsx2=0;
var nl1=0;//能量
var nl2=0;
var ft1=0;//反弹
var ft2=0;
var cz1="";//出招
var cz2="";
var lscz1="";//历史出招
var lscz2="";

var ys_sxjs1=true;//损血加伤
var ys_sxjs2=true;
var q1=0//枪类伤害
var q2=0;
var bz1=0;//爆炸伤害
var bz2=0;
var d1=0;//刀类伤害
var d2=0;
var fs1=0;//反伤
var fs2=0;
var zl1=0;//治疗
var zl2=0;

var jn1=[];//分别对应 0不选择技能 1快速炸弹 2先天 3高级能量 4热血 5空城 6嗜己 7白银狮子 8反伤 9能量刀
var jn2=[];
var lx1=0;//类型
var lx2=0;
var hn1=0;//耗能
var hn2=0;
var nlbl=1;//能量倍率
var dx1=0;
var dx2=0;
var ys_ms='';

function yunsan(xl1,xl2,nl1,nl2,lscz1,lscz2,ft1,ft2,ys_sxjs1,ys_sxjs2,jn1,jn2,cz1,cz2,xlsx1,xlsx2,nlbl,ys_ms) {
	//变量初始化
	q1=0//枪类伤害
	q2=0;
	bz1=0;//爆炸伤害
	bz2=0;
	d1=0;//刀类伤害
	d2=0;
	fs1=0;//反伤
	fs2=0;
	zl1=0;//治疗
	zl2=0;
	lx1=0;//类型
	lx2=0;
	hn1=0;//耗能
	hn2=0;
	dx1=0;
	dx2=0;
	yxl1=xl1;
	yxl2=xl2;
	//我的出招初始化
	if (cz1 === '能量') {
		lscz1 += "能量，"
		lx1 = "能量";
		q1=0;
		bz1=0;
		d1=0;
		if (jn1[3] === 1) {
			nl1 = nl1 + 1.5*nlbl;
			hn1=1.5*nlbl;
		}else{
			nl1 = nl1 + 1*nlbl;
			hn1=1*nlbl;
		}
	} else if (cz1 === '防御') {
		lscz1 += "防御，"
		lx1 = "防御";
		q1=0;
		bz1=0;
		d1=0;
		hn1=0;
	} else if (cz1 === '一发') {
		lscz1 += "一发，"
		lx1 = "枪";
		q1=1;
		bz1=0;
		d1=0;
		nl1 = nl1 - 1;
		hn1=1;
	} else if (cz1 === '二发') {
		lscz1 += "二发，"
		lx1 = "枪";
		q1=2;
		bz1=0;
		d1=0;
		nl1 = nl1 - 2;
		hn1=2;
	} else if (cz1 === '三发') {
		lscz1 += "三发，"
		lx1 = "枪";
		q1=3;
		bz1=0;
		d1=0;
		nl1 = nl1 - 3;
		hn1=3;
	} else if (cz1 === '炸弹') {
		lscz1 += "炸弹，"
		lx1 = "爆炸";
		if (jn2[1] === 1) {
			q1=0;
			bz1=1.5;
			d1=0;
			nl1 = nl1 - 2;
			hn1=2;
		}else{
			q1=0;
			bz1=1;
			d1=0;
			nl1 = nl1 - 3;
			hn1=3;
		}
	} else if (cz1 === '刀') {
		lscz1 += "刀，"
		lx1 = "刀";
		q1=0;
		bz1=0;
		d1=0.5;
		nl1 = nl1 - 1;
		hn1=1;
	} else if (cz1 === '能量防') {
		lscz1 += "能量防，"
		lx1 = "能量防";
		q1=0;
		bz1=0;
		d1=0;
		nl1 = nl1 - 1;
		hn1=1;
	} else if (cz1 === '反弹') {
		lscz1 += "反弹，"
		lx1 = "反弹";
		q1=0;
		bz1=0;
		d1=0;
		ft1 = ft1 - 1;
		hn1=0;
	} else if (cz1 === '黑洞') {
		lscz1 += "黑洞，"
		lx1 = "黑洞";
		q1=0;
		bz1=0;
		d1=0;
		nl1 = nl1 - 2;
		hn1=2;
	} else if (cz1 === '四发') {
		lscz1 += "四发，"
		lx1 = "枪";
		q1=4;
		bz1=0;
		d1=0;
		nl1 = nl1 - 4;
		hn1=4;
	} else if (cz1 === '火炮') {
		lscz1 += "火炮，"
		lx1 = "爆炸";
		q1=0;
		bz1=2;
		d1=0;
		nl1 = nl1 - 5;
		hn1=5;
	} else if (cz1 === '绷带') {
		lscz1 += "绷带，"
		lx1 = "治疗";
		q1=0;
		bz1=0;
		d1=0;
		zl1=1;
		nl1 = nl1 - 1;
		hn1=1;
	} else if (cz1 === '剑') {
		lscz1 += "剑，"
		lx1 = "刀";
		q1=0;
		bz1=0;
		d1=1;
		nl1 = nl1 - 2;
		hn1=2;
	} else if (cz1 === '损血回能') {
		lscz1 += "损血回能，"
		lx1 = "能量";
		q1=0;
		bz1=0;
		d1=0;
		xl1 = xl1 - 0.5;
		nl1 = nl1 + 2*nlbl;
		hn1=2*nlbl;
	} else if (cz1 === '损血加伤') {
		lscz1 += "损血加伤，"
		lx1 = "能量";
		q1=0;
		bz1=0;
		d1=0;
		xl1 = xl1 - 0.5;
		hn1=0;
		ys_sxjs1 = false;
	}
	//对方出招初始化
	if (cz2 === '能量') {
		lscz2 += "能量，"
		lx2 = "能量";
		q2=0;
		bz2=0;
		d2=0;
		if (jn2[3] === 1) {
			nl2 = nl2 + 1.5*nlbl;
			hn2=1.5*nlbl;
		}else{
			nl2 = nl2 + 1*nlbl;
			hn2=1*nlbl;
		}
	} else if (cz2 === '防御') {
		lscz2 += "防御，"
		lx2 = "防御";
		q2=0;
		bz2=0;
		d2=0;
		hn2=0;
	} else if (cz2 === '一发') {
		lscz2 += "一发，"
		lx2 = "枪";
		q2=1;
		bz2=0;
		d2=0;
		nl2 = nl2 - 1;
		hn2=1;
	} else if (cz2 === '二发') {
		lscz2 += "二发，"
		lx2 = "枪";
		q2=2;
		bz2=0;
		d2=0;
		nl2 = nl2 - 2;
		hn2=2;
	} else if (cz2 === '三发') {
		lscz2 += "三发，"
		lx2 = "枪";
		q2=3;
		bz2=0;
		d2=0;
		nl2 = nl2 - 3;
		hn2=3;
	} else if (cz2 === '炸弹') {
		lscz2 += "炸弹，"
		lx2 = "爆炸";
		if (jn2[1] === 1) {
			q2=0;
			bz2=1.5;
			d2=0;
			nl2 = nl2 - 2;
			hn2=2;
		}else{
			q2=0;
			bz2=1;
			d2=0;
			nl2 = nl2 - 3;
			hn2=3;
		}
	} else if (cz2 === '刀') {
		lscz2 += "刀，"
		lx2 = "刀";
		q2=0;
		bz2=0;
		d2=0.5;
		nl2 = nl2 - 1;
		hn2=1;
	} else if (cz2 === '能量防') {
		lscz2 += "能量防，"
		lx2 = "能量防";
		q2=0;
		bz2=0;
		d2=0;
		nl2 = nl2 - 1;
		hn2=1;
	} else if (cz2 === '反弹') {
		lscz2 += "反弹，"
		lx2 = "反弹";
		q2=0;
		bz2=0;
		d2=0;
		ft2 = ft2 - 1;
		hn2=0;
	} else if (cz2 === '黑洞') {
		lscz2 += "黑洞，"
		lx2 = "黑洞";
		q2=0;
		bz2=0;
		d2=0;
		nl2 = nl2 - 2;
		hn2=2;
	} else if (cz2 === '四发') {
		lscz2 += "四发，"
		lx2 = "枪";
		q2=4;
		bz2=0;
		d2=0;
		nl2 = nl2 - 4;
		hn2=4;
	} else if (cz2 === '火炮') {
		lscz2 += "火炮，"
		lx2 = "爆炸";
		q2=0;
		bz2=2;
		d2=0;
		nl2 = nl2 - 5;
		hn2=5;
	} else if (cz2 === '绷带') {
		lscz2 += "绷带，"
		lx2 = "治疗";
		q2=0;
		bz2=0;
		d2=0;
		zl2=1;
		nl2 = nl2 - 1;
		hn2=1;
	} else if (cz2 === '剑') {
		lscz2 += "剑，"
		lx2 = "刀";
		q2=0;
		bz2=0;
		d2=2;
		nl2 = nl2 - 2;
		hn2=2;
	} else if (cz2 === '损血回能') {
		lscz2 += "损血回能，"
		lx2 = "能量";
		q2=0;
		bz2=0;
		d2=0;
		xl2 = xl2 - 0.5;
		nl2 = nl2 + 2*nlbl;
		hn2=2*nlbl;
	} else if (cz2 === '损血加伤') {
		lscz2 += "损血加伤，"
		lx2 = "能量";
		q2=0;
		bz2=0;
		d2=0;
		xl2 = xl2 - 0.5;
		hn2=0;
		ys_sxjs2 = false;
	}
	//嗜己
	if(jn1[6]==1){
		q1=q1*2;
		bz1=bz1*2
		d1=d1*2
	}
	if(jn2[6]==1){
		q2=q2*2;
		bz2=bz2*2
		d2=d2*2
	}
	//绷带无效结算
	if(q1>0 || bz1>0 || d1>0){
		zl2=0;
	}
	if(q2>0 || bz2>0 || d2>0){
		zl1=0;
	}
	//同类型伤害结算
	if(q1>=q2){
		dx1+=q2;
		dx2+=q2;
		q1=q1-q2;
		q2=0;
	}else{
		dx1+=q1;
		dx2+=q1;
		q2=q2-q1;
		q1=0;
	}
	if(bz1>=bz2){
		dx1+=bz2;
		dx2+=bz2;
		bz1=bz1-bz2;
		bz2=0;
	}else{
		dx1+=bz1;
		dx2+=bz1;
		bz2=bz2-bz1;
		bz1=0;
	}
	if(d1>=d2){
		dx1+=d2;
		dx2+=d2;
		d1=d1-d2;
		d2=0;
	}else{
		dx1+=d1;
		dx2+=d1;
		d2=d2-d1;
		d1=0;
	}
	//异类型伤害结算
	if((q1!=0 || bz1!=0) && jn2[9]!=1){
		d2=0;
		dx1+=d2;
	}
	if((q2!=0 || bz2!=0) && jn1[9]!=1){
		d1=0;
		dx2+=d1;
	}
	if(bz1>=q2){
		dx1+=q2;
		q2=0;
	}else{
		dx1+=bz1;
		dx2+=bz1;
		q2=q2-bz1;
		bz1=0;
	}
	if(bz2>=q1){
		dx2+=q1;
		q1=0;
	}else{
		dx2+=bz2;
		dx1+=bz2;
		q1=q1-bz2;
		bz2=0;
	}
	//能量刀特殊结算
	if(jn1[9]==1){
		if(q2>d1){
			dx2+=d1;
			dx1+=d1;
			q2=q2-d1;
			d1=0;
		}else{
			dx2+=q2;
			dx1+=q2;
			d1=d1-q2;
			q2=0;
		}
		if(bz2>d1){
			dx2+=d1;
			dx1+=d1;
			bz2=bz2-d1;
			d1=0;
		}else{
			dx2+=bz2;
			dx1+=bz2;
			d1=d1-bz2;
			bz2=0;
		}
	}
	if(jn2[9]==1){
		if(q1>d2){
			dx1+=d2;
			dx2+=d2;
			q1=q1-d2;
			d2=0;
		}else{
			dx1+=q1;
			dx2+=q1;
			d2=d2-q1;
			q1=0;
		}
		if(bz1>d2){
			dx1+=d2;
			dx2+=d2;
			bz1=bz1-d2;
			d2=0;
		}else{
			dx1+=bz1;
			dx2+=bz1;
			d2=d2-bz1;
			bz1=0;
		}
	}
	//防御招式结算
	if(cz1=="防御"){
		dx1+=q2;
		q2=0;
	}
	if(cz1=="能量防"){
		var nlf1=2;
		if(bz2>=nlf1){
			dx1+=nlf1;
			bz2=bz2-nlf1;
		}else{
			dx1+=bz2;
			nlf1=nlf1-bz2;
			bz2=0;
			if(q2>=nlf1){
				dx1+=nlf1;
				q2=q2-nlf1;
			}else{
				dx1+=q2;
				q2=0;
			}
		}
	}
	if(cz1=="反弹"){
		dx1+=q2;
		dx1+=bz2;
		dx1+=d2;
		fs1+=q2;
		fs1+=bz2;
		q2=0;
		bz2=0;
		q2=0;
	}
	if(cz1=="黑洞"){
		dx1+=q2;
		dx1+=bz2;
		nl1+=hn2;
		q2=0;
		bz2=0;
	}
	if(cz2=="防御"){
		dx2+=q1;
		q1=0;
	}
	if(cz2=="能量防"){
		var nlf2=2;
		if(bz1>=nlf2){
			dx2+=nlf2;
			bz1=bz1-nlf2;
		}else{
			dx2+=bz1;
			nlf2=nlf2-bz1;
			bz1=0;
			if(q1>=nlf2){
				dx2+=nlf2;
				q1=q1-nlf2;
			}else{
				dx2+=q1;
				q1=0;
			}
		}
	}
	if(cz2=="反弹"){
		dx2+=q1;
		dx2+=bz1;
		dx2+=d1;
		fs2+=q1;
		fs2+=bz1;
		q1=0;
		bz1=0;
		q1=0;
	}
	if(cz2=="黑洞"){
		dx2+=q1;
		dx2+=bz1;
		nl2+=hn1;
		q1=0;
		bz1=0;
	}
	//技能反伤伤结算
	if(jn1[8]==1){
		fs1=fs1+dx1/2;
	}
	if(jn2[8]==1){
		fs2=fs2+dx2/2;
	}
	//伤害结算
	if(ys_ms=='正常模式'){
		if(jn1[5]==1){
			xl1=xl1-q2-bz2-fs2;
		}else{
			xl1=xl1-q2-bz2-d2-fs2;
		}
		if((q2>0 || bz2>0 || d2>0) && !ys_sxjs2){
			xl1=xl1-1;
			ys_sxjs2=true;
		}
		if(jn1[7]==1 && (yxl1-xl1)>xlsx1/2){
			xl1=yxl1-xlsx1/2;
		}
		xl1=xl1+zl1;
		if(xl1>xlsx1){
			xl1=xlsx1;
		}
		if(jn2[5]==1){
			xl2=xl2-q1-bz1-fs1;
		}else{
			xl2=xl2-q1-bz1-d1-fs1;
		}
		if((q1>0 || bz1>0 || d1>0) && !ys_sxjs1){
			xl2=xl2-1;
			ys_sxjs1=true;
		}
		if(jn2[7]==1 && (yxl2-xl2)>xlsx2/2){
			xl2=yxl2-xlsx2/2;
		}
		xl2=xl2+zl2;
		if(xl2>xlsx2){
			xl2=xlsx2;
		}
	}else if(ys_ms=='能量模式'){
		nl1=nl1-q2*2-bz2*5;
		nl2=nl2-q1*2-bz1*5;
	}
	
	return[xl1,xl2,nl1,nl2,lscz1,lscz2,ft1,ft2,ys_sxjs1,ys_sxjs2];
}