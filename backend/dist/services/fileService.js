"use strict";
// fileService.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const fs_1 = __importDefault(require("fs"));
const csv_parse_1 = require("csv-parse");
class FileService {
    processCSV(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileContent = fs_1.default.readFileSync(file.path, 'utf-8');
            FileService.data = yield new Promise((resolve, reject) => {
                (0, csv_parse_1.parse)(fileContent, {
                    columns: true,
                    skip_empty_lines: true
                }, (err, output) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(output);
                    }
                });
            });
        });
    }
    static search(query) {
        return FileService.data.filter(row => {
            return Object.values(row).some(value => value.toString().toLowerCase().includes(query.toLowerCase()));
        });
    }
    static getData() {
        return FileService.data;
    }
    clearData() {
        FileService.data = [];
    }
}
exports.FileService = FileService;
FileService.data = []; // Tornando 'data' estático para acesso global
