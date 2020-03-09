import {MigrationInterface, QueryRunner} from "typeorm";

export class initial51583722971032 implements MigrationInterface {
    name = 'initial51583722971032'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `provider` (`id` varchar(36) NOT NULL, `name` varchar(100) NOT NULL, `cnpj` varchar(24) NOT NULL, `phone_number` varchar(15) NOT NULL, `address` text NOT NULL, `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(), `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(), `productsId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `product` (`id` varchar(36) NOT NULL, `name` varchar(100) NOT NULL, `price` int NOT NULL, `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(), `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(), `owner` varchar(255) NOT NULL, `ownerId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `provider` ADD CONSTRAINT `FK_06df06ed34eed43b9a6d650cb95` FOREIGN KEY (`productsId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_cbb5d890de1519efa20c42bcd52` FOREIGN KEY (`ownerId`) REFERENCES `provider`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_cbb5d890de1519efa20c42bcd52`", undefined);
        await queryRunner.query("ALTER TABLE `provider` DROP FOREIGN KEY `FK_06df06ed34eed43b9a6d650cb95`", undefined);
        await queryRunner.query("DROP TABLE `product`", undefined);
        await queryRunner.query("DROP TABLE `provider`", undefined);
    }

}
