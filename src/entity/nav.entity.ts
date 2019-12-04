import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Nav {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255, charset: 'utf8' })
    title: string;

    @Column({ length: 255, charset: 'utf8' })
    url: string;

    @Column({
        type: 'text',
        default: null,
        charset: 'utf8'
    })
    description: string;


    @Column({
        type: 'int',
        default: 1
    })
    status: number;
}