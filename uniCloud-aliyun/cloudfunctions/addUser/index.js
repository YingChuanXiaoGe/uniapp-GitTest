'use strict';
const db= uniCloud.database()
const userDb= db.collection('user')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let addUserRes= await userDb.add(event)
	//返回数据给客户端
	//return event
	return addUserRes
};
