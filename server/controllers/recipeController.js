




/**
 * Get
 * homepage
 */

exports.homepage = async(req, res) =>{

    res.render('index', {title: 'cooking Blog - Home'});
}