'use strict'

const Role = use('Role')

class RoleSeeder {
  async run () {
    await Role.create({
      name: 'Admin',
      slug: 'admin',
      description: 'Administrador do sistema'
    })

    await Role.create({
      name: 'Manager',
      slug: 'manager',
      description: 'Gerente da loja'
    })

    await Role.create({
      name: 'CLient',
      slug: 'client',
      description: 'Cliente da loja'
    })

  }
}

module.exports = RoleSeeder
