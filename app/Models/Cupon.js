'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cupon extends Model {

    static get dates(){
        return ['created_at', 'updated_at', 'valid_from', 'valid_until']
    }

    user(){
        return this.belongsToMany('App/Models/User')
    }

    products(){
        return this.belongsToMany('App/Models/Product')
    }

    orders(){
        return this.belongsToMany('App/Models/Order')
    }

}

module.exports = Cupon
