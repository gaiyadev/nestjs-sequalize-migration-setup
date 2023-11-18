import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  phone: string;
}
