const db = require('../db');
const execFunc = require('../util/execFunc');
const viewService = require('../util/viewService');

exports.findAllViews= (req, res) => {
    execFunc.excSQL(res, execFunc.findAllSQL(`issView`), "findAllViews error");
}

exports.findUserViews = (req, res) => {
    execFunc.excSQL(res, viewService.findUsersIssuesSQL(req), `findUserViews error`);
}

exports.searchViewByName = (req, res) => {
    execFunc.excSQL(res, viewService.searchViewByNameSQL(req), "searchViewByName error");
}

exports.searchViewByNames = (req, res) => {
    execFunc.excSQL(res, viewService.searchViewByNamesSQL(req), "searchViewByName error");
}

exports.searchViewByType = (req, res) => {
    execFunc.excSQL(res, viewService.searchViewByTypeSQL(req), "searchViewByType error");
}

exports.countIssView = (req, res) => {
    execFunc.excSQL(res, viewService.countIssViewSQL(), "CountIssView error");
}
