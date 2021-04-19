// const {Seeder} = require('mongo-seeding')
// const path = require('path')

// const config = {
//     database: {
//         host: '127.0.0.1',
//         port: 27017,
//         name: 'mern-project-db',        
//     },
//     //dropDatabase: true
// }

// const initDb = async () => {
//     try {
//         const seeder = new Seeder(config)
//         const collections = seeder.readCollectionsFromPath('/home/node/app/src/seeder.json')
//         await seeder.import(collections)

//         return {result: true}
//     } catch(err) {  
//         console.error(err.message)          
//         return {
//             error: true,
//             message: 'Error in the seeder script'
//         }
//     }
// }

// module.exports = { initDb }

const seeder = require('mongoose-seed')
const URI = `mongodb://mongo:27017/mern-project-db`
//const data = require('./seeder.json')

const data = [{
    model: "api_keys",
    documents: [{
        api_key: "API_KEY.cf18af7f3e4ee49d6ead6da4883ee1f73d83ac10ed28ec1addc0955a8089216e",
        active: 1
    }]
}, {
    model: "users",
    documents: [{
        name:"Jose Francisco Alvarez Valdez 1",
        password: "$2b$10$finIKTLdrDVGkKtzRF.UUuDl13fUt.ZAqYdbDHtw50RM0TyE6DREy",
        email: "alvaresvaldes89@gmail.com",
        active: 1
    }, {
        name:"Jose Francisco Alvarez Valdez 2",
        password: "$2b$10$finIKTLdrDVGkKtzRF.UUuDl13fUt.ZAqYdbDHtw50RM0TyE6DREy",
        email: "alvaresvaldes89@outlook.es",
        active: 1
    }]
}]

seeder.connect(URI, {useUnifiedTopology: true},function() {
    seeder.loadModels([
        '/home/node/app/src/models/api-keys/api-keys.model.js',
        '/home/node/app/src/models/user/user.model.js',
    ])

    //seeder.clearModels(['api-keys', 'user'])
    seeder.clearModels(['api_keys', 'users'], function() {
        seeder.populateModels(data, function(err) {
            if(err) {
                console.error(err.message)
                return
            }

            console.log("Seed done")            
            seeder.disconnect()
        })
    })     
})

