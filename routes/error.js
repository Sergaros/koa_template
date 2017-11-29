'use strict'

module.exports = (router)=>{
    router.get('/error', async function(ctx) {
        throw new Error('Some test error!');
    });
};
