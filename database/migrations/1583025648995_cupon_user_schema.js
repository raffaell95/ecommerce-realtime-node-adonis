'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CuponUserSchema extends Schema {
  up () {
    this.create('cupon_user', (table) => {
      table.increments()
      table.integer('coupon_id').unsigned()
      table.integer('user_id').unsigned()
      table.timestamps()
      table.foreign('coupon_id').references('id').inTable('cupons').onDelete('cascade')
      table.foreign('user_id').references('id').inTable('users').onDelete('cascade')
    })
  }

  down () {
    this.drop('cupon_user')
  }
}

module.exports = CuponUserSchema
