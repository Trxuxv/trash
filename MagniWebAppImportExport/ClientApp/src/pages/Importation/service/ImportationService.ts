import { NovaColunaModel } from "../../../models/Importation/NovaColunaModel";
import http from "../../../utils/axios";

const get = (id: any) => {
    return http.get<any>("default");
};

const create = (model: any) => {
    return http.post<any>("default", model);
};

const novaColuna = (data: NovaColunaModel) => {
    return http.put<any>("default/novaColuna", data);
};

const excluirColuna = (data:any) => {
    return http.post<any>("default/excluirColuna", data);
};

const ImportationService = {
    get,
    novaColuna,
    excluirColuna,
    create
};

export default ImportationService;