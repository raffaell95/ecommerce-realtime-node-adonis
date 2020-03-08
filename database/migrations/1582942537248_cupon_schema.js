'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CuponSchema extends Schema {
  up () {
    this.create('cupons', (table) => {
      table.increments()
      table.string('code', 100).notNullable()
      table.dateTime('valid_from')
      table.dateTime('valid_until')
      table.integer('quantity').defaultTo(1)
      table.enu('can_use_for', ['product', 'client', 'product_client', 'all'])
      table.enu('type', ['free', 'percent', 'currency']).defaultTo('currency')
      table.boolean('recursive').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('cupons')
  }
}

module.exports = CuponSchema
