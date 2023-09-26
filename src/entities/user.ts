import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        nullable:true,
    })
    CPF:string;
}