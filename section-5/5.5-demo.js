const dns = require('dns');

dns.lookup('epubit.com',{all: true}, (err,  family) => {
    if (err) {
        return console.log(err);
    }
    console.log(family);
})

dns.resolve('epubit.com', 'MX', (err, address)=> {
    if(err) {
        return err
    }
    console.log(address)
})
