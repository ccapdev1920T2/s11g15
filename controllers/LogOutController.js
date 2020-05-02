const logoutController = {

    getLogOut: async function (req, res) {
    	try {
        req.session.destroy(function(err) {
            if(err) throw err;
            res.redirect('/');
        });

        } catch (error) {
        console.log('There was an error: ', error);
        }

    }

}

module.exports = logoutController;
