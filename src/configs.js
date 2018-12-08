/**
 * 配置编译环境和线上环境之间的切换
 *
 * urlWebHttp: 域名地址
 * toastime: toast时间
 *
 */
const toastime = 3000;
const timeout = 10000;

let urlWebHttp;

console.log(process.env)
//切换环境
switch (process.env.srconfig) {
	case 'pro':
		urlWebHttp = '';
		break;
	default://默认开发
		urlWebHttp = '';
		break;
}


export default{
	urlWebHttp,
	toastime,
	timeout
}