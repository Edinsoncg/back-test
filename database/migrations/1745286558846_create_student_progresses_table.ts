import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'student_progresses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table
        .bigInteger('student_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('students')
        .onDelete('CASCADE')
      table
        .bigInteger('unit_component_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('unit_components')
        .onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
