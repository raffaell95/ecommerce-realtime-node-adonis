'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CuponProductSchema extends Schema {
  up () {
    this.create('cupon_product', (table) => {
      table.increments()
      table.integer('coupon_id').unsigned()
      table.integer('product_id').unsigned()
      table.timestamps()
      table.foreign('coupon_id').references('id').inTable('cupons').onDelete('cascade')
      table.foreign('product_id').references('id').inTable('products').onDelete('cascade')
    })
  }

  down () {
    this.drop('cupon_product')
  }
}

module.exports = CuponProductSchema
