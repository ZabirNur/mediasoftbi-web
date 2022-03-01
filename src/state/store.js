import { createStore, action, computed } from "easy-peasy"

const model = {
  serverAddress: "http://127.0.0.1:8000",



  dbName: "ShopLavender",
  setDbName: action((state, newDbName) => {
    state.dbName = newDbName
  }),
  


  tableNames: [],
  selectedTableName: "",
  setSelectedTableName: action((state, newSelection) => {
    state.selectedTableName = newSelection
  }),



  tableColumns: [],
  setTableColumns: action((state, newColumns) => {
    state.tableColumns = newColumns
  }),


  selectedTableColumns: [],
  setSelectedTableColumns: action((state, newSelections) => {
    state.selectedTableColumns = newSelections
  }),
  addTableColumnToSelection: action((state, columnNameToAdd) => {
    state.selectedTableColumns = [...state.selectedTableColumns, columnNameToAdd]
  }),
  removeTableColumnFromSelection: action((state, columnNameToRemove) => {
    state.selectedTableColumns = state.selectedTableColumns.filter(columnName => columnName !== columnNameToRemove)
  }),


  reports: [],
  setReports: action((state, newReports) => {
    state.reports = newReports.reports
  }),
  hasNoReports: computed((state) => !state.reports.insights && !state.reports.keyfigures && !state.reports.visualizations)
}

const store = createStore(model)

export default store