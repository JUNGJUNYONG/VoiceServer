import {Controller} from "@tsed/di";
import {Delete, Get, Post} from "@tsed/schema";
import {mariadbSql} from "../database/connect/mariadb";

@Controller("/chat")
export class ChattingControl {

    /**
     * 아래와 같이 return 받을 타입에대한 선언을 generic(제네릭) 하게 선언하여 사용할수 있도록 하였다.
     */
    @Get("/")
    async get() {
        return await mariadbSql<{ data: string }>('show databases;');
    }

    @Post("/post")
    post() {
        return {test: '54321'};
    }

    @Delete('/delete')
    delete() {
        return {delete: 'test!!'};
    }
}


