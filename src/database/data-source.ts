import { DataSource } from "typeorm"
import { User } from "../entities/user"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "yen",
    password: "2020",
    database: "apisoftex",
    entities: [User],
    synchronize:true,
})
