module.exports.home=function(req,res){
    return res.end('<h1>express is up for codial</h1>')

};


module.exports.profile = function(req,res){
    return res.end('<h1>my profile</h1>')
}