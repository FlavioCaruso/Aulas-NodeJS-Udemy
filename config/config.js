const env = process.env.NODE_END || 'dev';

const config = () => {
    switch (env){
        case 'dev':
        return{
            bd_string: 'mongodb+srv://usuario_admin:fla310589@cluster0-e5ctn.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: 'batata123',
            jwt_expire_in: '7d'
        }
        case 'hml' :
        return{
            bd_string: 'mongodb+srv://usuario_admin:fla310589@cluster0-e5ctn.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: 'batata123',
            jwt_expire_in: '7d'
        }
        case 'prod':
        return{
            bd_string: 'mongodb+srv://usuario_admin:fla310589@cluster0-e5ctn.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: 'batata123',
            jwt_expire_in: '7d'
        }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();