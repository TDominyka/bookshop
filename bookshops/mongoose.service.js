const mongoose = require('mongoose');

const options = {
    autoIndex: true,
    poolSize: 10,
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true
    
};
mongoose.connect("mongodb://localhost:27017/bookshops", options).then(()=>{
    console.log('MongoDB is connected')
}).catch(err=>{
    console.log('MongoDB connection unsuccessful')
});
exports.mongoose = mongoose;
