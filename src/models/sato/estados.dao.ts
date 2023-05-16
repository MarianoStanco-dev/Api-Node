import { Table, Column, Model, HasMany, DataType } from "sequelize-typescript";

@Table({ underscored: true, tableName: "estados" })
export class Estados extends Model {
  @Column({ autoIncrement: true, primaryKey: true })
  id!: number;

  @Column
  pasos!: string;

  @Column
  readonly createdAt!: Date;

  @Column
  readonly updatedAt!: Date;
}
