"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const fileService_1 = require("./fileService");
class UserService {
    searchInCSV(query) {
        // Obter os dados do CSV do FileService
        const data = fileService_1.FileService.getData();
        // Filtrar os dados com base na query
        const filteredData = data.filter(row => {
            return Object.values(row).some(value => value.toString().toLowerCase().includes(query.toLowerCase()));
        });
        return filteredData;
    }
}
exports.UserService = UserService;
