// 文件路径: app/dbHelper/user.js

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoose = require("mongoose")
// mongoDB
const dbUrl = "mongodb://localhost:27017/local";
mongoose.connect(dbUrl)
const db = mongoose.connection;
db.on('connected', () => {
	console.log('数据库连接成功...');
});

db.on('error', (error) => {
	console.log('数据库连接失败...', error);
});

db.on('disconnected', () => {
	console.log('数据库已断开');
});

const client = new MongoClient(dbUrl, {
    // useNewUrlParser: true
    useUnifiedTopology:true
});
const dbName = 'local'
// const tableName = 'users'
const tableName = 'user'

/**
 * @desc: 查询所有用户
 */
exports.queryUsers = function () {
    return new Promise(function (resolve, reject) {
        try {
            client.connect(function (err) {
                assert.equal(null, err);
                const db = client.db(dbName);
                const collection = db.collection(tableName);
                collection.find({}).toArray(function (err, result) {
                    assert.equal(err, null);
                    //client.close();
                    resolve(result)
                });
            })
        } catch (e) {
            reject(e)
        }
    })
}

/**
 * @desc: 增加用户
 */
 exports.addUsers = function (param) {
    return new Promise(function (resolve, reject) {
        try {
            client.connect(function (err) {
                assert.equal(null, err);
                const db = client.db(dbName);
                const collection = db.collection(tableName);
                collection.insertOne(param,(err,result)=>{
                    assert.equal(err, null)
                    resolve('添加成功')
                    //client.close();
                });
            })
        } catch (e) {
            reject(e)
        }
    })
}

/**
 * @desc: 删除用户
 */
 exports.delUsers = function (param) {
    return new Promise(function (resolve, reject) {
        try {
            client.connect(function (err) {
                assert.equal(null, err);
                const db = client.db(dbName);
                const collection = db.collection(tableName);
                collection.deleteOne(param,(err,result)=>{
                    assert.equal(err, null)
                    resolve('删除成功')
                    //client.close();
                });
            })
        } catch (e) {
            reject(e)
        }
    })
}

/**
 * @desc: 修改用户
 */
 exports.updateUsers = function (param) {
    return new Promise(function (resolve, reject) {
        try {
            client.connect(function (err) {
                assert.equal(null, err);
                const db = client.db(dbName);
                const collection = db.collection(tableName);
                collection.update(param,(err,result)=>{
                    assert.equal(err, null)
                    resolve('修改成功')
                    //client.close();
                });
            })
        } catch (e) {
            reject(e)
        }
    })
}