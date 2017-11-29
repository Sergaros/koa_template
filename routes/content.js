'use strict'

const content = [
    {name: 'Alex', age: 25},
    {name: 'Bob', age: 21},
    {name: 'Alice', age: 24}
];

module.exports = (router)=>{
    router.get('/content', async function(ctx) {
        ctx.body = content;
    })
    .post('/content', async function(ctx) {
        console.log(`Add content: ${ctx.request.body}`);
        content.push(ctx.request.body);
        ctx.body = 'OK';
    })
    .delete('/content', async function(ctx) {
        console.log(`Delete content: ${ctx.request.body}`);
        //some delete functions...
        ctx.body = 'OK';
    });
};
